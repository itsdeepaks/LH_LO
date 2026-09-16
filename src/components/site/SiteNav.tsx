import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  ChevronDown,
  FileSearch,
  GitCompareArrows,
  LayoutDashboard,
  Lock,
  Mail,
  Menu,
  ShieldCheck,
  Users,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import liquidityHealthLogo from "@/assets/liquidity-health-logo.svg";
import { CTA_LABEL } from "@/components/site/ui";

type Route =
  | "/platform"
  | "/how-it-works"
  | "/security"
  | "/funding"
  | "/about"
  | "/contact"
  | "/privacy-policy"
  | "/terms-of-use";

type RichItem = { label: string; description: string; to: Route; icon: LucideIcon };
type Group = { heading: string; items: RichItem[] };
type SideLink = { label: string; to: Route };
type MenuData = { groups: Group[]; sideHeading: string; sideLinks: SideLink[] };
type MenuKey = "platform" | "company";

const PLATFORM_MENU: MenuData = {
  groups: [
    {
      heading: "The platform",
      items: [
        {
          label: "Platform Overview",
          description: "Claims, remittances and contract terms in one view",
          to: "/platform",
          icon: LayoutDashboard,
        },
        {
          label: "Variance Detection",
          description: "See where paid amounts differ from expected",
          to: "/platform",
          icon: GitCompareArrows,
        },
      ],
    },
    {
      heading: "How it works",
      items: [
        {
          label: "Data Flow",
          description: "From file drop to a reviewable worklist",
          to: "/how-it-works",
          icon: Workflow,
        },
        {
          label: "Claim Review",
          description: "What your team looks at first, and why",
          to: "/how-it-works",
          icon: FileSearch,
        },
      ],
    },
    {
      heading: "Trust",
      items: [
        {
          label: "Security",
          description: "Data handling, isolation and encryption",
          to: "/security",
          icon: ShieldCheck,
        },
        {
          label: "Data Handling",
          description: "How claim data is handled and separated",
          to: "/security",
          icon: Lock,
        },
      ],
    },
  ],

  sideHeading: "Get started",
  sideLinks: [
    { label: "Analyze my claims", to: "/contact" },
    { label: "Walk through the flow", to: "/how-it-works" },
    { label: "Review security", to: "/security" },
    { label: "Talk to the team", to: "/contact" },
  ],
};

const COMPANY_MENU: MenuData = {
  groups: [
    {
      heading: "Company",
      items: [
        {
          label: "About",
          description: "The team and the problem we work on",
          to: "/about",
          icon: Building2,
        },
        {
          label: "Contact",
          description: "Send us a note and we will follow up",
          to: "/contact",
          icon: Mail,
        },
      ],
    },
    {
      heading: "Who we build for",
      items: [
        {
          label: "Revenue Cycle Teams",
          description: "Fewer spreadsheets, clearer priorities",
          to: "/platform",
          icon: Users,
        },
      ],
    },
  ],
  sideHeading: "Legal",
  sideLinks: [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms of Use", to: "/terms-of-use" },
  ],
};

const MENUS: Record<
  MenuKey,
  { label: string; data: MenuData; width: number; align: "start" | "end" }
> = {
  platform: { label: "Platform", data: PLATFORM_MENU, width: 900, align: "start" },
  company: { label: "Company", data: COMPANY_MENU, width: 760, align: "end" },
};

const OPEN_DELAY = 50;
const CLOSE_DELAY = 50;

type Point = [number, number];

function pointInPolygon(x: number, y: number, pts: Point[]) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const a = pts[i]!;
    const b = pts[j]!;
    const [xi, yi] = a;
    const [xj, yj] = b;
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

function inRect(x: number, y: number, r: DOMRect, pad = 4) {
  return x >= r.left - pad && x <= r.right + pad && y >= r.top - pad && y <= r.bottom + pad;
}

