import { describe, expect, it } from "vitest";
import { certifications } from "@/data/certifications";

describe("certifications data", () => {
  it("define al menos cuatro certificaciones", () => {
    expect(certifications.length).toBeGreaterThanOrEqual(4);
  });

  it("cada certificación tiene nombre y descripción", () => {
    for (const cert of certifications) {
      expect(cert.name).toBeTruthy();
      expect(cert.description.length).toBeGreaterThan(10);
    }
  });
});
