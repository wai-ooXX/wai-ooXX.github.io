(function(){
  const GAP_VAR   = '--co-img-gap';     // 画像間ギャップ（px）
  const EXTRA_VAR = '--co-card-extra';  // 画像枠の追加幅（画像幅に足す px）
  const MAX_SCALE = 0.7;                // FullHD時の上限スケール（元画像の70%）

  const container = document.querySelector('.co-important-links');
  if(!container) return;

  const cards = Array.from(container.querySelectorAll('.co-important-item'));
  const boxes = cards.map(c => c.querySelector('.co-img-box'));
  const imgs  = cards.map(c => c.querySelector('img'));

  function ready(img){ return img && img.complete && img.naturalWidth > 0; }

  function onAllImagesReady(cb){
    let left = imgs.length;
    imgs.forEach(img=>{
      if(ready(img)){ if(--left===0) cb(); }
      else img.addEventListener('load', ()=>{ if(ready(img) && --left===0) cb(); }, {once:true});
    });
    if (left===0) cb();
  }

  function getVar(el, name, def=0){
    const v = getComputedStyle(el).getPropertyValue(name).trim();
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : def;
  }

  function layout(){
    // モバイルは1カラム：CSSに任せ、JS指定を解除
    if (window.matchMedia('(max-width: 640px)').matches){
      boxes.forEach(b=>{ if(!b) return; b.style.width=''; b.style.height=''; });
      return;
    }

    const scope = document.querySelector('.co-page') || document.documentElement;
    const gap   = getVar(scope, GAP_VAR, 0);
    const extra = getVar(scope, EXTRA_VAR, 0);

    const w = imgs.map(img=>img.naturalWidth  || 0);  // 例：本社 805, 横浜 456
    const h = imgs.map(img=>img.naturalHeight || 0);  // 例：本社 685, 横浜 684
    if (w.length < 2 || h.length < 2) return;

    // コンテナの利用可能幅（画像の間は gap が1ヶ所）
    const available = container.clientWidth - gap;

    // 2枚を横に並べて収めるスケールを計算（上限は MAX_SCALE）
    let s = (available - 2*extra) / (w[0] + w[1]);
    s = Math.min(MAX_SCALE, s);
    s = Math.max(0, s);

    // 高さは2枚で共通（大きい方の高さに合わせる）
    const H = Math.round(s * Math.max(h[0], h[1]));
    const widths = [ Math.round(s*w[0] + extra), Math.round(s*w[1] + extra) ];

    boxes.forEach((box,i)=>{
      if(!box) return;
      box.style.width  = widths[i] + 'px';
      box.style.height = H + 'px';
    });
  }

  onAllImagesReady(()=>{
    layout();
    window.addEventListener('resize', layout);
  });
})();