import type { ReactNode } from "react";
import { Reveal } from "@/components/home/Reveal";

/**
 * Migrated inner-page hero.
 *
 * Deliberately subordinate to the frozen homepage Hero: no product frame,
 * no glow, no gradients - cream section, 1200px canvas, controlled reading
 * widths and a single restrained reveal of the whole content group.
 */
export function PageHero({
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
    <section className="bg-cream py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-[11.5px] tracking-[0.16em] text-ink/65 uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-[19ch] font-display text-[34px] leading-[1.08] font-medium tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[54px]">
            {title}
          </h1>
          <p className="mt-6 max-w-[62ch] text-[16.5px] leading-relaxed text-ink/65 sm:text-[18px]">
            {intro}
          </p>
          {children ? (
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {children}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
