export function assertEgccAllowlisted(email: string | null | undefined) {
  const raw = process.env.EGCC_ADMIN_ALLOWLIST ?? "";
  const allow = raw
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

  if (!email) throw new Error("NO_EMAIL");
  if (!allow.includes(email.toLowerCase())) throw new Error("NOT_ALLOWLISTED");
}

