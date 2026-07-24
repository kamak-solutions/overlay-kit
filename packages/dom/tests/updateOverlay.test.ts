// @vitest-environment happy-dom

import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";

import { createOverlay } from "../src";

describe("Overlay.update()", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("atualiza a opacidade", () => {
    const overlay = createOverlay({
      src: "/logo.png",
    });

    overlay.update({
      opacity: 0.2,
    });

    expect(
      overlay.element.style.opacity,
    ).toBe("0.2");
  });

  it("atualiza a posição", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      position: "bottom-right",
    });

    overlay.update({
      position: "top-left",
      offset: 30,
    });

    expect(
      overlay.element.style.top,
    ).toBe("30px");

    expect(
      overlay.element.style.left,
    ).toBe("30px");

    expect(
      overlay.element.style.bottom,
    ).toBe("");

    expect(
      overlay.element.style.right,
    ).toBe("");
  });

  it("troca a imagem", () => {
    const overlay = createOverlay({
      src: "/logo.png",
    });

    overlay.update({
      src: "/novo.png",
    });

    expect(
      overlay.element.getAttribute("src"),
    ).toBe("/novo.png");
  });

  it("mantém propriedades antigas", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      opacity: 0.5,
      rotate: 45,
    });

    overlay.update({
      position: "top-left",
    });

    expect(
      overlay.element.style.opacity,
    ).toBe("0.5");

    expect(
      overlay.element.style.rotate,
    ).toBe("45deg");
  });
});
