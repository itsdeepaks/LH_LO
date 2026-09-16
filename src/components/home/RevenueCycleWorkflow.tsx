import { Reveal } from "@/components/home/Reveal";

function FindMock() {
  return (
    <div className="flex h-full items-center justify-center bg-[linear-gradient(140deg,#0d2a1e,#08170f_70%)] p-6">
      <div className="float-soft w-[170px] rounded-2xl border border-white/15 bg-white/95 p-3 shadow-2xl">
        <div className="text-[8px] tracking-widest text-ink/55 uppercase">Expected</div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-surface">
          <div className="h-full w-full rounded-full bg-mint" />
        </div>
        <div className="mt-3 text-[8px] tracking-widest text-ink/55 uppercase">Paid</div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-surface">
          <div className="h-full w-[68%] rounded-full bg-ink" />
        </div>
        <div className="mt-3 rounded-md border border-line px-2 py-1 text-[7.5px] text-ink/60">
          Illustrative example — not live data
        </div>
      </div>
    </div>
  );
}

function ExplainMock() {
  return (
    <div className="flex h-full items-center justify-center bg-[linear-gradient(140deg,#126b5c,#0b2b23_70%)] p-6">
      <div className="w-full max-w-[210px] space-y-2">
        {["Claim", "Remittance", "Adjustment", "Expected terms"].map((label) => (
          <div
            key={label}
            className="rounded-lg border border-white/25 bg-white/10 px-3 py-2 text-[9px] text-white backdrop-blur transition-transform duration-500 hover:translate-x-1"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function PrioritizeMock() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 bg-[linear-gradient(140deg,#0f3f30,#08170f_70%)] p-6">
      {[
        { label: "Review first", width: "w-[92%]" },
        { label: "Review next", width: "w-[64%]" },
        { label: "Monitor", width: "w-[38%]" },
      ].map((row) => (
        <div key={row.label} className="rounded-lg border border-white/20 bg-white/10 p-3">
          <div className="text-[9px] font-medium text-white">{row.label}</div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
            <div className={`h-full rounded-full bg-mint ${row.width}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

const CARDS = [
  {
    visual: <FindMock />,
    title: "Find the difference",
    body: "Surface potential underpayments, denials and reimbursement variance across the claims your team already submitted.",
  },
  {
    visual: <ExplainMock />,
    title: "Explain what happened",
    body: "Put the relevant claim, remittance, adjustment and expected reimbursement context together in one place.",
  },
  {
    visual: <PrioritizeMock />,
    title: "Prioritize the next action",
    body: "Help the team focus on the claims that deserve review first, rather than working the whole list evenly.",
  },
];

export function RevenueCycleWorkflow() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <h2 className="max-w-[620px] font-display text-[29px] leading-[1.12] font-normal text-ink sm:text-[34px] lg:text-[44px]">
            Find it. Explain it.
            <br />
            <span className="text-mint">Prioritize it.</span>
          </h2>
        </Reveal>
        <Reveal delay={110}>
          <p className="mt-5 max-w-[380px] text-[15.5px] leading-relaxed text-ink/65">
            The same three questions, on every claim: what differs, why it differs, and what
            deserves attention next.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} from="scale" delay={i * 120} className="flex">
              <article className="lift flex h-full flex-col overflow-hidden rounded-lg border border-[color-mix(in_oklab,var(--mint)_22%,transparent)] bg-[color-mix(in_oklab,var(--mint)_9%,white)]">
                <div className="h-[210px]">{card.visual}</div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-[20px] leading-snug font-normal text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink/70">
                    {card.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
