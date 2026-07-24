// @vitest-environment happy-dom

import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";

import { createOverlay } from "../src";

describe("Overlay visibility", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("oculta o overlay com hide()", () => {
    const overlay = createOverlay({
      src: "/logo.png",
    });

    overlay.hide();

    expect(overlay.element.style.display).toBe("none");
  });

  it("exibe o overlay com show()", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      visible: false,
    });

    overlay.show();

    expect(overlay.element.style.display).toBe("block");
  });

  it("alterna de visível para oculto", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      visible: true,
    });

    overlay.toggle();

    expect(overlay.element.style.display).toBe("none");
  });

  it("alterna de oculto para visível", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      visible: false,
    });

    overlay.toggle();

    expect(overlay.element.style.display).toBe("block");
  });

  it("permite alternar várias vezes", () => {
    const overlay = createOverlay({
      src: "/logo.png",
    });

    overlay.toggle();

    expect(overlay.element.style.display).toBe("none");

    overlay.toggle();

    expect(overlay.element.style.display).toBe("block");
  });
});