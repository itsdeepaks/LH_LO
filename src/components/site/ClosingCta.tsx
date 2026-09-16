import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/home/Reveal";
import { CTA_LABEL } from "@/components/site/ui";

type SecondaryTo = "/how-it-works" | "/platform" | "/security" | "/about";

export function ClosingCta({
  heading,
  body,
  primary = CTA_LABEL,
  secondaryTo,
  secondaryLabel,
}: {
  heading: string;
  body?: string;
  primary?: string;
  secondaryTo?: SecondaryTo;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, color-mix(in oklab, var(--color-ink) 5%, transparent) 0 1px, transparent 1px 240px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 72% at 50% 118%, color-mix(in oklab, var(--color-mint) 38%, transparent) 0%, color-mix(in oklab, var(--color-mint) 22%, transparent) 42%, transparent 74%)",
        }}
      />

      <Reveal>
        <div className="relative mx-auto flex max-w-[1080px] flex-col items-center px-5 text-center lg:px-8">
          <h2 className="font-display text-[34px] leading-[1.08] font-medium tracking-[-0.02em] text-ink sm:text-[42px] lg:text-[52px]">
            {heading}
          </h2>
          {body ? (
            <p className="mt-5 max-w-[560px] text-[15.5px] leading-relaxed text-ink/65 sm:text-[16px]">
              {body}
            </p>
          ) : null}
          <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="press group inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-[14px] font-medium text-on-ink transition-colors hover:bg-ink-soft focus-visible:ring-2 focus-visible:ring-ink/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:outline-none"
            >
              {primary}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            {secondaryTo && secondaryLabel ? (
              <Link
                to={secondaryTo}
                className="press inline-flex items-center justify-center rounded-md border border-ink/25 px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-cream/60 focus-visible:ring-2 focus-visible:ring-ink/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:outline-none"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
