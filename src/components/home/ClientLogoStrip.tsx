import { Reveal } from "@/components/home/Reveal";

const BRANDS = [
  { name: "Cleveland Clinic", domain: "clevelandclinic.org", logo: "/logos/clevelandclinic.png" },
  { name: "Mayo Clinic", domain: "mayoclinic.org", logo: "/logos/mayoclinic.png" },
  { name: "Johns Hopkins Medicine", domain: "hopkinsmedicine.org", logo: "/logos/hopkinsmedicine.png" },
  { name: "Kaiser Permanente", domain: "kp.org", logo: "/logos/kp.png" },
  { name: "Mass General Brigham", domain: "massgeneralbrigham.org", logo: "/logos/massgeneralbrigham.png" },
  { name: "Northwell Health", domain: "northwell.edu", logo: "/logos/northwell.png" },
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
      <img
        src={brand.logo}
        alt={hidden ? "" : `${brand.name} logo`}
        loading="lazy"
        className="h-9 w-auto max-w-[140px] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer"
      />
    </div>
  );
}

export function ClientLogoStrip() {
  return (
    <section className="relative isolate bg-cream pb-8 pt-6 lg:pb-12 lg:pt-8" aria-label="Supported healthcare claim formats">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <p className="text-center font-mono text-[11.5px] uppercase tracking-[0.18em] text-ink/45">
            Compatible with claim & remittance formats across major health systems
          </p>
          <div className="relative mt-8 py-6 sm:py-7">
            {/* Top feathered divider line */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
            />

            <div className="marquee overflow-hidden">
              <div className="marquee-track flex w-max items-center">
                {SET.map((brand, i) => (
                  <LogoItem key={`${brand.domain}-${i}`} brand={brand} />
                ))}
                {SET.map((brand, i) => (
                  <LogoItem key={`${brand.domain}-${i}-dup`} brand={brand} hidden />
                ))}
              </div>
            </div>

            {/* Bottom feathered divider line */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
