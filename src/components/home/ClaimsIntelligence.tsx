import { Reveal } from "@/components/home/Reveal";
import { ClaimsExplorer, ClaimsOverview, CodingIntelligence } from "@/components/product/Visuals";

const ITEMS = [
  {
    visual: <ClaimsExplorer />,
    title: "Claim-level reimbursement view",
    body: "Read each claim with billed, paid and outstanding amounts in one row instead of several systems.",
  },
  {
    visual: <ClaimsOverview />,
    title: "Recovery and review priorities",
    body: "See the size and shape of what is open, so the team knows where review time is best spent.",
  },
  {
    visual: <CodingIntelligence />,
    title: "Payer and coding context",
    body: "Look at how the same procedure codes are adjudicated across claims and payers.",
  },
];

export function ClaimsIntelligence() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-[28px] font-normal text-ink sm:text-[32px] lg:text-[40px]">
            See the claim in context
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.title}
              from="scale"
              delay={i * 120}
              className="min-w-0"
            >
              <article className="group min-w-0">
                <div className="h-[280px] min-w-0 overflow-hidden rounded-lg border border-line bg-white">
                  {item.visual}
                </div>
                <h3 className="mt-4 font-display text-[16px] font-normal text-ink lg:text-[17px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-ink/65 lg:text-[13px]">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
