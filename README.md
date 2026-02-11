# Reli Landing Page

Official marketing site for Reli, built with Next.js (App Router) and Tailwind CSS.

## What this project includes

- Landing page with 10 sections: Hero, Why Reli, Use Cases, Process, Features, User Journey, Numbers, Testimonials, Security, Pricing.
- Contact form route (`/contact`) that validates user input and redirects to WhatsApp with a pre-filled message.
- Support route (`/support`) that embeds a Tally form.
- Legal routes linked from footer:
  - Privacy Policy: `/privacy-policy`
  - Terms and Conditions: `/terms&conditions`

## Active external services

- `https://app.reli.ai` for Sign Up / Sign In and pricing CTAs.
- WhatsApp deep link (`https://wa.me/...`) from `/contact`.
- Tally embed (`https://tally.so/...`) on `/support`.
- AWS Amplify build/deploy via `amplify.yml`.

## Tech stack

- Next.js 14
- React 18
- TypeScript 5
- Tailwind CSS 3
- `lucide-react` (icons)
- `react-hook-form` + `zod` + `@hookform/resolvers` (contact form validation)

## Project structure

- `src/app/page.tsx`: Homepage section composition.
- `src/app/layout.tsx`: Global layout with shared header and footer.
- `src/app/components/*`: Landing page sections and shared UI blocks.
- `src/app/contact/page.tsx`: Contact flow to WhatsApp.
- `src/app/support/page.tsx`: Tally support form embed.
- `src/app/privacy-policy/page.tsx`: Valid privacy policy page.
- `src/app/terms&conditions/page.tsx`: Valid terms page.
- `public/assets/*`: Images/video used by homepage components.

## Local development

### Requirements

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build and deploy

### Production build

```bash
npm run build
npm run start
```

### AWS Amplify

`amplify.yml` contains backend output generation and frontend build steps.

## NPM scripts

- `npm run dev`: Start local dev server.
- `npm run build`: Build production bundle.
- `npm run start`: Serve production build.
- `npm run lint`: Next.js lint entrypoint (requires ESLint setup in repo).

## Maintenance notes

- Keep footer links in sync with legal/contact routes.
- If pricing copy or plan structure changes, update `src/app/components/Pricing.tsx` and docs.
- If contact/support provider links change (WhatsApp/Tally), update code and docs together.
