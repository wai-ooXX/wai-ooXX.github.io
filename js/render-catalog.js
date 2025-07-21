// render-catalog.js

function renderTabButtons(data) {
  const menu = document.getElementById("tab-menu");
  Object.keys(data).forEach((section, index) => {
    const button = document.createElement("button");
    button.textContent = section;
    button.classList.add(index === 0 ? "active" : "");
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-menu button").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderCatalogTable(data[section]);
    });
    menu.appendChild(button);
  });
}

function renderCatalogTable(entries) {
  const container = document.getElementById("catalog-content");
  if (!entries || entries.length === 0) {
    container.innerHTML = "<p>データがありません。</p>";
    return;
  }

  const headers = Object.keys(entries[0]);
  let html = "<table><thead><tr>";
  headers.forEach(h => html += `<th>${h}</th>`);
  html += "</tr></thead><tbody>";

  entries.forEach(entry => {
    html += "<tr>";
    headers.forEach(h => {
      if (h === "リンク") {
        html += `<td><a href="${entry[h]}" target="_blank">PDF</a></td>`;
      } else {
        html += `<td>${entry[h]}</td>`;
      }
    });
    html += "</tr>";
  });

  html += "</tbody></table>";
  container.innerHTML = html;
}

// 初期実行（DOMContentLoaded 後に処理）
document.addEventListener("DOMContentLoaded", () => {
  if (!window.catalogData || Object.keys(catalogData).length === 0) {
    console.error("catalogData が読み込まれていない、または空です");
    return;
  }
  renderTabButtons(catalogData);
  const firstKey = Object.keys(catalogData)[0];
  renderCatalogTable(catalogData[firstKey]);
});
