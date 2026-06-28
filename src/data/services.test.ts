import { describe, expect, it } from "vitest";
import { services } from "@/data/services";

describe("services data", () => {
  it("define tres servicios principales", () => {
    expect(services).toHaveLength(3);
  });

  it("cada servicio tiene id, título y enlace", () => {
    for (const service of services) {
      expect(service.id).toBeTruthy();
      expect(service.title).toBeTruthy();
      expect(service.href).toMatch(/^\/servicios/);
    }
  });
});
