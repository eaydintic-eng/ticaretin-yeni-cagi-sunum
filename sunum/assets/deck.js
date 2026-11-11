/* ============================================================
   Sunum motoru — internetsiz, kütüphanesiz
   İleri:  →  ↓  PageDown  Boşluk  Enter  (tıklayıcı)
   Geri:   ←  ↑  PageUp  Backspace
   F / F5: tam ekran   ·   S: konuşmacı notları penceresi
   B / . : ekranı karart   ·   Home/End   ·   sayı + Enter: slayta git
   ============================================================ */
(() => {
  const qs = new URLSearchParams(location.search);
  const PREVIEW = qs.has('preview');      // konuşmacı penceresindeki küçük önizleme
  const PRINT = qs.has('print');          // PDF çıktısı
  const STATIC = PREVIEW || PRINT;
  const PSTEP = PREVIEW && /^\d+$/.test(qs.get('preview')) ? parseInt(qs.get('preview'), 10) : null; // önizlemede belirli adım

  const body = document.body;
  const stage = document.querySelector('.stage');
  const slides = [...document.querySelectorAll('.slide')];
  const total = slides.length;
  let cur = -1, stepIdx = 0, typed = '';
  let speaker = null, t0 = null, slideT0 = Date.now();

  if (STATIC) body.classList.add('static-mode');
  if (PREVIEW) body.classList.add('hide-ui');

  /* ---------- hazırlık ---------- */
  slides.forEach((s, i) => {
    s.dataset.index = i;
    // altbilgi sayfa no
    if (!s.classList.contains('no-foot')) {
      const f = document.createElement('div');
      f.className = 'foot';
      f.innerHTML = `<span class="pg">${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</span>`;
      s.appendChild(f);
    }
    // satır satır başlıklar: <h class="lines"><span>..</span></h>
    s.querySelectorAll('.lines').forEach(el => {
      [...el.children].forEach((line, k) => {
        if (line.tagName !== 'SPAN') return;
        const inner = document.createElement('span');
        inner.innerHTML = line.innerHTML; line.innerHTML = ''; line.appendChild(inner);
        inner.style.setProperty('--i', k);
      });
    });
    // svg çizim uzunlukları
    s.querySelectorAll('.draw path, .draw line, .draw polyline, .draw circle.d').forEach(p => {
      try { p.style.setProperty('--len', Math.ceil(p.getTotalLength ? p.getTotalLength() : 3000) + 2); } catch (e) {}
    });
    // adımlar: aynı data-order değerini taşıyanlar tek tıkta birlikte açılır
    const groups = new Map();
    [...s.querySelectorAll('.step')].forEach((el, k) => {
      const key = el.dataset.order !== undefined ? +el.dataset.order : 1000 + k;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(el);
    });
    s._steps = [...groups.keys()].sort((a, b) => a - b).map(key => groups.get(key));
  });

  if (STATIC && PSTEP === null) slides.forEach(s => s.classList.add('static'));

  /* ---------- ölçekleme ---------- */
  function fit() {
    if (PRINT) return;
    const sc = Math.min(innerWidth / 1920, innerHeight / 1080);
    stage.style.transform = `translate(-50%, -50%) scale(${sc})`;
    window.__scale = sc;
  }
  addEventListener('resize', fit); fit();

  /* ---------- sayaçlar ---------- */
  const fmt = (v, dec) => v.toLocaleString('tr-TR', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  function runCounters(root) {
    root.querySelectorAll('[data-count]').forEach(el => {
      if (el.closest('.step') && !el.closest('.step').classList.contains('on') && !STATIC) return;
      const to = parseFloat(el.dataset.count), from = parseFloat(el.dataset.from || 0);
      const dec = +(el.dataset.dec || 0), dur = +(el.dataset.dur || 1800), delay = +(el.dataset.delay || 0);
      const pre = el.dataset.pre || '', suf = el.dataset.suf || '';
      if (STATIC) { el.textContent = pre + fmt(to, dec) + suf; return; }
      el.textContent = pre + fmt(from, dec) + suf;
      clearTimeout(el._t); cancelAnimationFrame(el._r);
      el._t = setTimeout(() => {
        const st = performance.now();
        const tick = now => {
          const k = Math.min(1, (now - st) / dur), e = 1 - Math.pow(1 - k, 4);
          el.textContent = pre + fmt(from + (to - from) * e, dec) + suf;
          if (k < 1) el._r = requestAnimationFrame(tick);
        };
        el._r = requestAnimationFrame(tick);
      }, delay);
    });
  }

  /* ---------- gezinme ---------- */
  function setSteps(s, n) {
    s._steps.forEach((grp, k) => grp.forEach(el => el.classList.toggle('on', k < n)));
  }

  function go(n, opts = {}) {
    n = Math.max(0, Math.min(total - 1, n));
    const back = n < cur;
    const prev = slides[cur];
    const next = slides[n];
    if (prev && prev !== next) {
      prev.classList.remove('active', 'back');
      prev.classList.add('leaving');
      prev.classList.toggle('back', back);
      clearTimeout(prev._lt);
      prev._lt = setTimeout(() => { prev.classList.remove('leaving', 'back'); setSteps(prev, 0); hook(prev, 'leave'); }, 800);
    }
    cur = n;
    stepIdx = opts.toEnd ? next._steps.length : 0;
    if (PSTEP !== null) stepIdx = Math.min(PSTEP, next._steps.length);
    clearTimeout(next._lt); next.classList.remove('leaving');
    setSteps(next, stepIdx);
    next.classList.toggle('back', back);
    // animasyonu yeniden tetikle
    next.classList.remove('active'); void next.offsetWidth; next.classList.add('active');
    runCounters(next);
    hook(next, 'enter');
    slideT0 = Date.now();
    if (!PREVIEW && !PRINT) history.replaceState(null, '', '#' + (n + 1));
    document.getElementById('progress').style.width = ((n + 1) / total * 100) + '%';
    updateSpeaker();
  }

  function next() {
    if (!t0) t0 = Date.now();
    const s = slides[cur];
    if (stepIdx < s._steps.length) {
      stepIdx++; setSteps(s, stepIdx);
      s._steps[stepIdx - 1].forEach(runCounters); hook(s, 'step', stepIdx);
      updateSpeaker();
    } else if (cur < total - 1) go(cur + 1);
  }
  function prev() {
    const s = slides[cur];
    if (stepIdx > 0) { stepIdx--; setSteps(s, stepIdx); hook(s, 'step', stepIdx); updateSpeaker(); }
    else if (cur > 0) go(cur - 1, { toEnd: true });
  }

  /* slayta özel kancalar: window.SlideHooks['id'] = {enter(s), leave(s), step(s,n)} */
  function hook(s, name, arg) {
    const h = window.SlideHooks && window.SlideHooks[s.id];
    if (h && h[name]) try { h[name](s, arg, STATIC); } catch (e) { console.error(e); }
    document.dispatchEvent(new CustomEvent('slide:' + name, { detail: { slide: s, index: +s.dataset.index, arg } }));
  }

  /* ---------- klavye ---------- */
  function onKey(e) {
    if (PREVIEW) return;
    const k = e.key;
    if (/^[0-9]$/.test(k)) { typed += k; return; }
    if (k === 'Enter' && typed) { go(parseInt(typed, 10) - 1); typed = ''; e.preventDefault(); return; }
    typed = '';
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter', 'n', 'N'].includes(k)) { e.preventDefault(); next(); }
    else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace', 'p', 'P'].includes(k)) { e.preventDefault(); prev(); }
    else if (k === 'Home') { e.preventDefault(); go(0); }
    else if (k === 'End') { e.preventDefault(); go(total - 1); }
    else if (k === 'f' || k === 'F' || k === 'F5') { e.preventDefault(); toggleFS(); }
    else if (k === 's' || k === 'S') { e.preventDefault(); openSpeaker(); }
    else if (k === 'b' || k === 'B' || k === '.' || k === 'w' || k === 'W') { e.preventDefault(); body.classList.toggle('black'); }
    else if (k === 'Escape') { body.classList.remove('black'); }
  }
  addEventListener('keydown', onKey);

  function toggleFS() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen && document.documentElement.requestFullscreen().catch(() => {});
    else document.exitFullscreen && document.exitFullscreen();
  }

  /* fare ve dokunmatik */
  if (!PREVIEW && !PRINT) {
    addEventListener('click', e => {
      if (e.target.closest('a, button, input')) return;
      if (e.clientX < innerWidth * 0.18) prev(); else next();
    });
    addEventListener('contextmenu', e => { e.preventDefault(); prev(); });
    let tx = null;
    addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    addEventListener('touchend', e => {
      if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; tx = null;
      if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    });
    // imleç 2 sn hareketsiz kalınca gizlenir
    let ct; addEventListener('mousemove', () => { body.classList.remove('hide-cursor'); clearTimeout(ct); ct = setTimeout(() => body.classList.add('hide-cursor'), 2000); });
  }

  addEventListener('hashchange', () => {
    const n = parseInt(location.hash.slice(1), 10) - 1;
    if (!isNaN(n) && n !== cur) go(n, { toEnd: PREVIEW && PSTEP === null });
  });

  /* ---------- konuşmacı penceresi ---------- */
  const base = location.href.split('#')[0].split('?')[0];
  function openSpeaker() {
    if (speaker && !speaker.closed) { speaker.focus(); return; }
    speaker = window.open('', 'konusmaci_notlari', 'width=1400,height=860');
    if (!speaker) { toast('Açılır pencere engellendi. Tarayıcıda bu dosya için açılır pencerelere izin verin.'); return; }
    const d = speaker.document;
    d.open();
    d.write(`<!doctype html><html lang="tr"><head><meta charset="utf-8"><title>Konuşmacı notları · Ticaretin Yeni Çağı</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#0B1621;color:#F3F1EB;font:16px/1.4 "Segoe UI",system-ui,sans-serif;height:100vh;display:grid;grid-template-columns:1.25fr 1fr;grid-template-rows:auto 1fr;gap:18px;padding:18px;overflow:hidden}
header{grid-column:1/3;display:flex;align-items:center;gap:28px;padding:10px 16px;background:#15283A;border-radius:12px}
.clock{font:700 38px/1 "Segoe UI";font-variant-numeric:tabular-nums}
.lbl{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#8FA2B4;display:block;margin-bottom:4px}
.pos{margin-left:auto;font:700 30px/1 "Segoe UI";font-variant-numeric:tabular-nums}
button{background:#26425B;color:#fff;border:0;border-radius:8px;padding:10px 16px;font:600 15px "Segoe UI";cursor:pointer}
button:hover{background:#2f5373}
.left{display:flex;flex-direction:column;gap:14px;min-height:0}
.title{font:700 26px/1.2 "Segoe UI";color:#fff}
.stepinfo{color:#EF5B5B;font-weight:700;font-size:15px;letter-spacing:.06em}
.notes{flex:1;overflow:auto;background:#15283A;border-radius:12px;padding:22px 26px;font-size:26px;line-height:1.45}
.notes ul{padding-left:26px}.notes li{margin:0 0 12px}.notes b{color:#5AA7F2}
.right{display:flex;flex-direction:column;gap:12px;min-height:0}
.pv{position:relative;width:100%;aspect-ratio:16/9;border-radius:10px;overflow:hidden;background:#000;border:1px solid #26425B}
.pv iframe{position:absolute;left:0;top:0;width:1920px;height:1080px;border:0;transform-origin:0 0;pointer-events:none}
.nexttitle{font-size:17px;color:#C9D2DB}
.warn{color:#EF5B5B}
</style></head><body>
<header>
 <div><span class="lbl">Toplam süre</span><span class="clock" id="el">00:00</span></div>
 <div><span class="lbl">Bu slayt</span><span class="clock" id="sl" style="font-size:28px">00:00</span></div>
 <div><span class="lbl">Saat</span><span class="clock" id="now" style="font-size:28px">--:--</span></div>
 <div><span class="lbl">Hedef (bu slayt bitince)</span><span class="clock" id="tg" style="font-size:28px;color:#5AA7F2">–</span></div>
 <div><button id="rst">Süreyi sıfırla</button></div>
 <div><button id="pv">◀ Geri</button> <button id="nx">İleri ▶</button></div>
 <div class="pos" id="pos">1 / 1</div>
</header>
<section class="left">
 <div class="title" id="ttl"></div><div class="stepinfo" id="st"></div>
 <div class="notes" id="nt"></div>
</section>
<section class="right">
 <span class="lbl">Şu an ekranda</span><div class="pv" id="pvcur"><iframe id="fcur"></iframe></div>
 <span class="lbl">Sıradaki slayt</span><div class="pv" id="pvnext"><iframe id="fnext"></iframe></div>
 <div class="nexttitle" id="nttl"></div>
</section>
</body></html>`);
    d.close();
    const fit2 = () => ['pvcur', 'pvnext'].forEach(id => {
      const box = d.getElementById(id), fr = box.querySelector('iframe');
      fr.style.transform = `scale(${box.clientWidth / 1920})`;
    });
    speaker.addEventListener('resize', fit2); setTimeout(fit2, 50);
    speaker.addEventListener('keydown', onKey);
    d.getElementById('nx').onclick = () => next();
    d.getElementById('pv').onclick = () => prev();
    d.getElementById('rst').onclick = () => { t0 = Date.now(); };
    speaker._last = {};
    clearInterval(speaker._iv);
    speaker._iv = setInterval(tickSpeaker, 500);
    updateSpeaker();
  }
  const mmss = ms => { const s = Math.max(0, Math.floor(ms / 1000)); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
  function tickSpeaker() {
    if (!speaker || speaker.closed) return;
    const d = speaker.document;
    d.getElementById('el').textContent = t0 ? mmss(Date.now() - t0) : '00:00';
    d.getElementById('el').classList.toggle('warn', t0 && Date.now() - t0 > 18 * 60 * 1000);
    d.getElementById('sl').textContent = mmss(Date.now() - slideT0);
    d.getElementById('now').textContent = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
  }
  function slideTitle(s) { return s.dataset.title || (s.querySelector('h1,h2,.h1,.h2,.h-xl,.h-mega') || {}).textContent || ''; }
  function updateSpeaker() {
    if (!speaker || speaker.closed) return;
    const d = speaker.document, s = slides[cur], nx = slides[cur + 1];
    d.getElementById('pos').textContent = (cur + 1) + ' / ' + total;
    d.getElementById('tg').textContent = s.dataset.target || '–';
    d.getElementById('ttl').textContent = (cur + 1) + '. ' + slideTitle(s).replace(/\s+/g, ' ').trim();
    d.getElementById('st').textContent = s._steps.length ? `Adım ${stepIdx} / ${s._steps.length}  ·  ${stepIdx < s._steps.length ? 'tıklayınca sıradaki öğe açılır' : 'tıklayınca sonraki slayt'}` : '';
    const n = s.querySelector('aside.notes');
    d.getElementById('nt').innerHTML = n ? n.innerHTML : '<i>Not yok</i>';
    d.getElementById('nttl').textContent = nx ? 'Sıradaki: ' + slideTitle(nx).replace(/\s+/g, ' ').trim() : 'Son slayt';
    const fc = d.getElementById('fcur'), fn = d.getElementById('fnext');
    const cu = base + '?preview=' + stepIdx + '#' + (cur + 1), nu = base + '?preview=0#' + Math.min(total, cur + 2);
    if (speaker._last.c !== cu) { fc.src = cu; speaker._last.c = cu; }
    if (speaker._last.n !== nu) { fn.src = nu; speaker._last.n = nu; }
    tickSpeaker();
  }
  addEventListener('beforeunload', () => { if (speaker && !speaker.closed) speaker.close(); });

  /* ---------- küçük bildirim ---------- */
  function toast(msg) {
    const h = document.getElementById('hint'); if (!h) return;
    h.textContent = msg; h.classList.remove('gone');
    clearTimeout(h._t); h._t = setTimeout(() => h.classList.add('gone'), 5000);
  }

  /* ---------- görselleri önceden yükle ---------- */
  function preload() {
    const urls = new Set();
    document.querySelectorAll('[data-bg]').forEach(el => { el.style.backgroundImage = `url("${el.dataset.bg}")`; urls.add(el.dataset.bg); });
    urls.forEach(u => { const i = new Image(); i.src = u; i.decode && i.decode().catch(() => {}); });
  }
  preload();

  /* ---------- başlat ---------- */
  const start = () => {
    const h = parseInt(location.hash.slice(1), 10);
    go(isNaN(h) ? 0 : h - 1, { toEnd: PREVIEW && PSTEP === null });
    if (!STATIC) {
      const hint = document.getElementById('hint');
      if (hint) setTimeout(() => hint.classList.add('gone'), 4500);
    } else {
      const hint = document.getElementById('hint'); if (hint) hint.remove();
      if (PRINT) slides.forEach(s => { setSteps(s, s._steps.length); runCounters(s); hook(s, 'enter'); });
    }
  };
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(start);

  window.deck = { go, next, prev, get index() { return cur; }, total, slides };
})();
