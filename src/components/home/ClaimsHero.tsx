import { Link } from "@tanstack/react-router";
import dashboard from "@/assets/dashboard.webp.asset.json";
import { Reveal } from "@/components/home/Reveal";

export function ClaimsHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-cream pt-10 pb-10 sm:pt-16 lg:pt-24"
    >
      {/* soft green glow behind the dashboard, fading out before the section edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[34%] bg-[radial-gradient(120%_78%_at_50%_86%,color-mix(in_oklab,var(--mint)_30%,transparent),color-mix(in_oklab,var(--mint)_10%,transparent)_50%,transparent_82%)] sm:h-[55%] lg:h-[70%] lg:bg-[radial-gradient(70%_70%_at_50%_72%,color-mix(in_oklab,var(--mint)_34%,transparent),color-mix(in_oklab,var(--mint)_12%,transparent)_48%,transparent_80%)]"
      />

      <div className="mx-auto max-w-[1200px] px-5 text-center lg:px-8">
        <Reveal as="h1">
          <span className="mx-auto block max-w-[760px] font-display text-[34px] leading-[1.1] font-normal text-ink sm:text-[48px] lg:text-[63px]">
            A paid claim is not always the whole story.
          </span>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-[620px] text-[15.5px] leading-relaxed text-ink/70 sm:mt-6 sm:text-[16.5px]">
            Liquidity Health connects claims, remittances and reimbursement terms to show what was
            paid, what was expected, and which claims deserve review next.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Link
              to="/contact"
              className="press rounded-md bg-ink px-5 py-3 text-center text-[14px] font-medium text-on-ink hover:bg-ink-soft sm:py-2.5"
            >
              Analyze My Claims for Free
            </Link>
            <Link
              to="/how-it-works"
              className="press rounded-md border border-ink/25 px-5 py-3 text-center text-[14px] font-medium text-ink hover:bg-surface sm:py-2.5"
            >
              See how it works
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-8 max-w-[1200px] px-5 sm:mt-10 lg:px-8">
        <Reveal from="scale" delay={300}>
          <figure className="float-soft rounded-2xl border border-ink/10 bg-[#f4f4f3] px-1 pt-2 pb-1 shadow-[0_30px_80px_-40px_rgba(12,32,24,0.55)] sm:rounded-3xl sm:px-1.5 sm:pt-2.5 sm:pb-1.5">
            {/* MacBook-style window chrome */}
            <div className="flex items-center px-1.5 pt-0.5 pb-2 sm:px-2">
              <span className="flex shrink-0 items-center gap-[7px]" aria-hidden="true">
                <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57] sm:h-[13px] sm:w-[13px]" />
                <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e] sm:h-[13px] sm:w-[13px]" />
                <span className="h-[11px] w-[11px] rounded-full bg-[#28c840] sm:h-[13px] sm:w-[13px]" />
              </span>
            </div>
            <div className="overflow-hidden rounded-xl border border-ink/8 bg-white shadow-[0_1px_2px_rgba(12,32,24,0.06)] sm:rounded-2xl">
              <img
                src={dashboard.url}
                alt="Liquidity Health dashboard showing claim totals, revenue by month and claims needing attention"
                width={1030}
                height={536}
                className="block w-full bg-ink"
              />
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
