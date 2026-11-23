import { describe, expect, it } from "vitest";

import { salesPageFacts } from "@/lib/sales-page-content";

describe("sales page offer facts", () => {
  it("keeps the complete collection price at € 5,00", () => {
    expect(salesPageFacts.completePrice).toBe("€ 5,00");
  });

  it("keeps the campaign deadline at 30/11", () => {
    expect(salesPageFacts.campaignDeadline).toBe("30/11");
  });

  it("keeps the guarantee period at 30 days", () => {
    expect(salesPageFacts.guaranteeDays).toBe(30);
  });
});