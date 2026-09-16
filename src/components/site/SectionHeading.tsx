import { cn } from "@/lib/utils";

/**
 * Migrated section heading for light inner-page sections.
 *
 * Canonical frozen tokens only. Deliberately minimal: no eyebrow, CTA,
 * motion, rules, card or section-wrapper logic.
 */
export function SectionHeading({
  title,
  intro,
  align = "left",
  className,
}: {
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-[620px]",
        align === "center" ? "mx-auto text-center" : undefined,
        className,
      )}
    >
      <h2 className="font-display text-[28px] leading-[1.13] font-normal tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[40px]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-[58ch] text-[16px] leading-relaxed text-ink/65">{intro}</p>
      ) : null}
    </div>
  );
}
