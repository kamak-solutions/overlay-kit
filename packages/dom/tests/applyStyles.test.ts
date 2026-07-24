// @vitest-environment happy-dom

import { describe, expect, it } from "vitest";
import { normalizeOverlayOptions } from "@overlay-kit/core";
import { applyOverlayStyles } from "../src";

describe("applyOverlayStyles()", () => {
  it("aplica os estilos básicos", () => {
    const element = document.createElement("img");

    const options = normalizeOverlayOptions({
      src: "/logo.png",
      size: 120,
      opacity: 0.5,
      rotate: 15,
      zIndex: 500,
    });

    applyOverlayStyles(element, options);

    expect(element.style.position).toBe("fixed");
    expect(element.style.width).toBe("120px");
    expect(element.style.height).toBe("auto");
    expect(element.style.opacity).toBe("0.5");
    expect(element.style.rotate).toBe("15deg");
    expect(element.style.zIndex).toBe("500");
  });

  it("aplica a posição calculada pelo core", () => {
    const element = document.createElement("img");

    const options = normalizeOverlayOptions({
      src: "/logo.png",
      position: "bottom-right",
      offset: 24,
    });

    applyOverlayStyles(element, options);

    expect(element.style.right).toBe("24px");
    expect(element.style.bottom).toBe("24px");
  });

  it("oculta o elemento quando visible é false", () => {
    const element = document.createElement("img");

    const options = normalizeOverlayOptions({
      src: "/logo.png",
      visible: false,
    });

    applyOverlayStyles(element, options);

    expect(element.style.display).toBe("none");
  });

  it("impede interação com o overlay", () => {
    const element = document.createElement("img");

    const options = normalizeOverlayOptions({
      src: "/logo.png",
    });

    applyOverlayStyles(element, options);

    expect(element.style.pointerEvents).toBe("none");
    expect(element.style.userSelect).toBe("none");
  });
});