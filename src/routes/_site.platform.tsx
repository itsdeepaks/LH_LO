import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ClaimsExplorer,
  ClaimsOverview,
  ClaimDetail,
  CodingIntelligence,
  ExpectedVsPaid,
  PayerComparison,
  RecoveryQueue,
} from "@/components/product/Visuals";
import { Reveal } from "@/components/home/Reveal";
import { ClosingCta } from "@/components/site/ClosingCta";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { SectionShell } from "@/components/site/SectionShell";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/_site/platform")({
  head: () => ({
    meta: [
      { title: "Platform — Liquidity Health" },
      {
        name: "description",
        content:
          "Claims intelligence for healthcare revenue-cycle teams: claims and remittances in, claim-level matching, a reimbursement record, and prioritized findings your team can act on.",
      },
      { property: "og:title", content: "Platform — Liquidity Health" },
      {
        property: "og:description",
        content:
          "Claims and remittances become claim-level intelligence: potential underpayments, denials, payer and coding patterns, and payment timing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/platform" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/platform" }],
  }),
  component: PlatformPage,
});

const FLOW = [
  {
    step: "01",
    title: "Claims and remittances in",
    body: "Start with the claim and remittance data your practice already has.",
  },
  {
    step: "02",
    title: "Claim-level matching",
    body: "Link each submitted claim to the corresponding remittance and payment evidence using the identifiers available in the records.",
  },
  {
    step: "03",
    title: "Reimbursement record",
    body: "Billed, expected, allowed and paid amounts sit together with adjustments and dates.",
  },
  {
    step: "04",
    title: "Prioritized findings",
    body: "Potential underpayments, denials, payer and coding patterns, and payment timing surface with context for review.",
  },
];

const CAPABILITIES = [
  {
    title: "Claims overview",
    body: "Portfolio-level view of volume, billed, allowed, paid, payment time and denial rate.",
  },
  {
    title: "Claims Explorer",
    body: "Search and filter claim records with their financial values and current status.",
  },
  {
    title: "Denial Recovery",
    body: "Denied claims grouped by reason with the evidence needed to respond.",
  },
  {
    title: "Recovery Queue",
    body: "A prioritised worklist with recommended next steps and tracked outcomes.",
  },
  {
    title: "Root Cause",
    body: "Why a group of claims behaves the way it does, rather than one claim at a time.",
  },
  {
    title: "Coding Intelligence",
    body: "How consistently each procedure code is adjudicated across payers.",
  },
  { title: "Payer Contracts", body: "Contract terms held against what a payer actually allowed." },
  {
    title: "Payer Analytics",
    body: "Reimbursement yield, payment speed and denial behaviour compared across payers.",
  },
];

const OUTCOMES = [
  {
    title: "Review prioritisation",
    body: "Your team works the claims with the most at stake and the least time left.",
  },
  {
    title: "Payer pattern recognition",
    body: "Behaviour that repeats across thousands of claims becomes visible.",
  },
  {
    title: "Payment timing clarity",
    body: "When money is expected to arrive, not only whether a claim was paid.",
  },
  {
    title: "Contract variance detection",
    body: "Quiet differences between contracted and allowed amounts get surfaced.",
  },
];

const AUDIENCES = [
  {
    id: "for-providers",
    title: "Medical Practices",
    body: "Independent and multi-location practices that need to know whether claims were reimbursed as expected and which ones deserve follow-up.",
  },
  {
    id: "for-billing-rcm",
    title: "Billing & RCM Organizations",
    body: "Billing and revenue-cycle organizations that need claim-level reimbursement context across multiple client books of business.",
  },
  {
    id: "for-health-systems",
    title: "Health Systems / MSOs",
    body: "Larger groups and systems that need contract variance and payer behavior visible across entities, locations and specialties.",
  },
];

