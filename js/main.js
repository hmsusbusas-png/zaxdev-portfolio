
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${Math.min(i * 90, 360)}ms`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 30);

  if (y > 300 && y > lastScroll && !nav.classList.contains('open')) {
    nav.classList.add('hidden');
  } else {
    nav.classList.remove('hidden');
  }
  lastScroll = y;
}, { passive: true });

const burger = document.getElementById('nav-burger');

if (burger) {
  const setMenu = (open) => {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  };

  burger.addEventListener('click', () => {
    setMenu(!nav.classList.contains('open'));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setMenu(false);
      burger.focus();
    }
  });

  nav.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });
}

document.querySelectorAll('.bento-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
});

const magnetic = document.getElementById('magnetic-btn');

if (magnetic && window.matchMedia('(pointer: fine)').matches) {
  magnetic.addEventListener('mousemove', (e) => {
    const rect = magnetic.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    magnetic.style.transform = `translate(${dx * 0.18}px, ${dy * 0.28}px)`;
  });

  magnetic.addEventListener('mouseleave', () => {
    magnetic.style.transform = '';
  });
}

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.marquee-track').forEach(el => el.style.animation = 'none');
}

console.log(
  '%c zaxdev ',
  'background: linear-gradient(120deg, #FFB454, #FF6B35); color: #171008; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
  '\nСмотришь исходники? Респект.\nЕсли нужна такая же штука — пиши: @lev_backend'
);
