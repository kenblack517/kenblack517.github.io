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
    if (page === 'news')     return /\/news(\.html)?$/.test(path) ? 'class="active"' : '';
    if (page === 'contact')  return /\/contact(\.html)?$/.test(path) ? 'class="active"' : '';
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
          <li class="nav-dropdown">
            <a href="players" ${active('players')}>PLAYERS</a>
            <ul class="nav-submenu">
              <li><a href="players">すべて</a></li>
              <li><a href="players#pos-s">セッター</a></li>
              <li><a href="players#pos-oh">アウトサイドヒッター</a></li>
              <li><a href="players#pos-mb">ミドルブロッカー</a></li>
              <li><a href="players#pos-op">オポジット</a></li>
              <li><a href="players#pos-l">リベロ</a></li>
              <li><a href="players#pos-staff">スタッフ</a></li>
            </ul>
          </li>
          <li><a href="schedule" ${active('schedule')}>SCHEDULE</a></li>
          <li class="nav-dropdown">
            <a href="news" ${active('news')}>NEWS</a>
            <ul class="nav-submenu">
              <li><a href="news">すべて</a></li>
              <li><a href="news#cat-result">大会報告</a></li>
              <li><a href="news#cat-info">お知らせ</a></li>
              <li><a href="news#cat-event">イベント</a></li>
            </ul>
          </li>
          <li><a href="contact" ${active('contact')}>CONTACT</a></li>
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
