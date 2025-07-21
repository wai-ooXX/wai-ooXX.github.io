function renderTyubuTable(data) {
  const container = document.getElementById("tyubu-table");
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
        if (bgColor) {
          html += `<td style="background:${bgColor}; color:white;">${value}</td>`;
        } else {
          html += `<td>${value}</td>`;
        }
      } else {
        html += `<td>${value}</td>`;  // ← ここが抜けていた
      }
    });
    html += "</tr>";
  });

  html += "</tbody></table>";
  container.innerHTML = html;
}


// 定義された色コードのみ返す
function getColorCode(colorName) {
    const colorMap = {
        "赤": "#d32f2f",
        "青": "#1976d2",
        "黄": "#fbc02d",
        "緑": "#388e3c",
        "黒": "#212121",
        "白": "#9e9e9e",
        "茶": "#6d4c41"
    };
    return colorMap[colorName.trim()] || null; // nullを返すことで未定義を明確に
}

// 初期描画実行
renderTyubuTable(tyubuData);
