# Glow — E-commerce Prototype

This repository contains the Glow e-commerce prototype website.

Site pages (live when hosted):

- Home: index.html
- New Arrivals: new/index.html
- Products: products/index.html
- Reviews: reviews/index.html
- Contact: contact/index.html

Website URL: REPLACE_WITH_LIVE_SITE_URL

How to preview locally:

1. From the repository root, run a simple static server. Example (PowerShell):

```powershell
# Windows: using Python 3
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

2. Or open `index.html` directly in your browser.

Project report: `Project_Report.html` and `Project_Report.md` included.

Notes:
- The site uses a shared `style.css` and `app.js` across pages.
- The cart is stored in `localStorage` under key `gh_cart`.
- Update the `Website URL` above when you publish the site (GitHub Pages or other host).
