# Liquidity Health - Design System

The frozen homepage is the approved visual baseline and target design system for
the website. Existing inner pages may retain legacy compatibility styles until
they are migrated. Where this document and the frozen homepage ever disagree, the
frozen homepage wins.

All core values live as tokens in `src/styles.css`. Hard-coded colours are allowed
only in the narrow, listed cases below.

This document has two parts:
**Part A - Approved frozen homepage / target site-wide system** (sections 1–12) and
**Part B - Current legacy inner-page compatibility state** (section 13).

---

# Part A - Approved frozen homepage / target site-wide system

## 1. Geometry

- Approved primary marketing canvas: `max-w-[1200px]` (homepage sections, header,
  footer).
- Standard gutters: `px-5` on mobile/tablet, `lg:px-8` from large screens.
- Compact CTA bands intentionally narrow to `max-w-[1080px]` (CtaStrip, ClosingCta).
- Reading widths inside a section are role-based (`max-w-[560px]`, `[620px]`,
  `[760px]`), not a single value.
- Not every container is 1200px: some shared inner-page components still use
  `max-w-[1120px]` and are awaiting migration.

## 2. Typography

Families: **Outfit** (`font-display`, headings), **DM Sans** (`font-sans`, body),
**Newsreader** (`font-serif`, pull quotes), **IBM Plex Mono** (`font-mono`, labels
and data figures, uppercase, wide tracking). Wordmark is Outfit, uppercase,
`tracking-[0.14em]`.

Frozen homepage hierarchy - sizes are role-based, not one shared heading size:

| Role | Base | sm | lg |
| --- | --- | --- | --- |
| Hero H1 | 34px | 48px | 63px |
| Most major H2s | ~28–29px | 32–34px | 40px |
| ThreeWays H2 | 29px | 34px | 44px |
| ClosingCta H2 | 34px | 42px | 52px |
| Content-card headings | 19–20px | - | - |
| Marketing body | ~14.5–16.5px depending on role | | |
| Eyebrow / label | 11–11.5px uppercase mono | | |

QuoteBand intentionally uses Newsreader on its own editorial scale
(21px → 26px → 30px) and is not bound to the display heading scale.

Micro-text inside product mocks, tables, charts and phone/transfer mockups is
deliberately small and is not part of the marketing type scale.

## 3. Colour

Core palette (tokens): `ink`, `ink-soft`, `cream`, `surface`, `mint`, `line`,
`on-ink`, `on-ink-muted`.

- Light page, dark bands. No mid-grey page background.
- `mint` is the single site-wide brand accent.
- Text on cream: `ink` for headings, `ink/65–70` for body copy.

Hard-coded colours are approved when they represent:

- product mock artwork,
- charts and data series,
- status indicators (for example outflow / needs-review reds),
- macOS or device chrome (Hero traffic lights, frame grey),
- intentionally isolated illustrative UI.

These are not global brand accents and must not be promoted into the palette.
ThreeWays contains approved blue/purple-toned mock artwork; this does **not** make
blue or purple a site-wide brand colour.

## 4. Gradients

Brand and layout gradients stay restrained. Gradients are currently approved in:

- hero and CTA atmospheric treatments (soft mint glow, faint guide lines),
- the DeveloperBand technical panel,
- product/mock artwork such as ThreeWays.

This is not permission for decorative gradients elsewhere.

## 5. Surface hierarchy

Cards are deliberately not identical. The approved tiers:

- **Hero** - large framed product object, strongest depth (MacBook-style window:
  light grey frame, traffic-light dots, inset white content, mint radial glow).
- **WhyLiquidity** - primary informational content cards: `rounded-xl`,
  `border-line`, cream fill on a surface section, `lift` interaction.
- **ThreeWays** - expressive product/content cards: `rounded-lg`, mint-tinted fill
  and mint-tinted border, `lift` interaction.
