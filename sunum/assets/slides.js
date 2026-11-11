/* Slayta özel üreteçler — deck.js'den ÖNCE yüklenir */
(() => {
  // waffle: data-waffle="12:c3,18:c2,14:c1,56:"
  document.querySelectorAll('[data-waffle]').forEach(w => {
    let k = 0;
    w.dataset.waffle.split(',').forEach(part => {
      const [n, cls] = part.split(':');
      for (let i = 0; i < +n; i++) { const d = document.createElement('i'); if (cls) d.className = cls; d.style.setProperty('--k', k++); w.appendChild(d); }
    });
  });
  // sıralı gecikme: data-stagger="0.12" → çocuklara --k ve --d
  document.querySelectorAll('[data-stagger]').forEach(p => {
    const st = parseFloat(p.dataset.stagger), base = parseFloat(p.dataset.base || 0);
    [...p.children].forEach((c, i) => { c.style.setProperty('--k', i); if (!c.style.getPropertyValue('--d')) c.style.setProperty('--d', (base + i * st).toFixed(2) + 's'); });
  });
})();
