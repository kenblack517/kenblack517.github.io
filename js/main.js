// ============================================
// ヘッダー スクロール処理
// ============================================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ============================================
// ハンバーガーメニュー
// ============================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// メニュー内リンクをタップで閉じる
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ============================================
// フローティングCTA（スクロール後に表示）
// ============================================
const floatingCta = document.getElementById('floatingCta');

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight * 0.6) {
    floatingCta.style.opacity = '1';
    floatingCta.style.transform = 'translateY(0)';
  } else {
    floatingCta.style.opacity = '0';
    floatingCta.style.transform = 'translateY(8px)';
  }
}, { passive: true });

// ============================================
// スクロールアニメーション (.anim クラス)
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.anim').forEach((el, i) => {
  // 同じ親の中での順番でdelayを付ける
  const siblings = el.parentElement.querySelectorAll('.anim');
  const idx = Array.from(siblings).indexOf(el);
  el.style.transitionDelay = `${idx * 0.08}s`;
  observer.observe(el);
});
