# Gusii Digital — website

A single-page static site, deployed to GitHub Pages with GitHub Actions.
No build step, no dependencies: what's in this folder is what gets served.

## Files

- `index.html` — the landing page
- `404.html` — not-found page
- `assets/styles.css` — all styling
- `.github/workflows/pages.yml` — the deploy pipeline

## First deploy

1. Connect this folder to your GitHub repo and push:

   ```sh
   git remote add origin https://github.com/benitchris/Gusii-digital.git
   git add -A
   git commit -m "Add site and GitHub Pages workflow"
   git push -u origin main
   ```

   If the repo already has commits, run `git pull --rebase origin main` before pushing.

2. On GitHub, open **Settings → Pages** and set **Build and deployment → Source**
   to **GitHub Actions**. The workflow asks GitHub to do this automatically
   (`enablement: true`), so this is usually already done; set it manually only
   if the first run complains that Pages isn't enabled.

3. Open the **Actions** tab and watch the **Deploy to GitHub Pages** run. When it's
   green, the site is live at:

   `https://benitchris.github.io/Gusii-digital/`

Every push to `main` after that redeploys automatically.

## Notes

- The workflow triggers on `main`. If your repo's default branch is `master`,
  either rename it (`git branch -m master main`) or update the branch in
  `pages.yml`.
- All asset paths are relative, so the site works both at a project URL
  (`/REPO/`) and at a user site root.
- To preview locally: `python3 -m http.server 8000`, then open
  <http://localhost:8000>.
- Custom domain: **Settings → Pages → Custom domain**. GitHub adds a `CNAME`
  file; keep it in the repo so deploys don't drop the domain.
- The footer year updates itself via a small inline script.
- Enquiries go to WhatsApp `+254 182 800 321` via the link in `index.html`
  (`https://wa.me/254182800321`). Change the number in that one place if it
  ever changes.
