function renderRittusenTable(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container || data.length === 0) return;

  const headers = Object.keys(data[0]);
  let html = "<h2>リッツ線標準在庫</h2><table><thead><tr>";
  headers.forEach(h => html += `<th>${h}</th>`);
  html += "</tr></thead><tbody>";

  data.forEach(row => {
    html += "<tr>";
    headers.forEach(h => html += `<td>${row[h] || ""}</td>`);
    html += "</tr>";
  });

  html += "</tbody></table>";
  container.innerHTML = html;
}

function renderTyubuTable(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container || data.length === 0) return;

  const headers = Object.keys(data[0]);
  let html = "<h2>引出しチューブ在庫情報</h2><table><thead><tr>";
  headers.forEach(h => html += `<th>${h}</th>`);
  html += "</tr></thead><tbody>";

  data.forEach(row => {
    html += "<tr>";
    headers.forEach(h => {
      const value = row[h] ?? "";
      if (h === "色") {
        const bgColor = getColorCode(value);
        html += `<td style="background:${bgColor}; color:white;">${value}</td>`;
      } else {
        html += `<td>${value}</td>`;
      }
    });
    html += "</tr>";
  });

  html += "</tbody></table>";
  container.innerHTML = html;
}

function getColorCode(colorName) {
  const color = (colorName || "").trim();
  switch (color) {
    case "赤": return "#d32f2f";
    case "青": return "#1976d2";
    case "黄": return "#fbc02d";
    case "緑": return "#388e3c";
    case "黒": return "#212121";
    case "白": return "#9e9e9e";
    case "茶": return "#6d4c41";
    default: return "#888";
  }
}

function setupTabs() {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
}

// 初期化
renderRittusenTable(rittusenData, "rittusen");
renderTyubuTable(tyubuData, "tyubu");
setupTabs();
