import { describe, expect, it } from "vitest";
import { faqItems } from "@/data/faq";

describe("faq data", () => {
  it("contiene preguntas frecuentes", () => {
    expect(faqItems.length).toBeGreaterThanOrEqual(4);
  });

  it("cada entrada tiene pregunta y respuesta", () => {
    for (const item of faqItems) {
      expect(item.question.endsWith("?")).toBe(true);
      expect(item.answer.length).toBeGreaterThan(20);
    }
  });
});
