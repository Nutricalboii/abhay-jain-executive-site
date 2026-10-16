# Abhay Jain — Business & Strategy

Editorial portfolio website for Abhay Jain, designed for senior executives, board members, investors, government and ecosystem partners, and founders evaluating an advisory or operating conversation.

## Preview

- Private preview: https://abhay-jain-executive-profile.workspace-027574.chatgpt.site
- Production domain: https://abhayjain.net (not changed yet)
- Vercel preview: https://abhay-jain-vercel.vercel.app

## Positioning

This is an executive credibility site, not a blog, content hub, résumé archive, or marketing funnel.

The design prioritizes:

- Fast comprehension within 30–60 seconds
- Clear current focus and operating range
- Curated proof instead of exhaustive history
- High contrast, whitespace, and restrained motion
- Source parity without importing the old builder's visual noise
- Preview-only contact and subscription states until a real delivery service is approved

## Pages

- `/` — positioning, source-site visual archive, current focus, track record, selected work, affiliations, and contact
- `/about-me` — full source biography, all work experience, education, five recognitions, seven publications/patents, background, and source placeholders
- `/about` — compatibility alias for the About page
- `/ideas-frameworks` — source page title, original introduction, empty archive state, and subscription preview
- `/contact-me` — original contact copy, all source form fields, social profiles, and local preview submission state

## Visual system

- Warm paper background: `#F3F0E8`
- Ink: `#14181C`
- Copper accent: `#B4532A`
- Serif display typography paired with a clean sans-serif body face
- Hairline rules and editorial grid instead of card-heavy UI
- Pure SVG waveform in the hero that moves from noisy to regulated
- SVG signal thread and route-line graphic on the About page
- Reduced-motion support via `prefers-reduced-motion`

Avoid adding gradients, glassmorphism, particles, 3D scenes, cursor effects, loud parallax, or decorative animation that does not clarify the work.

## Local development

Requirements: Node.js 22+

```bash
npm install
npm run dev
```

The local preview runs at `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

Vercel uses the static export in `dist/client`, configured through `vercel.json`.

## Project structure

```text
app/
  page.tsx             Home page and homepage content
  about/page.tsx       About page and selected biography
  about-me/page.tsx    Source-compatible About route
  ideas-frameworks/    Source-compatible Ideas route
  contact-me/          Source-compatible Contact route
  source-data.ts       Verified source copy, links, images, roles, education, and publications
  components/          Local contact and subscription preview forms
  globals.css          Design tokens, layout, responsive styles, and motion
  layout.tsx           Metadata and font setup
public/
  abhay-profile.jpg    Approved profile portrait used by the site
  favicon.svg          AJ favicon
  robots.txt           Robots policy
  sitemap.xml          Source-compatible route sitemap
.openai/hosting.json   Sites project configuration
```

## Content guardrails

The site uses a factual role descriptor until Abhay confirms the exact current title. The public email is intentionally omitted until confirmed. Do not replace either with guesses. Do not add metrics unless they are verified and approved for publication.

The source material is the existing `abhayjain.net` site, public LinkedIn profile, and the original publication, technical paper, patent, social, and image links. The full source content is now represented in the rebuilt routes. Do not invent a current title, email, metrics, projects, or publication details.

## Handoff notes for Bolt

1. Preserve the source-compatible route structure unless there is a clear content reason to change it.
2. Keep the current editorial visual language, SVG motion system, and locally stored source images.
3. Run `npm run lint` and `npm run build` after changes.
4. Do not change `abhayjain.net` DNS or deployment settings without approval.
5. Before final launch, replace the general role descriptor and omitted email with confirmed details if Abhay approves them.
