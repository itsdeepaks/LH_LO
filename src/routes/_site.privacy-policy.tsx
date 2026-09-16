import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionShell } from "@/components/site/SectionShell";
import { Reveal } from "@/components/home/Reveal";

export const Route = createFileRoute("/_site/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Liquidity Health" },
      {
        name: "description",
        content:
          "Privacy policy and data governance commitments for Liquidity Health's revenue-cycle intelligence platform.",
      },
      { property: "og:title", content: "Privacy Policy - Liquidity Health" },
      {
        property: "og:description",
        content: "Privacy policy and data governance commitments for Liquidity Health.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Privacy Policy"
        intro="Liquidity Health is committed to maintaining rigorous privacy protections, confidential data handling, and transparent security standards for healthcare organizations."
      />
      <SectionShell tone="surface">
        <Reveal>
          <div className="mx-auto max-w-[70ch] space-y-8">
            <div className="rounded-xl border border-line bg-cream p-6 sm:p-8">
              <p className="font-mono text-[11.5px] tracking-[0.14em] text-ink/65 uppercase">
                Summary Notice
              </p>
              <p className="mt-3 text-[16px] leading-[1.6] text-ink">
                Liquidity Health operates with a privacy-by-design architecture. We never sell organizational or patient data, and all remittance analysis workflows adhere to strict institutional data protection protocols.
              </p>
            </div>

            <div className="space-y-6 text-ink/80 text-[15.5px] leading-[1.7]">
              <div>
                <h2 className="font-display text-[22px] font-medium text-ink mb-2">
                  1. Information We Collect
                </h2>
                <p>
                  When you submit an inquiry through our website, we collect contact information including your name, professional email address, organization name, role, and phone number. We also collect standard non-identifying telemetry to monitor site performance and security.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[22px] font-medium text-ink mb-2">
                  2. Use of Information
                </h2>
                <p>
                  Information gathered through this website is used solely to respond to your inquiries, schedule secure platform demonstrations, and provide relevant updates regarding our claims intelligence services.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[22px] font-medium text-ink mb-2">
                  3. Healthcare Data Security
                </h2>
                <p>
                  Healthcare claim details, 835 electronic remittance advices, and payer contract data are never uploaded or ingested directly through this public website. All client evaluations are conducted through authenticated, encrypted transfer protocols subject to Business Associate Agreements (BAAs).
                </p>
              </div>

              <div>
                <h2 className="font-display text-[22px] font-medium text-ink mb-2">
                  4. Inquiries & Data Rights
                </h2>
                <p>
                  To review, update, or request the deletion of any contact information submitted through this site, or for specific compliance questions, please contact our team directly at{" "}
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
