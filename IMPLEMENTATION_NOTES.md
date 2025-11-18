# Reli Landing Page - Figma Design Implementation

## Overview
This document outlines the implementation of the new Reli landing page based on the Figma design (node-id: 5056-831).

## Changes Made

### 1. Design System Updates
- **Tailwind Config**: Added new color tokens matching Figma design
  - Primary Blue: `#3758f9`
  - Secondary Green: `#13C296`
  - Neutral colors: `#F5F5F5`, `#E5E7EB`
  - Dark: `#111928`
- **Typography**: Added Inter font family alongside existing Poppins
- **Custom Shadows**: Added `shadow-custom` and `shadow-custom-inset` utilities

### 2. New Components Created

#### Header (`/components/Header.tsx`)
- Fixed top navigation bar
- Reli logo with primary blue color
- Navigation links: ¿Por qué Reli?, ¿Cómo funciona?, Substack/Blog, Precios
- Sign Up and Sign In buttons
- Mobile responsive menu

#### Hero (`/components/Hero.tsx`)
- Welcome badge
- Main headline: "La Solución #1 de Abogados de Bolsillo en México"
- CTA button
- Video placeholder with play button
- Background wave SVG design

#### WhyReli (`/components/WhyReli.tsx`)
- Section badge
- Value proposition text

#### UseCases (`/components/UseCases.tsx`)
- 4 use case cards with sticky scroll effect
- Cards: "A common problem", "The Alternatives", "That's why Reli", "What are we looking for?"
- Each card includes image, title, description, and CTA button

#### Process (`/components/Process.tsx`)
- "How Reli AI Works" section
- 3-step process with sticky scroll effect
- Step 1: Schedule a free call
- Step 2: We build your model
- Step 3: We support you

#### Features (`/components/Features.tsx`)
- Feature highlight card
- "Access to All Regulations" feature

#### UserJourney (`/components/UserJourney.tsx`)
- User persona story
- "Miguel, 31 years old, Tax Lawyer"

#### NumbersReli (`/components/NumbersReli.tsx`)
- Statistics grid with 6 metrics
- Icons using lucide-react
- Circular background design
- Tagline: "Tu Guía en el Entramado Jurídico Mexicano"

#### Testimonials (`/components/Testimonials.tsx`)
- Testimonial carousel
- Navigation arrows
- Quote icon decoration

#### Pricing (`/components/Pricing.tsx`)
- Monthly/Annual toggle
- 3 pricing tiers: Basic, Pro (recommended), Basic
- Feature lists with checkmarks
- "Try Reli AI for free" CTA

#### Seguridad (`/components/Seguridad.tsx`)
- 3 certification cards: NOM 151, SOC-2, ISO-27000
- Icon decorations
- Gradient backgrounds

#### Footer (`/components/Footer.tsx`)
- Reli logo
- Company links section
- Newsletter signup form
- Social media links (LinkedIn, Twitter, Instagram)

### 3. Layout Updates
- Updated `layout.tsx` to properly position Header and Footer
- Removed sticky wrapper from Header (now fixed in component)

### 4. Main Page Structure (`page.tsx`)
New section order:
1. Hero
2. Why Reli
3. Use Cases
4. Process
5. Features
6. User Journey
7. Numbers Reli
8. Testimonials
9. Pricing
10. Security

## Design Features Implemented

### Sticky Scroll Effects
- **UseCases Section**: Cards stack on top of each other as user scrolls
- **Process Section**: Steps appear with staggered z-index

### Color Scheme
- Primary Blue: `#3758f9` - Used for brand elements, CTAs
- Secondary Green: `#13C296` - Used for accents, secondary CTAs
- Neutral: `#F5F5F5` - Background color
- Dark: `#111928` - Footer, dark sections

### Typography
- **Headlines**: Inter font, semibold, 36px
- **Body Text**: Inter font, regular, 16px
- **Buttons**: Inter font, medium, 16px
- **Logo**: Poppins font, semibold, 48px

## Image Placeholders
The following image placeholders need to be replaced with actual assets:
- Hero video thumbnail
- Use case images (4 images)
- Process step images (3 images)
- Feature illustration
- User journey photo
- All icon assets

## Responsive Considerations
All components include:
- Mobile-first approach
- Breakpoint at `lg:` (1024px)
- Flexbox and Grid layouts that adapt
- Hidden/visible elements for mobile menu

## Next Steps
1. Replace placeholder images with actual design assets
2. Implement video player functionality in Hero section
3. Add actual testimonial content
4. Connect newsletter signup to backend
5. Add smooth scroll behavior for navigation links
6. Test all interactive elements
7. Optimize for performance
8. Add loading states for images

## Dependencies
- Next.js 14+
- React 18+
- Tailwind CSS 3+
- lucide-react (for icons)
- TypeScript

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
