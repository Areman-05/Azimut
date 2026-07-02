import { describe, expect, it } from "vitest";
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/jsonld";

describe("jsonld utilities", () => {
  it("genera schema de organización", () => {
    const data = getOrganizationJsonLd();
    expect(data["@type"]).toBe("Organization");
    expect(data.name).toBeTruthy();
    expect(data.email).toContain("@");
  });

  it("genera schema de sitio web", () => {
    const data = getWebSiteJsonLd();
    expect(data["@type"]).toBe("WebSite");
    expect(data.url).toContain("https://");
  });
});
