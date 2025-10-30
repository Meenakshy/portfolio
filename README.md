
# Portfolio — Meenakshy Kurup

Minimal, professional React (Vite) portfolio with hardcoded details and project cards.
Deployed to **GitHub Pages via GitHub Actions**.

## Local Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages (Actions)
1. Create a new GitHub repo (e.g., `portfolio-react`) and push this code.
2. **Settings → Pages**: Set "Build and deployment" to **GitHub Actions** (default).
3. Ensure the branch is `main`. On every push to `main`, the workflow will build and deploy to Pages.

### Vite base path
- If your site is at `https://USERNAME.github.io/REPO`, set `base: '/REPO/'` in `vite.config.js` (already set to `/portfolio-react/`).
- If you use `USERNAME.github.io` as the repo (user site), set `base: '/'`.

## Customize Content
Edit hardcoded data in `src/data.js`:
- Profile (name, title, summary, links)
- Experience / Projects / Skills / Education / Certifications

## License
MIT
