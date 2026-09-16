import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/home/Reveal";

const POINTS = [
  "HIPAA-aligned",
  "Patient identifiers are removed before claim data is stored.",
  "Each organisation's data is isolated; users only see their own claims.",
  "Enterprise cloud infrastructure with encryption in transit and at rest.",
];

export function DataTrustBand() {
  return (
    <section className="bg-[#07130e] py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <Reveal from="left">
          <p className="text-[12px] font-medium tracking-[0.18em] text-on-ink-muted uppercase">
            Data handling
          </p>
          <h2 className="mt-5 font-display text-[29px] leading-[1.14] font-normal text-on-ink sm:text-[32px] lg:text-[40px]">
            Claims data deserves
            <br />
            <span className="text-mint">a clear security posture.</span>
          </h2>
          <p className="mt-5 max-w-[420px] text-[15.5px] leading-relaxed text-on-ink-muted">
            A clear boundary around identifiers, storage, access and encryption is part of how
            Liquidity Health handles claims data.
          </p>

          <ul className="mt-8 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-[14.5px] text-on-ink">
                <CheckCircle2 className="mt-[1px] h-3.5 w-3.5 shrink-0 text-mint" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <Link
              to="/security"
              className="press rounded-md bg-white px-4 py-2.5 text-[13.5px] font-medium text-ink hover:opacity-90 sm:py-2"
            >
              Read our security posture
            </Link>
          </div>
        </Reveal>

        <Reveal from="right" delay={140}>
          <div className="relative aspect-[4/3] w-full rounded-xl border border-white/10 bg-[linear-gradient(160deg,rgba(28,86,68,0.55),rgba(7,19,14,0.9)_55%,rgba(45,148,96,0.35))] md:aspect-video lg:aspect-[4/3]">
            <div className="float-soft absolute top-1/2 left-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-black/40">
              <div className="flex gap-1 p-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
              </div>
            </div>
            <span className="pulse-dot absolute top-[18%] right-[26%] h-1.5 w-1.5 rounded-full bg-mint" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