function Wordmark() {
  return (
    <img
      src={liquidityHealthLogo}
      alt=""
      width={191}
      height={23}
      className="h-auto w-[159px] sm:w-[191px]"
    />
  );
}

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<MenuKey | null>(null);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);
  const triggerRefs = useRef<Partial<Record<MenuKey, HTMLButtonElement | null>>>({});
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const corridor = useRef<Point[] | null>(null);
  const activeRef = useRef<MenuKey | null>(null);
  activeRef.current = active;

  const clearTimers = useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  }, []);

  const closeNow = useCallback(() => {
    clearTimers();
    corridor.current = null;
    setActive(null);
  }, [clearTimers]);

  const requestClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      corridor.current = null;
      setActive(null);
    }, CLOSE_DELAY);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);

  const requestOpen = useCallback(
    (key: MenuKey) => {
      cancelClose();
      corridor.current = null;
      if (activeRef.current === key) return;
      if (openTimer.current) clearTimeout(openTimer.current);
      // Already inside the menu container: swap panels immediately, no flicker.
      if (activeRef.current !== null) {
        setActive(key);
        return;
      }
      openTimer.current = setTimeout(() => setActive(key), OPEN_DELAY);
    },
    [cancelClose],
  );

  // Build a safePolygon-style corridor from the pointer's exit point toward the panel.
  const handleTriggerLeave = useCallback(
    (key: MenuKey, e: React.PointerEvent) => {
      if (openTimer.current) clearTimeout(openTimer.current);
      openTimer.current = null;
      const panel = panelRef.current;
      const trigger = triggerRefs.current[key];
      if (!panel || activeRef.current !== key || !trigger) {
        requestClose();
        return;
      }
      const t = trigger.getBoundingClientRect();
      const p = panel.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;
      // Pointer heading upward / sideways out of the header: close promptly.
      if (y < t.bottom - 2) {
        requestClose();
        return;
      }
      corridor.current = [
        [x, y - 2],
        [Math.max(p.left - 12, 0), p.top + 2],
        [p.right + 12, p.top + 2],
      ];
      requestClose();
    },
    [requestClose],
  );

  // Global pointer tracking: keep the menu open while the pointer stays in the
  // corridor, on the panel, or on any trigger; close as soon as it leaves all.
  useEffect(() => {
    if (!active) return;
    const onMove = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const panel = panelRef.current;
      if (panel && inRect(x, y, panel.getBoundingClientRect(), 6)) {
        corridor.current = null;
        cancelClose();
        return;
      }
      const overTrigger = (Object.keys(triggerRefs.current) as MenuKey[]).some((k) => {
        const el = triggerRefs.current[k];
        return el ? inRect(x, y, el.getBoundingClientRect(), 6) : false;
      });
      if (overTrigger) {
        cancelClose();
        return;
      }
      if (corridor.current && pointInPolygon(x, y, corridor.current)) {
        cancelClose();
        return;
      }
      corridor.current = null;
      requestClose();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const key = activeRef.current;
      closeNow();
      if (key) triggerRefs.current[key]?.focus();
    };
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target)) return;
      const onTrigger = (Object.keys(triggerRefs.current) as MenuKey[]).some((k) =>
        triggerRefs.current[k]?.contains(target),
      );
      if (onTrigger) return;
      closeNow();
    };
    document.addEventListener("pointermove", onMove);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [active, cancelClose, requestClose, closeNow]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Escape closes the mobile menu and returns focus to its toggle.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMobileOpen(false);
      mobileToggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const topLink =
    "rounded-full px-3 py-1.5 text-[15px] text-ink/85 transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:outline-none";

  const mobileGroups = useMemo(() => [...PLATFORM_MENU.groups, ...COMPANY_MENU.groups], []);
  const activeMenu = active ? MENUS[active] : null;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-5 lg:px-8">
        <Link
          to="/"
          className="shrink-0"
          onClick={() => setMobileOpen(false)}
          aria-label="Liquidity Health home"
        >
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main">
          {(["platform"] as MenuKey[]).map((key) => (
            <MenuTrigger
              key={key}
              menuKey={key}
              active={active === key}
              refs={triggerRefs}
              onOpen={requestOpen}
              onLeave={handleTriggerLeave}
              onToggle={() => (active === key ? closeNow() : requestOpen(key))}
            />
          ))}
          <Link to="/how-it-works" activeProps={{ className: "text-ink" }} className={topLink}>
            How It Works
          </Link>
          {(["company"] as MenuKey[]).map((key) => (
            <MenuTrigger
              key={key}
              menuKey={key}
              active={active === key}
              refs={triggerRefs}
              onOpen={requestOpen}
              onLeave={handleTriggerLeave}
              onToggle={() => (active === key ? closeNow() : requestOpen(key))}
            />
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="press inline-flex items-center rounded-md bg-ink px-4 py-2 text-[14.5px] font-medium text-on-ink transition-colors hover:bg-ink-soft focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {CTA_LABEL}
          </Link>
        </div>

        <button
          type="button"
          ref={mobileToggleRef}
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="-mr-1 rounded-md p-2 text-ink hover:bg-surface focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:outline-none lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {activeMenu ? (
        <div className="absolute inset-x-0 top-16 z-50 hidden px-5 lg:block lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div
              ref={panelRef}
              id={`mega-${active}`}
              role="group"
              aria-label={`${activeMenu.label} menu`}
              onFocus={cancelClose}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) requestClose();
              }}
              className={`mega-in max-w-full overflow-hidden rounded-2xl border border-line bg-cream shadow-[0_36px_80px_-40px_rgba(12,32,24,0.55)] ${
                activeMenu.align === "end" ? "ml-auto" : "mr-auto"
              }`}
              style={{ width: activeMenu.width }}
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto]">
                <div className="grid gap-x-8 gap-y-6 p-6 sm:grid-cols-2 sm:p-7">
                  {activeMenu.data.groups.map((group) => (
                    <div key={group.heading} className="min-w-0">
                      <p className="font-mono text-[10.5px] tracking-[0.16em] text-ink/45 uppercase">
                        {group.heading}
                      </p>
                      <ul className="mt-3 space-y-1">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.to}
                              onClick={closeNow}
                              className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-surface focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:outline-none"
                            >
                              <span className="mt-[2px] grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line bg-surface text-ink/70 transition-colors group-hover:border-ink/20 group-hover:text-ink">
                                <item.icon className="h-4 w-4" aria-hidden="true" />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-[14.5px] font-medium text-ink">
                                  {item.label}
                                </span>
                                <span className="mt-0.5 block text-[12.5px] leading-snug text-ink/60">
                                  {item.description}
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="w-[220px] border-l border-line bg-surface/60 p-6 sm:p-7">
                  <p className="font-mono text-[10.5px] tracking-[0.16em] text-ink/45 uppercase">
                    {activeMenu.data.sideHeading}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {activeMenu.data.sideLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          onClick={closeNow}
                          className="block rounded-md px-2 py-1.5 text-[14px] text-ink/75 transition-colors hover:bg-cream hover:text-ink focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:outline-none"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-cream px-5 pt-5 pb-10 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-6">
            {mobileGroups.map((group) => (
              <div key={group.heading}>
                <p className="font-mono text-[10.5px] tracking-[0.16em] text-ink/45 uppercase">
                  {group.heading}
                </p>
                <ul className="mt-2 divide-y divide-line">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-start gap-3 py-3"
                      >
                        <span className="mt-[2px] grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line bg-surface text-ink/70">
                          <item.icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[15px] font-medium text-ink">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-[12.5px] leading-snug text-ink/60">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-7 flex items-center justify-center rounded-md bg-ink px-4 py-3 text-[15px] font-medium text-on-ink"
          >
            {CTA_LABEL}
          </Link>
        </div>
      ) : null}
    </header>
  );
}

function MenuTrigger({
  menuKey,
  active,
  refs,
  onOpen,
  onLeave,
  onToggle,
}: {
  menuKey: MenuKey;
  active: boolean;
  refs: React.MutableRefObject<Partial<Record<MenuKey, HTMLButtonElement | null>>>;
  onOpen: (key: MenuKey) => void;
  onLeave: (key: MenuKey, e: React.PointerEvent) => void;
  onToggle: () => void;
}) {
  const { label } = MENUS[menuKey];
  return (
    <button
      type="button"
      ref={(el) => {
        refs.current[menuKey] = el;
      }}
      aria-expanded={active}
      aria-haspopup="true"
      aria-controls={active ? `mega-${menuKey}` : undefined}
      onPointerEnter={() => onOpen(menuKey)}
      onPointerLeave={(e) => onLeave(menuKey, e)}
      onFocus={() => onOpen(menuKey)}
      onClick={onToggle}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-[15px] transition-colors focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:outline-none ${
        active ? "bg-surface text-ink" : "text-ink/85 hover:text-ink"
      }`}
    >
      {label}
      <ChevronDown
        className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${active ? "rotate-180" : ""}`}
        aria-hidden="true"
      />
    </button>
  );
}
