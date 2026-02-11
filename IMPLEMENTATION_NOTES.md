# Reli Landing Page - Implementation Notes

## Overview

Current implementation of the Reli landing page in Next.js App Router.

## Homepage composition

`src/app/page.tsx` renders sections in this exact order:

1. Hero
2. Why Reli
3. Use Cases
4. Process
5. Features
6. User Journey
7. Numbers Reli
8. Testimonials
9. Security
10. Pricing

## Global layout

`src/app/layout.tsx` applies:

- Local Geist fonts
- Fixed header (`src/app/components/Header.tsx`)
- Shared footer (`src/app/components/Footer.tsx`)
- Global metadata and icon

## Active routes

- `/` landing page
- `/contact` contact form
- `/support` support form (Tally embed)
- `/privacy-policy` privacy policy (valid legal page linked in footer)
- `/terms&conditions` terms and conditions (valid legal page linked in footer)

## Component inventory (active)

- `Header.tsx`
- `Hero.tsx`
- `WhyReli.tsx`
- `UseCases.tsx`
- `Process.tsx`
- `Features.tsx`
- `UserJourney.tsx`
- `NumbersReli.tsx`
- `Testimonials.tsx`
- `Seguridad.tsx`
- `Pricing.tsx`
- `Footer.tsx`

## Integrations

### Contact flow (`/contact`)

- Validates user input with `react-hook-form + zod`.
- Builds a user message and redirects to WhatsApp URL (`wa.me`).
- No backend endpoint in this repo.

### Support flow (`/support`)

- Embeds external Tally form in an iframe.
- Injects `https://tally.so/widgets/embed.js` on mount.

### App access CTAs

- Sign Up / Sign In and pricing buttons link to `https://app.reli.ai`.

### Deployment

- `amplify.yml` defines AWS Amplify backend output generation and Next.js build steps.

## Assets currently in use

Used from `public/assets` by active components:

- `ReliLogo.svg`
- `half-circle.png`
- `un-problema-comun.png`
- `las-alternativas.png`
- `nace-reli.png`
- `Step-1-Call.png`
- `Step2-BuildModel.png`
- `Step3 - Support.png`
- `search.png`
- `Assistant.png`
- `Investigation.png`
- `notes.png`
- `circuit.png`
- `miguel_ejemplo.png`
- `product.mp4`

## Notes for future changes

- Keep legal content consistent with the footer links.
- Keep service URLs (app, WhatsApp, Tally) centralized and documented whenever changed.
- Re-run `npm run build` after content or dependency cleanup.
