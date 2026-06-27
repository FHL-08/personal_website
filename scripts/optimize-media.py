#!/usr/bin/env python3
"""
optimize-media.py — M3 media pipeline.
Reads originals from "Context and media/", writes web-ready assets to
public/assets/media/<record-id>/ and emits:
  - scripts/.media-inject.json : { record_id: "<TS media array>" }
  - scripts/.media-video-jobs.sh : ffmpeg commands for videos (run separately)
Images are processed here (fast). Videos are emitted as jobs (slow, run in bash).
"""
import os, json, subprocess, sys
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC  = os.path.join(ROOT, "Context and media")
OUT  = os.path.join(ROOT, "public/assets/media")
WEB  = "/assets/media"
DARK = (5, 7, 15)

# record_id, source-subfolder, [ (filename, kind, alt, caption) ]
MANIFEST = [
 ("line-following-robot", "Projects/Autonomous Line Following Robot", [
    ("Buggy_Design_25 v7.png", "image", "CAD design of the line-following buggy", "Chassis and PCB design"),
    ("Group_25.jpg", "image", "The four-person build team", "Build team, Group 25"),
    ("WhatsApp Video 2026-06-21 at 18.46.59.mp4", "video", "Line-following buggy demo run", "Track run with incline and turn"),
 ]),
 ("maze-solving-buggy", "Projects/Autonomous Maze Solving Buggy", [
    ("WhatsApp Image 2026-06-21 at 18.57.43.jpeg", "image", "The maze-solving buggy", "Ultrasonic maze buggy"),
    ("WhatsApp Video 2026-06-21 at 18.51.47.mp4", "video", "Autonomous maze run", "Maze run"),
    ("WhatsApp Video 2026-06-21 at 19.04.29.mp4", "video", "Autonomous maze run", "Maze run, second attempt"),
 ]),
 ("robotic-poker", "Projects/Robotic Poker Player and Dealer", [
    ("Demo Video.mkv", "video", "Robotic poker dealer demo", "Dealing and chip handling"),
 ]),
 ("quanser-hackathon", "Hackathons/AME X Quanser Hackathon (Winner)", [
    ("1764593961901.jpg", "image", "AME x Quanser hackathon, first place", "First place, AME x Quanser"),
    ("WhatsApp Video 2026-06-21 at 18.45.58 (1).mp4", "video", "QArm pick-and-place demo", "QArm hoop pick-and-place"),
 ]),
 ("swarmhack-2022", "Hackathons/Swarm Hack 2021  (Winner)", [
    ("WhatsApp Image 2026-06-21 at 20.21.22.jpeg", "image", "SwarmHack, best team solution", "SwarmHack win"),
    ("WhatsApp Video 2026-06-21 at 18.45.58.mp4", "video", "Swarm aggregation demo", "100% robot aggregation"),
 ]),
 ("guh-2025-quant", "Hackathons/GUH 2025 (Quant Challenge WInner)", [
    ("A&E picture.png", "image", "GUH 2025 Quant challenge, first place", "First place, Quant challenge"),
    ("WhatsApp Image 2026-06-21 at 19.19.13 (8).jpeg", "image", "At the Greater Uni Hackathon", ""),
    ("WhatsApp Image 2026-06-21 at 19.19.13 (9).jpeg", "image", "At the Greater Uni Hackathon", ""),
 ]),
 ("hackabot-2025", "Hackathons/Hack-a-bot 2025 (2nd on Ice9 challenge)", [
    ("planned_path.png", "image", "Planned shortest path through the line maze", "Skeletonised maze with Dijkstra path"),
    ("hack-logo.png", "image", "Hack-a-Bot 2025", "Hack-a-Bot 2025"),
 ]),
 ("guh-2022-bet365", "Hackathons/GUH 2023 (3rd on Bet365 challenge)", [
    ("Attack on Football.jpg", "image", "Attack on Football web app", "Live football data app"),
 ]),
 ("hackabot-2026", "Hackathons/Hack-a-bot 2026", [
    ("Ice9 Mona.png", "image", "Ice9 MONA swarm challenge arena", "Arena and MONA robots"),
    ("swarm.png", "image", "Swarm coordination in simulation", "Swarm tracking in simulation"),
 ]),
 ("fpga-engineer-altera", "Work Experience/FPGA Hardware Engineer", [
    ("Me at Intel.jpg", "image", "On site at Altera (Intel PSG)", "Year in industry at Altera"),
 ]),
 ("robotics-research-assistant", "Work Experience/Robotics Research Assistant", [
    ("WhatsApp Image 2026-06-21 at 18.58.09.jpeg", "image", "Manipulator in the lab", "Impedance control on a 7-DOF arm"),
 ]),
 ("outstanding-achievement-award", "Awards/Oustanding Achievment Award", [
    ("WhatsApp Image 2026-06-21 at 19.11.13.jpeg", "image", "Outstanding Achievement Award", "Outstanding Achievement Award"),
    ("WhatsApp Image 2026-06-21 at 19.11.13 (1).jpeg", "image", "Outstanding Achievement Award", ""),
 ]),
 ("best-in-eee", "Awards/Top in EEE Department", [
    ("Best Project Award.jpeg", "image", "Best Final-Year Project award", "Best Final-Year Project"),
    ("Best in EEE Department.jpeg", "image", "Best in EEE Department award", "Best in EEE Department"),
 ]),
 ("beng-mechatronics", ".", [
    ("Degree Certificate.png", "image", "BEng degree certificate", "BEng (Hons) Mechatronic Engineering"),
 ]),
 ("top-10-faculty", "Awards/Top 10 in Faculty of Science and Engineering", [
    ("WhatsApp Image 2026-06-21 at 19.11.14.jpeg", "image", "Top 10 in the Faculty of Science and Engineering", "Faculty Top 10"),
 ]),
 ("iet-future-talent", "Awards/IET Future Talent Award", [
    ("Future Talent Awards Image.jpg", "image", "IET Future Talent Award", "IET Future Talent Award"),
    ("WhatsApp Image 2026-06-21 at 19.11.30.jpeg", "image", "IET Future Talent Award", ""),
 ]),
 ("stellify-award", "Awards/Stellify Award", [
    ("WhatsApp Image 2026-06-21 at 19.11.14 (1).jpeg", "image", "Stellify Award", "Stellify Award"),
 ]),
 ("cambridge-top-nigeria-physics", "Awards/Top in Nigeria in A-Level Physics", [
    ("WhatsApp Image 2026-06-21 at 19.07.11.jpeg", "image", "Cambridge Outstanding Learner Award", "Top in Nigeria, AS-Level Physics"),
 ]),
]

