# Project 1 – Responsive Frontend Interface

A responsive, production-quality frontend interface constructed using semantic **HTML5**, modern **CSS3** (CSS Grid & Flexbox), and light **Vanilla JavaScript**. Designed strictly according to the 2025 mobile-first engineering guidelines.

---

## 📌 Project Overview

- **Project Title**: Project 1 – Responsive Frontend Interface
- **Purpose**: Demonstrate responsive frontend craftsmanship, semantic HTML5 structure, fluid typography, CSS Grid macro-architecture, Flexbox micro-components, WCAG accessibility, and Vanilla JavaScript interactions without relying on external frameworks.

---

## 🎨 Visual Design System

The visual design system adheres strictly to the project brief palette:

- **Primary / Stability**: Mocha Mousse (`#5C4033` / `#3B2820`)
- **Trust / Accent**: Ethereal Blue (`#A0D4E0` / `#14535F`)
- **Refinement / Background**: Moonlit Grey (`#F2F0EA` / `#E8E5DC`)
- **Typography**:
  - **Headings**: Montserrat (Google Fonts)
  - **Body**: Roboto (Google Fonts)
  - **Fluid Scaling**: Dynamic size calculation via CSS `clamp()`

---

## 🛠️ Technology Stack & Restrictions

- **HTML5**: Semantic landmark tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
- **CSS3**: Custom properties (`:root`), Mobile-First media queries, CSS Grid, Flexbox
- **Vanilla JavaScript**: ES6 DOM manipulation, IntersectionObserver, ARIA state management

> **Framework Restriction Compliance**: Zero CSS frameworks (Tailwind, Bootstrap), zero JavaScript frameworks (React, Vue, Angular), zero third-party UI libraries.

---

## 📐 Architecture & Responsive Breakpoints

The application follows a strict **Mobile-First Paradigm**:

1. **Default Mobile Viewport (< 768px)**: Single-column layout with collapsible slide drawer navigation menu and stacked card grid.
2. **Tablet Breakpoint (`768px`)**: Expandable 2-column card grid, full header layout adjustments.
3. **Desktop Breakpoint (`1024px`)**: Horizontal navbar, 2-column macro architecture (main content + sticky sidebar panel).
4. **Extra-Wide Desktop (`1440px+`)**: 3-column card grid with fluid max-width bounds (`1320px`).

Tested viewports: **320px, 375px, 390px, 414px, 768px, 820px, 1024px, 1280px, 1440px, 1920px**.

---

## ♿ Accessibility & SEO Compliance

- **Semantic Landmarks**: Screen reader navigating landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- **Keyboard Navigation**: Complete tab order with a hidden `.skip-link` to jump directly to main content.
- **Focus Rings**: Distinct high-contrast `:focus-visible` outline rings with offset.
- **Color Contrast**: Complies with WCAG AAA 7:1 contrast for primary reading text.
- **ARIA Attributes**: `aria-expanded`, `aria-controls`, `aria-label`, `role="navigation"`.
- **Media**: Comprehensive SVG `alt` descriptions and lazy loading for below-the-fold assets.

---

## 📁 Directory Structure

```
project-1/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── images/
│   │   ├── hero-architecture.svg
│   │   ├── card-responsive.svg
│   │   ├── card-semantic.svg
│   │   ├── card-accessible.svg
│   │   ├── card-css-grid.svg
│   │   ├── card-craftsmanship.svg
│   │   └── card-performance.svg
│   └── icons/
│       └── favicon.svg
│
└── README.md
```

---

## ⚡ How to Run

1. Clone or download the repository.
2. Open `project-1/index.html` in any web browser (Chrome, Firefox, Edge, Safari).
3. Alternatively, serve via a local HTTP server (e.g. `npx serve project-1` or Live Server extension).
