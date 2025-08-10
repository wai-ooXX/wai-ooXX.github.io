(function () {
  const gridEl = document.getElementById("card-grid");
  const filtersEl = document.getElementById("filters");
  const searchEl = document.getElementById("search");

  // カテゴリ一覧（重複排除）
  const categories = Array.from(new Set(DEV_EXPERIENCE.map(p => p.category))).sort();
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
    const hay = [p.name, p.category, p.description, ...(p.tags || [])]
      .map(normalize)
      .join(" ");
    return hay.includes(normalize(q));
  }

  function matchesCategory(p) {
    return activeCategory === "すべて" || p.category === activeCategory;
  }

  function card(p) {
    const pdfIcon = "https://www.pony-e.jp/PDFfile.jpg";
    const tags = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join("");
    return `
      <article class="devexp-card">
        <a class="devexp-card__media" href="${p.image}" target="_blank" rel="noopener">
          <img loading="lazy" src="${p.image}" alt="${p.name} の画像">
        </a>
        <div class="devexp-card__body">
          <div class="devexp-card__title">${p.name}</div>
          <div class="devexp-card__meta"><span>カテゴリ：${p.category}</span></div>
          <div class="devexp-card__desc">${p.description || ""}</div>
          ${tags ? `<div class="devexp-card__tags">${tags}</div>` : ""}
        </div>
        <div class="devexp-card__actions">
          <a class="devexp-btn" href="${p.image}" target="_blank" rel="noopener">画像を見る</a>
          <a class="devexp-btn devexp-btn--primary" href="${p.pdf}" target="_blank" rel="noopener">
            <img src="${pdfIcon}" alt=""> PDFを見る
          </a>
        </div>
      </article>
    `;
  }

  function render() {
    const q = searchEl.value.trim();
    const list = DEV_EXPERIENCE.filter(p => matchesCategory(p) && matchesQuery(p, q));
    gridEl.innerHTML = list.map(card).join("") || `<p>該当する事例がありません。</p>`;
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