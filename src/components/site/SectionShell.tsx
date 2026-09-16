import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Migrated canonical section shell.
 *
 * Establishes the frozen-homepage marketing canvas for inner pages:
 * 1200px container, 20px / 32px gutters and the py-16 / lg:py-24 rhythm.
 * Intentionally minimal - no heading, CTA, card, grid or motion APIs.
 */
export function SectionShell({
  children,
  tone = "cream",
  className,
  id,
}: {
  children: ReactNode;
  tone?: "cream" | "surface" | "ink";
  className?: string;
  id?: string;
}) {
  const bg = {
    cream: "bg-cream text-ink",
    surface: "bg-surface text-ink",
    ink: "bg-ink text-on-ink",
  }[tone];

  return (
    <section id={id} className={cn("py-16 lg:py-24", bg, className)}>
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">{children}</div>
    </section>
  );
}
