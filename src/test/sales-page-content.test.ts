import { describe, expect, it } from "vitest";

import { salesPageFacts } from "@/lib/sales-page-content";

describe("sales page offer facts", () => {
  it("keeps the complete collection price at € 5,60", () => {
    expect(salesPageFacts.completePrice).toBe("€ 5,60");
  });

  it("keeps the campaign deadline at 30/11", () => {
    expect(salesPageFacts.campaignDeadline).toBe("30/11");
  });

  it("keeps the guarantee period at 7 days", () => {
    expect(salesPageFacts.guaranteeDays).toBe(7);
  });
});