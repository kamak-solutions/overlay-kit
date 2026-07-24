// @vitest-environment happy-dom

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { createOverlay } from "../src/Overlay";

describe("Overlay animation integration", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    document.body.innerHTML = "";
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    document.body.innerHTML = "";
  });

  it("exibe o overlay com fade", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      visible: false,
      opacity: 0.8,
      animation: {
        type: "fade",
        duration: 300,
        easing: "ease",
      },
    });

    overlay.show();

    expect(overlay.element.style.display).toBe("block");
    expect(overlay.element.style.transition).toBe(
      "opacity 300ms ease",
    );
    expect(overlay.element.style.opacity).toBe("0.8");
  });

  it("aguarda o fade terminar antes de ocultar", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      animation: {
        type: "fade",
        duration: 300,
        easing: "ease",
      },
    });

    overlay.hide();

    expect(overlay.element.style.opacity).toBe("0");
    expect(overlay.element.style.display).toBe("block");

    vi.advanceTimersByTime(299);

    expect(overlay.element.style.display).toBe("block");

    vi.advanceTimersByTime(1);

    expect(overlay.element.style.display).toBe("none");
  });

  it("emite hide somente depois da animação", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      animation: {
        type: "fade",
        duration: 300,
        easing: "ease",
      },
    });

    const listener = vi.fn();

    overlay.on("hide", listener);

    overlay.hide();

    expect(listener).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it("cancela o hide ao chamar show antes do fim", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      opacity: 0.7,
      animation: {
        type: "fade",
        duration: 300,
        easing: "ease",
      },
    });

    const hideListener = vi.fn();

    overlay.on("hide", hideListener);

    overlay.hide();

    vi.advanceTimersByTime(150);

    overlay.show();

    vi.advanceTimersByTime(150);

    expect(hideListener).not.toHaveBeenCalled();
    expect(overlay.element.style.display).toBe("block");
    expect(overlay.element.style.opacity).toBe("0.7");
  });

  it("destroy cancela uma animação pendente", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      animation: {
        type: "fade",
        duration: 300,
        easing: "ease",
      },
    });

    const hideListener = vi.fn();

    overlay.on("hide", hideListener);

    overlay.hide();
    overlay.destroy();

    vi.advanceTimersByTime(300);

    expect(hideListener).not.toHaveBeenCalled();
    expect(document.body.contains(overlay.element)).toBe(
      false,
    );
  });

  it("oculta imediatamente quando a animação é none", () => {
    const overlay = createOverlay({
      src: "/logo.png",
      animation: {
        type: "none",
      },
    });

    overlay.hide();

    expect(overlay.element.style.display).toBe("none");
    expect(overlay.element.style.opacity).toBe("0");
  });
});
