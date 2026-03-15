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
    }, 1800);
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
