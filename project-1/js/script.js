/**
 * ==========================================================================
 * PROJECT 1: RESPONSIVE FRONTEND INTERFACE - VANILLA JAVASCRIPT
 * Features: Mobile Navigation Drawer, Card Filtering, Accordion Widget,
 * ScrollSpy Observer, Interactive Code Tabs, Back-to-Top Control.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. MOBILE NAVIGATION MENU TOGGLE & ACCESSIBILITY
  // ------------------------------------------------------------------------
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !navMenu.classList.contains('is-open');
      navMenu.classList.toggle('is-open', isOpen);
      menuToggle.classList.toggle('is-active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', () => toggleMenu());

    // Close menu when clicking any navigation link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
          toggleMenu(false);
        }
      });
    });

    // Close menu on Escape keypress
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        toggleMenu(false);
        menuToggle.focus();
      }
    });

    // Reset drawer state on window resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && navMenu.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });
  }

  // ------------------------------------------------------------------------
  // 2. ACTIVE NAVIGATION STATE WITH INTERSECTION OBSERVER
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  
  if (sections.length > 0 && 'IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }

  // ------------------------------------------------------------------------
  // 3. ARTICLE CARD CATEGORY FILTER
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const articleCards = document.querySelectorAll('.article-card');

  if (filterBtns.length > 0 && articleCards.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Update active filter button state
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        articleCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ------------------------------------------------------------------------
  // 4. ACCORDION WIDGET INTERACTION (SIDEBAR)
  // ------------------------------------------------------------------------
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  if (accordionHeaders.length > 0) {
    accordionHeaders.forEach((header) => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const isOpen = item.classList.contains('is-open');

        // Close all accordion items for single-open accordion behavior
        document.querySelectorAll('.accordion-item').forEach((i) => {
          i.classList.remove('is-open');
          const btn = i.querySelector('.accordion-header');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        // Toggle current item
        if (!isOpen) {
          item.classList.add('is-open');
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // 5. INTERACTIVE CODE / ARCHITECTURE TAB SYSTEM
  // ------------------------------------------------------------------------
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabBtns.length > 0 && tabContents.length > 0) {
    tabBtns.forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-tab');

        tabBtns.forEach((t) => t.classList.remove('active'));
        tabContents.forEach((c) => c.classList.remove('active'));

        tab.classList.add('active');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // 6. BACK-TO-TOP BUTTON
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
