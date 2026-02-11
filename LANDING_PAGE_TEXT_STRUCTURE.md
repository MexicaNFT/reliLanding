# Reli Landing Page: Text and Structure

This file documents the current user-facing structure and key copy.

## 1. Header (global)

Source: `src/app/components/Header.tsx`

### Navigation links

1. `¿Por qué Reli?` -> `#use-cases`
2. `¿Cómo funciona?` -> `#how-it-works`
3. `Substack/Blog` -> `https://reliai.substack.com/`
4. `Precios` -> `#pricing`

### Actions

- `Sign Up` -> `https://app.reli.ai`
- `Sign In` -> `https://app.reli.ai`

## 2. Homepage section order (`/`)

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

## 3. Homepage content map

## 3.1 Hero

Source: `src/app/components/Hero.tsx`

- Badge: `Bienvenido a Reli`
- Headline: `La Solución #1 de Abogados` / `de Bolsillo en México`
- Primary CTA: `Prueba Reli`
- Secondary CTA on media block: Play icon (product video area)

## 3.2 Why Reli

Source: `src/app/components/WhyReli.tsx`

- Badge: `¿Qué es Reli?`
- Core statement: Reli removes tedious legal work so lawyers focus on high-value work.

## 3.3 Use Cases (`#use-cases`)

Source: `src/app/components/UseCases.tsx`

- Section badge: `¿Por qué Reli?`
- Card 1: `Un Problema Común`
- Card 2: `Las Alternativas`
- Card 3: `Por eso nace Reli`
- CTA in final card: `Crear cuenta grátis` -> `https://app.reli.ai`

## 3.4 Process (`#how-it-works`)

Source: `src/app/components/Process.tsx`

- Section badge: `El Proceso`
- Steps:
1. `Schedule a free call with our team`
2. `We build your model in less than a week.`
3. `We support you every step of the way`

## 3.5 Features

Source: `src/app/components/Features.tsx`

Feature carousel includes:

1. SEARCH: `Access to All Regulations`
2. ASSISTANT: `AI-Powered Legal Assistant`
3. RESEARCH: `Deep Legal Research`
4. NOTES: `Smart Note Taking`
5. LIBRARY: `Personal Legal Library`

## 3.6 User Journey

Source: `src/app/components/UserJourney.tsx`

- Section label: `User Journey`
- Profile: `Miguel, 31 years old, Tax Lawyer`

## 3.7 Numbers Reli

Source: `src/app/components/NumbersReli.tsx`

- Section badge: `Reli en Números`
- Stats communicate coverage breadth, updates, and usage scale.

## 3.8 Testimonials

Source: `src/app/components/Testimonials.tsx`

- Section badge: `Testimonios`
- Carousel of testimonial quotes and author lines.

## 3.9 Security

Source: `src/app/components/Seguridad.tsx`

- Section badge: `Seguridad`
- Main message focused on security-first design and data protection.
- Certifications displayed: `NOM 151`, `SOC-2`, `ISO-27000`

## 3.10 Pricing (`#pricing`)

Source: `src/app/components/Pricing.tsx`

- Section badge: `Precios`
- Billing toggle labels: `Mensual` / `Anual`
- Plan cards:
1. `Free` (`$0 MXN`) with starter limits and `Empezar gratis`
2. `Basic` (`$349 MXN` monthly / `$3,499 MXN` annual), marked `Recomendado`, CTA `Pasar a Basic`
- Plan CTAs route to `https://app.reli.ai`

## 4. Footer (global)

Source: `src/app/components/Footer.tsx`

### Columns

- Company (`About us`, `Contact us`)
- Our Products
- Apps
- Help & Support
- Políticas de Uso
- Social Media

### Legal links (active)

- `Política de Privacidad` -> `/privacy-policy`
- `Términos y Condiciones` -> `/terms&conditions`

## 5. Non-home routes and behavior

## `/contact`

Source: `src/app/contact/page.tsx`

- Collects user data via validated form.
- On submit, builds a formatted message and redirects to WhatsApp chat.

## `/support`

Source: `src/app/support/page.tsx`

- Renders embedded Tally form in iframe.

## `/privacy-policy`

Source: `src/app/privacy-policy/page.tsx`

- Full privacy policy text.

## `/terms&conditions`

Source: `src/app/terms&conditions/page.tsx`

- Full terms and conditions text.
