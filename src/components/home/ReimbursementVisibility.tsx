import { GitCompareArrows, FileSearch, ScrollText, Code2, Users } from "lucide-react";
import { Reveal } from "@/components/home/Reveal";

const ITEMS = [
  {
    icon: GitCompareArrows,
    title: "Potential underpayments",
    body: "Compare expected reimbursement with what was allowed and paid.",
  },
  {
    icon: FileSearch,
    title: "Denials worth reviewing",
    body: "Bring denial reason, value and timing into the same work context.",
  },
  {
    icon: ScrollText,
    title: "Contract variance",
    body: "See where payer adjudication differs from the reimbursement terms on file.",
  },
  {
    icon: Code2,
    title: "Coding inconsistencies",
    body: "Identify procedure codes that are adjudicated differently across claims or payers.",
  },
  {
    icon: Users,
    title: "Payer patterns",
    body: "Compare payment timing, reimbursement and denial behavior across payers.",
  },
];

export function ReimbursementVisibility() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <h2 className="font-display text-[28px] font-normal text-ink sm:text-[32px] lg:text-[40px]">
            What Liquidity Health makes visible
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
          {ITEMS.map(({ icon: Icon, title, body }, i) => (
            <Reveal
              key={title}
              from="scale"
              delay={i * 90}
              className={`flex ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <article className="lift group flex h-full w-full flex-col rounded-xl border border-line bg-cream p-6 hover:border-ink/20 sm:p-7 lg:p-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors duration-500 group-hover:border-ink/30 group-hover:bg-mint/15">
                  <Icon className="h-4 w-4 text-ink/70" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-[19px] font-normal text-ink">{title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink/65">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
