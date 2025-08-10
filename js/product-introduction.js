document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('.pi-tab'));
  const panels = Array.from(document.querySelectorAll('.pi-panel'));
  const map = {
    switching: document.getElementById('panel-switching'),
    reactor: document.getElementById('panel-reactor'),
    emi: document.getElementById('panel-emi'),
    commercial: document.getElementById('panel-commercial'),
    coil: document.getElementById('panel-coil'),
    vacuum: document.getElementById('panel-vacuum'),
    filter: document.getElementById('panel-filter'),
  };

  const searchInput = document.getElementById('pi-search-input');
  const clearBtn = document.getElementById('pi-search-clear');

  function showAllPanels(show) {
    panels.forEach(p => p.style.display = show ? 'block' : 'none');
  }

  function activate(name) {
    tabs.forEach(b => b.classList.toggle('is-active', b.dataset.tab === name));
    if (name === 'all') {
      showAllPanels(true);
    } else {
      showAllPanels(false);
      if (map[name]) map[name].style.display = 'block';
    }
    history.replaceState(null, '', `#${name}`);
    applySearch(); // タブ切替時も検索条件を適用
  }

  function applySearch() {
    const q = (searchInput?.value || '').trim();
    const active = getActiveTab();
    const visiblePanels = (active === 'all') ? panels : panels.filter(p => p.style.display !== 'none');
    visiblePanels.forEach(panel => {
      const cards = panel.querySelectorAll('.pi-card');
      cards.forEach(card => {
        const text = card.textContent || '';
        const hit = q === '' || text.includes(q);
        card.style.display = hit ? '' : 'none';
      });
    });
  }

  function getActiveTab() {
    return tabs.find(b => b.classList.contains('is-active'))?.dataset.tab;
  }

  // 初期表示：ハッシュ優先、無ければ「すべて」
  const initial = location.hash.replace('#', '');
  const first = tabs[0]?.dataset.tab || 'all';
  activate(initial && (initial === 'all' || map[initial]) ? initial : first);

  tabs.forEach(b => b.addEventListener('click', () => activate(b.dataset.tab)));
  if (searchInput) searchInput.addEventListener('input', applySearch);
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      applySearch();
      searchInput.focus();
    });
  }
});