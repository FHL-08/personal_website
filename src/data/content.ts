/**
 * content.ts — Single source of truth for the entire site.
 *
 * The immersive scene, the Data Record overlays, the Mission Log and the
 * deep-link pages are all driven from this file. Write content once here.
 *
 * Media `src` paths point at /assets/... (web-ready output of the media
 * pipeline, scripts/optimize-media.mjs). Original source lives in
 * "Context and media/" and is never served directly.
 */

// ----------------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------------

export type AssetKind =
  | "repo" // Source Archive (GitHub)
  | "paper" // Research Archive (publication PDF)
  | "arxiv" // arXiv preprint
  | "report" // Technical report PDF
  | "webapp" // live web app
  | "devpost" // Devpost submission
  | "external" // any other external link
  | "video"; // Mission Replay (video file)

export interface Asset {
  kind: AssetKind;
  label: string;
  /** External URL, or a path under /assets for local files. */
  href: string;
  /** Optional icon key (for icon-only links like dossier contacts). */
  icon?: string;
}

export interface MediaItem {
  type: "image" | "video" | "pdf";
  /** Path under /assets (post-pipeline). */
  src: string;
  /** Small thumbnail for the gallery strip. */
  thumb?: string;
  /** Short looping preview for video (post-pipeline). */
  previewSrc?: string;
  /** Poster image for video. */
  poster?: string;
  alt: string;
  caption?: string;
  /** Original source file, for the media pipeline to resolve. */
  source?: string;
}

export interface Star {
  id: string; // slug, used for deep links: /record/<id>
  title: string;
  /** Short narrative tag, e.g. "COMMENDATION RECORD". */
  recordType: string;
  /** When it happened, human-readable. */
  date?: string;
  /** One-line summary shown on hover / in lists. */
  summary: string;
  /** Full body, paragraphs. */
  body?: string[];
  /** Quick facts shown as telemetry chips. */
  tags?: string[];
  media?: MediaItem[];
  assets?: Asset[];
  /** Optional ranking/result badge, e.g. "1ST PLACE". */
  badge?: string;
}

export type ConstellationShape =
  | "symmetrical" // Awards — compact, ordered
  | "linear" // Education — simple progression
  | "branching" // Research — exploratory
  | "rich" // Projects — largest, complex
  | "network" // Skills — interconnected
  | "cluster" // Hackathons — field operations
  | "arc"; // Work Experience — service record

export interface Constellation {
  id: string;
  /** Real category name. */
  name: string;
  /** Narrative label shown in-world. */
  narrativeName: string;
  shape: ConstellationShape;
  blurb: string;
  stars: Star[];
}

export interface MissionLogEntry {
  year: string;
  event: string;
}

export interface SkillBar {
  name: string;
  level: number; // 1..5
}
export interface ToolGroup {
  label: string;
  items: string[];
}
export interface DossierField {
  label: string;
  value: string;
}

export interface Profile {
  callsign: string;
  name: string;
  className: string; // role, shown as "CLASS"
  status: string;
  portrait: { src: string; webp?: string; alt: string };
  dossier: DossierField[];
  specialisations: SkillBar[];
  fieldRecord: string[];
  toolset: ToolGroup[];
  directive: string;
  cv: Asset;
  contacts: Asset[];
}

// ----------------------------------------------------------------------------
// Commander Profile (replaces "About" + CV)
// ----------------------------------------------------------------------------

