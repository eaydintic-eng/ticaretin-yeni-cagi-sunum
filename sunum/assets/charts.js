/* ============================================================
   Grafik motoru — internetsiz, kütüphanesiz SVG
   <div class="chart" data-chart="anahtar"></div> → CHART_DATA[anahtar]
   deck.js'den ÖNCE yüklenir; slayta girince çizgiler çizilir.
   ============================================================ */
(() => {
  const NS = 'http://www.w3.org/2000/svg';
  const C = { sky: '#5AA7F2', coral: '#EF5B5B', gold: '#E7B65C', teal: '#4FC1B0', violet: '#A58BE8', ink: '#F3F1EB', muted: '#8FA2B4', red: '#BD1823', blue: '#1F5FD6', grey: '#8FA2B4' };
  const tr = (v, d = 0) => v.toLocaleString('tr-TR', { minimumFractionDigits: d, maximumFractionDigits: d });

  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) if (attrs[k] !== undefined && attrs[k] !== null) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  function scale(ax, lo, hi) {
    const L = ax.log;
    const a = L ? Math.log10(ax.min) : ax.min, b = L ? Math.log10(ax.max) : ax.max;
    return v => lo + ((L ? Math.log10(v) : v) - a) / (b - a) * (hi - lo);
  }

  /* ---------- çizgi grafik ---------- */
  function line(host, cfg) {
    const W = cfg.w || 1100, H = cfg.h || 560;
    const P = Object.assign({ l: 90, r: 40, t: 24, b: 56 }, cfg.pad || {});
    const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, width: W, height: H }, host);
    const sx = scale(cfg.x, P.l, W - P.r), sy = scale(cfg.y, H - P.b, P.t);
    const g = el('g', { class: 'grid' }, svg);
    (cfg.y.ticks || []).forEach(t => {
      el('line', { x1: P.l, x2: W - P.r, y1: sy(t), y2: sy(t), class: t === cfg.y.zero ? 'zero' : '' }, g);
      const tx = el('text', { x: P.l - 16, y: sy(t) + 6, 'text-anchor': 'end', class: 'tick' }, svg);
      tx.textContent = cfg.y.fmt ? cfg.y.fmt(t) : tr(t);
    });
    (cfg.x.ticks || []).forEach(t => {
      if (cfg.x.grid) el('line', { x1: sx(t), x2: sx(t), y1: P.t, y2: H - P.b }, g);
      const tx = el('text', { x: sx(t), y: H - P.b + 34, 'text-anchor': 'middle', class: 'tick' }, svg);
      tx.textContent = cfg.x.fmt ? cfg.x.fmt(t) : String(t);
    });
    el('line', { x1: P.l, x2: W - P.r, y1: H - P.b, y2: H - P.b, class: 'zero' }, g);
    if (cfg.y.title) { const t = el('text', { x: P.l - 16, y: P.t - 2 - (cfg.y.titleDy || 0), 'text-anchor': 'start', class: 'axis-t', transform: '' }, svg); t.textContent = cfg.y.title; t.setAttribute('x', 0); }
    if (cfg.x.title) { const t = el('text', { x: W - P.r, y: H - 4, 'text-anchor': 'end', class: 'axis-t' }, svg); t.textContent = cfg.x.title; }

    // bant / bölge
    (cfg.bands || []).forEach(b => {
      const r = el('rect', { x: sx(b.x0), y: P.t, width: sx(b.x1) - sx(b.x0), height: H - P.b - P.t, fill: b.fill || 'rgba(239,91,91,.07)', class: 'ann' }, svg);
      r.style.setProperty('--d', (b.d || 0.2) + 's');
      if (b.text) { const t = el('text', { x: sx(b.x0) + 12, y: P.t + 26, class: 'ann' }, svg); t.textContent = b.text; t.style.setProperty('--d', (b.d || 0.2) + 's'); if (b.color) t.setAttribute('fill', b.color); }
    });

    cfg.series.forEach((s, k) => {
      const col = C[s.color] || s.color || C.sky;
      const pts = s.pts.filter(p => p[1] !== null && p[1] !== undefined && (!cfg.y.log || p[1] > 0));
      if (!pts.length) return;
      const d = pts.map((p, i) => (i ? 'L' : 'M') + sx(p[0]).toFixed(1) + ' ' + sy(p[1]).toFixed(1)).join(' ');
      const delay = s.d !== undefined ? s.d : 0.3 + k * 0.25;
      if (s.area) {
        const a = el('path', { d: d + ` L ${sx(pts[pts.length - 1][0])} ${H - P.b} L ${sx(pts[0][0])} ${H - P.b} Z`, fill: col, 'fill-opacity': .1, class: 'area' }, svg);
        a.style.setProperty('--d', delay + 's');
      }
      const p = el('path', { d, class: 'ln', stroke: col, 'stroke-width': s.w || 4, 'stroke-dasharray': s.dash || null }, svg);
      if (s.dash) p.classList.add('dashed');
      p.style.setProperty('--d', delay + 's');
      p.style.setProperty('--dur', (s.dur || 2.2) + 's');
      p._len = true;
      if (s.dots) pts.forEach((q, i) => {
        const c = el('circle', { cx: sx(q[0]), cy: sy(q[1]), r: s.r || 7, fill: col, class: 'pt', stroke: '#0F1E2C', 'stroke-width': 3 }, svg);
        c.style.setProperty('--d', (delay + (s.dur || 2.2) * (i / Math.max(1, pts.length - 1))).toFixed(2) + 's');
      });
      (s.pl || []).forEach(q => { // nokta etiketleri: [x, y, metin, dx, dy, anchor]
        const t = el('text', { x: sx(q[0]) + (q[3] || 0), y: sy(q[1]) + (q[4] || -16), 'text-anchor': q[5] || 'middle', class: 'lbl sm', fill: q[6] || C.ink }, svg);
        t.textContent = q[2];
        t.style.setProperty('--d', (delay + (s.dur || 2.2) * 0.9).toFixed(2) + 's');
      });
      if (s.label) {
        const last = s.label.at !== undefined ? pts.reduce((b, q) => Math.abs(q[0] - s.label.at) < Math.abs(b[0] - s.label.at) ? q : b, pts[0]) : pts[pts.length - 1];
        const t = el('text', { x: sx(last[0]) + (s.label.dx !== undefined ? s.label.dx : 14), y: sy(last[1]) + (s.label.dy || 7), class: 'lbl', fill: col, 'text-anchor': s.label.anchor || 'start' }, svg);
        t.textContent = s.label.text || s.name;
        t.style.setProperty('--d', (delay + (s.dur || 2.2) * .85).toFixed(2) + 's');
      }
    });

    (cfg.anns || []).forEach(a => { // açıklama: {x, y, text, dx, dy, anchor, line:true, color, d}
      const X = sx(a.x), Y = sy(a.y);
      if (a.line) { const l = el('line', { x1: X, y1: Y, x2: X + (a.dx || 0), y2: Y + (a.dy || 0) + (a.dy < 0 ? 10 : -22), class: 'ann-line' }, svg); l.style.setProperty('--d', (a.d || 1.6) + 's'); }
      const lines = String(a.text).split('\n');
      lines.forEach((ln, i) => {
        const t = el('text', { x: X + (a.dx || 0), y: Y + (a.dy || 0) + i * 24, 'text-anchor': a.anchor || 'start', class: 'ann', fill: a.color || null, 'font-weight': a.bold && i === 0 ? 700 : null }, svg);
        t.textContent = ln; t.style.setProperty('--d', (a.d || 1.6) + 's');
      });
      if (a.dot) { const c = el('circle', { cx: X, cy: Y, r: 8, fill: a.color || C.coral, class: 'pt', stroke: '#0F1E2C', 'stroke-width': 3 }, svg); c.style.setProperty('--d', (a.d || 1.6) + 's'); }
    });
    return svg;
  }

  /* ---------- yol üzerinde nokta bul (abartı döngüsü) ---------- */
  function pointAtX(path, x) {
    const L = path.getTotalLength();
    let lo = 0, hi = L;
    for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (path.getPointAtLength(m).x < x) lo = m; else hi = m; }
    return path.getPointAtLength((lo + hi) / 2);
  }
  function placeOnPath() {
    document.querySelectorAll('svg[data-onpath]').forEach(svg => {
      const path = svg.querySelector(svg.dataset.onpath);
      svg.querySelectorAll('[data-px]').forEach(g => {
        const p = pointAtX(path, +g.dataset.px);
        g.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`);
      });
    });
  }

  /* ---------- çiz ---------- */
  function renderAll() {
    const D = window.CHART_DATA || {};
    document.querySelectorAll('.chart[data-chart]').forEach(h => {
      const cfg = D[h.dataset.chart];
      if (!cfg) { h.textContent = 'Grafik verisi yok: ' + h.dataset.chart; return; }
      line(h, cfg);
    });
    document.querySelectorAll('.chart .ln, svg .drawme').forEach(p => {
      try { const L = Math.ceil(p.getTotalLength()) + 2; p.style.setProperty('--len', L); p.style.strokeDasharray = p.classList.contains('dashed') ? p.getAttribute('stroke-dasharray') : L; } catch (e) {}
    });
    placeOnPath();
  }

  /* kesikli çizgiler için: kesik deseni korunurken çizim animasyonu yerine görünme kullanılır */
  const style = document.createElement('style');
  style.textContent = '.chart .ln.dashed{stroke-dashoffset:0!important;opacity:0;transition:opacity 1s ease;transition-delay:var(--d,.3s)}.slide.active .chart.go .ln.dashed,.slide.static .chart .ln.dashed{opacity:1}';
  document.head.appendChild(style);

  renderAll();

  /* ---------- slayt olayları: grafikleri canlandır ---------- */
  function arm(slide) {
    slide.querySelectorAll('.chart').forEach(c => {
      const st = c.closest('.step');
      c.classList.toggle('go', !st || st.classList.contains('on'));
    });
  }
  document.addEventListener('slide:enter', e => {
    const s = e.detail.slide;
    s.querySelectorAll('.chart').forEach(c => c.classList.remove('go'));
    void s.offsetWidth;
    requestAnimationFrame(() => arm(s));
  });
  document.addEventListener('slide:step', e => arm(e.detail.slide));
  document.addEventListener('slide:leave', e => e.detail.slide.querySelectorAll('.chart').forEach(c => c.classList.remove('go')));

  window.Charts = { line, C, tr };
})();

/* ============================================================
   Ajan döngüsü: adım adım vurgulama
   ============================================================ */
window.SlideHooks = window.SlideHooks || {};
(() => {
  const N = 6;
  function state(s) {
    const n = s.querySelectorAll('.loop-step.on').length; // 0..N
    s.querySelectorAll('.lnode').forEach((nd, i) => { nd.classList.toggle('on', i === n - 1); nd.classList.toggle('past', i < n - 1); });
    s.querySelectorAll('.exl').forEach((x, i) => { x.classList.toggle('on', i === n - 1); x.classList.toggle('past', i < n - 1); });
    const arc = s.querySelector('.loop-arc');
    if (arc) {
      const L = arc.getTotalLength();
      arc.style.strokeDasharray = L;
      arc.style.strokeDashoffset = L * (1 - Math.max(0, n - 1) / N);
    }
    const r = s.querySelector('.runner');
    if (r && arc) {
      const L = arc.getTotalLength(), to = L * Math.max(0, n - 1) / N;
      const from = r._at !== undefined ? r._at : 0;
      r._at = to;
      const t0 = performance.now(), dur = 1100;
      r.style.opacity = n ? 1 : 0;
      cancelAnimationFrame(r._raf);
      const tick = now => {
        const k = Math.min(1, (now - t0) / dur), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        const p = arc.getPointAtLength(from + (to - from) * e);
        r.style.transform = `translate(${p.x}px, ${p.y}px)`;
        if (k < 1) r._raf = requestAnimationFrame(tick);
      };
      r._raf = requestAnimationFrame(tick);
    }
  }
  window.SlideHooks['ajan-dongu'] = { enter: state, step: state, leave: s => { const r = s.querySelector('.runner'); if (r) { r._at = 0; r.style.opacity = 0; } } };
})();
