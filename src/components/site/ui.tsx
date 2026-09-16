import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const CTA_LABEL = "Analyze My Claims for Free";

export function CtaButton({
  children = CTA_LABEL,
  tone = "cobalt",
  to = "/contact",
  className,
}: {
  children?: ReactNode;
  tone?: "cobalt" | "outline" | "light";
  to?: "/contact" | "/how-it-works" | "/platform" | "/funding" | "/security" | "/about";
  className?: string;
}) {
  const styles = {
    cobalt: "press bg-ink text-on-ink hover:bg-ink-soft",
    outline: "border border-lh-ink/25 text-lh-ink hover:border-lh-ink/50 hover:bg-lh-mist",
    light: "border border-white/30 text-white hover:bg-white/10",
  }[tone];

  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-[15px] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-lh-cobalt focus-visible:ring-offset-2 focus-visible:outline-none",
        styles,
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Section({
  children,
  tone = "white",
  className,
  id,
}: {
  children: ReactNode;
  tone?: "white" | "mist" | "ink" | "pale";
  className?: string;
  id?: string;
}) {
  const bg = {
    white: "bg-cream text-lh-ink",
    mist: "bg-surface text-lh-ink",
    pale: "bg-lh-pale text-lh-ink",
    ink: "bg-lh-ink text-lh-on-dark",
  }[tone];

  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", bg, className)}>
      <div className="mx-auto max-w-[1120px] px-5 lg:px-8">{children}</div>
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-cream pt-14 pb-14 sm:pt-20 sm:pb-20">
      <div className="mx-auto max-w-[1120px] px-5 lg:px-8">
        <p className="font-mono text-[11.5px] tracking-[0.16em] text-lh-cobalt uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-[19ch] font-instrument text-[38px] leading-[1.08] font-medium tracking-[-0.02em] text-lh-ink sm:text-[52px] lg:text-[62px]">
          {title}
        </h1>
        <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.55] text-lh-muted sm:text-[19px]">
          {intro}
        </p>
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  intro,
  align = "left",
}: {
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-[62ch] text-center" : "max-w-[62ch]"}>
      <h2 className="font-instrument text-[27px] leading-[1.15] font-medium tracking-[-0.02em] sm:text-[34px] lg:text-[40px]">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-[17px] leading-[1.55] opacity-70">{intro}</p> : null}
    </div>
  );
}

export function Editorial({ children }: { children: ReactNode }) {
  return (
    <p className="font-serif text-[24px] leading-[1.35] sm:text-[32px] lg:text-[38px]">
      {children}
    </p>
  );
}

export function ConversionBand({
  heading,
  body,
  primary = CTA_LABEL,
  secondaryTo,
  secondaryLabel,
}: {
  heading: string;
  body?: string;
  primary?: string;
  secondaryTo?: "/how-it-works" | "/platform" | "/funding" | "/security";
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-lh-midnight py-12 sm:py-14">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-[54ch]">
          <h2 className="font-instrument text-[22px] leading-snug font-medium text-lh-on-dark sm:text-[26px]">
            {heading}
          </h2>
          {body ? (
            <p className="mt-2 text-[15.5px] leading-relaxed text-lh-on-dark-muted">{body}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <CtaButton>{primary}</CtaButton>
          {secondaryTo && secondaryLabel ? (
            <CtaButton tone="light" to={secondaryTo}>
              {secondaryLabel}
            </CtaButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
