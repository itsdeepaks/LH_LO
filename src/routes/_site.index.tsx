import { createFileRoute } from "@tanstack/react-router";
import { ClaimsHero } from "@/components/home/ClaimsHero";
import { AudienceStrip } from "@/components/home/AudienceStrip";
import { ClientLogoStrip } from "@/components/home/ClientLogoStrip";
import { EditorialBand } from "@/components/home/EditorialBand";
import { RevenueCycleWorkflow } from "@/components/home/RevenueCycleWorkflow";
import { DataTrustBand } from "@/components/home/DataTrustBand";
import { ClaimsIntelligence } from "@/components/home/ClaimsIntelligence";
import { ClaimsAnalysisCtaStrip } from "@/components/home/ClaimsAnalysisCtaStrip";
import { ClaimsToAction } from "@/components/home/ClaimsToAction";
import { OperationalOutcomes } from "@/components/home/OperationalOutcomes";
import { ReimbursementVisibility } from "@/components/home/ReimbursementVisibility";
import { ClaimsAnalysisClosing } from "@/components/home/ClaimsAnalysisClosing";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Liquidity Health - Claims Intelligence for Revenue Cycle Teams" },
      {
        name: "description",
        content:
          "Liquidity Health connects claim, remittance, payment and reimbursement evidence so revenue cycle teams see reimbursement variance early and know which claims to review next.",
      },
      {
        property: "og:title",
        content: "Liquidity Health - Claims Intelligence for Revenue Cycle Teams",
      },
      {
        property: "og:description",
        content:
          "See whether claims were reimbursed as expected, understand why reimbursement differs, and know which claims deserve attention next.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-cream">
      <ClaimsHero />
      <ClientLogoStrip />
      <AudienceStrip />
      <EditorialBand
        statement="A claim can be accepted and paid and still fall short of what was expected."
        support="Denials announce themselves. Quiet reimbursement variance is easier to miss."
      />
      <ReimbursementVisibility />
      <ClaimsToAction />
      <ClaimsIntelligence />
      <ClaimsAnalysisCtaStrip />
      <RevenueCycleWorkflow />
      <DataTrustBand />
      <OperationalOutcomes />
      <EditorialBand
        statement="The goal is not another dashboard. It is a shorter list of claims worth working."
        support="Bring the claim, remittance and reimbursement evidence together so the team can decide what deserves attention first."
        align="left"
      />
      <ClaimsAnalysisClosing />
    </div>
  );
}
