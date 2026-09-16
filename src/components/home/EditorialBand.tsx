import { Reveal } from "@/components/home/Reveal";

type EditorialBandProps = {
  statement: string;
  support: string;
  align?: "left" | "right";
};

export function EditorialBand({ statement, support, align = "right" }: EditorialBandProps) {
  return (
    <section className="bg-ink py-14 lg:py-20">
      <div
        className={`mx-auto flex max-w-[1200px] flex-col items-start gap-8 px-5 lg:items-center lg:gap-14 lg:px-8 ${
          align === "right" ? "lg:flex-row lg:justify-between" : "lg:flex-row-reverse"
        }`}
      >
        <Reveal from={align === "right" ? "left" : "right"} className="w-full lg:w-auto">
          <p className="max-w-[640px] font-serif text-[21px] leading-[1.35] text-on-ink sm:text-[26px] lg:text-[30px]">
            {statement}
          </p>
        </Reveal>
        <Reveal
          from={align === "right" ? "right" : "left"}
          delay={140}
          className="w-full lg:w-auto"
        >
          <p className="max-w-[380px] text-[15.5px] leading-relaxed text-on-ink-muted">{support}</p>
        </Reveal>
      </div>
    </section>
  );
}
