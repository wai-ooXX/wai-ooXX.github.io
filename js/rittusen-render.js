function renderRittusenTable(data) {
  const container = document.getElementById("rittusen-table");
  if (!container) return;

  const headers = Object.keys(data[0]);
  let html = "<table><thead><tr>";
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

renderRittusenTable(rittusenData);
