import { Reveal } from "@/components/home/Reveal";

const LOGO_TOKEN = import.meta.env["VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY"];

const BRANDS = [
  { name: "Cleveland Clinic", domain: "clevelandclinic.org" },
  { name: "Mayo Clinic", domain: "mayoclinic.org" },
  { name: "Johns Hopkins Medicine", domain: "hopkinsmedicine.org" },
  { name: "Kaiser Permanente", domain: "kp.org" },
  { name: "Mass General Brigham", domain: "massgeneralbrigham.org" },
  { name: "Northwell Health", domain: "northwell.edu" },
];

// One half of the loop must be wider than the widest desktop viewport so
// logos span the full screen width while scrolling; quadruple to guarantee it.
const SET = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

function LogoItem({ brand, hidden }: { brand: (typeof BRANDS)[number]; hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex h-10 shrink-0 items-center justify-center px-8"
    >
      {LOGO_TOKEN ? (
        <img
          src={`https://img.logo.dev/${brand.domain}?token=${LOGO_TOKEN}&size=256&retina=true&format=png`}
          alt={hidden ? "" : `${brand.name} logo`}
          loading="lazy"
          className="h-9 w-auto max-w-[140px] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        />
      ) : (
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/35">
          {brand.name}
        </span>
      )}
    </div>
  );
}

export function ClientLogoStrip() {
  return (
    <section className="relative isolate bg-cream pb-8 pt-6 lg:pb-10 lg:pt-8" aria-label="Healthcare organizations">

      <Reveal>
        <p className="text-center font-mono text-[11.5px] uppercase tracking-[0.18em] text-ink/45">
          Built for revenue cycle teams in healthcare
        </p>
        <div className="marquee mt-6 overflow-hidden">
          <div className="marquee-track flex w-max items-center">
            {SET.map((brand, i) => (
              <LogoItem key={`${brand.domain}-${i}`} brand={brand} />
            ))}
            {SET.map((brand, i) => (
              <LogoItem key={`${brand.domain}-${i}-dup`} brand={brand} hidden />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
