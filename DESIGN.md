# The Purely Company -- Design System

> Organic grass-fed beef tallow skincare. Handmade in Tampa, FL.
> "Changing the world, one pure ingredient at a time."

## Design Philosophy

**Farmhouse Luxury** -- Where raw, earthy authenticity meets editorial-grade skincare presentation. Think Aesop's restraint + Herbivore's botanical warmth + the intimacy of a handmade brand. The site should feel like opening a beautifully wrapped package from a friend who happens to make the best skincare you've ever used.

Not clinical. Not sterile. Warm, textured, alive -- but undeniably premium.

## References

| Brand | What We Steal |
|-------|--------------|
| Aesop | Sharp typography hierarchy, warm cream tones, literary brand voice, zero border radius on key elements |
| Necessaire | Pill-shaped CTAs, clean product grid, clinical-meets-warm layout, generous whitespace |
| Herbivore Botanicals | Serif/sans pairing for organic luxury, large hero type (70px+), editorial product photography style |

---

## Color Palette (oklch)

```css
:root {
  /* Foundations */
  --color-cream:        oklch(0.96 0.02 80);    /* #F6F0E4 -- warm parchment base */
  --color-cream-light:  oklch(0.98 0.01 80);    /* #FDFAF4 -- card backgrounds */
  --color-dark:         oklch(0.25 0.02 60);    /* #36302A -- primary text, rich espresso */
  --color-dark-deep:    oklch(0.15 0.02 60);    /* #1E1A16 -- hero overlays, footer */

  /* Brand */
  --color-rose:         oklch(0.75 0.08 20);    /* #D2A0A0 -- primary brand accent */
  --color-rose-light:   oklch(0.88 0.04 20);    /* #E8D0D0 -- hover states, subtle accents */
  --color-rose-deep:    oklch(0.60 0.10 20);    /* #A67070 -- active states, emphasis */

  /* Earth */
  --color-honey:        oklch(0.78 0.10 80);    /* #C8A050 -- secondary accent, highlights */
  --color-sage:         oklch(0.65 0.06 150);   /* #7A9A80 -- ingredient badges, trust signals */
  --color-clay:         oklch(0.55 0.08 50);    /* #8C6A50 -- tertiary, warm mid-tone */

  /* Functional */
  --color-success:      oklch(0.65 0.15 150);   /* green confirmation */
  --color-error:        oklch(0.60 0.20 25);    /* warm red errors */
  --color-white:        oklch(1.00 0.00 0);     /* pure white for contrast */
}
```

### Usage Rules
- **Hero sections**: `--color-dark-deep` background with cream text. Cinematic, moody.
- **Body sections**: Alternate `--color-cream` and `--color-cream-light`
- **Product cards**: `--color-cream-light` with glassmorphism on hover
- **CTAs**: `--color-dark` fill with `--color-cream` text (primary), `--color-rose` fill (secondary)
- **Text**: `--color-dark` on light, `--color-cream` on dark. Never pure black or pure white body text.

---

## Typography

```css
:root {
  /* Headings -- Playfair Display (Google Fonts, free) */
  /* Organic luxury serif. Similar energy to Herbivore's OTJubilee but accessible. */
  --font-heading: 'Playfair Display', serif;

  /* Body -- DM Sans (Google Fonts, free) */
  /* Clean geometric sans. Reads well at small sizes. Modern but warm. */
  --font-body: 'DM Sans', sans-serif;

  /* Accent -- Cormorant Garamond (Google Fonts, free) */
  /* For pull quotes, ingredient callouts, editorial moments */
  --font-accent: 'Cormorant Garamond', serif;

  /* Scale (desktop) */
  --text-hero:    clamp(4rem, 8vw, 6rem);      /* 64-96px hero headlines */
  --text-h1:      clamp(2.75rem, 5vw, 4rem);   /* 44-64px */
  --text-h2:      clamp(2rem, 3.5vw, 2.8rem);  /* 32-45px */
  --text-h3:      clamp(1.5rem, 2.5vw, 2rem);  /* 24-32px */
  --text-body:    clamp(1rem, 1.2vw, 1.15rem);  /* 16-18px */
  --text-small:   clamp(0.8rem, 1vw, 0.9rem);   /* 13-14px */
  --text-caption:  0.75rem;                       /* 12px */

  /* Line heights */
  --leading-tight:  1.1;   /* headings */
  --leading-normal: 1.6;   /* body */
  --leading-relaxed: 1.8;  /* long-form */

  /* Letter spacing */
  --tracking-tight:  -0.02em;  /* large headings */
  --tracking-normal:  0;
  --tracking-wide:    0.08em;  /* caps labels, nav */
  --tracking-wider:   0.15em;  /* badge text */
}
```

