# Yashaswini Murthy — academic website

Personal academic website for Yashaswini Murthy, Assistant Professor in
Operations Research at The University of Texas at Austin.

The design uses UT Austin's official burnt orange (`#BF5700`), white, charcoal,
and limestone palette. The site is built with Next.js App Router through Vinext
and is published at [https://ymurthy.github.io](https://ymurthy.github.io).

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

Edits committed to `main` automatically run
`.github/workflows/build-static-site.yml`, which rebuilds the generated site
files served by GitHub Pages. The generated file list is recorded in
`.site-output-manifest`.

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

The static website is generated in `dist/client/`.

## Authentication

No SSH key is required when changes are made through GitHub's web interface or
an authenticated GitHub integration. For command-line pushes from a new
computer, use GitHub CLI authentication or an SSH key configured on that
computer.
