# Final homepage-freeze cleanup: logo strip alignment

One change, in one file: `src/components/home/LogoStrip.tsx`.

## The change

Container class:

```text
before:  mx-auto max-w-[1180px] overflow-hidden px-0 py-0 lg:px-8
after:   mx-auto max-w-[1200px] overflow-hidden px-5 py-0 lg:px-8
```

That is the complete design change.

## Why

- The logo strip is the only homepage section not on the approved 1200px grid — it measured left 130 / width 1180 at 1440px while every other section, the header and the footer sit at left 120 / width 1200.
- With zero horizontal padding below `lg`, the first logo currently runs flush into the screen edge on phones. `px-5` restores the standard 20px gutter used everywhere else.

## Explicitly unchanged

Section `py-8`, logo names, font size, opacity, gaps, duplicated items, marquee track width, animation and duration, mask percentages, `lg:hidden` / `lg:flex` switching, colors, typography. No other component or file.

## Verification

Measure at 390, 430, 640, 768, 900, 1024, 1440 and 1920 and confirm:
- container is 1200px wide and centred at desktop widths
- 20px left and right gutter at 390px, first logo no longer touching the edge
- marquee still fades at both sides and still animates
- no new horizontal overflow
- desktop static row distribution unchanged
- section height unchanged

Then run the build, and lint only `LogoStrip.tsx`.

## Report back

Exact diff, measured container width/left at 1440 and 1920, mobile gutter at 390, build result, lint result, and files changed.
