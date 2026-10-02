# Abhay Jain — Executive Profile

Editorial portfolio website for Abhay Jain, designed for senior executives, board members, investors, government and ecosystem partners, and founders evaluating an advisory or operating conversation.

## Preview

- Private preview: https://abhay-jain-executive-profile.workspace-027574.chatgpt.site
- Production domain: https://abhayjain.net (not changed yet)

## Positioning

This is an executive credibility site, not a blog, content hub, résumé archive, or marketing funnel.

The design prioritizes:

- Fast comprehension within 30–60 seconds
- Clear current focus and operating range
- Curated proof instead of exhaustive history
- High contrast, whitespace, and restrained motion
- No forms, newsletters, social feeds, popups, or invented metrics

## Pages

- `/` — positioning, current focus, track record, selected work, affiliations, and contact
- `/about` — selected experience, education, recognitions, publications, patents, and personal background

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

## Project structure

```text
app/
  page.tsx             Home page and homepage content
  about/page.tsx       About page and selected biography
  globals.css          Design tokens, layout, responsive styles, and motion
  layout.tsx           Metadata and font setup
public/
  abhay-profile.jpg    Approved profile portrait used by the site
  favicon.svg          AJ favicon
  robots.txt           Robots policy
  sitemap.xml          Two-page sitemap
.openai/hosting.json   Sites project configuration
```

## Content guardrails

The current title and public email are intentionally marked `[TBC]` until Abhay confirms them. Do not replace these with guesses. Do not add metrics unless they are verified and approved for publication.

The source material is the existing `abhayjain.net` site, public LinkedIn profile, and the selected research, technical paper, and patent links shown in the site. Keep the content curated; do not turn the site into a full résumé or publication archive.

## Handoff notes for Bolt

1. Preserve the two-page information architecture unless there is a clear content reason to change it.
2. Keep the current editorial visual language and SVG motion system.
3. Run `npm run lint` and `npm run build` after changes.
4. Do not change `abhayjain.net` DNS or deployment settings without approval.
5. Before final launch, replace `[Current title TBC]` and `Email [TBC]` with confirmed details.

