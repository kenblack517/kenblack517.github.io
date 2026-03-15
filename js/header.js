// ============================================
// 共通ヘッダー（このファイルを変更すれば全ページに反映）
// ============================================
(function () {
  const path = window.location.pathname;

  function active(page) {
    if (page === 'home')     return (path === '/' || /index(\.html)?$/.test(path) || path === '') ? 'class="active"' : '';
    if (page === 'about')    return /\/about(\.html)?$/.test(path) ? 'class="active"' : '';
    if (page === 'players')  return /\/players?(\.html)?(#.*)?$/.test(path) ? 'class="active"' : '';
    if (page === 'schedule') return /\/schedule(\.html)?$/.test(path) ? 'class="active"' : '';
    return '';
  }

  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <div class="header-inner">
      <div class="logo">
        <a href="./">
          <span class="logo-text">SUISEN</span>
          <span class="logo-sub">VOLLEYBALL CLUB</span>
        </a>
      </div>
      <nav class="nav">
        <ul>
          <li><a href="./" ${active('home')}>HOME</a></li>
          <li><a href="about" ${active('about')}>ABOUT</a></li>
          <li><a href="players" ${active('players')}>PLAYERS</a></li>
          <li><a href="schedule" ${active('schedule')}>SCHEDULE</a></li>
        </ul>
        <div class="nav-sns"></div>
      </nav>
      <div class="header-sns"></div>
      <button class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  const script = document.currentScript;
  script.parentNode.insertBefore(header, script);
})();