- **ZeroToScale** - compact supporting tiles: `rounded-lg`, surface fill,
  borderless, `lift` interaction.
- **MultiBank** - borderless product wells: `rounded-lg`, asymmetric bleed
  treatment.
- **TreasuryPartner** - white product wells on surface: `rounded-lg`, shadow-only
  hover (no translate), intentionally different from `lift`.
- **DeveloperBand** - dark technical panel: `rounded-xl`, `white/10` hairline,
  non-card interaction model.

## 6. Radius

Base token `--radius: 0.625rem` (10px) drives the scale: `sm 6`, `md 8`, `lg 10`,
`xl 14`, `2xl 18`, `3xl 22`, `4xl 26`.

Functional tiers:

- Hero frame - `2xl` / `3xl`.
- Primary content cards and technical panels - often `xl`.
- Product wells and compact tiles - typically `lg`.
- Mock UI - uses the token scale where practical.

Avoid hard-coded radii where an existing token is pixel-equivalent.

## 7. Section rhythm

`py-16` / `lg:py-24` is the common default, not a universal rule. Intentional
exceptions exist for Hero, QuoteBand, ClosingCta (`py-16 sm:py-20 lg:py-28`) and
the compact CtaStrip. Spacing is role-based.

## 8. DeveloperBand

DeveloperBand intentionally uses a deeper `#07130e` background as a one-off
deepest-dark technical section. It is not being promoted to a global token in this
pass. Its visual panel aspect ratio is `4:3` below `md`, `16:9` from `md` to below
`lg`, and `4:3` at `lg` and above.

## 9. Responsive conventions

- Gutters: 20px mobile/tablet, 32px from `lg`.
- TreasuryPartner: 1 column below `md`; 2 columns `md` to below `lg` with the third
  item centred at one column width; 3 columns at `lg`+.
- DeveloperBand: responsive panel aspect as described above.
- CTA buttons commonly stack on mobile and go inline at `sm`.
- LogoStrip: marquee below `lg`, static distribution at `lg`+.

Component-specific behaviour above stays component-specific.

## 10. Motion

Restrained only: `reveal` (fade + small rise, with left/right/scale variants),
`lift` on larger cards, `press` on buttons, `float-soft` and `pulse-dot` ambient
loops, and the mobile logo `marquee`. Every primitive respects
`prefers-reduced-motion`.

## 11. Buttons

- **Primary** - `bg-ink text-on-ink`, hover `bg-ink-soft`, `rounded-md`,
  `px-3.5–5`, `py-1.5–3`, 13–15px medium, plus the `press` class.
- **Secondary** - `border border-ink/25 text-ink`, hover `bg-surface`.
- **On dark** - `border border-white/30 text-white`, hover `bg-white/10`.
- Focus is always visible: `focus-visible:ring-2` in ink/mint, never `outline-none`
  alone.

## 12. Shared chrome

- One header for every page: wordmark, Platform / How It Works / Security /
  Get Paid Now / About (Platform and Company as mega menus), secondary
  "How It Works", primary "Analyze My Claims for Free". No log in.
- One dark footer for every page: Platform, Solutions, Company, Legal columns,
  LinkedIn, "© 2026 Liquidity Health, LLC", Baltimore, MD.

---

# Part B - Current legacy inner-page compatibility state

## 13. Legacy / migration note

Inner pages have **not** yet been visually migrated to the frozen homepage system.
Existing inner pages and shared inner-page components still use compatibility
patterns:

- `lh-*` colour aliases (several map onto core tokens; `lh-pale`, `lh-coral`,
  `lh-muted` and `lh-dark-line` hold their own values),
- `font-instrument` (currently aliases Outfit),
- some `max-w-[1120px]` inner-page geometry,
- older component treatments.

These remain valid until the inner-page redesign/migration phase and should not be
removed or discouraged in unmigrated files yet. New homepage-derived work should
prefer the canonical frozen system documented above.
