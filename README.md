# arttuputtonen.com

Personal site. Vite, React, React Router and Tailwind CSS.

## Develop

```bash
npm install
npm run dev
```

## Edit content

All text lives in `src/content/`:

- `profile.js`: name, email, availability line, social links, navigation
- `projects.js`: Work page and case studies (`featured: true` puts a project on the home page)
- `services.js`: Services page
- `about.js`: story, experience, education, skills, languages. The Home page, the About page and the PDF CV are all built from this file
- `offscreen.js`: speedcubing stats and climbing

Images go in `src/assets/img/` as WebP.

## CV (PDF)

```bash
brew install tectonic   # once
npm run cv
```

Builds `cv/cv.tex` from `src/content/about.js` and `profile.js`, compiles it with Tectonic and writes `public/Arttu-Puttonen-CV.pdf`, which the site links to. Run it after editing the content, before `npm run build`. The layout lives in `scripts/build-cv.mjs`; the Schibsted Grotesk font files in `cv/fonts/` are under the SIL Open Font License.

## Deploy

```bash
npm run build
```

- **Hostinger:** upload the contents of `dist/` to `public_html`. `public/.htaccess` is copied into the build and sends every route to `index.html`, so links like `/work/kuutiostore` work.
- **Vercel:** `vercel.json` has the same rewrite.
