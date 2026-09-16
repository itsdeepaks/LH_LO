import { Panel, StatusPill } from "@/components/product/Panel";
import {
  codingConsistency,
  expectedVsPaid,
  explorerRows,
  featuredClaim,
  overviewMetrics,
  payerComparison,
  recoveryQueue,
} from "@/lib/sample-claims";

const TH = "px-3 py-2 text-left font-medium text-lh-muted";
const TD = "px-3 py-2.5 align-middle text-lh-ink";

export function ClaimsOverview() {
  return (
    <Panel title="Claims overview">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-5">
        {overviewMetrics.map((m) => (
          <div key={m.label}>
            <dt className="text-[12px] text-lh-muted">{m.label}</dt>
            <dd className="mt-1 font-mono text-[15px] font-medium text-lh-ink sm:text-[17px]">
              {m.value}
            </dd>
          </div>
        ))}
      </dl>
    </Panel>
  );
}

export function ClaimsExplorer() {
  return (
    <Panel title="Claims explorer">
      <div className="-mx-1 overflow-x-auto">
        <table className="w-full min-w-[440px] border-collapse text-[12.5px]">
          <thead>
            <tr className="border-b border-lh-line">
              <th className={TH}>Claim</th>
              <th className={TH}>Payer</th>
              <th className={TH}>Billed</th>
              <th className={TH}>Paid</th>
              <th className={TH}>Balance</th>
              <th className={TH}>Status</th>
            </tr>
          </thead>
          <tbody>
            {explorerRows.map((r) => (
              <tr key={r.id} className="border-b border-lh-line/70 last:border-0">
                <td className={`${TD} font-mono`}>{r.id}</td>
                <td className={TD}>{r.payer}</td>
                <td className={`${TD} font-mono`}>{r.billed}</td>
                <td className={`${TD} font-mono`}>{r.paid}</td>
                <td className={`${TD} font-mono`}>{r.balance}</td>
                <td className={TD}>
                  <StatusPill status={r.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

export function RecoveryQueue() {
  return (
    <Panel title="Recovery queue">
      <ul className="divide-y divide-lh-line/70">
        {recoveryQueue.map((r) => (
          <li
            key={r.id}
            className="flex flex-wrap items-center gap-x-3 gap-y-1.5 py-3 first:pt-0 last:pb-0"
          >
            <span className="font-mono text-[12px] text-lh-ink">{r.id}</span>
            <span className="text-[12px] text-lh-muted">{r.payer}</span>
            <span className="text-[12px] text-lh-ink">{r.reason}</span>
            <span className="ml-auto font-mono text-[12px] text-lh-muted">{r.window}</span>
            <span className="font-mono text-[12.5px] font-medium text-lh-ink">{r.amount}</span>
            <StatusPill status={r.action} />
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export function ClaimDetail() {
  const rows = [
    ["Provider", featuredClaim.provider],
    ["Payer", featuredClaim.payer],
    ["Patient", featuredClaim.patient],
    ["Service", featuredClaim.service],
    ["Date of service", featuredClaim.dateOfService],
  ] as const;

  return (
    <Panel title={`Claim ${featuredClaim.id}`}>
      <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-3 border-b border-lh-line/60 pb-1.5">
            <dt className="text-[12px] text-lh-muted">{k}</dt>
            <dd className="text-right text-[12px] text-lh-ink">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Billed", featuredClaim.billed],
          ["Expected", featuredClaim.expected],
          ["Allowed", featuredClaim.allowed],
          ["Paid", featuredClaim.paid],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-lh-mist px-3 py-2.5">
            <p className="text-[11px] text-lh-muted">{k}</p>
            <p className="mt-0.5 font-mono text-[13.5px] font-medium text-lh-ink">{v}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-lg border border-lh-coral/30 bg-lh-coral/8 px-3 py-3">
        <p className="text-[11px] text-lh-muted">Potential variance</p>
        <p className="mt-0.5 font-mono text-[15px] font-medium text-lh-coral">
          {featuredClaim.variance}{" "}
          <span className="font-sans text-[11.5px] text-lh-muted">
            ({featuredClaim.variancePct})
          </span>
        </p>
        <p className="mt-2 text-[12px] text-lh-ink">{featuredClaim.status}</p>
      </div>

      <div className="mt-3">
        <p className="text-[11.5px] font-medium text-lh-ink">Evidence for review</p>
        <ul className="mt-1.5 space-y-1 text-[12px] text-lh-muted">
          <li>Contracted rate on file for this service line</li>
          <li>Remittance line detail with adjustment codes</li>
          <li>Prior adjudications of the same code by this payer</li>
        </ul>
      </div>
    </Panel>
  );
}

export function ExpectedVsPaid() {
  return (
    <Panel title="Expected vs. actual reimbursement">
      <ul className="space-y-3.5">
        {expectedVsPaid.map((row) => (
          <li key={row.label}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[12px] text-lh-muted">{row.label}</span>
              <span className="font-mono text-[12.5px] text-lh-ink">{row.value}</span>
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-lh-mist">
              <div
                style={{ width: `${row.width}%` }}
                className={
                  row.tone === "cobalt"
                    ? "h-full rounded-full bg-lh-cobalt"
                    : row.tone === "coral"
                      ? "h-full rounded-full bg-lh-coral"
                      : "h-full rounded-full bg-lh-pale"
                }
              />
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export function PayerComparison() {
  return (
    <Panel title="Payer comparison">
      <ul className="space-y-3.5">
        {payerComparison.map((p) => (
          <li key={p.payer}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <span className="text-[12.5px] text-lh-ink">{p.payer}</span>
              <span className="font-mono text-[11.5px] text-lh-muted">
                {p.yield} yield · {p.days} · {p.denials} denied
              </span>
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-lh-mist">
              <div style={{ width: `${p.width}%` }} className="h-full rounded-full bg-lh-cobalt" />
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export function CodingIntelligence() {
  return (
    <Panel title="Coding intelligence">
      <div className="-mx-1 overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-[12.5px]">
          <thead>
            <tr className="border-b border-lh-line">
              <th className={TH}>Code</th>
              <th className={TH}>Description</th>
              <th className={TH}>Claims</th>
              <th className={TH}>Consistency</th>
            </tr>
          </thead>
          <tbody>
            {codingConsistency.map((c) => (
              <tr key={c.code} className="border-b border-lh-line/70 last:border-0">
                <td className={`${TD} font-mono`}>{c.code}</td>
                <td className={TD}>
                  {c.description}
                  <span className="block text-[11px] text-lh-muted">{c.note}</span>
                </td>
                <td className={`${TD} font-mono`}>{c.claims}</td>
                <td className={`${TD} font-mono`}>{c.consistency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
