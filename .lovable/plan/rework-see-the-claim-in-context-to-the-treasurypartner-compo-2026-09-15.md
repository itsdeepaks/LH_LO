# Rework "See the claim in context" to the TreasuryPartner composition

## Goal
`src/components/home/ClaimsIntelligence.tsx` stops reading as a 3-card SaaS feature grid. Each item becomes: compact boxed product preview on top, free-standing title and description beneath it on the section background — the TreasuryPartner editorial pattern. Content, order, data, and visuals unchanged.

## Current state (verified)
- Each item is wrapped in a mint-tinted card shell: `lift`, `rounded-lg`, mint border, mint-tinted fill (`color-mix` mint 9% on white), internal padded text container, and a border under the 210px preview.
- The third item has special tablet treatment (`md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)]`).
- `border-line` is a registered token in `src/styles.css` (`--color-line`), safe to use.
- `TreasuryPartner.tsx` no longer exists (removed in the earlier cleanup); its pattern is documented in `design.md` and fully specified in the request, so no file dependency is needed.

## Changes — all in `ClaimsIntelligence.tsx` only

**Remove per item:**
- Mint-tinted background, mint outer border, `lift`, the full-card rounded shell, the padded text container, and the border between preview and text.

**New item structure** (exactly as requested):
```text
<article className="group min-w-0">
  <div className="h-[210px] min-w-0 overflow-hidden rounded-lg border border-line bg-white">
    {item.visual}
  </div>
  <h3 className="mt-4 font-display text-[16px] font-normal text-ink lg:text-[17px]">
    {item.title}
  </h3>
  <p className="mt-2 text-[12.5px] leading-relaxed text-ink/65 lg:text-[13px]">
    {item.body}
  </p>
</article>
```

**Grid:** replace the current `mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3` with `mt-10 grid gap-7 md:grid-cols-3`. All three items identical — remove the `i === 2` conditional class entirely; the third item uses the same simple wrapper as the others.

**Keep unchanged:**
- `ClaimsExplorer`, `ClaimsOverview`, `CodingIntelligence` visuals and the `Visuals.tsx` / `sample-claims.ts` files (untouched).
- Item order, titles, descriptions, heading text, section background (`bg-surface`), section width (`max-w-[1200px]`), `Reveal` wrappers and the `i * 120` delay, and overall responsive stacking (items still flow naturally to one column below `md`).

## Not doing
- No copy rewrites, no new decoration, badges, icons, gradients, or card backgrounds.
- Preview height stays 210px; visuals untouched.
- No change to `RevenueCycleWorkflow` or any other section; page order unchanged.

## Validation
- Screenshot the section at 1440, 768, and 390px: previews boxed only, text free-standing, three equal columns at desktop/tablet, no horizontal overflow.
- Confirm no console errors and that the neighboring section is visually distinct again.
