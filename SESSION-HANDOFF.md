# The Purely Company — Session Handoff

## Resume Prompt (copy-paste into new session)

```
Resume The Purely Company website build at C:\AI_OS\03_WEBSITES\thepurelycompany

Read SESSION-HANDOFF.md in the project root for full context, then execute the v4 upgrade plan.

CRITICAL: Before starting ANY work, verify all MCP servers are connected: `claude mcp list`. We need magic-ui, 21st-magic, shadcn, gsap-master, firecrawl, apify, playwright, context7 all green. Fix any that are down first.

This is a gift website for my friend's organic beef tallow skincare brand (thepurelycompany.com, IG: @thepurelycompany). We scraped her Squarespace site and IG, built a Next.js 15 headless Shopify frontend. The v3 build is functional but was audited as 6-7/10 — needs Magic UI components, better 3D jar, trust elements, and polish to hit the $100K standard.

Execute the v4 upgrade list in SESSION-HANDOFF.md. Use magic-ui MCP, 21st-magic MCP, shadcn MCP, gsap-master MCP, and the UUPM skill. Be brutally critical — if it could be a template, redo it. Screenshot desktop (1440px) + mobile (390px) after every major change. Don't stop until it's embarrassing for her competitors.
```

## Project State

### Stack
- Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript
- motion/react + Lenis + GSAP + @gsap/react
- @react-three/fiber + @react-three/drei + three
- zustand, zod, lucide-react, clsx, tailwind-merge, class-variance-authority
- Playwright (dev)

### What's Built (v3)
- Video hero (busy-day.mp4 background, GSAP word-by-word headline reveal)
- 3D spinning jar (R3F cylinder with OrbitControls — NEEDS UPGRADE)
- Product showcase (size/scent selectors, cursor spotlight cards)
- Origin story (inline video, GSAP ScrollTrigger entrance)
- Ingredients bento grid (spotlight cards, Olivor Farms mention)
- Testimonials horizontal scroll carousel (glass cards, verified badges)
- Instagram feed grid (4 photos with hover overlay)
- CTA banner + Footer with newsletter
- Navbar (transparent→solid on scroll, mobile overlay)
- Lenis smooth scroll wrapping entire app
- oklch color system in @theme inline (FIXED — was circular, now direct values)
- Build compiles clean: `npm run build` passes

### Assets Downloaded
**Product images** (`/public/images/products/`):
- whipped-tallow-1.2oz.jpg, whipped-tallow-2.5oz.jpg, whipped-tallow-3.2oz.jpg
- tallow-lip-balm.jpg, lip-balm-alt.jpg, product-closeup.jpg

**Lifestyle** (`/public/images/lifestyle/`):
- hero-jars.jpg, hero-main.jpg, lifestyle-1.jpg

**IG photos** (`/public/images/ig/`):
- stocking-stuffers.jpg, gingerbread-display.jpg, under-eye-cream.jpg
- mothers-day.jpg, difference.jpg, restock.jpg, testimony.jpg

**Videos** (`/public/images/videos/`):
- origin-story.mp4 (12MB), busy-day.mp4 (14MB), baby-jesus.mp4 (2MB)
- leak-it.mp4 (4MB), holiday-preorder.mp4 (1MB), website-live.mp4 (5MB), calling-moms.mp4 (1MB)

### Brand Data
- **Name:** The Purely Company
- **Owner:** Tampa, FL mom — started for son's eczema
- **IG:** @thepurelycompany (243 followers, 32 posts, active)
- **Email:** ThePurelyCompany@yahoo.com
- **Supplier:** Olivor Farms (grass-fed tallow)
- **Social proof:** Bobby Parrish (verified IG, tagged in post)
- **Products:** Whipped Tallow (3 sizes, 6+ scents), Lip Balm, "For Him", Under-eye cream, Holiday Trio Box
- **Pricing:** 1.2oz $15, 2.5oz $25, 3.2oz $30, Lip Balm $10, Under-eye $20
- **Scents:** Unscented, Vanilla, Lavender, Frankincense, Peppermint, Candy Cane, Pine, Gingerbread
- **Testimonials (real):**
  - Ari: baby eczema completely gone
  - Juliana: sun relief overnight, no peeling
  - Rose: mom noticed healthy face