def slug(i): return "m" + str(i)

def process_image(srcpath, outdir, base):
    im = Image.open(srcpath)
    im = ImageOps.exif_transpose(im)
    if im.mode in ("RGBA", "LA", "P"):
        bg = Image.new("RGB", im.size, DARK)
        im = im.convert("RGBA"); bg.paste(im, mask=im.split()[-1]); im = bg
    else:
        im = im.convert("RGB")
    # full <= 1600w
    full = im.copy(); full.thumbnail((1600, 1600), Image.LANCZOS)
    full.save(os.path.join(outdir, base + ".jpg"), "JPEG", quality=85, optimize=True, progressive=True)
    # thumb <= 480w
    th = im.copy(); th.thumbnail((480, 480), Image.LANCZOS)
    th.save(os.path.join(outdir, base + ".thumb.jpg"), "JPEG", quality=80, optimize=True)

def ffq(s): return "'" + s.replace("'", "'\\''") + "'"

inject = {}
video_jobs = []
for rid, sub, items in MANIFEST:
    outdir = os.path.join(OUT, rid)
    os.makedirs(outdir, exist_ok=True)
    entries = []
    for idx, (fn, kind, alt, cap) in enumerate(items, 1):
        srcpath = os.path.join(SRC, sub, fn)
        base = slug(idx)
        if not os.path.exists(srcpath):
            print("MISSING:", srcpath); continue
        if kind == "image":
            process_image(srcpath, outdir, base)
            e = {"type":"image","src":f"{WEB}/{rid}/{base}.jpg","thumb":f"{WEB}/{rid}/{base}.thumb.jpg","alt":alt}
            if cap: e["caption"]=cap
            entries.append(e)
        else:
            dur = float(subprocess.run(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",srcpath],capture_output=True,text=True).stdout.strip() or "10")
            crf = "28" if dur > 60 else "26"
            ptime = f"{min(1.5, dur/3):.2f}"
            o_full = os.path.join(outdir, base + ".mp4")
            o_prev = os.path.join(outdir, base + ".preview.mp4")
            o_post = os.path.join(outdir, base + ".poster.jpg")
            video_jobs.append(
              f"ffmpeg -y -i {ffq(srcpath)} -vf \"scale='min(1280,iw)':-2\" -c:v libx264 -preset veryfast -crf {crf} -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 128k {ffq(o_full)} >/dev/null 2>&1 && "
              f"ffmpeg -y -ss {ptime} -i {ffq(srcpath)} -frames:v 1 -vf \"scale='min(1280,iw)':-2\" {ffq(o_post)} >/dev/null 2>&1 && "
              f"ffmpeg -y -i {ffq(srcpath)} -t 6 -an -vf \"scale='min(640,iw)':-2\" -c:v libx264 -preset veryfast -crf 30 -pix_fmt yuv420p -movflags +faststart {ffq(o_prev)} >/dev/null 2>&1 && "
              f"echo DONE {rid}/{base}"
            )
            e = {"type":"video","src":f"{WEB}/{rid}/{base}.mp4","poster":f"{WEB}/{rid}/{base}.poster.jpg",
                 "previewSrc":f"{WEB}/{rid}/{base}.preview.mp4","thumb":f"{WEB}/{rid}/{base}.poster.jpg","alt":alt}
            if cap: e["caption"]=cap
            entries.append(e)
    # build TS array string
    parts=[]
    for e in entries:
        fields=", ".join(f'{k}: {json.dumps(v)}' for k,v in e.items())
        parts.append("          { " + fields + " }")
    inject[rid] = "[\n" + ",\n".join(parts) + ",\n        ]"

with open(os.path.join(ROOT,"scripts/.media-inject.json"),"w") as f: json.dump(inject,f,indent=0)
with open(os.path.join(ROOT,"scripts/.media-video-jobs.sh"),"w") as f: f.write("\n".join(video_jobs)+"\n")
print("images done. records with media:", len(inject), "video jobs:", len(video_jobs))
