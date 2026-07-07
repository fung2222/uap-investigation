// 動態載入 20 個熱門事件
fetch('../data/events.json')
  .then(r => r.json())
  .then(events => {
    const grid = document.getElementById('event-grid');
    if (!grid) return;
    grid.innerHTML = events.map((e, i) => `
      <a href="pages/event-${String(e.id).padStart(2,'0')}.html" class="event-card">
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
    document.getElementById('event-grid').innerHTML =
      '<p style="text-align:center;color:#c1272d">⚠ 資料載入失敗：' + err + '</p>';
  });
