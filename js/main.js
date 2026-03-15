// ============================================
// SNS リンク設定（ここを変更するだけで全ページに反映）
// ============================================
const SNS_LINKS = {
  instagram: 'https://www.instagram.com/suisen_volleyball_club/',
  youtube:   'https://www.youtube.com/@suisen_volleyball',
  x:         'https://x.com/ClubSuisen',
};

const snsHTML = `
  <a href="${SNS_LINKS.instagram}" target="_blank" rel="noopener" aria-label="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  </a>
  <a href="${SNS_LINKS.youtube}" target="_blank" rel="noopener" aria-label="YouTube">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
  </a>
  <a href="${SNS_LINKS.x}" target="_blank" rel="noopener" aria-label="X">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  </a>
`;

const headerSnsTgt = document.querySelector('.header-sns');
if (headerSnsTgt) headerSnsTgt.innerHTML = snsHTML;

const snsTgt = document.querySelector('.footer-sns');
if (snsTgt) snsTgt.innerHTML = snsHTML;

const navSnsTgt = document.querySelector('.nav-sns');
if (navSnsTgt) navSnsTgt.innerHTML = snsHTML;

// ============================================
// スプラッシュスクリーン（初回のみ）
// ============================================
const splash = document.getElementById('splash');
if (splash) {
  if (sessionStorage.getItem('splashShown')) {
    splash.style.display = 'none';
  } else {
    sessionStorage.setItem('splashShown', 'true');
    setTimeout(() => {
      splash.classList.add('hidden');
      setTimeout(() => { splash.style.display = 'none'; }, 600);
    }, 2400);
  }
}

// ============================================
// スライドショー
// ============================================
const slides = document.querySelectorAll('.hero-slide');
const dots   = document.querySelectorAll('.hero-dot');
let currentSlide = 0;
let slideTimer;

if (slides.length > 0) {
  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, 5000);
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  slideTimer = setInterval(nextSlide, 5000);
}

// ============================================
// スクロール処理（rAF + passive でパフォーマンス改善）
// ============================================
const header = document.querySelector('.header');
let ticking = false;

window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const scrollY = window.scrollY;

    // ヘッダー背景
    if (header) {
      header.style.background = scrollY > 50
        ? 'rgba(10, 22, 40, 0.98)'
        : 'rgba(10, 22, 40, 0.95)';
    }

    ticking = false;
  });
}, { passive: true });

// ============================================
// ハンバーガーメニュー（右スライドドロワー）
// ============================================
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

if (hamburger && nav) {
  // backdrop-filterの制約を避けるため、open時にnavをbody直下へ移動
  const navParent = nav.parentElement;
  const navSibling = nav.nextSibling;

  function openNav() {
    document.body.appendChild(nav);
    nav.offsetHeight; // reflow trigger for CSS transition
    nav.classList.add('is-open');
    hamburger.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    nav.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => {
      navParent.insertBefore(nav, navSibling);
    }, 300); // transition完了後に戻す
  }

  hamburger.addEventListener('click', () => {
    nav.classList.contains('is-open') ? closeNav() : openNav();
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeNav);
  });
}

// ============================================
// スクロールアニメーション
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target); // 表示済みは監視解除
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.news-item, .player-card, .roster-card, .schedule-item, .timeline-item, .practice-card, .big-stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
