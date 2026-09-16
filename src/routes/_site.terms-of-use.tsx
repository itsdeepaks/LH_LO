import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionShell } from "@/components/site/SectionShell";
import { Reveal } from "@/components/home/Reveal";

export const Route = createFileRoute("/_site/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Liquidity Health" },
      {
        name: "description",
        content:
          "Terms and conditions governing access to and use of the Liquidity Health website and platform preview.",
      },
      { property: "og:title", content: "Terms of Use — Liquidity Health" },
      {
        property: "og:description",
        content: "Terms and conditions governing access to and use of the Liquidity Health website.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms-of-use" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-use" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Agreement"
        title="Terms of Use"
        intro="These Terms of Use govern your access to the Liquidity Health website, informational materials, and platform evaluation requests."
      />
      <SectionShell tone="surface">
        <Reveal>
          <div className="mx-auto max-w-[70ch] space-y-8">
            <div className="rounded-xl border border-line bg-cream p-6 sm:p-8">
              <p className="font-mono text-[11.5px] tracking-[0.14em] text-ink/65 uppercase">
                Platform Terms
              </p>
              <p className="mt-3 text-[16px] leading-[1.6] text-ink">
                By accessing or browsing this website, you agree to comply with these terms. Enterprise platform access, production claim ingestion, and analytics services are governed under separate Master Services Agreements (MSAs).
              </p>
            </div>

            <div className="space-y-6 text-ink/80 text-[15.5px] leading-[1.7]">
              <div>
                <h2 className="font-display text-[22px] font-medium text-ink mb-2">
                  1. Informational Purpose
                </h2>
                <p>
                  The content on this website is provided for informational and demonstration purposes to describe Liquidity Health&apos;s revenue-cycle intelligence technology. Content does not constitute legal, medical, or contractual advisory opinions.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[22px] font-medium text-ink mb-2">
                  2. Intellectual Property
                </h2>
                <p>
                  All proprietary algorithms, user interface designs, logos, software workflows, and written materials displayed on this site are the exclusive property of Liquidity Health, LLC and protected by applicable copyright, trademark, and trade secret laws.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[22px] font-medium text-ink mb-2">
                  3. Permitted Use
                </h2>
                <p>
                  You agree not to reverse engineer, decompile, scrape, or systematically index the platform or its components without express written authorization from Liquidity Health management.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[22px] font-medium text-ink mb-2">
                  4. Contact & Inquiries
                </h2>
                <p>
                  For inquiries regarding terms, licensing, or commercial enterprise contracts, please contact{" "}
                  <a
                    href="mailto:info@liquidityhealth.ai"
                    className="break-words text-ink underline underline-offset-4 hover:text-ink-soft font-medium"
                  >
                    info@liquidityhealth.ai
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
