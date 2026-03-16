// ヘッダー スクロール
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// スクロールアニメ
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.anim').forEach((el, i) => {
  const siblings = el.parentElement.querySelectorAll('.anim');
  const idx = Array.from(siblings).indexOf(el);
  el.style.transitionDelay = `${idx * 0.1}s`;
  observer.observe(el);
});
