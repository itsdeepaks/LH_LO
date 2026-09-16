import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/home/Reveal";
import { CTA_LABEL } from "@/components/site/ui";

export function ClaimsAnalysisCtaStrip({
  label = "See how Liquidity Health turns claim evidence into a reviewable worklist.",
}: {
  label?: string;
}) {
  return (
    <section className="bg-ink py-7 sm:py-6">
      <Reveal>
        <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-4 px-5 text-center sm:flex-row sm:flex-wrap sm:justify-center lg:px-8">
          <p className="font-display text-[19px] text-on-ink sm:text-[22px]">{label}</p>
          <Link
            to="/contact"
            className="press group inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-[14px] font-medium text-ink hover:opacity-90 sm:w-auto sm:py-2"
          >
            {CTA_LABEL}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
