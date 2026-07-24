import { describe, expect, it } from "vitest";

import { normalizeOverlayOptions } from "../src/normalize";

describe("normalizeOverlayOptions()", () => {
  it("aplica os valores padrão", () => {
    const result = normalizeOverlayOptions({
      src: "/logo.png",
    });

    expect(result).toEqual({
      src: "/logo.png",
      position: "bottom-right",
      size: 64,
      offset: 16,
      opacity: 0.8,
      rotate: 0,
      zIndex: 9999,
      visible: true,
      animation: {
        type: "none",
        duration: 300,
        easing: "ease",
      },
    });
  });

  it("preserva as opções informadas", () => {
    const result = normalizeOverlayOptions({
      src: "/watermark.png",
      position: "top-left",
      size: "120px",
      offset: "5%",
      opacity: 0.4,
      rotate: 15,
      zIndex: 100,
      visible: false,
    });

    expect(result).toEqual({
      src: "/watermark.png",
      position: "top-left",
      size: "120px",
      offset: "5%",
      opacity: 0.4,
      rotate: 15,
      zIndex: 100,
      visible: false,
      animation: {
        type: "none",
        duration: 300,
        easing: "ease",
      },
    });
  });

  it("limita a opacidade", () => {
    expect(
      normalizeOverlayOptions({
        src: "/logo.png",
        opacity: 5,
      }).opacity,
    ).toBe(1);

    expect(
      normalizeOverlayOptions({
        src: "/logo.png",
        opacity: -2,
      }).opacity,
    ).toBe(0);
  });

  it("aplica os valores padrão da animação", () => {
    const result = normalizeOverlayOptions({
      src: "/logo.png",
    });

    expect(result.animation).toEqual({
      type: "none",
      duration: 300,
      easing: "ease",
    });
  });

  it("normaliza uma animação parcial", () => {
    const result = normalizeOverlayOptions({
      src: "/logo.png",
      animation: {
        type: "fade",
      },
    });

    expect(result.animation).toEqual({
      type: "fade",
      duration: 300,
      easing: "ease",
    });
  });

  it("preserva todas as opções de animação informadas", () => {
    const result = normalizeOverlayOptions({
      src: "/logo.png",
      animation: {
        type: "fade",
        duration: 500,
        easing: "linear",
      },
    });

    expect(result.animation).toEqual({
      type: "fade",
      duration: 500,
      easing: "linear",
    });
  });
});