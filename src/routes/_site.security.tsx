import { Link, createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/home/Reveal";
import { ClosingCta } from "@/components/site/ClosingCta";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SectionShell } from "@/components/site/SectionShell";

export const Route = createFileRoute("/_site/security")({
  head: () => ({
    meta: [
      { title: "Security - Liquidity Health" },
      {
        name: "description",
        content:
          "How Liquidity Health handles claim data: HIPAA-aligned practices, identifier removal before storage, per-organisation isolation, and encryption in transit and at rest.",
      },
      { property: "og:title", content: "Security - Liquidity Health" },
      {
        property: "og:description",
        content:
          "Data handling, hosting, privacy and access control at Liquidity Health, stated plainly.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/security" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/security" }],
  }),
  component: SecurityPage,
});

const STATEMENTS = [
  {
    title: "Alignment",
    body: "HIPAA-aligned",
  },
  {
    title: "Identifiers",
    body: "Patient identifiers are removed before claim data is stored.",
  },
  {
    title: "Isolation",
    body: "Each organisation's data is isolated; users only see their own claims.",
  },
  {
    title: "Infrastructure",
    body: "Enterprise cloud infrastructure with encryption in transit and at rest.",
  },
];

const EXCLUSIONS = [
  "Claim or remittance documents are not uploaded through this website.",
  "Patient names, claim numbers and insurance information should not be entered into the contact form.",
  "If a claims analysis is arranged, we coordinate a separate secure channel for the records.",
];

function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="A clear security posture for claims data."
        intro="Liquidity Health keeps the public claims simple: identifier removal before storage, organization-level data isolation, and encryption in transit and at rest. If you need more detail before sharing anything, ask us directly."
      >
        <Link
          to="/contact"
          className="press rounded-md bg-ink px-5 py-3 text-center text-[14px] font-medium text-on-ink hover:bg-ink-soft focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:outline-none sm:py-2.5"
        >
          Analyze My Claims for Free
        </Link>
      </PageHero>

      <SectionShell tone="ink">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <p className="font-serif text-[24px] leading-[1.32] text-on-ink sm:text-[30px] lg:text-[34px]">
              Patient identifiers are removed before claim data is stored.
            </p>
            <p className="self-end text-[16px] leading-relaxed text-on-ink-muted">
              That boundary is part of how Liquidity Health handles claims data, not a setting on
              the public website.
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <SectionHeading
            title="Our posture, in four statements"
            intro="These are the current data-handling statements for the product."
          />
        </Reveal>
        <Reveal>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {STATEMENTS.map((s) => (
              <div key={s.title} className="rounded-lg border border-line bg-surface p-6">
                <dt className="font-mono text-[11.5px] tracking-[0.14em] text-ink/55 uppercase">
                  {s.title}
                </dt>
                <dd className="mt-3 text-[17px] leading-[1.55] text-ink">{s.body}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </SectionShell>

      <SectionShell tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              title="What this website does not collect"
              intro="The public website is for product information and enquiries. Claim files are handled separately."
            />
          </Reveal>
          <Reveal>
            <ul className="space-y-4">
              {EXCLUSIONS.map((line) => (
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

      <ClosingCta
        heading="Have a security question before you share anything?"
        body="Send it through the contact form and we will answer it directly."
      />
    </>
  );
}
