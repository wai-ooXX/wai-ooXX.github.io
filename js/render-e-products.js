(function () {
  const gridEl = document.getElementById("product-grid");
  const filtersEl = document.getElementById("filters");
  const searchEl = document.getElementById("search");

  // 動的にカテゴリを抽出してフィルタ生成
  const categories = Array.from(new Set(E_PRODUCTS.map(p => p.category))).sort();
  let activeCategory = "すべて";

  function makeFilterChips() {
    const all = ["すべて", ...categories];
    filtersEl.innerHTML = all
      .map(cat => `<button class="chip${cat === activeCategory ? " is-active" : ""}" data-cat="${cat}">${cat}</button>`)
      .join("");
  }

  function normalize(str) {
    return (str || "").toString().toLowerCase();
  }

  function matchesQuery(p, q) {
    if (!q) return true;
    const hay = [
      p.name, p.code, p.category, p.description, p.note,
      ...(p.tags || [])
    ].map(normalize).join(" ");
    return hay.includes(normalize(q));
  }

  function matchesCategory(p) {
    return activeCategory === "すべて" || p.category === activeCategory;
  }

  function productCard(p) {
    const pdfIcon = "https://www.pony-e.jp/PDFfile.jpg"; // 既存サイトのPDFアイコンを流用
    const tags = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join("");
    return `
      <article class="e-card">
        <a class="e-card__media" href="${p.image}" target="_blank" rel="noopener">
          <img loading="lazy" src="${p.image}" alt="${p.name} の画像">
        </a>
        <div class="e-card__body">
          <div class="e-card__title">${p.name}</div>
          <div class="e-card__meta">
            <span>図番：<strong>${p.code || "―"}</strong></span>
            <span>カテゴリ：${p.category}</span>
          </div>
          <div class="e-card__desc">${p.description || ""}</div>
          ${tags ? `<div class="e-card__tags">${tags}</div>` : ""}
        </div>
        <div class="e-card__actions">
          <a class="e-btn" href="${p.image}" target="_blank" rel="noopener">画像を見る</a>
          <a class="e-btn e-btn--primary" href="${p.pdf}" target="_blank" rel="noopener">
            <img src="${pdfIcon}" alt="" /> PDFを見る
          </a>
        </div>
      </article>
    `;
  }

  function render() {
    const q = searchEl.value.trim();
    const list = E_PRODUCTS.filter(p => matchesCategory(p) && matchesQuery(p, q));
    gridEl.innerHTML = list.map(productCard).join("") || `<p>該当する製品がありません。</p>`;
  }

  // 初期化
  makeFilterChips();
  render();

  // イベント
  filtersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    makeFilterChips();
    render();
  });

  searchEl.addEventListener("input", render);
})();