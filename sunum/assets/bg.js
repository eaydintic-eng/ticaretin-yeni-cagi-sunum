/* ============================================================
   Hareketli zemin (ağ) + küre bileşeni (afişteki küre motifi)
   ============================================================ */
(() => {
  const qs = new URLSearchParams(location.search);
  const STATIC = qs.has('preview') || qs.has('print');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1) tam ekran ağ zemini ---------- */
  const cv = document.getElementById('bg');
  if (cv) {
    const ctx = cv.getContext('2d');
    let W, H, DPR, nodes = [];
    const N = 70;
    function size() {
      DPR = Math.min(2, devicePixelRatio || 1);
      W = innerWidth; H = innerHeight;
      cv.width = W * DPR; cv.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    function seed() {
      nodes = Array.from({ length: N }, (_, i) => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18,
        r: Math.random() * 1.6 + .6,
        c: i % 17 === 0 ? 'coral' : (i % 7 === 0 ? 'sky' : 'ink')
      }));
    }
    size(); seed(); addEventListener('resize', () => { size(); seed(); });
    let last = 0;
    function frame(t) {
      if (t - last > 33) { // ~30 fps yeter
        last = t;
        const g = ctx.createRadialGradient(W * .68, H * .28, 0, W * .5, H * .5, Math.max(W, H) * .9);
        g.addColorStop(0, '#1C3449'); g.addColorStop(.45, '#15283A'); g.addColorStop(1, '#0B1621');
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
        // BSS mavisi ışıma
        const g2 = ctx.createRadialGradient(W * .05, H * 1.05, 0, W * .05, H * 1.05, W * .55);
        g2.addColorStop(0, 'rgba(0,51,160,.28)'); g2.addColorStop(1, 'rgba(0,51,160,0)');
        ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H);
        const D = Math.min(W, H) * .2;
        for (const n of nodes) {
          if (!reduce) { n.x += n.vx; n.y += n.vy; }
          if (n.x < -20) n.x = W + 20; if (n.x > W + 20) n.x = -20;
          if (n.y < -20) n.y = H + 20; if (n.y > H + 20) n.y = -20;
        }
        ctx.lineWidth = 1;
        for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
          const a = nodes[i], b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
          if (d < D) { ctx.strokeStyle = `rgba(201,210,219,${(1 - d / D) * .07})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        for (const n of nodes) {
          ctx.fillStyle = n.c === 'coral' ? 'rgba(239,91,91,.8)' : n.c === 'sky' ? 'rgba(90,167,242,.55)' : 'rgba(243,241,235,.22)';
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
        }
      }
      if (!STATIC) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ---------- 2) küre ---------- */
  const R2D = Math.PI / 180;
  const HUB = [41.01, 28.98]; // İstanbul
  const CITIES = [
    [51.51, -0.13], [40.71, -74.0], [25.2, 55.27], [31.23, 121.47], [50.11, 8.68],
    [1.35, 103.82], [-23.55, -46.63], [6.52, 3.38], [55.75, 37.62], [24.71, 46.67], [19.08, 72.88], [35.68, 139.69]
  ];
  function rotProj(lat, lon, lam, phi, R, cx, cy) {
    // ortografik izdüşüm: önce boylam dönüşü, sonra eğim
    const la = lat * R2D, lo = (lon + lam) * R2D;
    let x = Math.cos(la) * Math.sin(lo), y = Math.sin(la), z = Math.cos(la) * Math.cos(lo);
    const cp = Math.cos(phi * R2D), sp = Math.sin(phi * R2D);
    const y2 = y * cp - z * sp, z2 = y * sp + z * cp;
    return [cx + x * R, cy - y2 * R, z2];
  }
  function toVec(lat, lon) { const a = lat * R2D, o = lon * R2D; return [Math.cos(a) * Math.cos(o), Math.cos(a) * Math.sin(o), Math.sin(a)]; }
  function slerpLatLon(p, q, t) {
    const a = toVec(...p), b = toVec(...q);
    const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2])), w = Math.acos(dot);
    if (w < 1e-6) return p;
    const s1 = Math.sin((1 - t) * w) / Math.sin(w), s2 = Math.sin(t * w) / Math.sin(w);
    const v = [a[0] * s1 + b[0] * s2, a[1] * s1 + b[1] * s2, a[2] * s1 + b[2] * s2];
    return [Math.asin(v[2]) / R2D, Math.atan2(v[1], v[0]) / R2D];
  }

  class Globe {
    constructor(c) {
      this.c = c; this.ctx = c.getContext('2d');
      this.size = +(c.dataset.size || 900);
      this.arcs = c.dataset.arcs !== 'off';
      const dpr = Math.min(2, (devicePixelRatio || 1) * Math.max(1, (window.__scale || 1)));
      c.width = this.size * dpr; c.height = this.size * dpr;
      c.style.width = this.size + 'px'; c.style.height = this.size + 'px';
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.t0 = performance.now(); this.running = false;
    }
    start() { if (this.running) return; this.running = true; this.t0 = performance.now(); const loop = t => { if (!this.running) return; this.draw(t); requestAnimationFrame(loop); }; requestAnimationFrame(loop); }
    stop() { this.running = false; }
    draw(now) {
      const { ctx, size } = this, t = (now - this.t0) / 1000;
      const R = size * .46, cx = size / 2, cy = size / 2;
      const lam = -HUB[1] + 18 + (reduce || STATIC ? 0 : Math.sin(t * .06) * 34) - (STATIC ? 0 : 0);
      const phi = 24;
      ctx.clearRect(0, 0, size, size);
      // gövde
      const g = ctx.createRadialGradient(cx - R * .35, cy - R * .4, R * .1, cx, cy, R);
      g.addColorStop(0, 'rgba(38,66,91,.55)'); g.addColorStop(1, 'rgba(15,30,44,.15)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(201,210,219,.28)'; ctx.lineWidth = 1.2; ctx.stroke();
      // ızgara
      const line = (pts) => {
        for (let i = 1; i < pts.length; i++) {
          const a = pts[i - 1], b = pts[i];
          const front = (a[2] + b[2]) / 2;
          ctx.strokeStyle = front > 0 ? `rgba(201,210,219,${.10 + front * .16})` : 'rgba(201,210,219,.035)';
          ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
        }
      };
      ctx.lineWidth = 1;
      for (let lon = -180; lon < 180; lon += 20) { const p = []; for (let lat = -90; lat <= 90; lat += 5) p.push(rotProj(lat, lon, lam, phi, R, cx, cy)); line(p); }
      for (let lat = -60; lat <= 60; lat += 20) { const p = []; for (let lon = -180; lon <= 180; lon += 5) p.push(rotProj(lat, lon, lam, phi, R, cx, cy)); line(p); }
      if (!this.arcs) return;
      // yaylar: İstanbul'dan dünyaya
      const hub = rotProj(...HUB, lam, phi, R, cx, cy);
      CITIES.forEach((city, i) => {
        const cyc = 6.5, off = i * .9;
        let k = STATIC ? 1 : ((t + off) % cyc) / cyc * 1.6; // 0..1.6 (çiz, bekle)
        const prog = Math.min(1, k);
        const fadeOut = STATIC ? 1 : (k > 1.3 ? Math.max(0, 1 - (k - 1.3) / .3) : 1);
        const steps = 48, pts = [];
        for (let s = 0; s <= steps * prog; s++) {
          const tt = s / steps, ll = slerpLatLon(HUB, city, tt);
          const lift = 1 + Math.sin(Math.PI * tt) * .11;
          const p = rotProj(ll[0], ll[1], lam, phi, R * lift, cx, cy);
          pts.push(p);
        }
        if (pts.length < 2) return;
        for (let s = 1; s < pts.length; s++) {
          const a = pts[s - 1], b = pts[s];
          if (a[2] < -.15 && b[2] < -.15) continue;
          ctx.strokeStyle = `rgba(239,91,91,${.75 * fadeOut})`; ctx.lineWidth = 1.6;
          ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
        }
        const head = pts[pts.length - 1];
        if (head[2] > -.15) {
          ctx.fillStyle = `rgba(255,170,160,${fadeOut})`; ctx.beginPath(); ctx.arc(head[0], head[1], prog < 1 ? 3.2 : 4, 0, Math.PI * 2); ctx.fill();
          if (prog >= 1) { ctx.strokeStyle = `rgba(239,91,91,${.5 * fadeOut})`; ctx.beginPath(); ctx.arc(head[0], head[1], 9, 0, Math.PI * 2); ctx.stroke(); }
        }
      });
      // merkez: İstanbul
      if (hub[2] > 0) {
        const pulse = STATIC ? 0 : (t % 2) / 2;
        ctx.strokeStyle = `rgba(239,91,91,${.8 * (1 - pulse)})`; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(hub[0], hub[1], 8 + pulse * 26, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = '#EF5B5B'; ctx.beginPath(); ctx.arc(hub[0], hub[1], 6, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(239,91,91,.9)'; ctx.beginPath(); ctx.arc(hub[0], hub[1], 12, 0, Math.PI * 2); ctx.stroke();
      }
    }
  }

  const globes = [...document.querySelectorAll('canvas.globe')].map(c => new Globe(c));
  function sync(slide) {
    globes.forEach(g => {
      const on = g.c.closest('.slide') === slide;
      if (on) g.start(); else g.stop();
    });
  }
  if (STATIC) {
    // önizleme/yazdırma: tek kare
    const once = () => globes.forEach(g => g.draw(performance.now() + 4000));
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => setTimeout(once, 50));
  } else {
    document.addEventListener('slide:enter', e => sync(e.detail.slide));
  }
})();
