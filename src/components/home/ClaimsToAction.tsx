import type { ReactNode } from "react";
import { Reveal } from "@/components/home/Reveal";
import {
  ClaimDetail,
  ExpectedVsPaid,
  PayerComparison,
  RecoveryQueue,
} from "@/components/product/Visuals";

type Row = { title: string; body: string; visual: ReactNode; flip?: boolean };

const ROWS: Row[] = [
  {
    title: "See expected versus actual reimbursement",
    body: "Put the expected amount next to what was allowed and paid, so a short payment is visible without a manual comparison.",
    visual: <ExpectedVsPaid />,
  },
  {
    title: "Know which claims deserve attention first",
    body: "Group the claims worth working into one reviewable list, with value and timing in the same place.",
    visual: <RecoveryQueue />,
    flip: true,
  },
  {
    title: "Understand why reimbursement changed",
    body: "Open a claim and read the remittance detail, adjustments and reimbursement terms behind the amount that landed.",
    visual: <ClaimDetail />,
  },
  {
    title: "See patterns beyond a single claim",
    body: "Compare how payers reimburse, deny and pace payment so repeating behavior becomes obvious.",
    visual: <PayerComparison />,
    flip: true,
  },
];

export function ClaimsToAction() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-[28px] font-normal text-ink sm:text-[32px] lg:text-[40px]">
            From reimbursement evidence to action
          </h2>
        </Reveal>

        <div className="mt-10 space-y-12 sm:mt-14 sm:space-y-14 lg:space-y-16">
          {ROWS.map((row) => (
            <div
              key={row.title}
              className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12"
            >
              <Reveal
                from={row.flip ? "right" : "left"}
                className={`min-w-0 ${row.flip ? "lg:order-2" : ""}`.trim()}
              >
                <h3 className="font-display text-[26px] leading-tight font-normal text-ink sm:text-[30px] lg:text-[34px]">
                  {row.title}
                </h3>
                <p className="mt-3 max-w-[380px] text-[15px] leading-relaxed text-ink/65">
                  {row.body}
                </p>
              </Reveal>
              <Reveal
                from={row.flip ? "left" : "right"}
                delay={120}
                className={`min-w-0 rounded-lg bg-surface pt-6 pl-5 sm:pt-12 sm:pl-12 ${row.flip ? "lg:order-1" : ""}`.trim()}
              >
                {row.visual}
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
