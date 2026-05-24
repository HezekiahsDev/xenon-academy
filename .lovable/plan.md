# Xenon Academy — Premium Landing Page

A dark-mode, Apple-meets-Web3 landing page for Xenon Academy. Cinematic typography, glassmorphism, electric Xenon blue glow, soft depth, and physics-based motion.

## Design system (src/styles.css)

Replace current tokens with a dark-first palette:

- `--background` #000000, layered surfaces #0A0A10 → #111118 → #1A1A22
- `--foreground` #FCFDFD, muted #87878C
- `--primary` #0201F3 (Electric Xenon), `--primary-glow` #4E4BFF
- `--accent` #7C7AFF, border `oklch(1 0 0 / 8%)`
- Gradients: `--gradient-primary` (135deg #0201F3 → #4E4BFF), `--gradient-cyber` (#0201F3 → #0E0E55), `--gradient-surface` (#111118 → #000000), `--gradient-mesh` (radial blue blooms)
- Shadows: `--shadow-glow` soft blue ambient, `--shadow-elevated` layered depth
- Glass utility: `bg-white/[0.03] backdrop-blur-xl border-white/[0.08]`
- Radii bumped to 1rem base for pill/rounded-xl feel

Typography: Space Grotesk (display) + Inter (body) via Google Fonts in `__root.tsx`. Tight tracking on headlines, generous line-height on body, max-w-2xl paragraphs.

## Page structure

Single route `src/routes/index.tsx` composing section components from `src/components/landing/`:

1. `Navbar` — sticky glass nav, logo mark, 4 links, primary CTA
2. `Hero` — oversized headline, gradient mesh bg, floating glass UI mockup, dual CTA, trust row
3. `Stats` — 4 floating glass stat cards with animated counters
4. `Programs` — 6 program cards (Full Stack, Web3, AI, Product Design, Cloud/DevOps, Cybersecurity) in responsive grid with glow-border hover
5. `WhyXenon` — Apple-style alternating zigzag feature blocks
6. `LearningExperience` — bento grid (AI learning, live mentorship, interactive classrooms, career, community)
7. `Testimonials` — horizontal carousel of glass quote cards
8. `Community` — Discord/hackathons/events with ambient glow panel
9. `FinalCTA` — full-bleed cinematic section, massive headline, glow CTA
10. `Footer` — minimal 4-column dark footer

SEO metadata set in the route's `head()`.

## Motion

Install `framer-motion`. Use:

- staggered fade+rise on section entry (`whileInView`, `viewport={{ once: true }}`)
- spring hover scale on cards/buttons
- subtle parallax on hero mesh
- animated gradient on primary CTA

No Three.js / R3F for v1 — CSS gradient mesh + blurred radial blooms achieve the cinematic feel without runtime cost. Can layer in later.

## Hero visual

Compose with pure CSS/SVG:

- Layered radial gradient blooms (Xenon blue) behind content
- Faint dotted/grid SVG overlay at 5% opacity
- Floating glass card mock showing a "lesson" UI (code snippet + progress)
- Soft particle dots via absolutely-positioned divs with slow float animation

## Components

All sections are small, focused files under `src/components/landing/`. Shared atoms: `GlassCard`, `GlowButton` (variant of shadcn Button), `SectionHeading`. Reuse existing shadcn Button with new `premium` variant.

## Responsive

Mobile-first Tailwind: stack hero, single-column programs at <md, 2-col at md, 3-col at lg. Fluid typography via `clamp()` on hero headline.

## Out of scope (v1)

- Backend / auth / Lovable Cloud (pure marketing page)
- Real 3D / WebGL
- Form submission wiring (CTAs are visual)

## Technical notes

- Tailwind v4 tokens defined in `src/styles.css` `@theme inline` block
- Force dark theme by adding `class="dark"` to `<html>` in `__root.tsx` shell, and setting dark values as the `:root` defaults
- Add Google Fonts `<link>` via `head().links`
