/* ==========================================================================
   ryanrange.click — Main JavaScript
   Nav, scroll animations, form handling, dynamic year
   ========================================================================== */

(function () {
  'use strict';

  /* --- Mobile Navigation --- */
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      navLinks.classList.toggle('nav__links--open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close nav on link click
    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('nav__links--open');
        document.body.style.overflow = '';
      });
    });

    // Close nav on escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('nav__links--open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('nav__links--open');
        document.body.style.overflow = '';
        navToggle.focus();
      }
    });
  }

  /* --- Dynamic Copyright Year --- */
  var yearElements = document.querySelectorAll('[data-year]');
  var currentYear = new Date().getFullYear();
  yearElements.forEach(function (el) {
    el.textContent = currentYear;
  });

  /* --- Scroll Reveal Animations --- */
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all elements
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('reveal--visible');
    });
  }

  /* --- Active Nav Link --- */
  var currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  var navPageLinks = document.querySelectorAll('.nav__link[data-page]');
  navPageLinks.forEach(function (link) {
    var page = link.getAttribute('data-page');
    if (
      page === currentPath ||
      (page === '/' && currentPath === '') ||
      (page !== '/' && currentPath.startsWith(page))
    ) {
      link.classList.add('nav__link--active');
    }
  });

  /* --- Contact Form Handling (Formspree) --- */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var form = e.target;
      var submitBtn = form.querySelector('button[type="submit"]');
      var statusEl = form.querySelector('.form-status');
      var originalText = submitBtn.textContent;

      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
        .then(function (response) {
          if (response.ok) {
            if (statusEl) {
              statusEl.textContent = "Message sent. I'll get back to you within 24 hours.";
              statusEl.className = 'form-status form-status--success';
            }
            form.reset();
          } else {
            throw new Error('Form submission failed');
          }
        })
        .catch(function () {
          if (statusEl) {
            statusEl.textContent = 'Something went wrong. Try emailing me directly at ryan@range.it.com';
            statusEl.className = 'form-status form-status--error';
          }
        })
        .finally(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Header scroll effect --- */
  var header = document.querySelector('.site-header');
  if (header) {
    var lastScroll = 0;
    window.addEventListener(
      'scroll',
      function () {
        var currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
          header.style.borderBottomColor = 'rgba(240, 237, 230, 0.12)';
        } else {
          header.style.borderBottomColor = '';
        }
        lastScroll = currentScroll;
      },
      { passive: true }
    );
  }
})();
