// @vitest-environment happy-dom

import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";
import { createOverlay } from "../src";

describe("createOverlay()", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("cria e monta o overlay no document.body", () => {
    const overlay = createOverlay({
      src: "/logo.png",
    });

    expect(document.body.contains(overlay.element)).toBe(
      true,
    );

    expect(overlay.element).toBeInstanceOf(
      HTMLImageElement,
    );

    expect(overlay.element.getAttribute("src")).toBe(
      "/logo.png",
    );
  });

  it("monta o overlay em um container personalizado", () => {
    const container = document.createElement("div");

    document.body.appendChild(container);

    const overlay = createOverlay({
      src: "/watermark.png",
      container,
    });

    expect(container.contains(overlay.element)).toBe(true);
    expect(overlay.element.parentElement).toBe(container);
  });

  it("normaliza e aplica as opções", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      position: "top-left",
      size: 100,
      offset: 12,
      opacity: 0.4,
    });

    expect(overlay.element.style.top).toBe("12px");
    expect(overlay.element.style.left).toBe("12px");
    expect(overlay.element.style.width).toBe("100px");
    expect(overlay.element.style.opacity).toBe("0.4");
  });

  it("remove o overlay com destroy()", () => {
    const overlay = createOverlay({
      src: "/logo.png",
    });

    expect(document.body.contains(overlay.element)).toBe(
      true,
    );

    overlay.destroy();

    expect(document.body.contains(overlay.element)).toBe(
      false,
    );
  });

  it("permite chamar destroy mais de uma vez", () => {
    const overlay = createOverlay({
      src: "/logo.png",
    });

    overlay.destroy();

    expect(() => overlay.destroy()).not.toThrow();
  });
});