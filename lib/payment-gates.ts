type Environment = Record<string, string | undefined>;

export function checkoutEnabled(kind: "donation" | "membership", environment: Environment = process.env): boolean {
  return kind === "donation" ? environment.QBBE_DONATIONS_ENABLED === "true" : environment.QBBE_MEMBERSHIPS_ENABLED === "true";
}
