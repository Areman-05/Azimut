import { describe, expect, it } from "vitest";
import { cn } from "@/lib/cn";

describe("cn", () => {
  it("combina clases válidas", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("ignora valores falsy", () => {
    expect(cn("foo", false, null, undefined, "bar")).toBe("foo bar");
  });

  it("devuelve cadena vacía sin clases", () => {
    expect(cn()).toBe("");
  });
});
