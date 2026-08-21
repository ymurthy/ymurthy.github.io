# Yashaswini Murthy — academic website

Personal academic website for Yashaswini Murthy, Assistant Professor in
Operations Research at The University of Texas at Austin.

The design follows a research-first, single-column academic layout and uses UT
Austin's official burnt orange (`#BF5700`), white, charcoal, and limestone
palette. The site is built with Next.js App Router through Vinext and exports to
static files for GitHub Pages.

## Pages

- Home, contact information, recruiting statement, news, and selected research
- Publications and recovered thesis PDFs
- Awards and honors
- Teaching
- Professional service

## Update content

- Home, news, and biography: `app/page.tsx`
- Publication records: `app/data/publications.ts`
- Awards: `app/awards/page.tsx`
- Teaching: `app/teaching/page.tsx`
- Service: `app/service/page.tsx`
- Colors and layout: `app/globals.css`
- Portrait and documents: `public/assets/`

## Run locally

Use Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Then open the local URL printed by the development server.

## Production build

```bash
npm run build
```

The static GitHub Pages artifact is generated in `dist/client/`.

## Publish with GitHub Pages

This repository includes `.github/workflows/deploy-pages.yml`. Push it to the
`main` branch of the `ymurthy.github.io` repository. In GitHub, open **Settings
→ Pages** and set **Source** to **GitHub Actions** if it is not selected already.
Each later push to `main` will rebuild and deploy the site automatically.

No SSH key is required when changes are made through GitHub's web interface or
an authenticated GitHub integration. For command-line pushes from a new
computer, use either GitHub CLI authentication or an SSH key configured on that
computer.
