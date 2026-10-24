# Gusii Digital — website

A Kisii-rooted landing page for Gusii Digital. Static HTML, CSS and vanilla
JavaScript — no build step and no dependencies. Everything in this folder is
served as-is.

Live site: **https://benitchris.github.io/Gusii-digital/**

## What the page includes

- Hero with a custom Gusii-highlands illustration and two quote CTAs
- **Who we help**: 12 linked business cards (hotels, spas, salons, supermarkets,
  restaurants, schools, farms, hardware, clinics, professional services, real
  estate, transport) — each opens WhatsApp with a relevant message
- **Services** in plain language: websites, Google Business Profile, social
  media, campaigns and simple tools
- **About** with the local story, areas served (Nyanchwa, Daraja Mbili, Ogembo,
  Keroka, Suneka, Marani, Nyamira) and four practical advantages
- **How it works**: Talk → Build → Grow
- **Packages**: Presence, Growth and Partner with custom-quote CTAs (no invented
  prices — every quote is scoped after a conversation)
- **FAQ**, contact form, direct call/WhatsApp details and a Google Map of Kisii
- Floating WhatsApp button on every page, mobile-first navigation, reveal
  animations that respect `prefers-reduced-motion`

## Files

```text
index.html                 Homepage and all content
404.html                   Branded not-found page
assets/styles.css          Design system, layout and responsive rules
assets/main.js             Nav, reveal animations and the form-to-WhatsApp flow
assets/kisii-highlands.jpg Hero illustration (optimised)
assets/favicon.svg         Hill-and-sun favicon
robots.txt                 Crawler rules + sitemap reference
sitemap.xml                Single-page sitemap
.github/workflows/pages.yml GitHub Pages deploy workflow
```

The original, full-resolution generated artwork lives in `vibe_images/` and is
ignored by Git. Only the optimised hero file is deployed.

## Change the WhatsApp number or phone link

The number is `+254 182 800321` and the WhatsApp deep link format is
`https://wa.me/254182800321?text=...`. It appears in `index.html`, `404.html`
and `assets/main.js` (the contact form). Search for `254182800321` and update
all occurrences if the number changes.

## Contact form

The form has no backend. On submit it validates the fields, builds a prefilled
message and opens WhatsApp in a new tab (`assets/main.js`). Nothing is sent until
the visitor presses send inside WhatsApp.

## Run locally

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. Opening `index.html` directly also works, but a
local server matches GitHub Pages more closely.

## Deploy

Every push to `main` triggers the **Deploy to GitHub Pages** workflow. Check the
**Actions** tab if a deploy fails. The workflow enables Pages automatically on
the first run; the repository setting is **Settings → Pages → Source: GitHub
Actions**.

The homepage uses relative asset paths, so the site works at the project URL
(`/Gusii-digital/`) and would also work at a user-site root. `404.html` uses
project-root paths (`/Gusii-digital/...`) so its styles and links still load on
deep broken URLs. If a custom domain is added, update those 404 paths plus the
`canonical`/Open Graph URLs, `robots.txt` and `sitemap.xml`.

## Content note

The page deliberately avoids invented testimonials, client counts, results and
prices. Once real client proof exists, add it (with permission) to the About
section rather than inventing placeholder claims.