### Design System (DESIGN.md in project root)
- Palette: oklch — cream, cream-light, dark, dark-deep, rose, rose-light, rose-deep, honey, sage
- Fonts: Playfair Display (headings, 800), DM Sans (body, 300-600), Cormorant Garamond (accent/quotes)
- Spacing: 8/16/24/48/80/120 scale, 80px+ section padding desktop
- Philosophy: "Farmhouse Luxury" — Aesop restraint + Herbivore warmth + handmade authenticity

---

## V4 UPGRADE LIST (execute in order)

### 1. Install Magic UI Components
Use magic-ui MCP (`mcp__magic-ui__getRegistryItem`) or shadcn MCP to install:
- `shimmer-button` — for primary CTAs (Shop Collection, Add to Cart)
- `marquee` — for testimonials infinite scroll AND ingredient/benefit ticker
- `shine-border` — for featured product card and hero CTA
- `number-ticker` — for "243+ happy customers", "100% organic" stats
- `blur-fade` — for section entrance animations (replace some motion.div)

Also search 21st-magic MCP for:
- Premium hero sections with video backgrounds
- Glass product cards
- Animated testimonial components

### 2. Fix 3D Jar (CRITICAL — currently looks like a tutorial)
File: `src/components/jar-3d.tsx`
- Use `useTexture` from drei to map `/images/products/whipped-tallow-2.5oz.jpg` as label texture on the cylinder
- Switch from `MeshStandardMaterial` to `MeshPhysicalMaterial` with clearcoat for glossy jar look
- Add `MeshTransmissionMaterial` on lid for subtle glass reflections
- Switch Environment preset from "apartment" to "studio" for product photography lighting
- Add a subtle floating animation (drei `Float` component) instead of just rotation
- The jar should look like something from an Apple product page

### 3. Hero Upgrades
File: `src/components/hero.tsx`
- Add Magic UI `shimmer-button` for "Shop Collection" CTA (replace plain <a> tag)
- Add `shine-border` around the CTA for glow effect
- Add social proof below CTA: "⭐⭐⭐⭐⭐ Loved by 243+ customers" using `number-ticker`
- Add Magic UI gradient background behind text (animated aurora/gradient to layer over video)
- The eyebrow text should use a subtle shimmer animation

### 4. Testimonials → Marquee
File: `src/components/testimonials.tsx`
- Replace manual horizontal scroll with Magic UI `marquee` component
- Add 2 more testimonials (from IG: the TESTIMONY TIME post customer, and the "CALLING ALL MOMS" collab)
- Add star ratings (5 filled stars) above each quote
- Add customer initial avatars (colored circles with first letter)
- Two-row marquee: row 1 scrolls right, row 2 scrolls left (creates premium depth)

### 5. Add Trust Bar Section (NEW)
Create `src/components/trust-bar.tsx`:
- Place between hero and product showcase
- Horizontal strip with: "As featured by Bobby Parrish ✓" + "243+ Happy Customers" + "100% Organic" + "Handmade in Tampa"
- Use Magic UI `number-ticker` for the numbers
- Magic UI `marquee` if too many items for one row
- Subtle cream-light background, small text, tracked wide

