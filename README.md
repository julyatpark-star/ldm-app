# LDM — Leadership Development Mentor

React + Vite + Tailwind app for a leadership simulation. Onboarding flow + design system, ready to extend with scenarios and a backend.

## Quick start

```bash
# 1. Install dependencies (Node 18+ recommended)
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:5173 opens automatically
```

That's it. No API keys, no env vars yet.

## Stack

- **Vite** — build tool
- **React 18** — UI
- **React Router 6** — routing
- **Tailwind CSS 3** — styling (with CSS-variable theming so you can swap colors without rebuilding)
- **lucide-react** — icons
- **Pretendard** — font (loaded from CDN in `index.html`)

## Design system

All design tokens live in `src/index.css` as CSS variables under `:root`.
Tailwind reads them via `tailwind.config.js`. To change a color globally, edit the variable — every component updates instantly.

Key tokens:
- `--color-primary` — Deep Violet `#A855F7`
- `--color-secondary` — White `#FFFFFF` (used for hero CTAs + multi-select active)
- `--color-bg` / `--color-surface` — dark neutrals
- `--color-persona-*` — five distinct persona signature colors

Button hierarchy (`src/components/Button.jsx`):
1. **hero** — large white pill + glow (1 per page)
2. **primary** — violet pill + glow (standard CTA)
3. **secondary** — white pill, no glow (rare highlight)
4. **ghost** — transparent + border (back, skip)

## Project structure

```
src/
├── main.jsx                    Entry point
├── App.jsx                     Routes
├── index.css                   Global styles + design tokens
├── components/
│   ├── Button.jsx              4-variant button
│   ├── Input.jsx               Pill-shaped text input
│   ├── PillButton.jsx          Selection pill (single + multi)
│   ├── ProgressBar.jsx         Onboarding progress
│   ├── OnboardingLayout.jsx    Shared layout for onboarding
│   ├── PersonaCard.jsx         Persona card with image + text
│   └── PlaceholderHalftone.jsx Fallback SVG halftone (until real images)
├── screens/
│   ├── Login.jsx
│   └── onboarding/
│       ├── Welcome.jsx
│       ├── Profile.jsx
│       ├── AboutYou.jsx
│       ├── MeetYourTeam.jsx
│       └── Ready.jsx
├── data/
│   └── personas.js             5 personas + option lists
└── context/
    └── OnboardingContext.jsx   Form state (auto-persists to localStorage)
```

## Adding the persona images you designed

When your 5 halftone images are ready:

1. Drop them in `public/personas/` with these names:
   - `driver.png`
   - `critic.png`
   - `strategist.png`
   - `empath.png`
   - `bridger.png`
2. The cards pick them up automatically. The SVG halftone placeholder only shows when an image fails to load.

Recommended specs: 1024×1024 PNG, 1:1 aspect ratio, dark/black background.

## What's next (to be built)

- 5 scenario screens (chat-style simulation)
- Real-time persona state (stress / trust gauges)
- Gemini API integration (analyze user messages)
- Final results / scorecard page
- Auth (the current login is a stub that navigates to onboarding)

## Deploy

Push to GitHub, then connect on [Vercel](https://vercel.com) — auto-detects Vite and ships in one click.
