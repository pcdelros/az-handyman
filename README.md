# AZ Affordable Handyman Service Website

Static multi-page website for an affordable handyman service based in Phoenix, Arizona.

## Website structure

This project uses plain HTML, CSS, and JavaScript so it stays lightweight, easy to edit, and compatible with GitHub Pages.

Pages included:

- `index.html` — Home page
- `services.html` — Main services overview
- `home-repairs.html` — Small home repairs service page
- `drywall-painting.html` — Drywall and paint touch-up service page
- `fixture-installation.html` — Fixture installation service page
- `furniture-assembly.html` — Furniture assembly service page
- `service-area.html` — Phoenix-area service area page
- `resources.html` — Lightweight resources/blog-style SEO page
- `contact.html` — Static estimate request page
- `privacy.html` — Starter privacy notice
- `404.html` — Not found page

## Before publishing

Update the placeholder business details:

- Business phone number
- Business email address
- Business hours
- Exact service area
- License, insurance, or Arizona ROC details if applicable
- Any services that should not be offered
- The contact form email address in `assets/js/main.js`

The contact form uses a `mailto:` link. It opens the visitor’s email app and does not submit to a backend server.

## GitHub Pages deployment

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Go to **Pages**.
4. Set source to **Deploy from a branch**.
5. Choose the `main` branch and `/root`.
6. Save.

The site should be available at:

`https://pcdelros.github.io/az-handyman/`

## Security notes

This site does not include third-party scripts, analytics, cookies, iframes, backend code, databases, or frontend API keys.

The pages include a meta Content Security Policy as a practical static-site safeguard. For stronger production headers, use hosting that supports custom HTTP response headers.

## Editing tips

Keep service pages useful and specific. Avoid fake reviews, fake statistics, keyword stuffing, or duplicate location pages. Add real articles to the resources page over time based on actual customer questions.
