/* starmap.js — constellation star-map engine (deterministic coordinate math).
   Positions are computed from the #starmap viewBox (2400x1840) so they are
   independent of any in-flight CSS transform. Desktop: hover -> focus -> star.
   Touch: permanent labels, tap to dive, glowing per-star reticles, press = glow,
   release = click (no hover emulation). */
(function () {
  function ready(fn){ if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",fn); else fn(); }
  ready(function () {
    var scene=document.getElementById("scene"), sm=document.getElementById("starmap"), world=document.getElementById("world")||document.getElementById("starmap");
    if(!scene||!sm) return;
    var MOB = /[?&]view=mobile/.test(location.search) || (window.matchMedia && (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches));
    function isPhone(){ return MOB && (Math.min(window.innerWidth||9999, window.innerHeight||9999) <= 540); }
    var PHONE = isPhone();
    var ZMIN = MOB ? 0.7 : 0.4, ZMAX = MOB ? 6 : 2.6;
    if(MOB) scene.classList.add("sm-mob");

    var fx=document.getElementById("sm-fx"), cursor=document.getElementById("sm-cursor"),
        conName=document.getElementById("con-name"), starName=document.getElementById("star-name"),
        overlay=document.getElementById("record-overlay"), recordBody=document.getElementById("record-body");
    var ml=document.getElementById("media-lightbox"), mlFrame=ml&&ml.querySelector("#ml-frame"), mlCap=ml&&ml.querySelector("#ml-cap"), mlPrev=ml&&ml.querySelector(".ml-prev"), mlNext=ml&&ml.querySelector(".ml-next"), curMedia=[], mlIndex=0;
    var links=document.getElementById("scene-links");
    var NS="http://www.w3.org/2000/svg", VBW=2400, VBH=1840, VBMINY=-170;
    function el(n,a){var e=document.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);return e;}
    function clearFx(){ while(fx.firstChild) fx.removeChild(fx.firstChild); }
    function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}

    var records={}; try{ records=JSON.parse(document.getElementById("sm-records").textContent); }catch(e){}

    var cons=[].slice.call(sm.querySelectorAll(".sm-con")).map(function(g){
      var first=g.querySelector(".sm-star"); var rid=first&&first.getAttribute("data-rid"); var r0=rid&&records[rid];
      return {
        g:g, cx:+g.getAttribute("data-cx"), cy:+g.getAttribute("data-cy"), r:+g.getAttribute("data-r"),
        title:r0?r0.constellation:"", sector:r0?r0.sector:0,
        stars:[].slice.call(g.querySelectorAll(".sm-star")).map(function(s){
          return { el:s, x:+s.getAttribute("data-x"), y:+s.getAttribute("data-y"), mag:+s.getAttribute("data-mag"), rid:s.getAttribute("data-rid") };
        })
      };
    });

    var mode="map", curCon=null, hovStar=null, hovCon=null, lastM={x:-1,y:-1}, T={tx:0,ty:0,s:1}, hraf=0, hUntil=0, starSeqT1=0, starSeqT2=0;
    var pressCon=null, pressStar=null;
    window.__smT={tx:0,ty:0,s:1};

    function metrics(){ var R=scene.getBoundingClientRect(); var s=Math.min(R.width/VBW, R.height/VBH);
      return { W:R.width, H:R.height, s:s, ox:(R.width-VBW*s)/2, oy:(R.height-VBH*s)/2 }; }
    function vb(vx,vy,m){ return { x:m.ox+vx*m.s, y:m.oy+(vy-VBMINY)*m.s }; } // identity screen pos
    function cur2(p){ return { x:T.tx+T.s*p.x, y:T.ty+T.s*p.y }; }         // apply current transform
    function setT(tx,ty,s){ T.tx=tx; T.ty=ty; T.s=s; world.style.transform="translate("+tx+"px,"+ty+"px) scale("+s+")"; window.__smT={tx:tx,ty:ty,s:s}; }
    function defaultT(){ var m=metrics();
      if(MOB){ var a=vb(1472,639,m), s=Math.max(0.9,Math.min(3.6, 0.42*Math.min(m.W,m.H)/(400*m.s)));
        if(PHONE) s=Math.min(ZMAX, s*1.35);
        setT(0.5*m.W - s*a.x, 0.5*m.H - s*a.y, s); placeConLabels(); return; }
      var s=0.8; setT(m.W*(1-s)/2, m.H*(1-s)/2, s); }
    // like defaultT but recenters on a specific constellation (used when closing one on touch,
    // so you zoom back out onto the sector you were in rather than jumping to the crystal)
    function defaultTAt(c){ if(!MOB||!c){ defaultT(); return; } var m=metrics();
      var s=Math.max(0.9,Math.min(3.6, 0.42*Math.min(m.W,m.H)/(400*m.s))); if(PHONE) s=Math.min(ZMAX, s*1.35);
      var a=vb(c.cx,c.cy,m); T.s=s; T.tx=0.5*m.W - s*a.x; T.ty=0.5*m.H - s*a.y; clampT(); setT(T.tx,T.ty,T.s); placeConLabels(); }

    /* ---------- permanent constellation labels (touch, map mode) ---------- */
    var conLabels=null;
    function buildConLabels(){ if(!MOB) return; conLabels=document.createElement("div"); conLabels.id="sm-conlabels";
      cons.forEach(function(c){ var d=document.createElement("div"); d.className="con-label";
        d.innerHTML='<span class="cl-y">SECTOR '+(c.sector<10?"0":"")+c.sector+'</span><span class="cl-t">'+esc(c.title)+'</span>';
        c.labelEl=d; conLabels.appendChild(d); });
      world.appendChild(conLabels); }
    function placeConLabels(){ if(!conLabels) return; var m=metrics();
      cons.forEach(function(c){ if(!c.labelEl) return; var p=vb(c.cx, c.cy + c.r + 26, m);
        c.labelEl.style.left=p.x.toFixed(1)+"px"; c.labelEl.style.top=p.y.toFixed(1)+"px"; c.labelEl.style.fontSize=(20*m.s).toFixed(2)+"px"; }); }
    function showConLabels(on){ if(conLabels) conLabels.classList.toggle("show", !!on); }

    /* ---------- MAP (desktop hover label) ---------- */
    function showConName(c){
      var m=metrics(), c0=cur2(vb(c.cx,c.cy,m)), R=c.r*m.s*T.s, ang=-0.7, px=c0.x+Math.cos(ang)*R, py=c0.y+Math.sin(ang)*R;
      conName.querySelector(".y").textContent="SECTOR "+(c.sector<10?"0":"")+c.sector;
      conName.querySelector(".t").textContent=c.title;
      conName.style.left=(px+28)+"px"; conName.style.top=(py-44)+"px"; conName.classList.add("show");
      clearFx(); fx.setAttribute("viewBox","0 0 "+m.W+" "+m.H);
      fx.appendChild(el("line",{x1:px,y1:py,x2:px+28,y2:py-14,stroke:"#41e3ff","stroke-opacity":"0.85","stroke-width":"1"}));
    }
    cons.forEach(function(c){
      c.g.addEventListener("mouseenter",function(){ if(MOB||mode!=="map")return; c.g.classList.add("on"); hovCon=c; showConName(c); });
      c.g.addEventListener("mouseleave",function(){ if(MOB||mode!=="map")return; hovCon=null; c.g.classList.remove("on"); conName.classList.remove("show"); clearFx(); });
      if(!MOB) c.g.addEventListener("click",function(ev){ if(mode==="map"){ if(dragged||held)return; ev.stopPropagation(); focusCon(c); } });
    });

    /* ---------- FOCUS ---------- */
    function focusCon(c){
      mode="focus"; curCon=c; world.classList.add("sm-anim"); scene.classList.add("sm-focus"); scene.classList.remove("sm-star");
      cons.forEach(function(o){ o.g.classList.remove("on","sm-focused","pressing"); }); c.g.classList.add("sm-focused");
      hovCon=null; conName.classList.remove("show"); clearFx(); clearStarHover(); showConLabels(false);
      var m=metrics(), c0=vb(c.cx,c.cy,m);
      var target=Math.min(m.W,m.H)*(MOB?0.5:0.34), S=Math.max(1.2,Math.min(MOB?7:3.2, target/(c.r*m.s)));
      c.focusS=S; setT(m.W/2 - S*c0.x, m.H/2 - S*c0.y, S);
      if(!MOB){ hUntil=performance.now()+1000; cancelAnimationFrame(hraf); hoverLoop(); }
      if(MOB){ clearScan(); if(!c.scanned){ c.scanned=true; scanT.push(setTimeout(function(){ runStarScan(c); }, 850)); } }
      updateHud();
    }
    function hoverLoop(){ checkStar(lastM.x,lastM.y); if(performance.now()<hUntil) hraf=requestAnimationFrame(hoverLoop); }
    function setStarHover(si,scx,scy,mx,my){
      if(hovStar!==si){ hovStar=si; cursor.classList.add("lock"); var r=records[si.rid]||{};
        starName.querySelector(".y").textContent=r.recordType||""; starName.querySelector(".t").textContent=r.title||""; starName.classList.add("show"); }
      var ax=scx+34, ay=scy-44, dx=ax-mx, dy=ay-my, len=Math.hypot(dx,dy)||1, rr=36, sx=mx+dx/len*rr, sy=my+dy/len*rr;
      var m=metrics(); clearFx(); fx.setAttribute("viewBox","0 0 "+m.W+" "+m.H);
      fx.appendChild(el("line",{x1:sx,y1:sy,x2:ax,y2:ay,stroke:"#41e3ff","stroke-opacity":"0.85","stroke-width":"1","stroke-dasharray":"4 4"}));
      starName.style.left=(scx+38)+"px"; starName.style.top=(scy-60)+"px";
    }
    function clearStarHover(){ if(hovStar){ hovStar=null; cursor.classList.remove("lock"); starName.classList.remove("show"); clearFx(); } }
    function checkStar(mx,my){
      if(mode!=="focus"||!curCon)return; var m=metrics(), best=null, bestd=1e9, bx, by;
      curCon.stars.forEach(function(si){ var c=cur2(vb(si.x,si.y,m)); var visR=si.mag*13*m.s*T.s, hr=Math.max(18,visR*0.5), d=Math.hypot(mx-c.x,my-c.y);
        if(d<hr&&d<bestd){ bestd=d; best=si; bx=c.x; by=c.y; } });
      if(best) setStarHover(best,bx,by,mx,my); else clearStarHover();
    }
    function starAt(mx,my){
      if(mode!=="focus"||!curCon)return null; var m=metrics(), best=null, bestd=1e9;
      curCon.stars.forEach(function(si){ var c=cur2(vb(si.x,si.y,m)); var visR=si.mag*13*m.s*T.s, hr=Math.max(26,visR*0.7), d=Math.hypot(mx-c.x,my-c.y);
        if(d<hr&&d<bestd){ bestd=d; best=si; } });
      return best;
    }

    /* ---------- STAR + record ---------- */
    /* ---------- one-time star-name scan on entering a sector (touch only) ---------- */
    var scanT=[];
    function clearScan(){ for(var i=0;i<scanT.length;i++) clearTimeout(scanT[i]); scanT=[]; if(starName) starName.classList.remove("show"); }
    function scanLabel(si){
      var r=records[si.rid]||{}, m=metrics(), p=cur2(vb(si.x,si.y,m)), above=si.mag*15*m.s*T.s+8;
      starName.querySelector(".y").textContent=r.recordType||"";
      starName.querySelector(".t").textContent=r.title||"";
      starName.style.left=p.x.toFixed(1)+"px"; starName.style.top=(p.y-above).toFixed(1)+"px"; starName.style.transform="translate(-50%,-100%)";
      starName.classList.add("show");
    }
    function runStarScan(c){
      if(!MOB||!c||mode!=="focus"||curCon!==c) return;
      var list=c.stars.slice().sort(function(a,b){ return (a.x-b.x)||(a.y-b.y); }), dwell=1100, vis=820;
      list.forEach(function(si,i){
        scanT.push(setTimeout(function(){ if(mode==="focus"&&curCon===c) scanLabel(si); }, i*dwell));
        scanT.push(setTimeout(function(){ if(mode==="focus"&&curCon===c) starName.classList.remove("show"); }, i*dwell+vis));
      });
    }
    function focusStar(si){
      clearScan();
      mode="star"; world.classList.add("sm-anim"); scene.classList.remove("sm-focus"); scene.classList.add("sm-star"); clearStarHover();
      clearTimeout(starSeqT1); clearTimeout(starSeqT2);
      var m=metrics(), id=vb(si.x,si.y,m), S=(curCon?curCon.focusS:2)*1.8;
      setT((MOB?0.5:0.36)*m.W - S*id.x, m.H*0.5 - S*id.y, S);
      renderRecord(records[si.rid]); updateHud();
      if(!MOB) starSeqT1=setTimeout(function(){ if(mode==="star") drawStarConnector(); }, 840);
      starSeqT2=setTimeout(function(){ if(mode==="star") overlay.classList.add("show"); }, MOB?240:1120);
    }
    function drawStarConnector(){
      if(mode!=="star")return;
      var m=metrics(), sx=m.W*0.36, sy=m.H*0.5;
      var p=overlay&&overlay.querySelector(".record-panel"); if(!p)return;
      var R=scene.getBoundingClientRect(), pr=p.getBoundingClientRect();
      var cardL=pr.left-R.left, cardMidY=pr.top-R.top+pr.height/2, bx=cardL-48;
      clearFx(); fx.setAttribute("viewBox","0 0 "+m.W+" "+m.H);
      fx.appendChild(el("path",{d:"M"+sx+" "+sy+" L"+bx+" "+cardMidY+" L"+cardL+" "+cardMidY,fill:"none",stroke:"#41e3ff","stroke-opacity":"0.7","stroke-width":"1.4","stroke-dasharray":"5 4"}));
      fx.appendChild(el("circle",{cx:sx,cy:sy,r:7,fill:"none",stroke:"#41e3ff","stroke-opacity":"0.85","stroke-width":"1.4"}));
      fx.appendChild(el("circle",{cx:sx,cy:sy,r:2.6,fill:"#41e3ff"}));
      fx.appendChild(el("circle",{cx:cardL,cy:cardMidY,r:3.4,fill:"#41e3ff"}));
    }
    function renderRecord(r){
      if(!r){ recordBody.innerHTML=""; return; }
      var h="";
      if(r.badge) h+='<span class="rec-badge">'+esc(r.badge)+'</span>';
      h+='<div class="rec-eyebrow">STELLAR RECORD // SECTOR '+(r.sector<10?"0":"")+r.sector+' · '+esc(r.constellation||"")+'</div>';
      h+='<div class="rec-type">'+esc(r.recordType)+'</div><h3 class="rec-title">'+esc(r.title)+'</h3>';
      if(r.date) h+='<div class="rec-date">'+esc(r.date)+'</div>';
      (r.body||[]).forEach(function(p){ h+='<p class="rec-p">'+esc(p)+'</p>'; });
      if(r.tags&&r.tags.length) h+='<div class="rec-tags">'+r.tags.map(function(t){return '<span class="tag">'+esc(t)+'</span>';}).join("")+'</div>';
      if(r.assets&&r.assets.length) h+='<div class="rec-assets">'+r.assets.map(function(a){return '<a class="asset" href="'+esc(a.href)+'" target="_blank" rel="noopener">'+esc(a.label)+'</a>';}).join("")+'</div>';
      if(r.media&&r.media.length){ curMedia=r.media;
        var th=r.media.map(function(m,i){
          var inner, cls="media-thumb";
          if(m.type==="video"){ cls+=" is-video"; inner='<video src="'+esc(m.previewSrc||m.src)+'" muted loop autoplay playsinline poster="'+esc(m.poster||"")+'"></video><span class="media-badge"><svg class="icon icon-fill" viewBox="0 0 24 24" aria-hidden="true"><polygon points="6 4 20 12 6 20 6 4"/></svg></span>'; }
          else if(m.type==="pdf"){ cls+=" is-pdf"; inner='<img src="'+esc(m.thumb||"")+'" alt="'+esc(m.alt||"")+'" loading="lazy" decoding="async"/><span class="media-badge"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span>'; }
          else { inner='<img src="'+esc(m.thumb||m.src)+'" alt="'+esc(m.alt||"")+'" loading="lazy" decoding="async"/>'; }
          return '<button class="'+cls+'" type="button" data-mi="'+i+'">'+inner+'<span class="holo-scan"></span></button>';
        }).join("");
        h+='<div class="rec-media-wrap"><div class="media-head">MEDIA ARCHIVE // '+r.media.length+(r.media.length===1?" FILE":" FILES")+'</div><div class="media-strip">'+th+'</div></div>';
      } else { curMedia=[]; h+='<div class="rec-media">MEDIA ARCHIVE // PENDING</div>'; }
      recordBody.innerHTML=h;
    }

    function toFocus(){ clearTimeout(starSeqT1); clearTimeout(starSeqT2); overlay.classList.remove("show"); if(curCon) focusCon(curCon); }
    function toMap(){ clearTimeout(starSeqT1); clearTimeout(starSeqT2); clearScan(); mode="map"; world.classList.add("sm-anim"); scene.classList.remove("sm-focus","sm-star"); overlay.classList.remove("show");
      clearStarHover(); conName.classList.remove("show"); clearFx(); cons.forEach(function(o){ o.g.classList.remove("sm-focused","pressing","on"); });
      if(MOB&&curCon) defaultTAt(curCon); else defaultT(); curCon=null; updateHud();
      if(MOB){ showConLabels(true); setTimeout(function(){ if(mode==="map"){ placeConLabels(); showConLabels(true); } }, 820); } }

    /* ---------- input ---------- */
    scene.addEventListener("pointermove",function(e){ var R=scene.getBoundingClientRect(), mx=e.clientX-R.left, my=e.clientY-R.top;
      lastM.x=mx; lastM.y=my; if(!MOB){ cursor.style.left=mx+"px"; cursor.style.top=my+"px"; if(mode==="focus") checkStar(mx,my); } },{passive:true});
    if(overlay) overlay.addEventListener("click",function(e){ e.stopPropagation(); if(e.target===overlay) toFocus(); });
    var rclose=document.querySelector(".record-close"); if(rclose) rclose.addEventListener("click",function(e){ e.stopPropagation(); toFocus(); });
    var panel=overlay&&overlay.querySelector(".record-panel"); if(panel) panel.addEventListener("click",function(e){ e.stopPropagation(); });
    if(!MOB) scene.addEventListener("click",function(){ if(mode==="focus"){ if(held)return; checkStar(lastM.x,lastM.y); if(hovStar) focusStar(hovStar); else toMap(); } });

    /* ---------- pan + zoom (map mode) ---------- */
    var drag=null, dragged=false, pts={}, pinch=null, holdT=0, downPt=null, held=false, tapStart=null;
    function nearestCon(mx,my){ var m=metrics(), best=null,bd=1e9; cons.forEach(function(c){ var p=cur2(vb(c.cx,c.cy,m)), rr=c.r*m.s*T.s+26, d=Math.hypot(mx-p.x,my-p.y); if(d<rr&&d<bd){bd=d;best=c;} }); return best; }
    function clearHold(){ if(holdT){ clearTimeout(holdT); holdT=0; } }
    function nPts(){ var n=0; for(var k in pts) n++; return n; }
    function clampT(){
      var m=metrics();
      var Lx=T.s*m.ox, Wf=T.s*VBW*m.s, hiX=m.W*0.7-Lx, loX=m.W*0.3-Lx-Wf;
      if(loX>hiX){ T.tx=(loX+hiX)/2; } else { if(T.tx>hiX)T.tx=hiX; if(T.tx<loX)T.tx=loX; }
      var Ly=T.s*m.oy, Hf=T.s*VBH*m.s, hiY=m.H*0.7-Ly, loY=m.H*0.3-Ly-Hf;
      if(loY>hiY){ T.ty=(loY+hiY)/2; } else { if(T.ty>hiY)T.ty=hiY; if(T.ty<loY)T.ty=loY; }
    }
    var panRaf=0, busyT=0;
    function updateHud(){ var hr=document.querySelector(".scene-hud .hud-tr"); if(!hr)return;
      hr.textContent = (mode==="map") ? "SECTOR MAP // X "+Math.round(-T.tx)+"  Y "+Math.round(-T.ty)+"  ZOOM "+T.s.toFixed(2)+"x" : "SECTOR MAP // SELECT A CONSTELLATION"; }
    function writeT(){ panRaf=0; world.style.transform="translate("+T.tx+"px,"+T.ty+"px) scale("+T.s+")"; window.__smpan={x:T.tx,y:T.ty}; window.__smT={tx:T.tx,ty:T.ty,s:T.s}; updateHud(); if(mode==="map"&&hovCon&&hovCon.g.classList.contains("on")) showConName(hovCon); }
    function schedule(){ if(!panRaf) panRaf=requestAnimationFrame(writeT); }
    function busy(){ scene.classList.add("sm-busy"); clearTimeout(busyT); busyT=setTimeout(function(){ scene.classList.remove("sm-busy"); },220); }
    function applyPan(){ clampT(); schedule(); }
    scene.addEventListener("pointerdown",function(e){
      var R=scene.getBoundingClientRect(), px=e.clientX-R.left, py=e.clientY-R.top; held=false;
      if(mode==="map"){
        pts[e.pointerId]={x:e.clientX,y:e.clientY}; var n=nPts();
        if(n===1){ drag={x:e.clientX,y:e.clientY,tx:T.tx,ty:T.ty}; dragged=false; tapStart={x:px,y:py};
          if(MOB){ var pc=nearestCon(px,py); if(pc){ pressCon=pc; pc.g.classList.add("pressing"); } }
          else { clearHold(); holdT=setTimeout(function(){ if(dragged)return; held=true; var c=nearestCon(px,py); if(c){ cons.forEach(function(o){o.g.classList.remove("on");}); c.g.classList.add("on"); hovCon=c; showConName(c); } },330); }
        } else if(n===2){ drag=null; dragged=true; clearHold();
          if(pressCon){ pressCon.g.classList.remove("pressing"); pressCon=null; }
          var id=Object.keys(pts), a=pts[id[0]], b=pts[id[1]];
          pinch={d:Math.hypot(a.x-b.x,a.y-b.y)||1, cx:(a.x+b.x)/2, cy:(a.y+b.y)/2, tx:T.tx, ty:T.ty, s:T.s}; }
      } else if(mode==="focus"){ pts[e.pointerId]={x:e.clientX,y:e.clientY}; downPt={x:e.clientX,y:e.clientY,moved:false}; tapStart={x:px,y:py};
        if(MOB){ var ps=starAt(px,py); if(ps){ pressStar=ps; ps.el.classList.add("held"); } }
        else { clearHold(); holdT=setTimeout(function(){ if(downPt&&!downPt.moved){ held=true; checkStar(px,py); } },330); } }
    });
    window.addEventListener("pointermove",function(e){
      if(pts[e.pointerId]){ pts[e.pointerId].x=e.clientX; pts[e.pointerId].y=e.clientY; }
      if(pinch && nPts()>=2){ var R=scene.getBoundingClientRect(), id=Object.keys(pts), a=pts[id[0]], b=pts[id[1]];
        var nd=Math.hypot(a.x-b.x,a.y-b.y), cx=(a.x+b.x)/2-R.left, cy=(a.y+b.y)/2-R.top;
        var ns=Math.max(ZMIN,Math.min(ZMAX, pinch.s*(nd/pinch.d))), k=ns/pinch.s;
        T.s=ns; T.tx=cx-k*((pinch.cx-R.left)-pinch.tx); T.ty=cy-k*((pinch.cy-R.top)-pinch.ty);
        world.classList.remove("sm-anim"); clampT(); schedule(); busy(); return; }
      if(drag){ var dx=e.clientX-drag.x, dy=e.clientY-drag.y;
        if(!dragged&&Math.hypot(dx,dy)>5){ dragged=true; clearHold(); world.classList.remove("sm-anim"); scene.classList.add("sm-grab");
          if(MOB&&pressCon){ pressCon.g.classList.remove("pressing"); pressCon=null; }
          if(!MOB&&hovCon){ hovCon.g.classList.remove("on"); hovCon=null; conName.classList.remove("show"); clearFx(); } }
        if(dragged){ T.tx=drag.tx+dx; T.ty=drag.ty+dy; clampT(); schedule(); busy(); } }
      if(downPt && Math.hypot(e.clientX-downPt.x,e.clientY-downPt.y)>6){ downPt.moved=true; clearHold();
        if(MOB&&pressStar){ pressStar.el.classList.remove("held"); pressStar=null; } }
    });
    function endPtr(e){
      var R=scene.getBoundingClientRect(), ux=e.clientX-R.left, uy=e.clientY-R.top;
      var isTap = MOB && tapStart && nPts()===1 && Math.hypot(ux-tapStart.x, uy-tapStart.y)<16;
      if(isTap){
        if(mode==="map"){
          var mm=metrics(), cc=cur2(vb(1472,639,mm)), rr=240*mm.s*T.s;
          if(Math.hypot(tapStart.x-cc.x, tapStart.y-cc.y)<=rr){ if(window.__openOffDuty) window.__openOffDuty(); }
          else { var con=pressCon||nearestCon(tapStart.x, tapStart.y); if(con) focusCon(con); }
        } else if(mode==="focus"){ var si=pressStar||starAt(tapStart.x, tapStart.y); if(si) focusStar(si); else toMap(); }
      }
      if(pressCon){ pressCon.g.classList.remove("pressing"); pressCon=null; }
      if(pressStar){ pressStar.el.classList.remove("held"); pressStar=null; }
      tapStart=null;
      if(pts[e.pointerId]) delete pts[e.pointerId]; if(nPts()<2) pinch=null; if(nPts()===0){ drag=null; scene.classList.remove("sm-grab"); } clearHold(); downPt=null; setTimeout(function(){ if(nPts()===0) dragged=false; },0); }
    window.addEventListener("pointerup",endPtr);
    window.addEventListener("pointercancel",endPtr);
    scene.addEventListener("wheel",function(e){ if(mode!=="map")return; e.preventDefault();
      var R=scene.getBoundingClientRect(), mx=e.clientX-R.left, my=e.clientY-R.top;
      var f=e.deltaY<0?1.12:0.89, ns=Math.max(ZMIN,Math.min(ZMAX,T.s*f)), k=ns/T.s;
      T.tx=mx-(mx-T.tx)*k; T.ty=my-(my-T.ty)*k; T.s=ns; world.classList.remove("sm-anim"); clampT(); schedule(); busy(); },{passive:false});
    function openLightbox(i){ if(!curMedia.length||!ml)return; mlIndex=(i+curMedia.length)%curMedia.length; renderLightbox(); ml.classList.add("open"); }
    function renderLightbox(){ var m=curMedia[mlIndex]; if(!m||!mlFrame)return;
      var inner;
      if(m.type==="video") inner='<video src="'+esc(m.src)+'" poster="'+esc(m.poster||"")+'" muted controls autoplay playsinline></video>';
      else if(m.type==="pdf") inner='<iframe class="ml-pdf" src="'+esc(m.src)+'#view=FitH" title="'+esc(m.alt||"document")+'"></iframe>';
      else inner='<img src="'+esc(m.src)+'" alt="'+esc(m.alt||"")+'" decoding="async"/>';
      mlFrame.innerHTML = inner + '<span class="holo-scan'+(m.type==="pdf"?" pdf":"")+'"></span>';
      if(mlCap) mlCap.innerHTML='<span class="ix">'+(mlIndex+1)+' / '+curMedia.length+'</span>'+esc(m.caption||m.alt||"");
      var d=curMedia.length>1?"":"none"; if(mlPrev)mlPrev.style.display=d; if(mlNext)mlNext.style.display=d; }
    function closeLightbox(){ if(ml){ ml.classList.remove("open"); if(mlFrame) mlFrame.innerHTML=""; } }
    if(recordBody){
      if(!MOB) recordBody.addEventListener("click",function(e){ var b=e.target.closest&&e.target.closest(".media-thumb"); if(b){ e.stopPropagation(); openLightbox(+b.getAttribute("data-mi")); } });
      else { var mdDown=null;
        recordBody.addEventListener("pointerdown",function(e){ mdDown={x:e.clientX,y:e.clientY}; });
        recordBody.addEventListener("pointerup",function(e){ var b=e.target.closest&&e.target.closest(".media-thumb"); if(b&&mdDown&&Math.hypot(e.clientX-mdDown.x,e.clientY-mdDown.y)<12){ e.stopPropagation(); openLightbox(+b.getAttribute("data-mi")); } mdDown=null; });
      }
    }
    if(ml){ ml.addEventListener("click",function(e){ if(e.target===ml) closeLightbox(); });
      var mc=ml.querySelector(".ml-close"); if(mc) mc.addEventListener("click",closeLightbox);
      if(mlPrev) mlPrev.addEventListener("click",function(){ openLightbox(mlIndex-1); });
      if(mlNext) mlNext.addEventListener("click",function(){ openLightbox(mlIndex+1); }); }
    document.addEventListener("keydown",function(e){ if(ml&&ml.classList.contains("open")){ if(e.key==="Escape") closeLightbox(); else if(e.key==="ArrowLeft") openLightbox(mlIndex-1); else if(e.key==="ArrowRight") openLightbox(mlIndex+1); return; } if(e.key==="Escape"){ if(mode==="star") toFocus(); else if(mode==="focus") toMap(); } });
    buildConLabels();
    defaultT(); updateHud();
    if(MOB) showConLabels(true);
    setTimeout(function(){ if(mode==="map"){ defaultT(); if(MOB) showConLabels(true); } }, 220);
    setTimeout(function(){ if(mode==="map"){ defaultT(); if(MOB) showConLabels(true); } }, 700);
    var rzT=0; window.addEventListener("resize", function(){ clearTimeout(rzT); rzT=setTimeout(function(){ PHONE=isPhone(); if(mode==="map"){ defaultT(); if(MOB){ placeConLabels(); showConLabels(true); } } }, 150); });
  });})();
