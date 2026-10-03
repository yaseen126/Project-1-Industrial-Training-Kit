/**
 * ==========================================================================
 * RESPONSIVE ARCHITECT — STEP 8: VANILLA JAVASCRIPT INTERACTION
 * Features: Mobile Navigation Drawer, Dynamic ARIA State Management,
 * ScrollSpy Observer, CTA Smooth Navigation, and Keyboard Accessibility.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. MOBILE NAVIGATION DRAWER & ARIA DYNAMIC STATE
  // ------------------------------------------------------------------------
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinksList = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && navLinksList) {
    /**
     * Toggles the mobile navigation drawer and updates ARIA states
     * @param {boolean} [shouldOpen] - Explicit toggle state
     */
    const toggleMobileMenu = (shouldOpen) => {
      const isOpen = shouldOpen !== undefined ? shouldOpen : !navLinksList.classList.contains('is-open');

      // Update CSS class states
      navLinksList.classList.toggle('is-open', isOpen);
      mobileMenuBtn.classList.toggle('is-active', isOpen);

      // Update Dynamic ARIA Accessibility Attributes
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');

      // Prevent background scrolling while menu drawer is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());

    // Close menu when clicking any navigation link (Mobile UX)
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
          toggleMobileMenu(false);
        }
      });
    });

    // Close menu on Escape keypress (Keyboard Accessibility)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinksList.classList.contains('is-open')) {
        toggleMobileMenu(false);
        mobileMenuBtn.focus();
      }
    });

    // Reset menu state when window resizes to desktop width
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && navLinksList.classList.contains('is-open')) {
        toggleMobileMenu(false);
      }
    });
  }

  // ------------------------------------------------------------------------
  // 2. ACTIVE NAVIGATION HIGHLIGHT WITH INTERSECTION OBSERVER
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  if (sections.length > 0 && 'IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -50% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');

          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'page');
            } else {
              link.classList.remove('active');
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // ------------------------------------------------------------------------
  // 3. CTA BUTTONS & ACCESSIBLE SMOOTH SCROLLING
  // ------------------------------------------------------------------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();

          // Smooth scroll to target section
          targetElement.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
          });

          // Focus target element for screen readers & keyboard navigation
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
        }
      }
    });
  });

  // ------------------------------------------------------------------------
  // 4. ACCESSIBILITY FOCUS TEST DEMO BUTTON
  // ------------------------------------------------------------------------
  const a11yTestBtn = document.querySelector('.a11y-test-btn');
  
  if (a11yTestBtn) {
    a11yTestBtn.addEventListener('click', () => {
      a11yTestBtn.focus();
      a11yTestBtn.textContent = 'Focus Active! [Tab to next]';
      setTimeout(() => {
        a11yTestBtn.textContent = 'Focus Ring Test';
      }, 2500);
    });
  }
});
