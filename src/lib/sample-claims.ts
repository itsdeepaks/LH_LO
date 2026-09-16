/**
 * Synthetic, illustrative data used for every product visual on the marketing
 * site. Nothing here is real customer, payer or patient data. Providers and
 * payers are fictional and patient identifiers are masked.
 */

export const ILLUSTRATIVE_NOTE = "Illustrative example — not live data";

export const overviewMetrics = [
  { label: "Total claims", value: "1,862" },
  { label: "Total billed", value: "$355,173.52" },
  { label: "Total allowed", value: "$50,182.21" },
  { label: "Payments received", value: "$38,835.55" },
  { label: "Avg. payment time", value: "5 days" },
  { label: "Denial rate", value: "1.0%" },
];

export const featuredClaim = {
  id: "CLM-45839201",
  patient: "PT-•••• 3820",
  provider: "Sunrise Medical Group",
  payer: "Northstar Health",
  service: "Inpatient medical services",
  dateOfService: "Jan 14, 2026",
  billed: "$14,820",
  expected: "$12,480",
  allowed: "$10,920",
  paid: "$10,320",
  variance: "$2,160",
  variancePct: "17.3% below expectation",
  status: "Review — Contract rate mismatch",
};

export type ExplorerRow = {
  id: string;
  payer: string;
  billed: string;
  paid: string;
  balance: string;
  status: "Paid" | "Review";
};

export const explorerRows: ExplorerRow[] = [
  {
    id: "CLM-45838177",
    payer: "ClearPlan",
    billed: "$8,240",
    paid: "$8,240",
    balance: "$0",
    status: "Paid",
  },
  {
    id: "CLM-45837102",
    payer: "HealthCore",
    billed: "$18,600",
    paid: "$12,420",
    balance: "$6,180",
    status: "Review",
  },
  {
    id: "CLM-45836901",
    payer: "Unity",
    billed: "$11,320",
    paid: "$11,320",
    balance: "$0",
    status: "Paid",
  },
  {
    id: "CLM-45835833",
    payer: "Northstar",
    billed: "$22,400",
    paid: "$16,800",
    balance: "$5,600",
    status: "Review",
  },
];

export type QueueRow = {
  id: string;
  payer: string;
  reason: string;
  window: string;
  amount: string;
  action: string;
};

export const recoveryQueue: QueueRow[] = [
  {
    id: "CLM-45839201",
    payer: "Northstar",
    reason: "CO-16 missing info",
    window: "18 days left",
    amount: "$2,160",
    action: "Needs triage",
  },
  {
    id: "CLM-45838944",
    payer: "ClearPlan",
    reason: "CO-97 bundled service",
    window: "31 days left",
    amount: "$845",
    action: "Correct & resubmit",
  },
  {
    id: "CLM-45837412",
    payer: "Unity",
    reason: "OA-18 duplicate claim",
    window: "46 days left",
    amount: "$620",
    action: "Verify payer response",
  },
  {
    id: "CLM-45836108",
    payer: "HealthCore",
    reason: "CO-146 diagnosis",
    window: "9 days left",
    amount: "$410",
    action: "Build appeal",
  },
];

export const payerComparison = [
  { payer: "Northstar Health", yield: "74%", days: "34 days", denials: "2.4%", width: 74 },
  { payer: "ClearPlan", yield: "91%", days: "19 days", denials: "0.8%", width: 91 },
  { payer: "Unity", yield: "88%", days: "26 days", denials: "1.1%", width: 88 },
  { payer: "HealthCore", yield: "67%", days: "41 days", denials: "3.2%", width: 67 },
];

export const expectedVsPaid = [
  { label: "Billed", value: "$14,820", width: 100, tone: "neutral" as const },
  { label: "Expected (contract)", value: "$12,480", width: 84, tone: "cobalt" as const },
  { label: "Allowed", value: "$10,920", width: 74, tone: "neutral" as const },
  { label: "Paid", value: "$10,320", width: 70, tone: "coral" as const },
];

export const codingConsistency = [
  {
    code: "99223",
    description: "Initial hospital care",
    claims: "212",
    consistency: "98%",
    note: "Adjudicated as expected",
  },
  {
    code: "99232",
    description: "Subsequent hospital care",
    claims: "184",
    consistency: "86%",
    note: "Two payers reduce this line",
  },
  {
    code: "93000",
    description: "Electrocardiogram",
    claims: "96",
    consistency: "71%",
    note: "Frequently bundled",
  },
  {
    code: "71046",
    description: "Chest X-ray, 2 views",
    claims: "58",
    consistency: "94%",
    note: "Adjudicated as expected",
  },
];
