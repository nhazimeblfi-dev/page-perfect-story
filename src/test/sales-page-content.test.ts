import { describe, expect, it } from "vitest";

import { salesPageFacts } from "@/lib/sales-page-content";

describe("sales page offer facts", () => {
  it("keeps the complete collection price at R$ 27,00", () => {
    expect(salesPageFacts.completePrice).toBe("R$ 27,00");
  });

  it("keeps the essential plan price at R$ 14,90", () => {
    expect(salesPageFacts.essentialPrice).toBe("R$ 14,90");
  });

  it("keeps the campaign deadline at 30/11", () => {
    expect(salesPageFacts.campaignDeadline).toBe("30/11");
  });

  it("keeps the guarantee period at 7 days", () => {
    expect(salesPageFacts.guaranteeDays).toBe(7);
  });
});