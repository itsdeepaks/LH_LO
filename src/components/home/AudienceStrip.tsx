import { Building2, Stethoscope, FileSpreadsheet } from "lucide-react";
import { Reveal } from "@/components/home/Reveal";

const AUDIENCES = [
  {
    icon: Stethoscope,
    name: "Medical Practices",
    body: "See whether visits and procedures were reimbursed the way the contract says they should be.",
  },
  {
    icon: FileSpreadsheet,
    name: "Billing & RCM Organizations",
    body: "Work a shorter, evidence-backed list across every client book of business.",
  },
  {
    icon: Building2,
    name: "Health Systems / MSOs",
    body: "Compare payer behavior across locations and specialties in one consistent view.",
  },
];

export function AudienceStrip() {
  return (
    <section className="bg-cream py-16 lg:py-24" aria-label="Who Liquidity Health is built for">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-ink/50">
            Built for
          </p>
          <h2 className="mt-4 max-w-[760px] font-display text-[28px] font-normal leading-[1.15] text-ink sm:text-[32px] lg:text-[40px]">
            The teams responsible for getting healthcare claims paid correctly.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-3">
          {AUDIENCES.map(({ icon: Icon, name, body }, i) => (
            <Reveal key={name} from="scale" delay={i * 100} className="flex">
              <article className="lift group flex h-full w-full flex-col rounded-xl border border-line bg-surface p-6 hover:border-ink/20 lg:p-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors duration-500 group-hover:border-ink/30 group-hover:bg-mint/15">
                  <Icon className="h-4 w-4 text-ink/70" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-[19px] font-normal text-ink">{name}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink/65">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
