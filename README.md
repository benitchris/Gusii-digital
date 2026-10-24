# Gusii Digital — website

A Kisii-rooted, multi-page website for Gusii Digital. Static HTML, CSS and
vanilla JavaScript — no build step and no dependencies. Everything in this
folder is served as-is.

Live site: **https://benitchris.github.io/Gusii-digital/**

## Pages

- `index.html` — home: hero, six featured business types, services preview,
  social-media monetisation, story, process, package preview and quote CTA
- `who-we-help.html` — all 12 business types in three groups, plus a
  creators/online-sellers route into monetisation
- `services.html` — detailed services (websites, Google profile, social media &
  monetisation, campaigns, tools), the full monetisation section, packages and
  FAQ
- `about.html` — the local story, areas served, practical advantages, the
  meaning behind the logo and working principles
- `contact.html` — enquiry form (opens prefilled WhatsApp), direct contact
  details, Google Map of Kisii and “what happens next”
- `404.html` — branded not-found page using project-root paths

Every page shares a responsive header, a full-screen mobile drawer, a footer
with page and service links, and a floating WhatsApp button.

## Brand assets

- `assets/logo.webp` — transparent full logo lockup (480×175), used in the
  header and footer
- `assets/favicon.png` — 64×64 emblem on cream
- `assets/apple-touch-icon.png` — 180×180 touch icon
- `assets/og-image.jpg` — 1200×630 social sharing card
- `assets/kisii-highlands.jpg` — custom Kisii-highlands hero illustration
- `assets/styles.css` — design system, layout, drawer and responsive rules
- `assets/main.js` — drawer behaviour, reveal animations and form-to-WhatsApp

## Change the WhatsApp number or phone link

The number is `+254 182 800321` and the WhatsApp deep link format is
`https://wa.me/254182800321?text=...`. It appears throughout the HTML pages, in
`404.html` and in `assets/main.js` (the contact form). Search for
`254182800321` and update all occurrences if the number changes.

## Contact form

The form has no backend. On submit it validates the fields, builds a prefilled
message and opens WhatsApp in a new tab (`assets/main.js`). Nothing is sent until
the visitor presses send inside WhatsApp.

## Run locally

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. Opening the HTML directly also works, but a local
server matches GitHub Pages more closely.

## Deploy

Every push to `main` triggers the **Deploy to GitHub Pages** workflow. Check the
**Actions** tab if a deploy fails. The workflow enables Pages automatically on
the first run; the repository setting is **Settings → Pages → Source: GitHub
Actions**.

Pages use relative asset paths, so the site works at the project URL
(`/Gusii-digital/`). `404.html` uses project-root paths
(`/Gusii-digital/...`) so its styles and links still load on deep broken URLs.
If a custom domain is added, update those 404 paths plus the per-page
`canonical`/Open Graph URLs, `robots.txt` and `sitemap.xml`.

## Content note

The site deliberately avoids invented testimonials, client counts, results and
prices. Monetisation copy is explicit that income is not guaranteed. Once real
client proof exists, add it (with permission) rather than inventing placeholder
claims.