### Hierarchy Rules
- Hero headline: `--font-heading` at `--text-hero`, `--leading-tight`, `--tracking-tight`
- Section titles: `--font-heading` at `--text-h2`
- Product names: `--font-heading` at `--text-h3`
- Body copy: `--font-body` at `--text-body`, `--leading-normal`
- Navigation & labels: `--font-body`, `--tracking-wide`, uppercase
- Testimonial quotes: `--font-accent`, italic, `--text-h3`
- Ingredient callouts: `--font-accent`, `--text-body`, `--tracking-wide`

---

## Spacing System

```css
:root {
  --space-4:   0.25rem;   /* 4px -- micro gaps */
  --space-8:   0.5rem;    /* 8px -- inline spacing */
  --space-16:  1rem;      /* 16px -- component padding */
  --space-24:  1.5rem;    /* 24px -- card padding */
  --space-48:  3rem;      /* 48px -- section inner spacing */
  --space-80:  5rem;      /* 80px -- section padding desktop */
  --space-120: 7.5rem;    /* 120px -- hero breathing room */
}
```

- **Section padding**: `--space-80` top/bottom minimum on desktop, `--space-48` on mobile
- **Container**: `max-w-7xl` (1280px) centered
- **Product grid**: 3-col desktop, 2-col tablet, 1-col mobile, `--space-24` gap
- **Cards**: `--space-24` internal padding

---

## Layout & Components

### Hero (Homepage)
- **Height**: 90vh minimum
- **Background**: Full-bleed lifestyle image (jars on natural surface -- wood, linen, stone) with `--color-dark-deep` overlay at 40-60%
- **Content**: Centered headline + subtitle + CTA
- **Motion**: Headline fades up (translateY 30px -> 0, 0.6s ease-out), subtitle follows 0.2s delay
- **Texture**: Subtle noise grain overlay on dark sections (opacity 0.03)

### Product Cards
- **Style**: Glassmorphism on hover -- `backdrop-blur(16px)`, translucent `--color-cream-light` at 0.8 opacity
- **Image**: Square aspect ratio, slight scale on hover (1.02, 0.4s)
- **Shadow**: `0 8px 32px oklch(0.25 0.02 60 / 0.08)` resting, deeper on hover
- **Border**: 1px `--color-rose-light` at 0.3 opacity
- **Content**: Product name (heading font), price, "Add to Cart" pill button

### Product Detail Page
- **Layout**: Two-column -- left: 3D spinning jar (React Three Fiber), right: product info
- **3D Jar**: Auto-rotate slowly (0.3 rad/s), draggable for manual rotation, environment lighting (warm studio HDRI)
- **Info stack**: Name, price, scent selector (pill chips), size selector, quantity, Add to Cart
- **Below fold**: Ingredients section with animated reveal, "How to Use" accordion, reviews

### Testimonials
- **Style**: Large italic quote in `--font-accent`, attribution below
- **Layout**: Full-width section with `--color-cream` bg, testimonials in a horizontal scroll/carousel
- **Motion**: Fade in on scroll, stagger 0.15s between quotes

### About/Origin Story
- **Layout**: Split -- image left (her making tallow), story right
- **Treatment**: The IG story content is gold -- expand on "born out of a personal mission for my son"
- **Motion**: Image parallax on scroll (subtle, 20px range)

### Footer
- **Background**: `--color-dark-deep`
- **Content**: Logo, nav links, social icons, newsletter signup, copyright
- **Newsletter**: Input + pill button, `--color-rose` accent

---

## Motion & Animation

```
Engine: motion/react (framer-motion)
Scroll: Lenis smooth scroll (always on)
3D: React Three Fiber + @react-three/drei
```

