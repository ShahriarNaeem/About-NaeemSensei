// Interactivity: mobile nav toggle, dropdown toggles, smooth scroll, active nav highlighting, accordion
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-navigation');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Smooth scroll for nav links
  function smoothTo(hash) {
    const target = document.querySelector(hash);
    if (!target) return;
    const headerOffset = 72;
    const rect = target.getBoundingClientRect();
    const top = window.scrollY + rect.top - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      smoothTo(href);

      // close mobile nav if open
      if (primaryNav.classList.contains('open')) {
        primaryNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Dropdown accessible toggles
  const dropdownButtons = Array.from(document.querySelectorAll('.dropbtn'));
  dropdownButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const parent = btn.closest('.dropdown');
      const open = parent.classList.toggle('open');
      // set aria attributes
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      const content = parent.querySelector('.dropdown-content');
      if (content) content.setAttribute('aria-hidden', open ? 'false' : 'true');
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown') && !e.target.closest('.dropbtn')) {
      document.querySelectorAll('.dropdown').forEach(d => {
        d.classList.remove('open');
        const b = d.querySelector('.dropbtn');
        if (b) b.setAttribute('aria-expanded', 'false');
        const c = d.querySelector('.dropdown-content');
        if (c) c.setAttribute('aria-hidden', 'true');
      });
    }
  });

  // IntersectionObserver to highlight active nav item
  const sectionAnchors = navLinks
    .map(a => a.getAttribute('href'))
    .filter(Boolean)
    .map(href => {
      // normalize ids (some nav entries might link to #hobbies but section id is #hobbies-section)
      if (href === '#hobbies') return document.querySelector('#hobbies-section') || document.querySelector(href);
      return document.querySelector(href);
    })
    .filter(Boolean);

  const sections = sectionAnchors;
  if (sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            // treat special hobbies link -> hobbies-section
            if ((href === '#hobbies' && id === 'hobbies-section') || href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { root: null, rootMargin: '0px 0px -45% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
  }

  // Accordion: Research statement
  document.querySelectorAll('.accordion').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const panel = btn.nextElementSibling;
      if (!panel) return;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  });

  // Close mobile nav on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (primaryNav.classList.contains('open')) {
        primaryNav.classList.remove('open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      }
      document.querySelectorAll('.dropdown.open').forEach(d => {
        d.classList.remove('open');
        const b = d.querySelector('.dropbtn');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    }
  });
});
