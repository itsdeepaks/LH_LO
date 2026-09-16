# Liquidity Health — full marketing site

Your home page stays exactly as it is. Everything below is new pages plus the shared header and footer they need.

## One thing to flag first

The brief asks for a cobalt-blue and near-black palette with Instrument Sans, and forbids testimonials, client logos and headline figures. Your current home page is green, has two testimonials, a client strip and the "$600 Billion / 99.99%" row. Since you asked to keep it, the new pages will follow the brief and the home page will read differently from the rest of the site. Say the word any time and I'll bring the home page in line — it is a contained job.

Also: the brief names Next.js. This project runs on a different framework that does the same things (pages, server rendering, SEO tags). Everything in the brief is buildable as written; no functionality is lost.

## Stage 1 — foundation and shared chrome

- Cobalt / ink / midnight / mist / pale-tint / coral colour tokens and Instrument Sans + Newsreader + IBM Plex Mono, added alongside the existing green set so the home page is untouched.
- A shared header for the new pages: logo, Platform / How It Works / Solutions / Company dropdowns, one primary button "Analyze My Claims for Free". Keyboard accessible, current page marked, no Log in.
- A shared footer: Platform / Solutions / Company / Legal columns, LinkedIn, "© 2026 Liquidity Health, LLC", Baltimore, MD.
- A reusable set of product visuals built in code from your sample data — claims overview metrics, claims explorer table, recovery queue, single claim detail with variance, expected-vs-paid comparison, payer comparison, coding consistency. Each carries "Illustrative example — not live data" and masked patient IDs.

## Stage 2 — the three product pages

- **Platform** — the product as an economic-control system: data flow (documents in → claim matching → economic record → findings), the eight capability groups, the four business outcomes.
- **How It Works** — Connect, Analyze, Match, Review, Act, each with its own visual.
- **Security** — dark authority band using only your four approved phrases, verbatim. No SOC 2 anywhere, "HIPAA-aligned" only.

## Stage 3 — company, conversion and legal

- **Contact / Analyze My Claims** — name, work email, phone, inquiry type (7 options, free claims analysis preselected); optional organization, claim-volume range, message with the "no patient information" helper text. No file upload anywhere. Submits nowhere; goes to Thank You.
- **Get Paid Now / Funding** — what an advance against expected reimbursement is, who it suits, pricing on claim quality not credit, waitlist only. Conditional wording throughout — may, where available, subject to review. No lending or approval language.
- **About** — mission, origin, domain expertise, team placeholders, Baltimore MD.
- **Thank You**, **Privacy Policy**, **Terms of Use** — the two legal pages carry a visible "Legal text to be provided by counsel" notice and no drafted legal text.

## What I will not put on the site

No statistics, customer names, testimonials, payer logos, "first of its kind", SOC 2, funding or recovery guarantees, invented case studies, "powered by AI" positioning, named integrations, response-time promises, live counters. All product numbers come from your synthetic samples and are labelled as illustrative.

## Also covered

- Lowercase kebab-case URLs, canonical tags, unique title / description / social tags per page, one H1 per page.
- Mobile-first checks at phone, tablet and desktop; full-height mobile menu.
- WCAG AA contrast, semantic markup, visible focus states, reduced-motion respected, content readable without any scroll animation.
- Restrained motion only: fades and state changes. No hover lift on every card, no counters, no floating dashboards.

## Technical notes

- New routes: `/platform`, `/how-it-works`, `/security`, `/solutions/*` landing targets deferred, `/funding`, `/about`, `/contact`, `/thank-you`, `/privacy-policy`, `/terms-of-use`. Every nav and footer link points at a route that exists in the same stage it appears.
- Tokens in `src/styles.css` under a `brief-` prefixed set; fonts loaded via `<link>` in the root route. No hardcoded colour classes.
- Shared chrome in `src/components/site/`, product visuals in `src/components/product/`, sample data in one `src/lib/sample-claims.ts` so figures stay consistent across pages.
- Contact form is local React state with client-side validation; no network call, no storage, no upload input.
- Later-phase pages (case studies, partners, investors, resources, careers, audience pages) exist in the nav structure only where the brief lists them and are otherwise left out.
