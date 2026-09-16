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
        content: "The Liquidity Health terms of use. Legal text to be provided by counsel.",
      },
      { property: "og:title", content: "Terms of Use — Liquidity Health" },
      { property: "og:description", content: "Legal text to be provided by counsel." },
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
        eyebrow="Legal"
        title="Terms of Use"
        intro="This page is a placeholder. The final terms of use will be published here once supplied."
      />
      <SectionShell tone="surface">
        <Reveal>
          <div className="mx-auto max-w-[70ch]">
            <div className="rounded-xl border border-line bg-cream p-6 sm:p-8">
              <p className="font-mono text-[11.5px] tracking-[0.14em] text-ink/65 uppercase">
                Notice
              </p>
              <p className="mt-3 text-[16px] leading-[1.6] text-ink">
                Legal text to be provided by counsel.
              </p>
            </div>
            <p className="mt-8 text-[15.5px] leading-[1.65] text-ink/65">
              For questions about these terms, contact{" "}
              <a
                href="mailto:info@liquidityhealth.ai"
                className="break-words text-ink underline underline-offset-4 hover:text-ink-soft"
              >
                info@liquidityhealth.ai
              </a>
              .
            </p>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