### 6. Add FAQ Section (NEW)
Create `src/components/faq.tsx`:
- Place before CTA banner
- Accordion style (shadcn Accordion or custom)
- Questions from common IG comments:
  1. "Is tallow safe for sensitive skin?" → Yes, our tallow is 100% organic and free from synthetic ingredients. Many customers with eczema and sensitive skin have seen amazing results.
  2. "What does it smell like?" → Our unscented version has a very mild, natural scent. We also offer Vanilla, Lavender, Frankincense, Peppermint, and seasonal scents.
  3. "How long does a jar last?" → The 1.2 oz lasts about 3-4 weeks with daily face use. The 3.2 oz lasts 2-3 months.
  4. "Do you ship nationwide?" → Yes! We ship everywhere in the US. Tampa locals can choose free local pickup at checkout.
  5. "What's the difference between regular and 'For Him'?" → Our "For Him" formula is the same premium tallow base, formulated for beard care, tattoo aftercare, and post-shave use with masculine scent options.

### 7. Origin Story — Add Founder Photo
File: `src/components/origin-story.tsx`
- Add her IG profile photo (download fresh from Apify if needed)
- Show it as a rounded portrait next to her story
- Make the copy more personal — channel her IG personality (funny, real, not corporate)

### 8. Product Cards — Animate-Shine on CTA
File: `src/components/product-showcase.tsx`
- "Add to Cart" button → Magic UI `shimmer-button`
- Featured product card wrapper → `shine-border`
- Add "Bestseller" badge on Whipped Tallow
- Add ingredient icon row (3 small icons: tallow, jojoba, organic badge)

### 9. Ingredient Cards — Add Images
File: `src/components/ingredients.tsx`
- Small cards should have small lifestyle thumbnails, not just icons
- Add a horizontal `marquee` of benefit phrases below the bento: "Deeply Hydrating • Vitamin Rich • No Parabens • Grass-Fed • Handmade • Organic"

### 10. Final Polish
- Loading animation: branded splash screen for first visit
- Page scroll progress bar at top (thin rose line)
- Cursor spotlight on navbar links
- Cart badge: hide when count is 0
- Meta images + Open Graph tags with product imagery

### SCREENSHOT AFTER EACH MAJOR CHANGE
```js
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 400) {
    await page.evaluate(sy => window.scrollTo(0, sy), y);
    await page.waitForTimeout(300);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshot-desktop-v4.png', fullPage: true });
  // Mobile
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await mobile.waitForTimeout(2000);
  const mh = await mobile.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < mh; y += 300) {
    await mobile.evaluate(sy => window.scrollTo(0, sy), y);
    await mobile.waitForTimeout(300);
  }
  await mobile.evaluate(() => window.scrollTo(0, 0));
  await mobile.waitForTimeout(1000);
  await mobile.screenshot({ path: 'screenshot-mobile-v4.png', fullPage: true });
  await browser.close();
})();
```

### QUALITY GATES (must pass before showing user)
- [ ] npm run build — zero errors
- [ ] Desktop screenshot at 1440px — every section has content, proper spacing
- [ ] Mobile screenshot at 390px — nothing broken, readable
- [ ] 3D jar looks like a real product, not a tutorial cylinder
- [ ] Magic UI shimmer/shine effects visible on CTAs
- [ ] Marquee testimonials auto-scrolling
- [ ] Trust bar with number tickers
- [ ] FAQ section with real questions
- [ ] Would this embarrass you next to Aesop/Nécessaire? If no → redo

### REFERENCE DOCS (read on-demand from ~/.claude/reference/)
- `visual-effects.md` — glassmorphism, 3D, particles, noise recipes
- `premium-stack.md` — exact packages + install commands
- `design-system.md` — spacing, glass, motion, responsive rules
- `~/.claude/projects/C--Users-HP/memory/motionsites-methodology.md` — 7-pattern premium UI
- `~/.claude/projects/C--Users-HP/memory/uupm-skill-installed.md` — UUPM search commands

### UUPM SEARCH COMMANDS (use before building)
```bash
python3 ~/.claude/skills/ui-ux-pro-max/scripts/search.py "luxury skincare" --domain style -n 3
python3 ~/.claude/skills/ui-ux-pro-max/scripts/search.py "product showcase" --domain landing -n 3
python3 ~/.claude/skills/ui-ux-pro-max/scripts/search.py "earth warm organic" --domain color -n 3
```
