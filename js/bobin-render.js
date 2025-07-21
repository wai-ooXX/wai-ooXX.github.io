function renderCutcoreTable(data, containerId) {
  let html = `<h2>カットコア用ボビン</h2><table><thead><tr>
    <th>No.</th><th>コアサイズ</th><th>厚さ（低周波）</th><th>0.1t</th>
    <th>0.05t</th><th>アモルファス</th><th>ボビン型番</th></tr></thead><tbody>`;

  data.forEach(r => {
    html += `<tr><td>${r.no}</td><td>${r.size}</td><td>${r.thick}</td><td>${r.t01}</td>
             <td>${r.t005}</td><td>${r.amorphous}</td><td>${r.model}</td></tr>`;
  });

  html += "</tbody></table>";
  document.getElementById(containerId).innerHTML = html;
}

function renderFerriteTable(data, containerId) {
  let html = `<h2>フェライトコア用ボビン</h2><table><thead><tr>
    <th>No.</th><th>コアサイズ</th><th>コア</th><th>品番1</th>
    <th>品番2</th><th>品番3</th><th>品番4</th></tr></thead><tbody>`;

  data.forEach(r => {
    html += `<tr><td>${r.no}</td><td>${r.size}</td><td>${r.core}</td><td>${r.part1}</td>
             <td>${r.part2}</td><td>${r.part3}</td><td>${r.part4}</td></tr>`;
  });

  html += "</tbody></table>";
  document.getElementById(containerId).innerHTML = html;
}

function renderLowfreqTable(data, containerId) {
  let html = `<h2>低周波用ボビン</h2><table><thead><tr>
    <th>No.</th><th>コアサイズ</th><th>ピン付</th>
    <th>セパレート型</th><th>1次2次分離型</th><th>標準タイプ</th></tr></thead><tbody>`;

  data.forEach(r => {
    html += `<tr><td>${r.no}</td><td>${r.size}</td><td>${r.pin}</td>
             <td>${r.separate}</td><td>${r.split}</td><td>${r.std}</td></tr>`;
  });

  html += "</tbody></table>";
  document.getElementById(containerId).innerHTML = html;
}

function setupTabs() {
  const tabs = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });
}

// 初期化実行
renderCutcoreTable(cutcoreData, "cutcore");
renderFerriteTable(ferriteData, "ferrite");
renderLowfreqTable(lowfreqData, "lowfreq");
setupTabs();
