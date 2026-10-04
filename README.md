# DecodeLabs Industrial Training Kit — Project 1: Responsive Frontend Interface

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A complete, production-grade responsive frontend web interface built strictly adhering to the **DecodeLabs Full Stack Development — Project 1: Industrial Training Kit** specifications. 

This repository demonstrates mobile-first responsive architecture, fluid CSS grid & flexbox layouts, accessible UI patterns (WCAG AA/AAA compliant), and Vanilla JavaScript interaction **without using any frameworks or third-party libraries**.

---

## 📐 Project Structure

```text
Project 1 Industrial Training Kit/
├── index.html                   # Root Responsive Frontend Interface landing page
├── style.css                    # Root design system CSS with custom variables & media queries
├── script.js                     # Root Vanilla JS (Mobile Menu, Accordion, ARIA bindings)
├── server.js                    # Node.js / Express local development server
├── package.json                 # Project dependencies & start scripts
├── .gitignore                   # Git ignore patterns (node_modules, system logs)
├── README.md                    # Root project documentation & structural guide
│
├── project-1/                   # Modular Step-by-Step Implementation
│   ├── index.html               # Step-by-step standalone HTML structure
│   ├── css/
│   │   └── style.css            # Step 1 component stylesheets
│   ├── js/
│   │   └── script.js            # Step 1 interaction handlers
│   ├── assets/
│   │   └── images/              # Custom vector SVG card graphics & banners
│   └── README.md                # Project-1 specific technical docs
│
└── responsive-architect/        # Step 12 Standalone Responsive Architect Portfolio
    ├── index.html               # Semantic architectural portfolio interface
    ├── css/
    │   └── style.css            # Architectural blueprint CSS styling & grid layouts
    ├── js/
    │   └── script.js            # State management, mobile drawer & keyboard navigation
    ├── assets/
    │   └── images/              # Blueprint devices & project vector artwork
    └── README.md                # Responsive Architect specific documentation
```

---

## 🎨 Design System & Palette

The design system follows a modern architectural aesthetic with exact brand color tokens:

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Mocha Mousse** | `#A47864` / `#A5958F` | Primary Brand & Architectural Accent |
| **Ethereal Blue** | `#A0D4E0` | Highlight & Interactive Visual Detail |
| **Moonlit Grey** | `#F2F0EA` | Canvas & Soft Background Surfaces |
| **Dark Charcoal** | `#2F2925` | High-contrast Typography |
| **Muted Grey** | `#6F6964` | Subtitle & Secondary Details |

### Fluid Typography & Layout Rules
- **Fluid Typography**: Uses CSS `clamp()` for headings and body text so font size scales smoothly between mobile and 4K displays.
- **Responsive Macro Layouts**: Built using **CSS Grid** (`grid-template-columns: repeat(auto-fit, minmax(...))`).
- **Micro Component Layouts**: Built using **Flexbox** for alignments, badges, and card content.

---

## 🛠️ Hard Constraints & Standards

- **Zero Frameworks**: 100% Pure HTML5, CSS3, and Vanilla JavaScript. No React, Vue, Angular, Bootstrap, Tailwind, or jQuery.
- **Mobile-First Responsive Strategy**:
  - **Base CSS**: Targeted for Mobile screens (`320px`, `375px`, `390px`, `414px`)
  - **Tablet**: `@media (min-width: 768px)` & `820px`
  - **Desktop**: `@media (min-width: 1024px)`, `1280px`, `1440px`, `1920px`
- **Accessibility (WCAG AA/AAA)**:
  - 100% Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`).
  - Dynamic `aria-expanded`, `aria-controls`, and `aria-hidden` attribute synchronization via Vanilla JS.
  - Visible keyboard focus rings (`:focus-visible`) and complete keyboard navigation (`Tab`, `Space`, `Enter`, `Escape`).
  - Cumulative Layout Shift (CLS) prevention via reserved SVG vector spaces.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+ recommended) or any static web server (e.g. VS Code Live Server).

### Installation & Local Development

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yaseen126/Project-1-Industrial-Training-Kit.git
   cd "Project 1 Industrial Training Kit"
   ```

2. **Install Dependencies & Start Dev Server**:
   ```bash
   npm install
   npm start
   ```

3. **Open in Browser**:
   Navigate to `http://localhost:3000` to view the root project, or open `/responsive-architect/index.html` for the standalone architecture edition.

---

## 📑 Testing & Audit Results

- **HTML5 Validation**: Passed W3C standard compliance (0 errors).
- **Console Audit**: Clean (0 runtime JS exceptions or network errors).
- **Responsive Overflow**: Verified no horizontal scrolling (`overflow-x: hidden`) across all standard viewports (`320px` to `1920px`).
- **Reduced Motion**: Full support for `prefers-reduced-motion: reduce`.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
