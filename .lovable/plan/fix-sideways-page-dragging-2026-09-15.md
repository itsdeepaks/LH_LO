# Fix sideways page dragging

## What is happening

Every page can be dragged a few pixels sideways on phones and tablets. It is not a homepage-only bug — the same cause exists site-wide; it just shows up on pages that have side-entrance animations.

Measured at 393px wide:

```text
/                  page 397px wide inside a 393px screen  (4px of drag)
/how-it-works      397px
/funding           397px
/platform          393px (table scrolls inside its own box - correct)
/security /about /contact /thank-you /privacy-policy /terms-of-use   393px (clean)
```

## Cause

Sections that animate in from the left or right sit shifted 24px sideways until they scroll into view. Anything still waiting below the fold keeps that offset, and the page grows wider than the screen, so the whole page can be dragged.

The site already hides sideways overflow on the page body, but that rule does not stop the outer document from scrolling, so it has no effect.

## The fix

1. In `src/styles.css`, apply sideways overflow clipping on the document element (`html`) as well as `body`, so shifted-in-animation elements can never widen the page. This is the single root fix and needs no component changes.
2. Keep the `/platform` and `/how-it-works` wide data tables exactly as they are — those scroll inside their own bordered box on purpose.

No layout, spacing, typography, color, copy, animation timing, or component changes.

## Verification

Re-measure `/`, `/platform`, `/how-it-works`, `/funding`, `/security`, `/about`, `/contact`, `/thank-you`, `/privacy-policy`, `/terms-of-use` at 390, 393, 768, 1024 and 1440 and confirm page width equals screen width everywhere, the entrance animations still play, the wide tables still scroll inside their box, and sticky navigation and the mega menu still behave. Then run the build and lint.
