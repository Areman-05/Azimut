import { describe, expect, it } from "vitest";
import { testimonials } from "@/data/testimonials";

describe("testimonials data", () => {
  it("contiene al menos tres testimonios", () => {
    expect(testimonials.length).toBeGreaterThanOrEqual(3);
  });

  it("cada testimonio tiene campos completos", () => {
    for (const item of testimonials) {
      expect(item.quote.length).toBeGreaterThan(20);
      expect(item.author).toBeTruthy();
      expect(item.role).toBeTruthy();
    }
  });
});
