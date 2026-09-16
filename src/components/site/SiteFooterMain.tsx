import { Link } from "@tanstack/react-router";

const PLATFORM = [
  { label: "Platform Overview", to: "/platform" as const },
  { label: "How It Works", to: "/how-it-works" as const },
  { label: "Security", to: "/security" as const },
];

const SOLUTIONS = [
  { label: "Medical Practices", to: "/platform" as const, hash: "for-providers" },
  { label: "Billing & RCM Organizations", to: "/platform" as const, hash: "for-billing-rcm" },
  { label: "Health Systems / MSOs", to: "/platform" as const, hash: "for-health-systems" },
];

const COMPANY = [
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

const LEGAL = [
  { label: "Privacy Policy", to: "/privacy-policy" as const },
  { label: "Terms of Use", to: "/terms-of-use" as const },
];

const linkClass =
  "text-[14px] text-lh-on-dark-muted transition-colors hover:text-lh-on-dark focus-visible:ring-2 focus-visible:ring-lh-cobalt focus-visible:outline-none";

export function SiteFooterMain() {
  return (
    <footer className="bg-lh-ink py-14 text-lh-on-dark">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link to="/" className="font-instrument text-[16px] font-semibold text-lh-on-dark">
              Liquidity Health
            </Link>
            <p className="mt-3 max-w-[30ch] text-[13.5px] leading-relaxed text-lh-on-dark-muted">
              Claims intelligence for healthcare revenue-cycle teams.
            </p>
          </div>

          <nav aria-label="Platform">
            <h2 className="text-[12px] font-medium tracking-[0.12em] text-lh-on-dark uppercase">
              Platform
            </h2>
            <ul className="mt-3.5 space-y-2.5">
              {PLATFORM.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Solutions">
            <h2 className="text-[12px] font-medium tracking-[0.12em] text-lh-on-dark uppercase">
              Solutions
            </h2>
            <ul className="mt-3.5 space-y-2.5">
              {SOLUTIONS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} hash={l.hash} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-[12px] font-medium tracking-[0.12em] text-lh-on-dark uppercase">
              Company
            </h2>
            <ul className="mt-3.5 space-y-2.5">
              {COMPANY.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="text-[12px] font-medium tracking-[0.12em] text-lh-on-dark uppercase">
              Legal
            </h2>
            <ul className="mt-3.5 space-y-2.5">
              {LEGAL.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-1.5 border-t border-lh-dark-line pt-6 text-[13px] text-lh-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Liquidity Health, LLC. All rights reserved.</p>
          <p>Baltimore, MD</p>
        </div>
      </div>
    </footer>
  );
}
