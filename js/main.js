// Custom cursor
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursor-trail');
const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

if (cursor && cursorTrail && !isTouchDevice()) {
  let trailX = 0, trailY = 0;
  let curX = 0, curY = 0;

  document.addEventListener('mousemove', e => {
    curX = e.clientX;
    curY = e.clientY;
    cursor.style.left = curX + 'px';
    cursor.style.top = curY + 'px';
  });

  function animateTrail() {
    trailX += (curX - trailX) * 0.15;
    trailY += (curY - trailY) * 0.15;
    cursorTrail.style.left = trailX + 'px';
    cursorTrail.style.top = trailY + 'px';
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  document.querySelectorAll('a, button, [role="button"], .filter-tab').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
      cursorTrail.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
} else if (cursor && cursorTrail) {
  cursor.style.display = 'none';
  cursorTrail.style.display = 'none';
}

// Navbar scroll behavior
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// Active nav link
(function markActiveNavLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    // Normalize for comparison
    const normalizedHref = href.replace(/\/index\.html$/, '/').replace(/index\.html$/, '');
    const normalizedPath = path.replace(/\/index\.html$/, '/').replace(/index\.html$/, '');
    if (
      normalizedPath === normalizedHref ||
      (normalizedHref !== '/' && normalizedHref !== '' && normalizedPath.startsWith(normalizedHref))
    ) {
      a.classList.add('active');
    }
  });
})();

// Hamburger menu
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.nav-mobile');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// IntersectionObserver scroll animations
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));
}

// Project filter tabs
const filterTabs = document.querySelectorAll('.filter-tab');
const projectItems = document.querySelectorAll('[data-category]');

if (filterTabs.length && projectItems.length) {
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      projectItems.forEach(item => {
        const show = filter === 'all' || item.dataset.category.includes(filter);
        item.style.display = show ? '' : 'none';
        if (show) {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          });
        }
      });
    });
  });
}

// Particle generator for hero
function generateParticles() {
  const container = document.querySelector('.particles-container');
  if (!container) return;
  const colors = ['#7c3aed', '#06b6d4', '#7c3aed', '#a78bfa'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${Math.random()*20+15}s;
      animation-delay:${Math.random()*15}s;
    `;
    container.appendChild(p);
  }
}
generateParticles();

// Smooth reveal on page load
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 0.4s ease';
    document.body.style.opacity = '1';
  });
});
