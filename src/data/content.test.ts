import { describe, expect, it } from "vitest";
import { processSteps } from "@/data/process";
import { stats } from "@/data/stats";

describe("process data", () => {
  it("define cuatro pasos del proceso", () => {
    expect(processSteps).toHaveLength(4);
  });

  it("los pasos están numerados secuencialmente", () => {
    processSteps.forEach((step, index) => {
      expect(step.step).toBe(index + 1);
    });
  });
});

describe("stats data", () => {
  it("define cuatro métricas de confianza", () => {
    expect(stats).toHaveLength(4);
  });

  it("cada métrica tiene valor y etiqueta", () => {
    for (const stat of stats) {
      expect(stat.value).toBeTruthy();
      expect(stat.label).toBeTruthy();
    }
  });
});
