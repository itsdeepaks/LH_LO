# Replace the home page form with a closing call-to-action band

The form at the bottom of the home page goes away — the contact page already handles that. In its place, a tall dark closing band in the site's own style, like the reference: a big centred headline, one supporting line, and two buttons.

## What it will look like

- Full-width deep-green band, generous height, content centred.
- A soft mint glow behind the headline (same glow language as the hero), plus very faint vertical guide lines for depth. No new colours.
- Headline in Outfit, large: "See what your claims are really worth."
- One supporting line beneath: a short sentence about seeing variance, payment timing and recovery on your own data.
- Two buttons side by side (stacked on phones):
  - Primary, light on dark: "Analyze My Claims for Free" → contact page
  - Secondary, outlined on dark: "See how it works" → how it works page
- Fades in on scroll like the rest of the page, and respects reduced motion.

## What changes

- New closing band replaces the form section as the last thing on the home page, just above the footer.
- The old form section is removed, along with its toast pop-up, which nothing else needs.
- The existing short dark strips in the middle of the page stay as they are.
- The contact page and its form are untouched.

## Technical notes

- Add `src/components/home/ClosingCta.tsx`; use `ink`/`on-ink`/`mint` tokens only, `Reveal` for the scroll fade, and TanStack `Link` for both buttons.
- In `src/routes/_site.index.tsx`: swap `<ContactSection />` for `<ClosingCta />`, drop the `ContactSection` import and the `<Toaster />` (only the removed form used it).
- Delete `src/components/home/ContactSection.tsx`.
- Section rhythm `py-20 lg:py-28`, content `max-w-[1080px]`, headline `34px → 52px`, buttons per design.md primary/on-dark specs with visible focus rings.