function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Claims intelligence built around the reimbursement record."
        intro="Liquidity Health connects the claim you submitted, the remittance you received and the reimbursement terms on file so your team can see what was expected, what was allowed and paid, why it differed, and what deserves attention next."
      >
        <Link
          to="/contact"
          className="press rounded-md bg-ink px-5 py-3 text-center text-[14px] font-medium text-on-ink hover:bg-ink-soft focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:outline-none sm:py-2.5"
        >
          Analyze My Claims for Free
        </Link>
        <Link
          to="/how-it-works"
          className="press rounded-md border border-ink/25 px-5 py-3 text-center text-[14px] font-medium text-ink hover:bg-surface focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:outline-none sm:py-2.5"
        >
          See how it works
        </Link>
      </PageHero>

      <SectionShell tone="ink">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <p className="font-serif text-[24px] leading-[1.32] sm:text-[30px] lg:text-[34px]">
              A status tells you whether a claim moved. The reimbursement record tells you whether
              it paid as expected.
            </p>
            <p className="self-end text-[16px] leading-relaxed text-on-ink-muted">
              Liquidity Health keeps billed, expected, allowed and paid amounts together with
              adjustment and timing context at the claim level, so potential variance can be
              reviewed with the evidence behind it.
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <SectionHeading
            title="How claims and remittances become intelligence"
            intro="Start with the records your revenue-cycle team already works from."
          />
        </Reveal>
        <Reveal>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FLOW.map((f) => (
              <li key={f.step} className="border-t border-line pt-5">
                <span className="font-mono text-[11.5px] tracking-[0.14em] text-ink/50">
                  {f.step}
                </span>
                <h3 className="mt-2 font-display text-[19px] font-medium tracking-[-0.01em] text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-ink/65">{f.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ClaimsOverview />
            <ClaimsExplorer />
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell tone="surface">
        <Reveal>
          <SectionHeading
            title="Capability groups"
            intro="Each group answers a different question about the same underlying claim record."
          />
        </Reveal>
        <Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c) => (
              <article
                key={c.title}
                className="rounded-lg border border-line bg-cream p-5 transition-colors hover:border-ink/20"
              >
                <h3 className="font-display text-[17px] font-medium tracking-[-0.01em] text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-ink/65">{c.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <SectionHeading
              title="One claim, one reimbursement record"
              intro="A single record brings together what was billed, what reimbursement terms indicate to expect, what the payer allowed, what was paid, and the adjustments behind the difference — with potential findings clearly separated from recovered revenue."
            />
          </Reveal>
          <Reveal>
            <ClaimDetail />
          </Reveal>
        </div>
        <Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <ExpectedVsPaid />
            <RecoveryQueue />
          </div>
        </Reveal>
      </SectionShell>

      <CtaBand
        heading="Explore the connected record"
        body="Send a sample of remittances and see the same view built on your own claims."
        secondaryTo="/security"
        secondaryLabel="Read our security posture"
      />

      <SectionShell tone="surface">
        <Reveal>
          <SectionHeading
            title="Payer and coding context"
            intro="Behaviour that is invisible on a single claim becomes obvious across thousands of them."
          />
        </Reveal>
        <Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <PayerComparison />
            <CodingIntelligence />
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <SectionHeading
            title="What changes for the business"
            intro="The point is not more dashboards. It is a shorter list of better-evidenced decisions."
          />
        </Reveal>
        <Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {OUTCOMES.map((o) => (
              <article key={o.title} className="border-t border-line pt-5">
                <h3 className="font-display text-[19px] font-medium tracking-[-0.01em] text-ink">
                  {o.title}
                </h3>
                <p className="mt-2 max-w-[52ch] text-[15.5px] leading-[1.6] text-ink/65">
                  {o.body}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell tone="surface">
        <Reveal>
          <SectionHeading title="Who it is built for" />
        </Reveal>
        <Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((a, i) => (
              <article
                key={a.id}
                id={a.id}
                className={
                  i === 2
                    ? "lift scroll-mt-24 rounded-xl border border-line bg-cream p-6 md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] lg:col-span-1 lg:mx-0 lg:w-auto"
                    : "lift scroll-mt-24 rounded-xl border border-line bg-cream p-6"
                }
              >
                <h3 className="font-display text-[20px] font-medium tracking-[-0.01em] text-ink">
                  {a.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink/65">{a.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <ClosingCta
        heading="See what your own claims reveal."
        body="Start with a sample of claims and remittances. We’ll arrange a secure channel separately and walk through the findings."
        secondaryTo="/security"
        secondaryLabel="How we handle data"
      />
    </>
  );
}
