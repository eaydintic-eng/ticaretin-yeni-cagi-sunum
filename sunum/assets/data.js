/* ============================================================
   Grafik verileri — ham kaynak dosyaları: arastirma/veri/
   Ayrıntılar ve güven düzeyleri: arastirma/06-grafik-verileri.md
   ============================================================ */
(() => {
  const tr = (v, d = 0) => v.toLocaleString('tr-TR', { minimumFractionDigits: d, maximumFractionDigits: d });
  const sup = n => String(n).split('').map(c => '⁰¹²³⁴⁵⁶⁷⁸⁹'['0123456789'.indexOf(c)]).join('');
  const dy = s => { const [y, m, d] = s.split('-').map(Number); return y + (m - 1) / 12 + (d - 1) / 365; };

  /* --- Our World in Data: ABD hanelerinde teknoloji benimseme (%) — owid-teknoloji-benimseme.csv --- */
  const pick = (obj, step = 1, until = 9999) => Object.entries(obj).map(([y, v]) => [+y, v]).filter(([y]) => y <= until);
  const OW = {
    tel: { 1903: 10, 1906: 18, 1910: 24.5, 1915: 30, 1920: 34, 1925: 38, 1929: 41, 1932: 35, 1935: 32, 1940: 37, 1943: 44, 1946: 50, 1950: 62, 1955: 71.67, 1960: 78.5, 1965: 85, 1970: 87, 1975: 90, 1980: 92.5, 1990: 93.5, 2000: 94 },
    elk: { 1908: 10, 1910: 12.33, 1913: 18, 1916: 22, 1919: 30, 1921: 37, 1923: 43, 1925: 52, 1927: 60, 1929: 68, 1932: 67, 1935: 68.5, 1938: 75, 1941: 79.5, 1945: 85, 1948: 89, 1951: 95, 1955: 98.33, 1960: 99 },
    oto: { 1915: 10, 1917: 17, 1919: 23, 1921: 31, 1923: 39, 1925: 49, 1927: 56, 1930: 59, 1933: 50, 1936: 54, 1940: 55, 1944: 47, 1948: 53, 1952: 60, 1956: 72, 1960: 75, 1965: 79, 1970: 80, 1975: 83, 1980: 86, 1990: 91, 2000: 92 },
    rad: { 1925: 10, 1926: 17, 1927: 19, 1928: 28, 1929: 36, 1930: 45, 1931: 52, 1932: 60, 1934: 65, 1936: 72, 1938: 78, 1940: 81, 1943: 84, 1946: 89, 1950: 92, 1955: 96, 1960: 95 },
    ctv: { 1966: 10, 1967: 15, 1968: 21, 1969: 25, 1970: 31, 1971: 39, 1972: 43, 1973: 48, 1974: 57, 1975: 64, 1976: 69, 1977: 74, 1980: 79, 1983: 88, 1986: 90.5, 1990: 96, 1995: 94, 2000: 94 },
    pc: { 1985: 10, 1987: 13, 1989: 15, 1991: 20, 1993: 22.9, 1995: 30, 1997: 36.6, 1999: 45, 2000: 51, 2001: 56.3, 2003: 61.8, 2005: 65, 2007: 69.7, 2009: 74.1, 2010: 76.7, 2013: 77, 2016: 78 },
    net: { 1993: 10, 1994: 11, 1995: 13, 1996: 16, 1997: 19, 1998: 25, 1999: 34, 2000: 42, 2001: 49, 2002: 52, 2003: 54, 2005: 61, 2007: 65, 2009: 70, 2011: 76, 2013: 82, 2016: 88 },
    cep: { 1994: 10, 1995: 12, 1996: 16, 1997: 21, 1998: 36.3, 1999: 34, 2000: 42, 2001: 49, 2002: 56, 2003: 62.8, 2005: 71.3, 2007: 73, 2009: 84, 2011: 89, 2013: 90, 2015: 92, 2017: 94, 2019: 96 }
  };

  const D = {};

  // sadeleştirilmiş görünüm: 8 seri yerine 5 seri; her birinin %50 eşiğini geçtiği nokta işaretli
  // (otomobil, radyo ve bilgisayar serileri ham dosyada duruyor: OW.oto, OW.rad, OW.pc)
  const cross = (obj, lvl = 50) => { const e = Object.entries(obj).map(([y, v]) => [+y, v]); for (let i = 1; i < e.length; i++) if (e[i][1] >= lvl) { const [x0, y0] = e[i - 1], [x1, y1] = e[i]; return x0 + (lvl - y0) / (y1 - y0) * (x1 - x0); } return null; };
  const OWS = [
    { k: 'tel', name: 'Sabit telefon', color: '#8FA2B4', w: 4, d: .3, dur: 2.4, label: { text: 'Sabit telefon', at: 1935, dx: 0, dy: 42, anchor: 'middle' } },
    { k: 'elk', name: 'Elektrik', color: '#E7B65C', w: 4, d: .6, dur: 2.0, label: { text: 'Elektrik', at: 1921, dx: -14, dy: -4, anchor: 'end' } },
    { k: 'ctv', name: 'Renkli TV', color: '#4FC1B0', w: 5, d: 1.0, dur: 1.4, label: { text: 'Renkli TV', at: 1969, dx: -14, dy: 6, anchor: 'end' } },
    { k: 'net', name: 'İnternet', color: '#5AA7F2', w: 5, d: 1.4, dur: 1.4, label: { text: 'İnternet', at: 2016, dx: 14, dy: 8 } },
    { k: 'cep', name: 'Cep telefonu', color: '#EF5B5B', w: 5, d: 1.7, dur: 1.4, label: { text: 'Cep telefonu', at: 2019, dx: -6, dy: -22, anchor: 'end' } }
  ];
  D.owid = {
    w: 1060, h: 600, pad: { l: 70, r: 40, t: 30, b: 56 },
    x: { min: 1900, max: 2022, ticks: [1900, 1920, 1940, 1960, 1980, 2000, 2020] },
    y: { min: 0, max: 100, ticks: [0, 25, 50, 75, 100], fmt: v => '%' + v, zero: 0 },
    hlines: [{ y: 50, text: 'Hanelerin yarısı', color: '#C9D2DB', d: .2 }],
    series: OWS.map(s => Object.assign({ pts: pick(OW[s.k]) }, s)),
    anns: OWS.map(s => ({ x: cross(OW[s.k]), y: 50, text: '', dot: true, r: 9, color: s.color, d: s.d + s.dur * .7 }))
  };

  /* --- St. Louis Fed GenAI Adoption Tracker: çıkıştan bu yana geçen yıl → kullanan yetişkin (%) — genai-tracker-pc-internet.csv --- */
  D.genai = {
    w: 1060, h: 600, pad: { l: 70, r: 40, t: 24, b: 60 },
    x: { min: 0, max: 12, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], fmt: v => v === 0 ? 'Çıkış' : String(v) },
    y: { min: 0, max: 80, ticks: [0, 20, 40, 60, 80], fmt: v => '%' + v, zero: 0 },
    // 4. yıl vurgusu: üç teknolojiyi aynı yaşta karşılaştır
    bands: [{ x0: 3.6, x1: 4.4, fill: 'rgba(239,91,91,.10)', text: '', d: 1.6 }],
    series: [
      { name: 'İnternet', color: '#5AA7F2', w: 5, d: .3, dur: 1.8, dots: false,
        pts: [[0, 9.24], [1, 16.42], [2, 21.62], [3, 30.09], [4, 35.85], [5, 43.08], [6, 49.08], [7, 58.79], [8, 61.7], [9, 64.76], [10, 67.97], [11, 68.93], [12, 75]],
        label: { text: 'İnternet (1995)', at: 9, dx: 10, dy: 40, anchor: 'start' } },
      { name: 'PC', color: '#8FA2B4', w: 4, d: .5, dur: 1.8, dots: true, r: 6, dash: '10 8',
        pts: [[3, 19.72], [8, 31.1], [12, 39.88]],
        label: { text: 'Kişisel bilgisayar (1981)', at: 8, dx: 0, dy: 46, anchor: 'middle' } },
      { name: 'Üretken yapay zekâ', color: '#EF5B5B', w: 7, d: .9, dur: 1.2, dots: true, r: 9,
        pts: [[2, 45.48], [3, 52.6], [4, 60.05]],
      }
    ],
    anns: [
      { x: 0.25, y: 64, text: 'Üretken yapay zekâ\n(ChatGPT, 2022)', color: '#EF5B5B', d: 1.8, cls: 'lbl2', lh: 29 },
      { x: 4, y: 60.05, text: '%60', dx: 28, dy: 10, color: '#EF5B5B', bold: true, d: 2.2, cls: 'big' },
      { x: 4, y: 35.85, text: '%36', dx: 28, dy: 10, color: '#5AA7F2', bold: true, dot: true, r: 9, d: 2.4, cls: 'big' },
      { x: 3, y: 19.72, text: '%20', dx: 0, dy: 44, anchor: 'middle', color: '#C9D2DB', bold: true, d: 2.6, cls: 'big' },
      { x: 4, y: 78, text: '4. yıl', dx: 0, dy: 0, anchor: 'middle', color: '#EF5B5B', bold: true, d: 1.6 }
    ]
  };

  /* --- Epoch AI: öncü modellerin eğitim hesaplaması (FLOP) — epoch-secilmis-modeller.csv --- */
  const EP = [
    ['AlexNet', '2012-09-30', 4.7e17], ['Transformer', '2017-06-12', 7.42e18], ['GPT-2', '2019-02-14', 1.92e21], ['GPT-3', '2020-05-28', 3.14e23],
    ['PaLM', '2022-04-04', 2.53e24], ['GPT-4', '2023-03-15', 2.1e25], ['Gemini 1.0 Ultra', '2023-12-06', 5e25], ['Grok 3', '2025-02-17', 3.5e26],
    ['Grok 4', '2025-07-09', 5e26], ['GPT-6 Astra', '2026-09-03', 9.4e26]
  ];
  const epPts = EP.map(e => [dy(e[1]), e[2]]);
  D.epoch = {
    w: 1100, h: 600, pad: { l: 90, r: 60, t: 30, b: 56 },
    x: { min: 2012, max: 2027, ticks: [2012, 2014, 2016, 2018, 2020, 2022, 2024, 2026] },
    y: { min: 1e17, max: 1e27, log: true, ticks: [1e17, 1e19, 1e21, 1e23, 1e25, 1e27], fmt: v => '10' + sup(Math.round(Math.log10(v))) },
    series: [
      { name: 'Öncü modeller', color: '#EF5B5B', w: 3, d: .3, dur: 2.6, dots: true, r: 8, pts: epPts,
        pl: [
          [dy('2012-09-30'), 4.7e17, 'AlexNet (2012)', 16, 32, 'start'],
          [dy('2019-02-14'), 1.92e21, 'GPT-2 (2019)', -16, -10, 'end'],
          [dy('2020-05-28'), 3.14e23, 'GPT-3 (2020)', -14, -10, 'end'],
          [dy('2023-03-15'), 2.1e25, 'GPT-4 (2023)', -14, -12, 'end'],
          [dy('2026-09-03'), 9.4e26, 'GPT-6 Astra (2026)', -14, -18, 'end']
        ] }
    ],
    anns: [
      { x: 2020.6, y: 3e18, text: 'Öncü modellerde yılda yaklaşık 5 kat\n(2020-2026, Epoch AI)', color: '#F3F1EB', bold: true, d: 2.6 }
    ]
  };

  /* --- METR: %50 başarıyla bitirilebilen görev süresi (dakika) — metr-time-horizon-1-1.csv, yalnız öncü (SOTA) modeller --- */
  const MT = [
    ['GPT-2', '2019-02-14', 0.054], ['GPT-3', '2020-05-28', 0.144], ['GPT-3.5', '2022-03-15', 0.599], ['GPT-4', '2023-03-14', 4.0],
    ['GPT-4 Turbo', '2023-11-06', 4.0], ['GPT-4o', '2024-05-13', 7.0], ['Claude 3.5 Sonnet', '2024-06-20', 11.4], ['o1-preview', '2024-09-12', 20.3],
    ['Claude 3.5 Sonnet (yeni)', '2024-10-22', 20.5], ['o1', '2024-12-05', 38.8], ['Claude 3.7 Sonnet', '2025-02-24', 60.4], ['o3', '2025-04-16', 119.7],
    ['GPT-5', '2025-08-07', 203.0], ['Gemini 3 Pro', '2025-11-18', 224.3], ['Claude Opus 4.5', '2025-11-24', 293.0], ['GPT-5.2', '2025-12-11', 352.2],
    ['Claude Opus 4.6', '2026-02-05', 718.8], ['Claude Mythos Preview', '2026-04-07', 1044.8]
  ];
  const mtPts = MT.map(m => [dy(m[1]), m[2]]);
  const mlab = { 0.0166667: '1 sn.', 0.1666667: '10 sn.', 1: '1 dk.', 10: '10 dk.', 60: '1 sa.', 480: '8 sa.' };
  D.metr = {
    w: 1120, h: 600, pad: { l: 100, r: 60, t: 30, b: 56 },
    x: { min: 2019, max: 2026.6, ticks: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] },
    y: { min: 0.0166667, max: 2000, log: true, ticks: [0.0166667, 0.1666667, 1, 10, 60, 480], fmt: v => mlab[v] || tr(v) },
    series: [
      { name: 'METR', color: '#EF5B5B', w: 3, d: .3, dur: 2.8, dots: true, r: 7, pts: mtPts,
        pl: [
          [dy('2019-02-14'), 0.054, 'GPT-2 · ~3 saniye', 0, -38, 'start'],
          [dy('2023-03-14'), 4.0, 'GPT-4 · 4 dakika', -16, -18, 'end'],
          [dy('2025-02-24'), 60.4, 'Claude 3.7 Sonnet · ~1 saat', 14, 30, 'start'],
          [dy('2025-08-07'), 203.0, 'GPT-5 · ~3,4 saat', -16, -12, 'end'],
          [dy('2026-02-05'), 718.8, 'Claude Opus 4.6 · ~12 saat', -16, -14, 'end']
        ] }
    ]
  };

  window.CHART_DATA = D;
})();
