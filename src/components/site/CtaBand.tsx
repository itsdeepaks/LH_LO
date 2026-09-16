import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/home/Reveal";
import { CTA_LABEL } from "@/components/site/ui";
import { cn } from "@/lib/utils";

type SecondaryTo = "/how-it-works" | "/platform" | "/funding" | "/security" | "/about";

/**
 * Migrated inner-page CTA band.
 *
 * Two tones, matching the frozen homepage principle: compact ink bands act as
 * chapter breaks mid-page, and the final conversion moment sits on cream so it
 * never merges with the dark footer.
 */
export function CtaBand({
  tone = "ink",
  heading,
  body,
  primary = CTA_LABEL,
  secondaryTo,
  secondaryLabel,
}: {
  tone?: "ink" | "cream";
  heading: string;
  body?: string;
  primary?: string;
  secondaryTo?: SecondaryTo;
  secondaryLabel?: string;
}) {
  const dark = tone === "ink";

  return (
    <section
      className={cn(
        dark ? "bg-ink text-on-ink py-12 sm:py-14" : "bg-cream text-ink py-16 sm:py-20 lg:py-24",
      )}
    >
      <Reveal>
        <div
          className={cn(
            "mx-auto max-w-[1080px] px-5 lg:px-8",
            dark
              ? "flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
              : "flex flex-col items-center text-center",
          )}
        >
          <div className={dark ? "max-w-[52ch]" : "max-w-[620px]"}>
            <h2
              className={cn(
                "font-display font-medium tracking-[-0.02em]",
                dark
                  ? "text-[23px] leading-[1.2] text-on-ink sm:text-[27px]"
                  : "text-[30px] leading-[1.1] text-ink sm:text-[36px] lg:text-[42px]",
              )}
            >
              {heading}
            </h2>
            {body ? (
              <p
                className={cn(
                  "leading-relaxed",
                  dark
                    ? "mt-3 text-[15.5px] text-on-ink-muted"
                    : "mx-auto mt-5 max-w-[560px] text-[16px] text-ink/65",
                )}
              >
                {body}
              </p>
            ) : null}
          </div>

          <div
            className={cn(
              "flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center",
              dark ? "shrink-0" : "mt-8 justify-center",
            )}
          >
            <Link
              to="/contact"
              className={cn(
                "press group inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[14px] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:py-2.5",
                dark
                  ? "bg-white text-ink hover:opacity-90 focus-visible:ring-white/70 focus-visible:ring-offset-ink"
                  : "bg-ink text-on-ink hover:bg-ink-soft focus-visible:ring-ink/50 focus-visible:ring-offset-cream",
              )}
            >
              {primary}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            {secondaryTo && secondaryLabel ? (
              <Link
                to={secondaryTo}
                className={cn(
                  "press inline-flex items-center justify-center rounded-md border px-5 py-3 text-[14px] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:py-2.5",
                  dark
                    ? "border-white/30 text-white hover:bg-white/10 focus-visible:ring-white/70 focus-visible:ring-offset-ink"
                    : "border-ink/25 text-ink hover:bg-surface focus-visible:ring-ink/50 focus-visible:ring-offset-cream",
                )}
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