export const profile: Profile = {
  callsign: "FSL-01",
  name: "Faisal Lawan",
  className: "Control Systems Researcher",
  status: "ACTIVE",
  portrait: {
    src: "/assets/img/commander.jpg",
    webp: "/assets/img/commander.webp",
    alt: "Faisal Lawan",
  },
  dossier: [
    { label: "Designation", value: "FSL-01" },
    { label: "Name", value: "Faisal Lawan" },
    { label: "Class", value: "Control Systems Researcher" },
    { label: "Station", value: "University of Manchester, UK" },
    { label: "Commission", value: "Doctoral Researcher, 2026 (expected 2030)" },
    { label: "Status", value: "Active" },
  ],
  specialisations: [
    { name: "Control Theory", level: 5 },
    { name: "Robotics", level: 4 },
    { name: "Optimisation", level: 4 },
    { name: "Embedded Systems", level: 4 },
    { name: "Machine Learning", level: 3 },
  ],
  fieldRecord: [
    "First-Class Honours, Mechatronic Engineering. Top 0.5% of cohort.",
    "Outstanding Achievement Award, University of Manchester.",
    "Winner: SwarmHack, Quanser Robotics Hackathon, GUH Quant Challenge.",
    "FPGA accelerator for Google Snappy at Altera (+10% ratio, +30% throughput).",
    "Research author: formation control (TAROS 2026); adaptive impedance control (CDC, under review).",
  ],
  toolset: [
    { label: "Languages", items: ["Python", "C/C++", "SystemVerilog", "MATLAB", "TypeScript"] },
    { label: "Control & Optimisation", items: ["ROS2", "MPC", "CBFs", "CasADi", "cvxpy"] },
    { label: "Hardware", items: ["STM32", "ESP32", "FPGA", "Raspberry Pi", "KINOVA", "Franka"] },
  ],
  directive: "Build control systems that are provably safe and still work on real hardware.",
  cv: {
    kind: "report",
    label: "Personnel Dossier (CV)",
    href: "/assets/cv/Faisal_Lawan_CV_2026.pdf",
  },
  contacts: [
    { kind: "external", label: "Email", href: "mailto:faisallawan08@gmail.com", icon: "email" },
    { kind: "repo", label: "GitHub", href: "https://github.com/FHL-08", icon: "github" },
    { kind: "external", label: "LinkedIn", href: "https://www.linkedin.com/in/faisal-lawan/", icon: "linkedin" },
    { kind: "external", label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=kT_B0GsAAAAJ", icon: "scholar" },
  ],
};

// ----------------------------------------------------------------------------
// Constellations
// ----------------------------------------------------------------------------

export const constellations: Constellation[] = [
  // ===== RESEARCH =====
  {
    id: "research",
    name: "Research",
    narrativeName: "Research Archive",
    shape: "branching",
    blurb: "Peer-reviewed and in-progress research in safety-critical control.",
    stars: [
      {
        id: "formation-control-mpc",
        media: [
          { type: "pdf", src: "/assets/research/TAROS-2026-formation-control.pdf", thumb: "/assets/research/TAROS-2026-formation-control.thumb.jpg", alt: "TAROS 2026 paper", caption: "TAROS 2026 paper (accepted)" },
        ],
        title: "Constrained torque-level formation control via consensus FBL-MPC",
        recordType: "RESEARCH ARCHIVE",
        date: "2026 — TAROS (accepted, published Oct 2026)",
        summary:
          "A consensus-based, feedback-linearised MPC strategy for torque-level formation control of differential-drive robots, recast as a convex program that solves in real time.",
        body: [
          "This work tackles distributed formation control for nonholonomic wheeled robots while respecting the limits of real motors. The nonlinear unicycle dynamics are feedback-linearised into a double-integrator model, and the torque and voltage constraints are carried through as convex inner approximations, so nothing the controller commands can exceed what the hardware is able to deliver.",
          "Coordination across the swarm is handled with a consensus formulation, and the whole problem is cast as a Second-Order Cone Program that is solved at every control step. That keeps it light enough for real-time operation, which is usually the property that breaks once hard constraints are added to formation control.",
          "Accepted to TAROS 2026 and published in October 2026.",
        ],
        tags: ["MPC", "SOCP", "Feedback linearisation", "Multi-agent", "Formation control"],
      },
      {
        id: "safe-impedance-control",
        media: [
          { type: "pdf", src: "/assets/research/CDC-impedance-control.pdf", thumb: "/assets/research/CDC-impedance-control.thumb.jpg", alt: "CDC paper", caption: "CDC paper (under review)" },
        ],
        title: "Safety-critical adaptive impedance control via Nonsmooth CBFs",
        recordType: "RESEARCH ARCHIVE",
        date: "2026 — CDC (under review)",
        summary:
          "A safe, robust, adaptive impedance control framework for a 7-DOF manipulator, with guaranteed constraint satisfaction under state and input limits.",
        body: [
          "The controller blends an Interval Type-2 Fuzzy Logic System with a smooth compensator so it stays robust under heavy parametric uncertainty, the kind found in tasks like nuclear decommissioning where the load and contact conditions are poorly known.",
          "Safety and stability are enforced through a novel Nonsmooth Control Barrier Function, and Uniform Ultimate Boundedness of the closed loop is proved with composite Lyapunov analysis. Everything runs through a single soft-constrained QP solved online in roughly 54 microseconds per cycle, and the framework was deployed on KINOVA Gen3 and Franka Emika arms.",
          "Submitted to CDC and available as an arXiv preprint.",
        ],
        tags: ["Control Barrier Functions", "Adaptive control", "IT2 Fuzzy", "Lyapunov", "QP"],
        assets: [
          { kind: "arxiv", label: "arXiv:2605.28367", href: "https://arxiv.org/abs/2605.28367" },
        ],
      },
      {
        id: "high-order-safety-filters",
        title: "High-order multi-constrained safety filters for linear systems",
        recordType: "RESEARCH ARCHIVE",
        date: "In progress",
        summary:
          "Stability analysis and design of high-order, multi-constrained safety filters for linear systems.",
        body: [
          "Active research. The work studies how to stack several high-order constraints into a single safety filter for linear systems without losing the stability guarantees that make safety filters worth using. Findings will be logged here as the project matures.",
        ],
        tags: ["Safety filters", "Stability analysis", "Linear systems"],
        badge: "IN PROGRESS",
      },
    ],
  },

  // ===== PROJECTS =====
  {
    id: "projects",
    name: "Projects",
    narrativeName: "Mission Records",
    shape: "rich",
    blurb: "Robotics and control systems built end to end.",
    stars: [
      {
        id: "tessellate",
        title: "Tessellate — distributed formation control platform",
        recordType: "MISSION RECORD",
        date: "Oct 2025",
        summary:
          "A Python platform that demonstrates distributed formation control of nonholonomic robots using a consensus-based feedback-linearised MPC, solved as a real-time SOCP at 60 Hz.",
        body: [
          "Tessellate is the demonstration platform behind the formation-control research. It runs a consensus-based feedback-linearised MPC reformulated as a Second-Order Cone Program and solved as a strict convex optimisation at every time step, holding 60 Hz with cvxpy backed by the ECOS and CLARABEL solvers.",
          "Feedback linearisation turns the nonlinear unicycle dynamics into a double-integrator model, while the torque and voltage limits are preserved through convex inner approximations. A custom multi-layered A* planner adapts the safety radius to the current formation shape, which lets the leader thread narrow gaps without the trailing robots snagging on obstacles.",
          "The communication graph can be rewired while the swarm is moving. Robots can be dropped in or out and formation nodes can be dragged to reshape the target on the fly. It is wrapped in a PySide6 interface with live telemetry plotting.",
        ],
        tags: ["Python", "MPC", "SOCP", "cvxpy", "A*", "PySide6", "Swarm"],
        assets: [
          {
            kind: "repo",
            label: "Source Archive",
            href: "https://github.com/Tessellate-Labs/tessellate-consensus-socp-mpc",
          },
        ],
        badge: "HERO PROJECT",
      },
      {
        id: "double-inverted-pendulum",
        title: "Double Inverted Pendulum — hybrid swing-up & stabilisation",
        recordType: "MISSION RECORD",
        date: "Apr 2025 — present",
        summary:
          "Simulation and hybrid control of a cart-mounted double inverted pendulum that moves between all four equilibrium configurations, now being rebuilt as physical hardware.",
        body: [
          "A control framework for a cart-mounted double inverted pendulum that can reach all four equilibrium configurations in its task space. It pairs an energy-based swing-up controller with a stabiliser derived from linearisation and Lyapunov-based sliding-mode techniques.",
          "The full nonlinear dynamics, covering cart translation, link coupling, viscous joint damping and actuator limits, were modelled symbolically in MATLAB and CasADi. The swing-up controller pumps energy into the system until it reaches the target manifold, then hands over to a stabiliser designed through the algebraic Riccati equation. ODE event detection triggers the switch, and closed-loop runs track the angles, position, velocities and total energy to confirm the handover.",
          "The project is moving off the screen and onto the bench: a physical double inverted pendulum is being built from scratch and driven by a Raspberry Pi to validate the hybrid strategy on real hardware.",
        ],
        tags: ["MATLAB", "CasADi", "Sliding mode", "Energy control", "Hybrid systems", "Raspberry Pi"],
        badge: "IN PROGRESS",
      },
      {
        id: "line-following-robot",
        media: [
          { type: "image", src: "/assets/media/line-following-robot/m1.jpg", thumb: "/assets/media/line-following-robot/m1.thumb.jpg", alt: "CAD design of the line-following buggy", caption: "Chassis and PCB design" },
          { type: "image", src: "/assets/media/line-following-robot/m2.jpg", thumb: "/assets/media/line-following-robot/m2.thumb.jpg", alt: "The four-person build team", caption: "Build team, Group 25" },
          { type: "video", src: "/assets/media/line-following-robot/m3.mp4", poster: "/assets/media/line-following-robot/m3.poster.jpg", previewSrc: "/assets/media/line-following-robot/m3.preview.mp4", thumb: "/assets/media/line-following-robot/m3.poster.jpg", alt: "Line-following buggy demo run", caption: "Track run with incline and turn" },
          { type: "pdf", src: "/assets/projects/line-follower-report.pdf", thumb: "/assets/projects/line-follower-report.thumb.jpg", alt: "Technical report", caption: "Final technical report" },
        ],
        title: "Autonomous Line-Following Robot",
        recordType: "MISSION RECORD",
        date: "Sep 2022 — Jun 2023",
        summary:
          "A battery-powered autonomous buggy that follows a marked track, climbs an 18-degree incline, turns 180 degrees on a Bluetooth command and stops precisely, run by three PID loops on an STM32.",
        body: [
          "Designed and built with a team of four. The buggy follows a marked track, climbs an 18-degree incline, performs a 180-degree turn when it receives a Bluetooth Low Energy command, and comes to a controlled stop at the end of the line. Three PID controllers run the show: two hold motor speed from Hall-effect encoder feedback, and one steers from a custom six-sensor TCRT5000 infrared array on a bespoke PCB with hardware signal conditioning.",
          "The control software was written in C++ on an STM32 with Mbed using an object-oriented structure. A MATLAB and Simulink model tuned the PID gains ahead of time and reached better than 70 percent agreement with the real buggy at speeds up to 1.4 metres per second. Hardware refinements included a 3D-printed shield to keep ambient light off the sensors, deliberate weight distribution with castor wheels, and a gearbox balanced between torque and speed.",
          "Awarded the second-year ESP prize for the most innovative features.",
        ],
        tags: ["STM32", "C++", "PID", "Custom PCB", "BLE", "MATLAB/Simulink"],
        badge: "ESP INNOVATIVE FEATURES PRIZE",
        assets: [
          { kind: "repo", label: "Source Archive", href: "https://github.com/FHL-08/UOM-ESP2022-Group25" },
        ],
      },
      {
        id: "maze-solving-buggy",
        media: [
          { type: "image", src: "/assets/media/maze-solving-buggy/m1.jpg", thumb: "/assets/media/maze-solving-buggy/m1.thumb.jpg", alt: "The maze-solving buggy", caption: "Ultrasonic maze buggy" },
          { type: "video", src: "/assets/media/maze-solving-buggy/m2.mp4", poster: "/assets/media/maze-solving-buggy/m2.poster.jpg", previewSrc: "/assets/media/maze-solving-buggy/m2.preview.mp4", thumb: "/assets/media/maze-solving-buggy/m2.poster.jpg", alt: "Autonomous maze run", caption: "Maze run" },
          { type: "video", src: "/assets/media/maze-solving-buggy/m3.mp4", poster: "/assets/media/maze-solving-buggy/m3.poster.jpg", previewSrc: "/assets/media/maze-solving-buggy/m3.preview.mp4", thumb: "/assets/media/maze-solving-buggy/m3.poster.jpg", alt: "Autonomous maze run", caption: "Maze run, second attempt" },
        ],
        title: "Autonomous Maze-Solving Buggy",
        recordType: "MISSION RECORD",
        date: "Oct 2021 — May 2022",
        summary:
          "An Arduino buggy with ultrasonic sensing and a PID controller that solves mazes on its own while avoiding collisions.",
        body: [
          "A robotic buggy fitted with ultrasonic sensors for real-time obstacle detection. A PID control loop on an Arduino Uno turns the sensor readings into smooth motor commands for navigation and collision avoidance, and the buggy completes maze-solving runs with no outside help.",
          "It was an early exercise in sensor integration, control tuning and autonomous decision making, and laid the groundwork for the more capable autonomous platforms logged later in this sector.",
        ],
        tags: ["Arduino", "PID", "Ultrasonic sensing", "Autonomy"],
      },
      {
        id: "robotic-poker",
        media: [
          { type: "video", src: "/assets/media/robotic-poker/m1.mp4", poster: "/assets/media/robotic-poker/m1.poster.jpg", previewSrc: "/assets/media/robotic-poker/m1.preview.mp4", thumb: "/assets/media/robotic-poker/m1.poster.jpg", alt: "Robotic poker dealer demo", caption: "Dealing and chip handling" },
        ],
        title: "Robotic Poker Player & Dealer",
        recordType: "MISSION RECORD",
        date: "Sep 2025 — present",
        summary:
          "An end-to-end autonomous poker system on an SO-101 robot arm, fusing dual-camera vision, a ROS 2 control stack and game-theoretic decision making.",
        body: [
          "A robot arm that can run a poker table from both sides. In dealer mode it picks up cards, shuffles, deals, and moves chips and the pot. In player mode it plays its own hand and manages its stack against opponents.",
          "Perception comes from a dual-camera YOLOv8 pipeline, with an OAK-D Lite giving a birds-eye view for card detection and a Logitech C925e handling chip-colour segmentation. The control side is a ROS 2 stack: an LQR trajectory controller with CasADi inverse kinematics drives the SO-101 servo arm, a poker engine handles game logic and hand evaluation, and a PySide6 dashboard provides monitoring and manual control.",
        ],
        tags: ["ROS 2", "Computer vision", "YOLOv8", "CasADi", "LQR", "SO-101"],
        assets: [{ kind: "repo", label: "Source Archive", href: "https://github.com/jalliet/prap-25-26" }],
        badge: "IN PROGRESS",
      },
    ],
  },

  // ===== HACKATHONS =====
  {
    id: "hackathons",
    name: "Hackathons",
    narrativeName: "Field Operations",
    shape: "cluster",
    blurb: "Rapid-build robotics and software challenges, with several wins.",
    stars: [
      {
        id: "quanser-hackathon",
        media: [
          { type: "image", src: "/assets/media/quanser-hackathon/m1.jpg", thumb: "/assets/media/quanser-hackathon/m1.thumb.jpg", alt: "AME x Quanser hackathon, first place", caption: "First place, AME x Quanser" },
          { type: "video", src: "/assets/media/quanser-hackathon/m2.mp4", poster: "/assets/media/quanser-hackathon/m2.poster.jpg", previewSrc: "/assets/media/quanser-hackathon/m2.preview.mp4", thumb: "/assets/media/quanser-hackathon/m2.poster.jpg", alt: "QArm pick-and-place demo", caption: "QArm hoop pick-and-place" },
        ],
        title: "AME × Quanser Robotics Hackathon",
        recordType: "FIELD OPERATION",
        date: "Nov 2025",
        summary:
          "Won the Quanser hackathon by deriving inverse kinematics from first principles to pick and place coloured hoops on the QArm, with no IK libraries available because the venue internet was down.",
        body: [
          "The brief was to pick hoops from fixed board positions and place them on their colour-matched stands, with direct joint-angle control as the only interface to the QArm. With the venue internet down and no standard libraries to fall back on, the team derived a geometric inverse-kinematics solution from scratch to compute the joint angles.",
          "The solution was validated on a PyBullet digital twin of the QArm that mirrored the real arm before being run on hardware. It took first place.",
        ],
        tags: ["Inverse kinematics", "QArm", "PyBullet", "Python"],
        badge: "1ST PLACE",
        assets: [{ kind: "repo", label: "Source Archive", href: "https://github.com/FHL-08/quanser-hackathon" }],
      },
      {
        id: "swarmhack-2022",
        media: [
          { type: "image", src: "/assets/media/swarmhack-2022/m1.jpg", thumb: "/assets/media/swarmhack-2022/m1.thumb.jpg", alt: "SwarmHack, best team solution", caption: "SwarmHack win" },
          { type: "video", src: "/assets/media/swarmhack-2022/m2.mp4", poster: "/assets/media/swarmhack-2022/m2.poster.jpg", previewSrc: "/assets/media/swarmhack-2022/m2.preview.mp4", thumb: "/assets/media/swarmhack-2022/m2.poster.jpg", alt: "Swarm aggregation demo", caption: "100% robot aggregation" },
        ],
        title: "SwarmHack",
        recordType: "FIELD OPERATION",
        date: "Jun 2022",
        summary:
          "Won best team solution for a distributed algorithm that aggregates any number of randomly moving robots into a single cluster, every time.",
        body: [
          "The task was robot aggregation: take a group of robots that start scattered and moving at random, and get them to gather into one cluster inside an enclosed arena. The team designed and deployed a distributed algorithm that reaches 100 percent aggregation regardless of how many robots are in the arena, and it won the best team solution prize.",
        ],
        tags: ["Python", "ROS", "Swarm robotics", "Distributed algorithms"],
        badge: "1ST PLACE",
      },
      {
        id: "guh-2025-quant",
        media: [
          { type: "image", src: "/assets/media/guh-2025-quant/m1.jpg", thumb: "/assets/media/guh-2025-quant/m1.thumb.jpg", alt: "GUH 2025 Quant challenge, first place", caption: "First place, Quant challenge" },
          { type: "image", src: "/assets/media/guh-2025-quant/m2.jpg", thumb: "/assets/media/guh-2025-quant/m2.thumb.jpg", alt: "At the Greater Uni Hackathon" },
          { type: "image", src: "/assets/media/guh-2025-quant/m3.jpg", thumb: "/assets/media/guh-2025-quant/m3.thumb.jpg", alt: "At the Greater Uni Hackathon" },
        ],
        title: "Greater Uni Hackathon — Quant Trading Challenge",
        recordType: "FIELD OPERATION",
        date: "Nov 2025",
        summary:
          "Won first place and 60 percent of the prize pool in the algorithmic-trading challenge with a quantitative market-making bot.",
        body: [
          "The Greater Uni Hackathon 2025 ran several tracks, including Hackster, Housr, Reply and Quant. Competing in the Quant track, the team built a quantitative market-making bot for the Limex challenge and took first place, claiming 60 percent of the prize pool.",
        ],
        tags: ["Algorithmic trading", "Market making", "Python", "Quant"],
        badge: "1ST PLACE",
        assets: [
          { kind: "repo", label: "Source Archive", href: "https://github.com/jonghunlee05/Greater_Uni_Hackathon_2025" },
          {
            kind: "external",
            label: "LinkedIn Post",
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7393758594871070721/",
          },
        ],
      },
      {
        id: "hackabot-2025",
        media: [
          { type: "image", src: "/assets/media/hackabot-2025/m1.jpg", thumb: "/assets/media/hackabot-2025/m1.thumb.jpg", alt: "Planned shortest path through the line maze", caption: "Skeletonised maze with Dijkstra path" },
          { type: "image", src: "/assets/media/hackabot-2025/m2.jpg", thumb: "/assets/media/hackabot-2025/m2.thumb.jpg", alt: "Hack-a-Bot 2025", caption: "Hack-a-Bot 2025" },
        ],
        title: "Hack-a-Bot 2025 — Ice9 'Mona Delivery' Challenge",
        recordType: "FIELD OPERATION",
        date: "Mar 2025",
        summary:
          "Second place: a computer-vision pipeline that drives a robot through a line maze from a single overhead camera, planning the shortest path and steering in real time.",
        body: [
          "Built for the Ice9 Mona Delivery challenge at the UoM Robotics Society Hack-a-Bot 2025. A single fisheye camera overhead is calibrated and undistorted, then the system detects coloured waypoints and the robot's ArUco marker. The black maze lines are thresholded and thinned to a one-pixel skeleton whose corners and junctions become graph nodes.",
          "Dijkstra's algorithm plans the shortest route from the robot to the red point and then the green point, and the robot is steered live over a serial link to an Arduino, pausing at each pickup and drop-off. It placed second.",
        ],
        tags: ["OpenCV", "ArUco", "Dijkstra", "Skeletonisation", "Arduino"],
        badge: "2ND PLACE",
        assets: [{ kind: "repo", label: "Source Archive", href: "https://github.com/FHL-08/Hackabot-2025" }],
      },
      {
        id: "guh-2022-bet365",
        media: [
          { type: "image", src: "/assets/media/guh-2022-bet365/m1.jpg", thumb: "/assets/media/guh-2022-bet365/m1.thumb.jpg", alt: "Attack on Football web app", caption: "Live football data app" },
        ],
        title: "Greater Uni Hackathon — Attack on Football (Bet365 Challenge)",
        recordType: "FIELD OPERATION",
        date: "Nov 2022",
        summary:
          "Third in the Bet365 challenge with a web app that pulls live football data and presents it cleanly in real time.",
        body: [
          "A web app inspired by bet365 that queries an API for live football data and lays it out cleanly for the user. It was built in Vue.js with the team collaborating through GitHub Codespaces, and most of the engineering effort went into shaping a noisy API into a readable, responsive front end. It placed third.",
        ],
        tags: ["Vue.js", "REST API", "Front-end"],
        badge: "3RD PLACE",
        assets: [
          { kind: "repo", label: "Source Archive", href: "https://github.com/FHL-08/GreatUniHack-2022/tree/master" },
          { kind: "devpost", label: "Devpost", href: "https://devpost.com/software/attack-on-football" },
        ],
      },
      {
        id: "hackabot-2026",
        media: [
          { type: "image", src: "/assets/media/hackabot-2026/m1.jpg", thumb: "/assets/media/hackabot-2026/m1.thumb.jpg", alt: "Ice9 MONA swarm challenge arena", caption: "Arena and MONA robots" },
          { type: "image", src: "/assets/media/hackabot-2026/m2.jpg", thumb: "/assets/media/hackabot-2026/m2.thumb.jpg", alt: "Swarm coordination in simulation", caption: "Swarm tracking in simulation" },
        ],
        title: "Hack-a-Bot 2026 — Ice9 Swarm Challenge",
        recordType: "FIELD OPERATION",
        date: "Mar 2026",
        summary:
          "Coordinating up to three MONA robots from a shared arena camera to push a trolley across the arena while avoiding obstacles. It worked in simulation but was foiled by hardware on the day.",
        body: [
          "The challenge was to coordinate up to three MONA robots, localised by a shared arena camera, so they could push a trolley across the arena quickly while dodging obstacles. Both the swarm algorithm and the computer-vision tracking worked in simulation.",
          "On the day, hardware faults stopped the vision system from being connected to the swarm controller in time, so the full pipeline never ran live. The simulation work and the integration lessons are logged for the next attempt.",
        ],
        tags: ["Swarm", "Computer vision", "ESP32", "MONA", "ArUco"],
        assets: [{ kind: "repo", label: "Source Archive", href: "https://github.com/FHL-08/hackabot_26" }],
      },
    ],
  },

  // ===== WORK EXPERIENCE =====
  {
    id: "experience",
    name: "Work Experience",
    narrativeName: "Service Record",
    shape: "arc",
    blurb: "Industry and research roles.",
    stars: [
      {
        id: "fpga-engineer-altera",
        media: [
          { type: "image", src: "/assets/media/fpga-engineer-altera/m1.jpg", thumb: "/assets/media/fpga-engineer-altera/m1.thumb.jpg", alt: "On site at Altera (Intel PSG)", caption: "Year in industry at Altera" },
          { type: "pdf", src: "/assets/experience/intel-internship-report.pdf", thumb: "/assets/experience/intel-internship-report.thumb.jpg", alt: "Internship report", caption: "Altera internship report" },
        ],
        title: "FPGA Hardware Engineer — Altera (Intel PSG)",
        recordType: "SERVICE RECORD",
        date: "Jul 2023 — Aug 2024",
        summary:
          "Architected an FPGA accelerator for Google's Snappy compression in SystemVerilog (10 percent better ratio, 30 percent more throughput) and delivered a 100x speed-up in duplicate MAC-address detection.",
        body: [
          "A year in industry at Altera, formerly Intel PSG. The headline project was an FPGA hardware accelerator for Google's Snappy compression algorithm, architected and validated in SystemVerilog. It raised compression ratio by 10 percent and throughput by 30 percent over the software baseline, with a NIOS V embedded test platform and custom driver software built alongside it to stress-test the core.",
          "A second strand benchmarked and redesigned the duplicate-MAC-address detection search used by VirtIO network devices, producing a data-driven recommendation that delivered a 100x efficiency improvement. The role also involved refactoring a legacy IPU management tool for readability and modularity, building a Python test framework to guard future changes, and demonstrating the Snappy design to engineering teams and stakeholders.",
        ],
        tags: ["SystemVerilog", "FPGA", "RTL design", "NIOS V", "Python"],
        assets: [
          { kind: "repo", label: "Bespoke Snappy (HW prototype)", href: "https://github.com/FHL-08/Bespoke_Snappy" },
        ],
      },
      {
        id: "robotics-research-assistant",
        media: [
          { type: "image", src: "/assets/media/robotics-research-assistant/m1.jpg", thumb: "/assets/media/robotics-research-assistant/m1.thumb.jpg", alt: "Manipulator in the lab", caption: "Impedance control on a 7-DOF arm" },
        ],
        title: "Robotics Research Assistant — RAICo Programme",
        recordType: "SERVICE RECORD",
        date: "Aug 2025 — Apr 2026",
        summary:
          "Engineered a safety-critical adaptive impedance control framework for nuclear decommissioning, deployed on 7-DOF KINOVA and Franka arms with proven stability guarantees.",
        body: [
          "Designed and analysed a safe, robust, adaptive impedance control framework aimed at nuclear decommissioning, where manipulators have to stay safe under severe uncertainty. It fuses an Interval Type-2 Fuzzy Logic System with a smooth compensator and a Nonsmooth Control Barrier Function to hold both safety and stability.",
          "The framework runs as a unified soft-constrained QP solved online in roughly 54 microseconds per cycle, with Uniform Ultimate Boundedness proved through composite Lyapunov analysis, and was deployed on 7-DOF KINOVA Gen3 and Franka Emika manipulators. It is the basis for the CDC submission in the Research Archive.",
        ],
        tags: ["Adaptive control", "CBFs", "KINOVA", "Franka", "Lyapunov", "QP"],
        assets: [{ kind: "arxiv", label: "Related paper — arXiv:2605.28367", href: "https://arxiv.org/abs/2605.28367" }],
      },
    ],
  },

  // ===== AWARDS =====
  {
    id: "awards",
    name: "Awards",
    narrativeName: "Commendations",
    shape: "symmetrical",
    blurb: "Academic and industry recognition.",
    stars: [
      {
        id: "outstanding-achievement-award",
        media: [
          { type: "image", src: "/assets/media/outstanding-achievement-award/m1.jpg", thumb: "/assets/media/outstanding-achievement-award/m1.thumb.jpg", alt: "Outstanding Achievement Award", caption: "Outstanding Achievement Award" },
          { type: "image", src: "/assets/media/outstanding-achievement-award/m2.jpg", thumb: "/assets/media/outstanding-achievement-award/m2.thumb.jpg", alt: "Outstanding Achievement Award" },
        ],
        title: "Outstanding Achievement Award",
        recordType: "COMMENDATION RECORD",
        date: "2025",
        summary:
          "The University of Manchester's award for exceptional all-round performance, placing in the top 0.5 percent of the graduating cohort.",
        body: [
          "The University of Manchester grants this award for exceptional all-round performance across the degree. It recognised both academic results and wider contribution, and placed Faisal in roughly the top 0.5 percent of the graduating cohort.",
        ],
        tags: ["University of Manchester", "Top 0.5%"],
      },
      {
        id: "best-in-eee",
        media: [
          { type: "image", src: "/assets/media/best-in-eee/m1.jpg", thumb: "/assets/media/best-in-eee/m1.thumb.jpg", alt: "Best in EEE Department award", caption: "Best in EEE Department" },
        ],
        title: "Best in EEE Department & Best Final-Year Project",
        recordType: "COMMENDATION RECORD",
        date: "2025",
        summary:
          "First prize for the best overall performance in the cohort and for the best final-year project, EEE Department, University of Manchester.",
        body: [
          "Two first prizes from the Department of Electrical and Electronic Engineering at the University of Manchester: one for the best overall performance in the cohort, and one for the best final-year project. The winning project was the safety-critical formation control work that later grew into the TAROS paper.",
        ],
        tags: ["1st prize", "Best project"],
      },
      {
        id: "top-10-faculty",
        media: [
          { type: "image", src: "/assets/media/top-10-faculty/m1.jpg", thumb: "/assets/media/top-10-faculty/m1.thumb.jpg", alt: "Top 10 in the Faculty of Science and Engineering", caption: "Faculty Top 10" },
        ],
        title: "Top 10 in the Faculty of Science & Engineering",
        recordType: "COMMENDATION RECORD",
        summary:
          "Recognised among the top 10 students across the Faculty of Science & Engineering for academic achievement.",
        body: [
          "Recognition as one of the top 10 students across the entire Faculty of Science and Engineering, awarded for sustained academic achievement within a large and competitive cohort.",
        ],
        tags: ["Faculty award"],
      },
      {
        id: "iet-future-talent",
        media: [
          { type: "image", src: "/assets/media/iet-future-talent/m1.jpg", thumb: "/assets/media/iet-future-talent/m1.thumb.jpg", alt: "IET Future Talent Award", caption: "IET Future Talent Award" },
          { type: "image", src: "/assets/media/iet-future-talent/m2.jpg", thumb: "/assets/media/iet-future-talent/m2.thumb.jpg", alt: "IET Future Talent Award" },
        ],
        title: "IET Future Talent Award — Boost Scholarship",
        recordType: "COMMENDATION RECORD",
        date: "2024",
        summary:
          "A merit scholarship from the Institution of Engineering & Technology for high-achieving students on IET-accredited degrees.",
        body: [
          "A merit scholarship from the Institution of Engineering and Technology, awarded to high-achieving students holding a 70 percent average or above on IET-accredited degrees. It supported the final years of the mechatronics degree.",
        ],
        tags: ["IET", "Merit scholarship"],
      },
      {
        id: "stellify-award",
        media: [
          { type: "image", src: "/assets/media/stellify-award/m1.jpg", thumb: "/assets/media/stellify-award/m1.thumb.jpg", alt: "Stellify Award", caption: "Stellify Award" },
        ],
        title: "Stellify Award",
        recordType: "COMMENDATION RECORD",
        date: "2023",
        summary:
          "The University of Manchester's flagship social-responsibility award, earned alongside the degree.",
        body: [
          "The University of Manchester's flagship social-responsibility award. Earning it meant completing three Ethical Grand Challenges, contributing more than 40 hours of volunteering, and taking on two leadership roles alongside the demands of the degree.",
        ],
        tags: ["Social responsibility", "Leadership"],
      },
      {
        id: "pgr-scholarship",
        title: "School of Engineering PGR Scholarship",
        recordType: "COMMENDATION RECORD",
        date: "Jan 2026",
        summary:
          "A fully-funded doctoral studentship for PhD research at the University of Manchester.",
        body: [
          "A fully-funded postgraduate research studentship from the School of Engineering, covering the doctoral programme at the University of Manchester and the safety-critical control research it supports.",
        ],
        tags: ["Fully funded", "PhD"],
      },
      {
        id: "cambridge-top-nigeria-physics",
        media: [
          { type: "image", src: "/assets/media/cambridge-top-nigeria-physics/m1.jpg", thumb: "/assets/media/cambridge-top-nigeria-physics/m1.thumb.jpg", alt: "Cambridge Outstanding Learner Award", caption: "Top in Nigeria, AS-Level Physics" },
        ],
        title: "Top in Nigeria — Cambridge AS-Level Physics",
        recordType: "COMMENDATION RECORD",
        date: "2020",
        summary:
          "Cambridge Outstanding Learner Award for the highest mark in Nigeria in Cambridge International AS-Level Physics.",
        body: [
          "A Cambridge Outstanding Learner Award for the single highest mark in Nigeria in Cambridge International AS-Level Physics.",
        ],
        tags: ["Cambridge", "National top"],
      },
    ],
  },

  // ===== EDUCATION =====
  {
    id: "education",
    name: "Education",
    narrativeName: "Training Record",
    shape: "linear",
    blurb: "Academic background.",
    stars: [
      {
        id: "phd-eee",
        title: "PhD, Electrical & Electronic Engineering",
        recordType: "TRAINING RECORD",
        date: "Apr 2026 — present (expected 2030)",
        summary:
          "University of Manchester. Safety-critical Control Barrier Function methods for multi-agent autonomous systems. Fully funded.",
        body: [
          "Doctoral research building provably safe and stable Control Barrier Function based control for multi-agent autonomous systems that operate in dynamic, uncertain environments. The focus is on nonlinear control algorithms light enough to run in real time on edge hardware, under tight computational and actuator budgets.",
        ],
        tags: ["University of Manchester", "Control Barrier Functions", "Fully funded"],
      },
      {
        id: "beng-mechatronics",
        title: "BEng (Hons) Mechatronic Engineering with Industrial Experience",
        recordType: "TRAINING RECORD",
        date: "Jul 2021 — Jul 2025",
        summary:
          "University of Manchester. First-Class Honours, top 0.5 percent of the cohort. Dissertation on safety-critical consensus-based formation control of distributed mobile robots.",
        body: [
          "A four-year mechatronic engineering degree with an integrated year in industry, graded First-Class Honours and finishing in roughly the top 0.5 percent of the cohort. The course spanned control, electronics, embedded systems, mechanics and software.",
          "The final-year dissertation on safety-critical consensus-based formation control of distributed mobile robots later grew into the Tessellate platform and the TAROS paper.",
        ],
        tags: ["First-Class Honours", "Top 0.5%"],
      },
    ],
  },

  // ===== SKILLS =====
  {
    id: "skills",
    name: "Skills",
    narrativeName: "Capability Matrix",
    shape: "network",
    blurb: "Core domains of expertise.",
    stars: [
      {
        id: "skill-control",
        title: "Control Theory",
        recordType: "CAPABILITY",
        summary:
          "Safety-critical control (CBFs and NCBFs), linear and nonlinear systems, robust, adaptive and optimal control (PID, LQR, H-infinity), and Lyapunov stability analysis.",
        body: [
          "The core specialism. In practice it means designing controllers that come with guarantees: Control Barrier Functions and their nonsmooth variants for safety, Lyapunov analysis for stability, and robust, adaptive and optimal methods for performance under uncertainty. It runs the full range from classical PID and LQR through to modern safety filters on real manipulators and mobile robots.",
        ],
        tags: ["CBFs", "MPC", "LQR", "Lyapunov", "Adaptive"],
      },
      {
        id: "skill-robotics",
        title: "Robotics",
        recordType: "CAPABILITY",
        summary:
          "ROS and ROS 2, manipulation and mobile robots, multi-agent swarms and real-time perception, across KINOVA Gen3, Franka Emika, Quanser, SO-101 and SPOT.",
        body: [
          "Hands-on robotics across manipulators, mobile robots and multi-robot swarms. This covers ROS and ROS 2 stacks, real-time perception, and the work of bringing controllers from simulation onto physical hardware. Platforms worked with include KINOVA Gen3 and Franka Emika arms, Quanser equipment, the SO-101 servo arm and the SPOT quadruped.",
        ],
        tags: ["ROS2", "Manipulation", "Swarms", "Perception"],
      },
      {
        id: "skill-optimization",
        title: "Optimisation",
        recordType: "CAPABILITY",
        summary:
          "Convex optimisation, MPC, second-order cone and quadratic programming, real-time solvers (cvxpy, ECOS and CLARABEL), and CasADi.",
        body: [
          "Optimisation is the engine under most of the control work. It means formulating controllers as convex programs, usually second-order cone or quadratic programs, and solving them fast enough to close the loop in real time. Tools in regular use include cvxpy with the ECOS and CLARABEL solvers, and CasADi for modelling and inverse kinematics.",
        ],
        tags: ["Convex", "SOCP", "QP", "CasADi"],
      },
      {
        id: "skill-embedded",
        title: "Embedded Systems",
        recordType: "CAPABILITY",
        summary:
          "STM32, ESP32, ARM, Arduino and Raspberry Pi, FPGAs from Altera and Xilinx, the SystemVerilog, VHDL and Verilog HDLs, and real-time control on constrained hardware.",
        body: [
          "Comfortable taking control algorithms all the way down to the metal. This spans microcontrollers such as STM32, ESP32 and Arduino, single-board computers like the Raspberry Pi, and FPGA work on both Altera and Xilinx parts using SystemVerilog, VHDL and Verilog. The recurring theme is making real-time control behave on hardware with tight timing and resource limits.",
        ],
        tags: ["STM32", "FPGA", "SystemVerilog", "Real-time"],
      },
      {
        id: "skill-ml",
        title: "Machine Learning",
        recordType: "CAPABILITY",
        summary:
          "Applied machine learning for perception and decision making, including computer vision (YOLOv8), fuzzy-logic systems and learning-augmented control.",
        body: [
          "Machine learning applied where it earns its place in a control or robotics system. That includes computer-vision pipelines built on YOLOv8 for detection and tracking, Interval Type-2 Fuzzy Logic Systems used inside adaptive controllers, and learning-augmented control where data helps cover the parts of a system that are hard to model.",
        ],
        tags: ["Computer vision", "YOLOv8", "Fuzzy logic"],
      },
    ],
  },
];

// ----------------------------------------------------------------------------
// Off-Duty Log (Hobbies) — surfaced as a distant planet
// ----------------------------------------------------------------------------

export interface OffDutyTab {
  id: string;
  label: string;
  blurb: string;
  images: string[];
}

export const offDuty: { title: string; tabs: OffDutyTab[] } = {
  title: "Off-Duty Log",
  tabs: [
    { id: "drawing", label: "Drawing", blurb: "Pencil and digital studies.",
      images: ["/assets/media/hobbies/drawing/01.jpg", "/assets/media/hobbies/drawing/02.jpg", "/assets/media/hobbies/drawing/03.jpg", "/assets/media/hobbies/drawing/04.jpg", "/assets/media/hobbies/drawing/05.jpg", "/assets/media/hobbies/drawing/06.jpg", "/assets/media/hobbies/drawing/07.jpg", "/assets/media/hobbies/drawing/08.jpg", "/assets/media/hobbies/drawing/09.jpg", "/assets/media/hobbies/drawing/10.jpg", "/assets/media/hobbies/drawing/11.jpg", "/assets/media/hobbies/drawing/12.jpg", "/assets/media/hobbies/drawing/13.jpg"] },
    { id: "cooking", label: "Cooking", blurb: "Experiments in the kitchen.",
      images: ["/assets/media/hobbies/cooking/01.jpg", "/assets/media/hobbies/cooking/02.jpg", "/assets/media/hobbies/cooking/03.jpg", "/assets/media/hobbies/cooking/04.jpg"] },
    { id: "travelling", label: "Travelling", blurb: "Places logged along the way.",
      images: ["/assets/media/hobbies/travelling/01.jpg", "/assets/media/hobbies/travelling/02.jpg", "/assets/media/hobbies/travelling/03.jpg", "/assets/media/hobbies/travelling/04.jpg", "/assets/media/hobbies/travelling/05.jpg", "/assets/media/hobbies/travelling/06.jpg", "/assets/media/hobbies/travelling/07.jpg", "/assets/media/hobbies/travelling/08.jpg"] },
    { id: "reading", label: "Reading", blurb: "Current and recent reads.",
      images: ["/assets/media/hobbies/reading/01.jpg", "/assets/media/hobbies/reading/02.jpg", "/assets/media/hobbies/reading/03.jpg", "/assets/media/hobbies/reading/04.jpg", "/assets/media/hobbies/reading/05.jpg", "/assets/media/hobbies/reading/06.jpg", "/assets/media/hobbies/reading/07.jpg", "/assets/media/hobbies/reading/08.jpg", "/assets/media/hobbies/reading/09.jpg"] },
  ],
};

// ----------------------------------------------------------------------------
// Mission Log (timeline)
// ----------------------------------------------------------------------------

export const missionLog: MissionLogEntry[] = [
  { year: "2026", event: "Initiated PhD research in safety-critical multi-agent control." },
  { year: "2026", event: "Formation-control paper accepted to TAROS; CDC paper under review." },
  { year: "2025", event: "Robotics Research Assistant (RAICo); graduated First-Class, top 0.5%." },
  { year: "2025", event: "Won the AME × Quanser hackathon and the GUH Quant challenge." },
  { year: "2024", event: "IET Future Talent (Boost) Scholarship; completed year in industry at Altera/Intel." },
  { year: "2023", event: "Built award-winning autonomous line-following robot; began FPGA role at Altera." },
  { year: "2022", event: "Won SwarmHack with a 100% robot-aggregation algorithm." },
  { year: "2021", event: "Completed a robotics internship at Createc." },
  { year: "2020", event: "Top in Nigeria — Cambridge AS-Level Physics." },
];
