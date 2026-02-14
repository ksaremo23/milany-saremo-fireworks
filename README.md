# Milany Saremo Fireworks

Website for **Milany Saremo Fireworks** — a family fireworks business. Design and layout inspired by modern fireworks e‑commerce sites, with a Display Kits collection page, filters, and product grid.

## What’s included

- **Home/Display Kits page** — Collection of fireworks display kits with filters and sort
- **Header** — Logo, main navigation, cart and login
- **Filters** — Availability, price range, sound level, crowd distance
- **Product grid** — 14 display kit products with sale prices, badges, Add to cart / Quick view
- **Guides section** — Buying guide, delivery, FAQs, Fireworks Code
- **Footer** — Contact, newsletter, links

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (or create an account).
2. Click **Add New…** → **Project**.
3. **Import** your GitHub repo: `ksaremo23/milany-saremo-fireworks`.
4. Leave **Build Command** and **Output Directory** as default (no build needed).
5. Click **Deploy**. Your site will be live at `https://your-project.vercel.app`.

## How to run locally

No build step required. Open the site in a browser:

1. **From file:** double‑click `index.html`, or right‑click → Open with → your browser.
2. **Local server (recommended):** from the project folder run:
   - `npx serve .` or
   - `python -m http.server 8000` then visit `http://localhost:8000`

## Tech

- Plain **HTML**, **CSS**, and **JavaScript**
- Product data and filtering in `script.js`
- Responsive layout; mobile-friendly header and grid

## Customisation

- **Products:** Edit the `products` array in `script.js` (names, prices, images, badges, stock).
- **Branding:** Update the logo text and any “Milany Saremo Fireworks” references in `index.html`.
- **Colours/fonts:** Change CSS variables in `styles.css` (`:root`).

## Contact

Replace the placeholder email in the footer with your real contact (e.g. `info@milanysaremofireworks.co.uk`).
