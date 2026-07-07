// 動態載入 20 個熱門事件 - 修復 GitHub Pages 路徑問題
(function() {
  // 構建正確的 data 路徑（適用於 GitHub Pages 子目錄）
  const basePath = window.location.pathname.includes('/pages/') 
    ? '../data/events.json' 
    : 'data/events.json';
  
  // 或者更穩健：用 GitHub Pages 固定路徑
  const dataUrl = '/uap-investigation/data/events.json';

  fetch(dataUrl)
    .then(r => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(events => {
      const grid = document.getElementById('event-grid') || document.getElementById('full-grid');
      if (!grid) return;
      grid.innerHTML = events.map((e) => `
        <a href="${window.location.pathname.includes('/pages/') ? '' : 'pages/'}event-${String(e.id).padStart(2,'0')}.html" class="event-card">
          <span class="event-rank">◬ CASE #${String(e.id).padStart(2,'0')} / 20</span>
          <h3 class="event-title">${e.title}</h3>
          <p class="event-date">📅 ${e.date}　📍 ${e.location}</p>
          <p class="event-desc">${e.summary.substring(0, 80)}…</p>
          <div class="event-tags">
            ${e.tags.slice(0,3).map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </a>
      `).join('');
    })
    .catch(err => {
      const grid = document.getElementById('event-grid') || document.getElementById('full-grid');
      if (grid) {
        grid.innerHTML = '<p style="text-align:center;color:#c1272d">⚠ 資料載入失敗：' + err.message + '</p>';
      }
      console.error('Events load error:', err);
    });
})();