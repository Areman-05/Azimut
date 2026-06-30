import { describe, expect, it } from "vitest";
import { createPageMetadata } from "@/lib/metadata";

describe("createPageMetadata", () => {
  it("genera metadata con título y descripción", () => {
    const metadata = createPageMetadata({
      title: "Proyectos",
      description: "Nuestro portfolio",
      path: "/proyectos",
    });

    expect(metadata.title).toBe("Proyectos");
    expect(metadata.description).toBe("Nuestro portfolio");
    expect(metadata.openGraph?.url).toContain("/proyectos");
  });
});
