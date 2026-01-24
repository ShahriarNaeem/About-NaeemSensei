// Interactivity: fixed header-aware smooth scroll, theme toggle (persisted), mobile nav toggle,
// active nav highlighting, accordion, contact form mailto fallback
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-navigation');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const yearEl = document.getElementById('year');
  const header = document.getElementById('site-header');
  const themeToggle = document.getElementById('theme-toggle');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Helper: current header height (accounts for fixed header)
  function getHeaderHeight() {
    return header ? header.offsetHeight : 72;
  }

  // Mobile nav toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Smooth scroll for nav links (handles internal links)
  function smoothTo(hash) {
    const target = document.querySelector(hash);
    if (!target) return;
    const headerOffset = getHeaderHeight() + 8; // small gap
    const rect = target.getBoundingClientRect();
    const top = window.scrollY + rect.top - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('mailto:')) return;
      e.preventDefault();
      smoothTo(href);

      // close mobile nav if open
      if (primaryNav.classList.contains('open')) {
        primaryNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // IntersectionObserver to highlight active nav item (uses header offset)
  function initObserver() {
    const sectionIds = navLinks
      .map(a => a.getAttribute('href'))
      .filter(h => h && h.startsWith('#'))
      .map(h => h);

    const sections = Array.from(new Set(sectionIds))
      .map(id => document.querySelector(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === id) link.classList.add('active');
            else link.classList.remove('active');
          });
        }
      });
    }, {
      root: null,
      // ensure intersection accounts for header height: set bottom rootMargin negative to trigger earlier
      rootMargin: `0px 0px -${Math.round(window.innerHeight * 0.45)}px 0px`,
      threshold: 0
    });

    sections.forEach(s => observer.observe(s));
  }
  initObserver();

  // Re-init observer on resize to account for layout changes
  window.addEventListener('resize', () => {
    // (simple approach: re-run observer init)
    // For performance in a larger site you'd keep a reference and update; this is fine here.
    initObserver();
  });

  // Accordion toggle
  document.querySelectorAll('.accordion').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const panel = btn.nextElementSibling;
      if (!panel) return;
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Contact form mailto fallback
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const first = (data.get('first_name') || '').toString().trim();
      const last = (data.get('last_name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      if (!email) {
        statusEl.textContent = 'Please provide a valid email.';
        return;
      }

      const to = 'srnpatwary7991.srnaeem@gmail.com';
      const subject = encodeURIComponent(`Website contact from ${first} ${last}`.trim());
      const bodyLines = [];
      if (first || last) bodyLines.push(`Name: ${first} ${last}`.trim());
      bodyLines.push(`Email: ${email}`);
      if (message) bodyLines.push('', 'Message:', message);
      const body = encodeURIComponent(bodyLines.join('\n'));
      const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

      // Open default mail client
      window.location.href = mailto;
      statusEl.textContent = 'Opening your mail client... If nothing opens, send an email to srnpatwary7991.srnaeem@gmail.com';
    });
  }

  // Theme toggle: prefers-color-scheme initial + persisted preference
  function applyTheme(theme) {
    if (theme === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');

    if (themeToggle) {
      const isDark = theme === 'dark';
      themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    }
  }

  function initTheme() {
    const stored = localStorage.getItem('site-theme');
    if (stored) {
      applyTheme(stored);
      return;
    }
    // default to system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
  initTheme();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('site-theme', newTheme);
    });
  }

  // Close mobile nav / menus on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (primaryNav.classList.contains('open')) {
        primaryNav.classList.remove('open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      }
      document.querySelectorAll('.dropdown.open').forEach(d => {
        d.classList.remove('open');
      });
    }
  });

  // If user clicks outside mobile nav, close it
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#primary-navigation') && !e.target.closest('#nav-toggle')) {
      if (primaryNav.classList.contains('open')) {
        primaryNav.classList.remove('open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

});
