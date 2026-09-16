import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ClaimDetail,
  ClaimsExplorer,
  ClaimsOverview,
  RecoveryQueue,
} from "@/components/product/Visuals";
import { Reveal } from "@/components/home/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SectionShell } from "@/components/site/SectionShell";

export const Route = createFileRoute("/_site/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Liquidity Health" },
      {
        name: "description",
        content:
          "Provide, extract, match, compare, act: how Liquidity Health turns claims and remittances into a prioritized review worklist.",
      },
      { property: "og:title", content: "How It Works — Liquidity Health" },
      {
        property: "og:description",
        content:
          "From claims and remittances to a prioritized worklist — the five steps behind claim-level intelligence.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/how-it-works" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorksPage,
});

const STEPS = [
  {
    step: "01",
    title: "Provide",
    body: "Share a sample of claims and remittances through the secure channel we arrange. The public website never accepts claim documents or patient data.",
    visual: <ClaimsOverview />,
  },
  {
    step: "02",
    title: "Extract",
    body: "Liquidity Health reads the supplied records and captures the payer, claim line, codes, amounts, adjustments and dates needed for reimbursement analysis.",
    visual: <ClaimsExplorer />,
  },
  {
    step: "03",
    title: "Match",
    body: "Submitted claims are linked to their corresponding remittance and payment evidence using the identifiers available in the records.",
    visual: <ClaimDetail />,
  },
  {
    step: "04",
    title: "Compare",
    body: "Expected, allowed and paid amounts are brought together so denials and potential reimbursement variance can be reviewed in context.",
    visual: <RecoveryQueue />,
  },
];

function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From claims and remittances to a prioritized worklist."
        intro="Your team keeps billing the way it already does. Liquidity Health connects the records you provide, estimates expected reimbursement from the terms on file, and turns the differences into a prioritized review workflow."
      >
        <Link
          to="/contact"
          className="press rounded-md bg-ink px-5 py-3 text-center text-[14px] font-medium text-on-ink hover:bg-ink-soft focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:outline-none sm:py-2.5"
        >
          Analyze My Claims for Free
        </Link>
        <Link
          to="/platform"
          className="press rounded-md border border-ink/25 px-5 py-3 text-center text-[14px] font-medium text-ink hover:bg-surface focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:outline-none sm:py-2.5"
        >
          See the platform
        </Link>
      </PageHero>

      {STEPS.map((s, i) => {
        const flipped = i % 2 === 1;
        return (
          <SectionShell key={s.step} tone={flipped ? "surface" : "cream"}>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
              <Reveal
                from={flipped ? "right" : "left"}
                className={flipped ? "min-w-0 lg:order-2" : "min-w-0"}
              >
                <span className="font-mono text-[11.5px] tracking-[0.16em] text-ink/50 uppercase">
                  Step {s.step}
                </span>
                <div className="mt-4">
                  <SectionHeading title={s.title} intro={s.body} />
                </div>
              </Reveal>
              <Reveal
                from={flipped ? "left" : "right"}
                className={flipped ? "min-w-0 lg:order-1" : "min-w-0"}
              >
                {s.visual}
              </Reveal>
            </div>
          </SectionShell>
        );
      })}

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <span className="font-mono text-[11.5px] tracking-[0.16em] text-ink/50 uppercase">
              Step 05
            </span>
            <div className="mt-4">
              <SectionHeading
                title="Act"
                intro="Findings become a prioritized worklist with the supporting evidence and relevant timing your team needs to decide what to do next."
              />
            </div>
          </Reveal>
          <Reveal>
            <ul className="space-y-4 lg:pt-14">
              {[
                "A prioritized queue rather than a list sorted only by date",
                "Recommended next action where the product has enough context",
                "The evidence behind the finding on the claim",
                "Outcome tracking so recurring patterns become easier to recognize",
              ].map((line) => (
                <li
                  key={line}
                  className="border-b border-line pb-4 text-[16px] leading-[1.6] text-ink/65"
                >
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionShell>

      <CtaBand
        tone="cream"
        heading="See this run on a sample of your own claims."
        body="No documents are collected through this website — we arrange a secure channel separately."
        secondaryTo="/security"
        secondaryLabel="How we handle data"
      />
    </>
  );
}
