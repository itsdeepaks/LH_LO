import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/home/Reveal";
import { CTA_LABEL } from "@/components/site/ui";

export function ClaimsAnalysisClosing() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-28">
      {/* faint vertical guide lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, color-mix(in oklab, var(--color-ink) 5%, transparent) 0 1px, transparent 1px 240px)",
        }}
      />
      {/* soft mint glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 30%, color-mix(in oklab, var(--color-mint) 12%, transparent) 0%, transparent 70%)",
        }}
      />

      <Reveal>
        <div className="relative mx-auto flex max-w-[1080px] flex-col items-center px-5 text-center lg:px-8">
          <h2 className="font-display text-[34px] leading-[1.08] font-medium tracking-[-0.02em] text-ink sm:text-[42px] lg:text-[52px]">
            See where reimbursement falls short.
          </h2>
          <p className="mt-5 max-w-[560px] text-[15.5px] leading-relaxed text-ink/65 sm:text-[16px]">
            Start with a sample of your claims and remittances. We&rsquo;ll arrange a secure channel
            separately and walk you through what the analysis shows.
          </p>
          <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="press group inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-[14px] font-medium text-on-ink transition-colors hover:bg-ink-soft focus-visible:ring-2 focus-visible:ring-ink/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:outline-none"
            >
              {CTA_LABEL}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/how-it-works"
              className="press inline-flex items-center justify-center rounded-md border border-ink/25 px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-surface focus-visible:ring-2 focus-visible:ring-ink/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:outline-none"
            >
              See how it works
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
