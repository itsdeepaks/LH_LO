import { Reveal } from "@/components/home/Reveal";

const FEATURES = [
  {
    title: "Review the right claims first",
    body: "Work from a shorter list instead of the whole ledger.",
  },
  {
    title: "See reimbursement variance earlier",
    body: "Notice a short payment when the remittance lands, not at close.",
  },
  {
    title: "Recognize repeating payer and coding patterns",
    body: "Spot behavior that shows up across claims, not just once.",
  },
  {
    title: "Give teams one claim-level source of context",
    body: "Everyone reads the same evidence for the same claim.",
  },
];

const OUTCOMES = [
  { value: "Review sooner", label: "Variance surfaces while it is still workable" },
  { value: "Work with context", label: "Claim, remittance and terms in one place" },
  { value: "Learn from patterns", label: "Repeating payer and coding behavior becomes visible" },
];

export function OperationalOutcomes() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-[29px] font-normal text-ink sm:text-[32px] lg:text-[40px]">
            What changes for the revenue cycle
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-center text-[15px] text-ink/65 sm:text-[15.5px]">
            Less time deciding what to look at, and more context once the team gets there.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} from="scale" delay={i * 100} className="flex">
              <article className="lift h-full w-full rounded-lg bg-surface p-5">
                <h3 className="font-display text-[19px] font-normal text-ink">{f.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink/65">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <dl className="mt-12 grid gap-6 border-y border-line py-8 min-[360px]:grid-cols-3 min-[360px]:gap-3 sm:mt-14 sm:gap-8 sm:py-10">
          {OUTCOMES.map((s, i) => (
            <Reveal key={s.value} delay={i * 130}>
              <div className="text-center">
                <dt className="font-display text-[19px] leading-tight font-normal text-ink min-[360px]:text-[16px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                  {s.value}
                </dt>
                <dd className="mx-auto mt-2 max-w-[220px] text-[12px] leading-snug text-ink/65 sm:mt-3 sm:text-[13.5px]">
                  {s.label}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
