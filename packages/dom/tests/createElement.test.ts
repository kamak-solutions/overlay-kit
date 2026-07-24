// @vitest-environment happy-dom

import { describe, expect, it } from "vitest";
import { createImageElement } from "../src";

describe("createImageElement()", () => {
  it("cria um elemento img", () => {
    const image = createImageElement("/logo.png");

    expect(image).toBeInstanceOf(HTMLImageElement);
    expect(image.tagName).toBe("IMG");
  });

  it("define o src da imagem", () => {
    const image = createImageElement("/logo.png");

    expect(image.getAttribute("src")).toBe("/logo.png");
  });

  it("define propriedades seguras por padrão", () => {
    const image = createImageElement("/logo.png");

    expect(image.alt).toBe("");
    expect(image.draggable).toBe(false);
  });
});