# Project Report — Glow E-commerce

**Author:** (Your Name)

**Date:** January 2026

**Website URL:** (replace-with-live-url)

---

## Table of Contents

1. Introduction and project background
2. Website planning and design
   - Site map (Figure 1.1)
   - Page structure
3. Development process and implementation details
4. Tools and technologies used
5. Challenges encountered and solutions
6. Conclusion
7. Appendices (screenshots, code snippets)

---

## 1. Introduction and project background

This document describes the design, development, and deployment of the Glow e-commerce website. The project aims to create a small responsive online storefront showcasing product collections, with a simple cart system, search capability, and multi-page site structure for easier navigation and maintenance.

As shown in Figure 1.1, the site map illustrates the planned website structure.

**Figure 1.1: Site Map**

![Figure 1.1: Site Map](IMAGES/site-map-placeholder.png)

> Note: replace the placeholder image with your finalized site map image. Ensure figures are numbered and referenced in the text.

## 2. Website planning and design

### 2.1 Site map and page structure

The site contains five interlinked pages: Home, New Arrivals, Products, Reviews, Contact. Navigation appears on each page to allow seamless movement between pages. Each page uses the shared stylesheet `style.css` and script `app.js` to keep behavior consistent and minimize duplication.

### 2.2 Wireframes and layout decisions

The primary layout uses a fixed header with the logo and navigation, a hero section on the homepage, product grids, and a footer with contact and legal links. CSS Grid and Flexbox are used to produce responsive product grids and layout adjustments at defined breakpoints.

### 2.3 Accessibility and mobile-first considerations

Buttons include `title` attributes for screen readers and interactive elements use semantic elements where possible. The CSS includes breakpoints for major device widths to ensure the site remains usable on phones and tablets.

## 3. Development process and implementation details

### 3.1 Code organization

Files added/updated in the repository:

- `index.html` — updated homepage, navigation links now point to dedicated pages.
- `new/index.html`, `products/index.html`, `reviews/index.html`, `contact/index.html` — new pages sharing common header/footer and assets.
- `style.css` — shared stylesheet for consistent appearance across pages.
- `app.js` — updated to add Google search support and a localStorage-backed cart.
- `Project_Report.html` and `Project_Report.md` — documentation files.

### 3.2 Key implementation details

The cart is implemented entirely client-side using `localStorage` to persist cart contents across pages and reloads. Items added to the cart include a name, image path, price and quantity. The cart UI is rendered dynamically from the stored array; remove actions update storage and re-render the cart.

The search box is wired to open a Google results page using the entered query. The search action is triggered by the dedicated search button or the Enter key, opening results in a new tab.

### 3.3 Navigation and interlinking

All pages use relative links for portability within the repository. The navigation ensures each page is reachable from any other page. The footer also includes links to the main sections.

## 4. Tools and technologies used

- HTML5 and semantic markup
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript for interactivity and localStorage handling
- Swiper.js for the new-arrivals carousel
- Boxicons for iconography
- Git for version control

## 5. Challenges encountered and solutions

### 5.1 Cross-page cart state

Challenge: keeping the cart state consistent while the site is split across multiple pages.

Solution: store the cart as JSON in `localStorage` and use the same key (`gh_cart`) on every page; render cart on `DOMContentLoaded` so each page reads the same shared state.

### 5.2 Mobile navigation and header behaviors

Challenge: header controls (menu, search, cart, user) can overlap on small screens.

Solution: use CSS breakpoints to transform the navbar into a slide-in menu; JavaScript toggles the menu and ensures other panels close when one opens.

### 5.3 Accessibility and button labeling

Challenge: icon-only buttons are not descriptive for assistive technologies.

Solution: add `title` and `aria-label` attributes and ensure text alternatives are present where meaningful.

## 6. Conclusion

The Glow e-commerce site demonstrates a small but complete front-end prototype with multi-page structure, client-side cart persistence, Google-powered search, and responsive layout. The deliverables include the website files and this project report. For final submission, replace placeholder URLs and images with production assets, test across multiple devices, and (optionally) add a lightweight backend for order processing.

## 7. Appendices

Placeholders for screenshots and selected code snippets.

- Figure A.1: Homepage screenshot — `IMAGES/hero-banner-2.jpg`

Selected code snippet (cart rendering, simplified):

```
function renderCart(){
  const items = JSON.parse(localStorage.getItem('gh_cart') || '[]');
  // render items, compute total and attach remove handlers
}
```

---

*Formatting note:* When converting this Markdown to Word or PDF, set fonts and margins to the course requirements: Times New Roman, headings 14pt bold, body text 12pt, 1.5 line spacing, page margins Top/Bottom/Right = 2cm, Left = 2.5cm.
