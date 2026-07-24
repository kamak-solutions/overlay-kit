import { describe, expect, it } from "vitest";
import {
  clamp,
  normalizeCssValue,
  normalizeOpacity,
} from "../src";

describe("clamp()", () => {
  it("limita acima do máximo", () => {
    expect(clamp(20, 0, 10)).toBe(10);
  });

  it("limita abaixo do mínimo", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it("mantém valor válido", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });
});

describe("normalizeOpacity()", () => {
  it("limita entre 0 e 1", () => {
    expect(normalizeOpacity(2)).toBe(1);
    expect(normalizeOpacity(-1)).toBe(0);
    expect(normalizeOpacity(0.4)).toBe(0.4);
  });
});

describe("normalizeCssValue()", () => {
  it("converte número para px", () => {
    expect(normalizeCssValue(20)).toBe("20px");
  });

  it("mantém string", () => {
    expect(normalizeCssValue("15%")).toBe("15%");
  });
});