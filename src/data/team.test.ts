import { describe, expect, it } from "vitest";
import { team } from "@/data/team";

describe("team data", () => {
  it("define al menos cuatro miembros", () => {
    expect(team.length).toBeGreaterThanOrEqual(4);
  });

  it("cada miembro tiene nombre y rol", () => {
    for (const member of team) {
      expect(member.name).toBeTruthy();
      expect(member.role).toBeTruthy();
      expect(member.bio.length).toBeGreaterThan(10);
      expect(member.image).toMatch(/^\/images\//);
    }
  });
});
