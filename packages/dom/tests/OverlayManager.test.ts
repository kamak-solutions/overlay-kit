// @vitest-environment happy-dom

import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";

import {
  createOverlay,
  createOverlayManager,
} from "../src";

describe("OverlayManager", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("cria e registra um overlay", () => {
    const manager = createOverlayManager();

    const overlay = manager.create({
      src: "/logo.png",
    });

    expect(manager.size).toBe(1);
    expect(manager.has(overlay)).toBe(true);
    expect(document.body.contains(overlay.element)).toBe(
      true,
    );
  });

  it("gerencia múltiplos overlays", () => {
    const manager = createOverlayManager();

    const firstOverlay = manager.create({
      src: "/first.png",
      position: "top-left",
    });

    const secondOverlay = manager.create({
      src: "/second.png",
      position: "bottom-right",
    });

    expect(manager.size).toBe(2);
    expect(manager.getAll()).toEqual([
      firstOverlay,
      secondOverlay,
    ]);

    expect(firstOverlay.element).not.toBe(
      secondOverlay.element,
    );
  });

  it("adiciona uma instância criada externamente", () => {
    const manager = createOverlayManager();

    const overlay = createOverlay({
      src: "/external.png",
    });

    manager.add(overlay);

    expect(manager.size).toBe(1);
    expect(manager.has(overlay)).toBe(true);
  });

  it("não registra a mesma instância duas vezes", () => {
    const manager = createOverlayManager();

    const overlay = createOverlay({
      src: "/logo.png",
    });

    manager.add(overlay);
    manager.add(overlay);

    expect(manager.size).toBe(1);
  });

  it("oculta e exibe todos os overlays", () => {
    const manager = createOverlayManager();

    const firstOverlay = manager.create({
      src: "/first.png",
    });

    const secondOverlay = manager.create({
      src: "/second.png",
    });

    manager.hideAll();

    expect(firstOverlay.element.style.display).toBe(
      "none",
    );

    expect(secondOverlay.element.style.display).toBe(
      "none",
    );

    manager.showAll();

    expect(firstOverlay.element.style.display).toBe(
      "block",
    );

    expect(secondOverlay.element.style.display).toBe(
      "block",
    );
  });

  it("remove uma instância sem destruí-la", () => {
    const manager = createOverlayManager();

    const overlay = manager.create({
      src: "/logo.png",
    });

    const removed = manager.remove(overlay);

    expect(removed).toBe(true);
    expect(manager.size).toBe(0);
    expect(manager.has(overlay)).toBe(false);

    expect(document.body.contains(overlay.element)).toBe(
      true,
    );
  });

  it("remove e destrói uma instância", () => {
    const manager = createOverlayManager();

    const overlay = manager.create({
      src: "/logo.png",
    });

    const removed = manager.remove(overlay, true);

    expect(removed).toBe(true);
    expect(manager.size).toBe(0);

    expect(document.body.contains(overlay.element)).toBe(
      false,
    );
  });

  it("destrói todos os overlays", () => {
    const manager = createOverlayManager();

    const firstOverlay = manager.create({
      src: "/first.png",
    });

    const secondOverlay = manager.create({
      src: "/second.png",
    });

    manager.destroyAll();

    expect(manager.size).toBe(0);
    expect(manager.getAll()).toEqual([]);

    expect(
      document.body.contains(firstOverlay.element),
    ).toBe(false);

    expect(
      document.body.contains(secondOverlay.element),
    ).toBe(false);
  });
});