### Reveal Patterns
- **Fade Up**: `opacity: 0 -> 1, translateY: 30px -> 0, duration: 0.5s, ease: [0.25, 0.46, 0.45, 0.94]`
- **Stagger Children**: 0.1-0.15s delay between siblings
- **Scale In**: Products/cards: `scale: 0.95 -> 1, opacity: 0 -> 1, duration: 0.4s`
- **Parallax**: Hero image: `translateY` linked to scroll, range: -40px to 40px

### Interaction
- **Button hover**: Scale 1.02, shadow deepens, 0.2s
- **Card hover**: Glass effect activates, image scales 1.02, 0.3s
- **Product image**: On hover, subtle rotation hint (nudge 5deg then back) to signal 3D interactivity
- **Page transitions**: Fade between routes, 0.3s

### Performance Budget
- No animation on `prefers-reduced-motion`
- 3D jar loads lazy, shows static image as fallback
- All motion durations 0.2-0.6s max
- Never animate layout properties (width, height) -- transform and opacity only

---

## 3D Product Visualization

```
Stack: React Three Fiber + @react-three/drei
Models: GLTF/GLB (optimized, <2MB per jar)
```

### Jar Setup
- **Geometry**: Cylindrical jar with lid, modeled from product photos or basic primitive
- **Material**: PBR -- slightly glossy glass/plastic for jar, matte for label
- **Label**: Texture mapped from actual product label photography
- **Lighting**: 3-point warm studio (key + fill + rim), environment map for reflections
- **Interaction**: Auto-rotate, drag to spin, pinch to zoom on mobile
- **Fallback**: High-res static image for low-power devices / no WebGL

---

## Responsive Breakpoints

```css
/* Tailwind defaults */
sm:  640px    /* Mobile landscape */
md:  768px    /* Tablet */
lg:  1024px   /* Desktop */
xl:  1280px   /* Large desktop */
2xl: 1536px   /* Ultra-wide */
```

### Mobile Adaptations
- Hero: 70vh (not 90vh), headline scaled down via clamp
- Product grid: Single column, full-width cards
- 3D jar: Reduced polygon count, touch to rotate
- Section padding: `--space-48` instead of `--space-80`
- Navigation: Hamburger with full-screen overlay (dark, glass blur)

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Animation | motion/react |
| Smooth Scroll | Lenis |
| 3D | React Three Fiber + drei |
| Commerce Backend | Shopify (Storefront API, headless) |
| Deployment | Vercel |
| Fonts | Google Fonts (Playfair Display, DM Sans, Cormorant Garamond) |
| Icons | Lucide React |

---

## Pages

1. **Home** -- Hero + Featured Products + Origin Story + Testimonials + CTA
2. **Shop** -- Product grid with category filters (All, Body, Lips, For Him)
3. **Product Detail** -- 3D jar + info + ingredients + reviews
4. **About** -- Full origin story, sourcing (Olivor Farms), process, mission
5. **Contact** -- Form + email + social links
6. **Cart** -- Slide-out drawer (not separate page)
7. **Checkout** -- Shopify hosted checkout (handles payments, shipping, tax)

---

## Brand Voice (for copy)

- **Tone**: Warm, genuine, slightly playful -- like talking to a friend who really knows skincare
- **Never**: Clinical, corporate, pushy, or generic wellness-speak
- **Hero headline examples**:
  - "Skin that remembers what real nourishment feels like."
  - "Grass-fed. Organic. Handmade with intention."
  - "The ingredient list your skin has been waiting for."
- **CTA style**: "Shop Tallow" / "Discover Our Story" / "Add to Cart" (not "BUY NOW" energy)

---

## Image Strategy

- **Product photography**: Her existing jar photos are good -- need consistent lighting and backgrounds
- **Lifestyle**: Jars on natural surfaces (wood cutting boards, linen, stone, herbs)
- **Texture overlays**: Subtle noise grain on dark sections, linen texture on light sections
- **Hero**: Cinematic, moody -- warm golden hour lighting on product arrangement
- **About page**: Behind-the-scenes making process, the farm connection (Olivor Farms)
