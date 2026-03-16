// ヘッダー スクロール
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// スクロールアニメーション
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const style = document.createElement('style');
style.textContent = '.anim { opacity: 0; transform: translateY(20px); transition: opacity 0.7s ease, transform 0.7s ease; } .anim.visible { opacity: 1; transform: translateY(0); }';
document.head.appendChild(style);

document.querySelectorAll('.product-card, .ingredient-item, .concept-stat').forEach((el, i) => {
  el.classList.add('anim');
  el.style.transitionDelay = `${i * 0.08}s`;
  observer.observe(el);
});
