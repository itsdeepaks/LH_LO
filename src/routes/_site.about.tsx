import { Link, createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/home/Reveal";
import { ClosingCta } from "@/components/site/ClosingCta";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SectionShell } from "@/components/site/SectionShell";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About — Liquidity Health" },
      {
        name: "description",
        content:
          "Liquidity Health is a claims intelligence platform for US healthcare revenue-cycle teams, connecting claim, remittance and reimbursement evidence.",
      },
      { property: "og:title", content: "About — Liquidity Health" },
      {
        property: "og:description",
        content: "Why Liquidity Health exists: a paid claim is not always the whole story.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const EXPERTISE = [
  {
    title: "Revenue cycle first",
    body: "Denial codes, adjustment reasons, appeal windows and payer behaviour are the vocabulary the product is built in.",
  },
  {
    title: "Document reality",
    body: "Practices hold scans, PDFs and ERAs in whatever shape they arrived. The product starts there rather than asking for clean data.",
  },
  {
    title: "Financial discipline",
    body: "A potential variance is stated as a potential variance. We do not present findings as recovered revenue.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Built around what happens after the claim is submitted."
        intro="Liquidity Health, LLC is building claims intelligence for healthcare revenue-cycle teams. We connect claim, remittance and reimbursement evidence so teams can see where payment differs from expectation and decide what to review next."
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

      <SectionShell tone="ink">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <p className="font-serif text-[24px] leading-[1.32] text-on-ink sm:text-[30px] lg:text-[34px]">
              A paid claim is not always the whole story.
            </p>
            <p className="self-end text-[16px] leading-relaxed text-on-ink-muted">
              A denial announces itself. A quiet underpayment does not. Most practices only learn
              about the second kind by accident, months later, if at all.
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              title="Why we started"
              intro="Practices have systems for billing and systems for posting payments, but the difference between what should have been reimbursed and what was actually allowed can remain hidden unless someone checks it claim by claim."
            />
          </Reveal>
          <Reveal>
            <div className="max-w-[60ch] space-y-5 text-[16px] leading-[1.6] text-ink/65">
              <p>
                We started from a simple observation: the evidence is already distributed across the
                claim, the remittance and the reimbursement terms. Bring those records together and
                the difference becomes reviewable.
              </p>
              <p>
                That is the loop we are closing — connect the evidence, explain the difference,
                prioritize the work, and learn from the outcome.
              </p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell tone="surface">
        <Reveal>
          <SectionHeading
            title="Domain expertise"
            intro="Healthcare revenue cycle is not a generic data problem, and we do not treat it as one."
          />
        </Reveal>
        <Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EXPERTISE.map((c, i) => (
              <article
                key={c.title}
                className={
                  i === 2
                    ? "rounded-lg border border-line bg-cream p-6 md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] lg:col-span-1 lg:mx-0 lg:w-auto"
                    : "rounded-lg border border-line bg-cream p-6"
                }
              >
                <h3 className="font-display text-[19px] font-medium text-ink">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink/65">{c.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell tone="surface">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <SectionHeading title="Where to find us" />
          </Reveal>
          <Reveal>
            <div className="text-[16px] leading-[1.7] text-ink/65">
              <p className="text-ink">Liquidity Health, LLC</p>
              <p>Baltimore, MD</p>
              <p className="mt-3">
                <a
                  href="mailto:info@liquidityhealth.ai"
                  className="break-words text-ink underline underline-offset-4 hover:text-ink-soft"
                >
                  info@liquidityhealth.ai
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <ClosingCta
        heading="Start with your own claims."
        body="Tell us about your organization and we’ll arrange a secure way to review a sample."
        secondaryTo="/security"
        secondaryLabel="How we handle data"
      />
    </>
  );
}
