# Hitha.lk — Animated Background Prompt (add-on)

## TASK
Add a subtle, calming animated background to the existing "Coming Soon" page (`ComingSoonHero.tsx`). This should NOT be a new page — just a background layer sitting behind all existing content (mascot, headline, countdown, form).

## TECH
- Framer Motion (already in project)
- Pure CSS/SVG shapes — no external animation libraries, no images needed

## BRAND COLORS (use only these)
```
--navy:   #0D3B66
--teal:   #00A8B5
--green:  #4CAF50
--lgreen: #A8D672
--mint:   #E8F6F1
```

## CONCEPT — "Floating Breathing Blobs"
Create a new component `components/coming-soon/FloatingBlobs.tsx`:

1. Absolutely-positioned full-screen container (`absolute inset-0 -z-10 overflow-hidden`), placed as the first child inside the hero section so it sits behind everything else.
2. Render 3 large blurred organic blob shapes (soft irregular circles, `rounded-full` divs with `filter: blur(80px)` or actual blob SVG paths), each a radial gradient using two brand colors (e.g. teal→green, navy→teal, lgreen→mint), at low opacity (`opacity-20` to `opacity-30`) so they never compete with foreground text.
3. Position them off-center at different depths: one top-left (large), one bottom-right (medium), one center-right (small), each partially bleeding off-screen edges.
4. Animate each blob independently and slowly with Framer Motion:
   ```
   animate={{
     x: [0, 30, -20, 0],
     y: [0, -25, 15, 0],
     scale: [1, 1.08, 0.95, 1],
   }}
   transition={{
     duration: 14, // vary per blob: 10s, 14s, 18s
     repeat: Infinity,
     ease: "easeInOut",
   }}
   ```
   Use different `duration` and slightly different `x`/`y` ranges per blob so they don't move in sync (feels organic, not mechanical).
5. Respect `prefers-reduced-motion`: if enabled, render the blobs static (no animate prop) — just the soft gradient shapes, no movement.
6. Keep it performant: only 3 blobs, GPU-friendly properties only (`transform`, `opacity` — never animate `width`/`height`/`filter` directly), and `pointer-events-none` on the whole layer so it never blocks clicks on the form/buttons above it.

## INTEGRATION
Import and render `<FloatingBlobs />` as the very first element inside the root wrapper of `ComingSoonHero.tsx`, before the logo/mascot/headline content, so it renders behind everything via the `-z-10` + `absolute` positioning — no changes needed to any other existing component.
