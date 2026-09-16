# Liquidity Health — home page from the layout study

## What I found in your files
The PDF is one long home-page layout study, top to bottom. The zip holds product screenshots, including a full Liquidity Health dashboard in dark navy with a bright blue/mint accent — I'll take the site's colors and type feel from that so the page and the product match.

## The 14 sections, in order
1. Top bar — logo left, menu links center, "Log in" / "Start building" / "Talk to us" on the right.
2. Hero — large centered headline "A paid claim is not always the whole story.", supporting line, two buttons.
3. Product shot — wide dashboard image sitting under the hero.
4. Logo strip — row of customer logos, muted.
5. Dark quote band — testimonial text left, portrait right, on near-black green.
6. "Three ways to move money. One integration." — intro line, then three cards with an image on top, heading, paragraph, and a link button.
7. Dark developer band — left column with heading, paragraph, four ticked lines, two buttons; product visual on the right.
8. "Meet your new treasury partner" — three small product cards in a row, each with a caption heading and line beneath.
9. Slim dark call-to-action strip — one line of text plus a button.
10. "One login for multi-bank cash visibility" — four alternating rows, image and text swapping sides each row.
11. Second slim dark call-to-action strip.
12. "Go From Zero to Scale" — four short feature boxes, then a three-figure stats row ($600 Billion / 99.99% / One API).
13. "Why Vesto?" — five icon cards in a 3-then-2 grid, followed by a second dark quote band with the portrait on the left this time.
14. "Ready to Build?" form — two-column name row, email, company, two dropdowns, submit button. Then the footer: logo, two link columns, copyright and legal links.

## Approach
- Layout matches the study 90-100%: section order, column counts, alternating sides, alignment, the dark/light banding rhythm.
- Colors, type and icons are my call, pulled from the dashboard screenshot: deep near-black green and navy for the dark bands, off-white for the light ones, a single bright accent for buttons and highlights.
- All copy is placeholder in the same lengths as the study, so you can swap it without the layout shifting. Section 12's numbers are placeholders too.
- Product images: I'll use your dashboard screenshots from the zip where a real product shot belongs, and generate supporting visuals for the card and row slots. Portraits and customer logos will be stand-ins for you to replace.
- Home page only. Menu links, footer links and the form are styled and interactive but don't go anywhere or submit yet.
- Desktop first, then checked and fixed at phone and tablet widths.

## Technical section
- `src/routes/index.tsx` becomes the home page; each of the 14 sections is a component in `src/components/home/`.
- Palette, radii and fonts as tokens in `src/styles.css`; webfonts via `<link>` in `src/routes/__root.tsx`. No hardcoded color classes.
- shadcn/ui for buttons, inputs, selects and cards.
- Zip screenshots registered through the asset CLI and imported as pointers; generated art in `src/assets/`.
- Route-level `head()` with a Liquidity Health specific title, description, og and twitter tags. Single H1 in the hero, semantic sections, alt text, lazy loading below the fold.
- No backend; the form holds local state only until you ask for submissions.
