# Hitha.lk — "Coming Soon" Page Build Prompt (AI Coding Agent)

## ROLE
You are a senior frontend engineer building a standalone **"Coming Soon"** page for **Hitha.lk**, a mental wellness booking platform. This is a temporary launch/waitlist page — it must feel warm, calm, and exciting at the same time: the brand's mind-relaxing identity, but with a clear sense of "something good is arriving soon."

## TECH STACK (mandatory)
- Next.js 14+ (App Router, TypeScript)
- Tailwind CSS
- shadcn/ui (Button, Input, Badge, Card — install only what's needed via `npx shadcn@latest add ...`)
- Framer Motion (`framer-motion`) for entrance + ambient animation
- `lucide-react` for icons

## BRAND COLORS (use exactly these — no substitutions)
```
--navy:   #0D3B66   /* headings, primary text */
--teal:   #00A8B5   /* accents, gradients */
--green:  #4CAF50   /* accents, CTA */
--lgreen: #A8D672   /* accents, gradients */
--mint:   #E8F6F1   /* backgrounds */
```
Define these as CSS variables in `globals.css` and/or Tailwind `theme.extend.colors` so every component references the same tokens — no hardcoded hex values inside components.

## MASCOT ASSET — ALREADY IN PROJECT
Use the existing mascot pose image (calm/meditate or wave pose, whichever best fits "waiting/anticipation" — prefer `public/mascot/mascot-meditate.png` or `public/mascot/mascot-wave.png` if present) via `next/image`. Do not generate or edit this asset — just place it.

## PAGE CONCEPT
A single, centered, full-viewport-height hero — no navbar, no footer links, no scroll. Just:

1. **Logo mark** — "Hitha.lk" wordmark + heart-brain icon, small, top-center or top-left, subtle fade-in.
2. **Mascot** — medium-large, centered above the headline, gentle idle bob animation (`y: [0, -10, 0]`, 3s loop, easeInOut) plus a soft blurred radial "breathing" glow behind it in teal/green.
3. **Headline** — big, warm: e.g. *"Something calm is coming."* — Sinhala subline beneath in a Sinhala-capable font (`Noto Sans Sinhala`): *"හිතට සවියක් එනවා. ටිකක් ඉවසන්න."*
4. **Short supporting line** — one sentence on what Hitha.lk will offer (confidential support, verified professionals, easy booking).
5. **Countdown timer** (optional but recommended) — days/hours/minutes/seconds to a launch date, styled as 4 soft rounded shadcn `Card` tiles with large numbers in navy and small teal labels underneath. Animate each digit change with a quick Framer Motion number flip/fade.
6. **Email waitlist form** — shadcn `Input` (rounded-full, soft border) + `Button` ("Notify Me") inline on desktop, stacked on mobile. On submit: optimistic success state — swap the form for a friendly confirmation message with a small checkmark/heart icon animation (no backend required, just local state — leave a clear `// TODO: wire to API/email service` comment).
7. **Trust badges row** (small, subtle, bottom of hero) — "100% Confidential", "Verified Professionals", "For Everyone" as shadcn `Badge` pills with `lucide-react` icons, muted opacity so they don't compete with the CTA.
8. **Social links** (optional, small icons bottom-center) — Instagram/Facebook/LinkedIn placeholders, muted until hover.

## VISUAL LANGUAGE
- Full-page soft gradient background: `bg-gradient-to-b from-[#E8F6F1] via-white to-[#E8F6F1]`, with 2–3 large, very low-opacity blurred organic blob shapes (teal/green) floating slowly in the background (`animate={{ x: [0, 20, 0], y: [0, -15, 0] }}`, long duration 8–12s, infinite, easeInOut) for a living, breathing feel without being distracting.
- Typography: heading font `Nunito` or `Quicksand` (via `next/font/google`), body `Inter`, Sinhala text `Noto Sans Sinhala` — all loaded through `next/font/google` and applied via CSS variables.
- Buttons: pill-shaped (`rounded-full`), gradient fill teal→green, soft shadow, slight scale-up on hover (`whileHover={{ scale: 1.03 }}`).
- Everything centered, generous vertical spacing, no clutter — this page should feel like a single calming breath, not a busy landing page.

## ANIMATION SEQUENCE (on page load)
Stagger the entrance top-to-bottom using a Framer Motion parent variant with `staggerChildren: 0.15`:
1. Logo fades + slides down slightly (0s)
2. Mascot scales in from 0.9→1 with fade (0.15s)
3. Headline + Sinhala subline fade up (0.3s)
4. Supporting line fades up (0.45s)
5. Countdown tiles fade up, staggered left-to-right (0.6s)
6. Email form fades up (0.75s)
7. Trust badges fade in last, subtlest (0.9s)

Respect `prefers-reduced-motion`: skip staggered entrance (render instantly) and disable the floating blobs/idle bob if enabled.

## FOLDER STRUCTURE
```
app/
├── coming-soon/
│   └── page.tsx                 # or app/page.tsx if this IS the temporary root
components/
├── coming-soon/
│   ├── ComingSoonHero.tsx        # composes everything below
│   ├── CountdownTimer.tsx
│   ├── WaitlistForm.tsx
│   ├── TrustBadgesRow.tsx
│   └── FloatingBlobs.tsx         # decorative background animation
├── ui/                           # shadcn components
lib/
└── utils.ts
public/
└── mascot/                       # existing assets, reference only
```

## DELIVERABLE
Build a single fully responsive `ComingSoonHero.tsx` (composed of the sub-components above) and wire it into a page route. Everything must use the exact brand color tokens defined above, load smoothly with the staggered entrance animation, and work cleanly on mobile (stacked, centered, no horizontal scroll). Keep the waitlist form functional with local state + a clear TODO for backend wiring.
