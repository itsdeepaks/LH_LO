# Rethink “See the claim in context”

## Goal
Make this section visually distinct from the card grid below it while preserving its claims-intelligence content, product previews, order, palette, typography, and homepage rhythm. The section should read editorial and calm — previews are the only boxed elements.

## Composition (desktop)
```
                See the claim in context

   [ preview ]            [ preview ]            [ preview ]

   Feature title          Feature title          Feature title
   2-line body            2-line body            2-line body
```

## Changes (all in `ClaimsIntelligence.tsx`)
- Remove the large outer feature-card shell (mint-tinted fill, mint border, lift) that currently wraps each preview + text block.
- Keep each product preview as its own compact bordered window: white background, `line` border, modest `lg` radius, subtle/no shadow, unchanged 210px height — supporting illustration, not a dashboard card.
- Move title and description completely outside the preview, directly on the page background beneath it: title → short body, with no icon markers and no tinted content block.
- Section background returns to `cream` with centered “See the claim in context” heading as the primary anchor. No eyebrow — the heading stays the visual anchor and the section stays uncluttered.
- Generous column gutters and vertical whitespace between previews and text.

## Responsive behavior
- Desktop: three equal columns in one row, previews and text blocks aligned across columns.
- Tablet: retain the existing two-column arrangement with the third item centered.
- Mobile: stack each preview directly above its title and description; keep `min-w-0` guards so internal product tables never cause page overflow.

## Preserved
- Current claims-intelligence content, illustrative labels, synthetic data, section order, global palette and typography, Reveal motion and reduced-motion support.
- The neighboring “Find it. Explain it. Prioritize it.” section is not modified.

## Validation
- Screenshot both consecutive sections at desktop, tablet, and mobile to confirm they no longer read as duplicate card grids.
- Check column alignment, text wrapping, internal preview clipping, horizontal overflow, reduced-motion behavior, and console errors.
