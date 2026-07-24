// @vitest-environment happy-dom

import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { createOverlay } from "../src";

describe("Overlay events", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("emite o evento show", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      visible: false,
    });

    const listener = vi.fn();

    overlay.on("show", listener);

    overlay.show();

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(undefined);
  });

  it("emite o evento hide", () => {
    const overlay = createOverlay({
      src: "/logo.png",
    });

    const listener = vi.fn();

    overlay.on("hide", listener);

    overlay.hide();

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(undefined);
  });

  it("emite o evento update com as opções normalizadas", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      opacity: 1,
    });

    const listener = vi.fn();

    overlay.on("update", listener);

    overlay.update({
      opacity: 0.5,
    });

    expect(listener).toHaveBeenCalledTimes(1);

    expect(listener).toHaveBeenCalledWith(
      expect.objectContaining({
        src: "/logo.png",
        opacity: 0.5,
      }),
    );
  });

  it("emite o evento destroy", () => {
    const overlay = createOverlay({
      src: "/logo.png",
    });

    const listener = vi.fn();

    overlay.on("destroy", listener);

    overlay.destroy();

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(undefined);
  });

  it("remove um listener com off", () => {
    const overlay = createOverlay({
      src: "/logo.png",
    });

    const listener = vi.fn();

    overlay.on("show", listener);
    overlay.off("show", listener);

    overlay.show();

    expect(listener).not.toHaveBeenCalled();
  });

  it("não emite eventos após destroy", () => {
    const overlay = createOverlay({
      src: "/logo.png",
    });

    const showListener = vi.fn();
    const updateListener = vi.fn();

    overlay.on("show", showListener);
    overlay.on("update", updateListener);

    overlay.destroy();
    overlay.show();
    overlay.update({
      opacity: 0.5,
    });

    expect(showListener).not.toHaveBeenCalled();
    expect(updateListener).not.toHaveBeenCalled();
  });

  it("toggle emite hide quando está visível", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      visible: true,
    });

    const listener = vi.fn();

    overlay.on("hide", listener);

    overlay.toggle();

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it("toggle emite show quando está oculto", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      visible: false,
    });

    const listener = vi.fn();

    overlay.on("show", listener);

    overlay.toggle();

    expect(listener).toHaveBeenCalledTimes(1);
  });
});