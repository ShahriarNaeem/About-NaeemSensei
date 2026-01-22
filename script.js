// Interactivity: mobile nav toggle, dropdown toggles, smooth scroll, active nav highlighting, accordion, contact form mailto fallback
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

  // Smooth scroll for nav links (handles dropdown links too)
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
      // let normal behavior for external links (starts with http or mailto)
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

  // Dropdown accessible toggles
  const dropdownButtons = Array.from(document.querySelectorAll('.dropbtn'));
  dropdownButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const parent = btn.closest('.dropdown');
      const open = parent.classList.toggle('open');
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
  const sectionIds = navLinks
    .map(a => a.getAttribute('href'))
    .filter(h => h && h.startsWith('#'))
    .map(h => h);

  const sections = Array.from(new Set(sectionIds))
    .map(id => document.querySelector(id))
    .filter(Boolean);

  if (sections.length) {
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

  // Contact form handler (mailto fallback)
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

      // open default mail client
      window.location.href = mailto;

      statusEl.textContent = 'Opening your mail client... If nothing opens, send an email to srnpatwary7991.srnaeem@gmail.com';
    });
  }

  // Close menus on Escape
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
