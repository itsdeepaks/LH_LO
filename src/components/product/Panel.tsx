import type { ReactNode } from "react";
import { ILLUSTRATIVE_NOTE } from "@/lib/sample-claims";
import { cn } from "@/lib/utils";

export function Panel({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-lh-line bg-white shadow-[0_18px_44px_-34px_rgba(12,32,24,0.35)]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-lh-line bg-lh-mist px-4 py-2.5">
        <span className="font-mono text-[11px] tracking-wide text-lh-muted uppercase">{title}</span>
        <span className="hidden shrink-0 rounded-full bg-white px-2 py-0.5 font-mono text-[10px] text-lh-muted sm:inline">
          {ILLUSTRATIVE_NOTE}
        </span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
      <figcaption className="border-t border-lh-line px-4 py-2 font-mono text-[10px] text-lh-muted sm:hidden">
        {ILLUSTRATIVE_NOTE}
      </figcaption>
    </figure>
  );
}

export function StatusPill({ status }: { status: string }) {
  const review = /review|triage|appeal|resubmit|verify/i.test(status);
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2 py-0.5 font-mono text-[10px] whitespace-nowrap",
        review ? "bg-lh-coral/12 text-lh-coral" : "bg-lh-pale text-lh-cobalt-deep",
      )}
    >
      {status}
    </span>
  );
}
