// ヒーロー画像のフェード切り替え
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.hero img');
  let index = 0;
  if (images.length > 0) {
    setInterval(() => {
      images.forEach((img, i) => {
        img.style.opacity = (i === index) ? '1' : '0';
      });
      index = (index + 1) % images.length;
    }, 4000);
  }

  // iframe高さ調整
  window.addEventListener('message', function (event) {
    if (event.data.type === 'setHeight') {
      const iframe = document.getElementById('news-frame');
      if (iframe) {
        iframe.style.height = event.data.height + 'px';
      }
    }
  });

  // ヘッダー読み込み + アコーディオン設定
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      const header = document.getElementById('header');
      if (header) {
        header.innerHTML = data;

        // アコーディオン動作（header内）
        const toggles = document.querySelectorAll('.accordion-toggle');
        toggles.forEach(toggle => {
          toggle.addEventListener('click', function () {
            const submenu = this.nextElementSibling;
            if (submenu) {
              submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
          });
        });
      }
    });

  // フッター読み込み
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.innerHTML = data;
      }
    });
});
