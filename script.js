/**
 * ==========================================================================
 * DECODELABS PROJECT 1 — VANILLA JAVASCRIPT LOGIC
 * Features: Pure JS State Management (isMenuOpen, Accordion state),
 * ARIA Attribute Toggles, and Keyboard Accessibility.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. MOBILE MENU DRAWER STATE MANAGEMENT
  // ------------------------------------------------------------------------
  let isMenuOpen = false;

  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    /**
     * Updates mobile menu state and synchronizes DOM & ARIA attributes
     * @param {boolean} [openState] - Explicit boolean state
     */
    const setMenuState = (openState) => {
      isMenuOpen = openState !== undefined ? openState : !isMenuOpen;

      // Update DOM classes
      navMenu.classList.toggle('is-open', isMenuOpen);
      menuToggle.classList.toggle('is-active', isMenuOpen);

      // Update ARIA Accessibility Attributes
      menuToggle.setAttribute('aria-expanded', isMenuOpen ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', isMenuOpen ? 'Close navigation menu' : 'Open navigation menu');

      // Prevent body scrolling when menu drawer is open
      document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    };

    // Click event listener
    menuToggle.addEventListener('click', () => setMenuState());

    // Keyboard support (Space / Enter triggers on button)
    menuToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setMenuState();
      }
    });

    // Close menu when clicking nav links on mobile
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
          setMenuState(false);
        }
      });
    });

    // Keyboard Escape key closes menu drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setMenuState(false);
        menuToggle.focus();
      }
    });

    // Reset menu on viewport resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setMenuState(false);
      }
    });
  }

  // ------------------------------------------------------------------------
  // 2. INTERACTIVE ACCORDION STATE MANAGEMENT
  // ------------------------------------------------------------------------
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  let activePanelId = null;

  if (accordionTriggers.length > 0) {
    accordionTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const panelId = trigger.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        // Close currently active panel for single-open accordion behavior
        accordionTriggers.forEach((t) => {
          t.setAttribute('aria-expanded', 'false');
          const pId = t.getAttribute('aria-controls');
          const p = document.getElementById(pId);
          if (p) p.setAttribute('hidden', '');
        });

        // Toggle target panel state
        if (!isExpanded && panel) {
          trigger.setAttribute('aria-expanded', 'true');
          panel.removeAttribute('hidden');
          activePanelId = panelId;
        } else {
          activePanelId = null;
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. SMOOTH SCROLL & FOCUS ACCESSIBILITY
  // ------------------------------------------------------------------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();

          targetElement.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
          });

          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
        }
      }
    });
  });
});
