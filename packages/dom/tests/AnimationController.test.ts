// @vitest-environment happy-dom

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import {
  AnimationController,
  type AnimationOptions,
} from "../src/AnimationController";

describe("AnimationController", () => {
  let element: HTMLDivElement;
  let controller: AnimationController;

  const fadeOptions: AnimationOptions = {
    type: "fade",
    duration: 300,
    easing: "ease",
  };

  beforeEach(() => {
    vi.useFakeTimers();

    element = document.createElement("div");
    document.body.appendChild(element);

    controller = new AnimationController(element);
  });

  afterEach(() => {
    controller.clear();

    vi.clearAllTimers();
    vi.useRealTimers();

    document.body.innerHTML = "";
  });

  it("exibe imediatamente quando a animação é none", () => {
    controller.show(
      {
        type: "none",
        duration: 300,
        easing: "ease",
      },
      0.8,
    );

    expect(element.style.transition).toBe("");
    expect(element.style.opacity).toBe("0.8");
  });

  it("aplica fade ao exibir o elemento", () => {
    controller.show(fadeOptions, 0.9);

    expect(element.style.transition).toBe(
      "opacity 300ms ease",
    );

    expect(element.style.opacity).toBe("0.9");
  });

  it("oculta imediatamente quando a duração é zero", () => {
    const onComplete = vi.fn();

    controller.hide(
      {
        type: "fade",
        duration: 0,
        easing: "linear",
      },
      onComplete,
    );

    expect(element.style.transition).toBe("");
    expect(element.style.opacity).toBe("0");
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it("aplica fade e executa o callback ao finalizar", () => {
    const onComplete = vi.fn();

    controller.hide(fadeOptions, onComplete);

    expect(element.style.transition).toBe(
      "opacity 300ms ease",
    );

    expect(element.style.opacity).toBe("0");
    expect(onComplete).not.toHaveBeenCalled();

    vi.advanceTimersByTime(299);

    expect(onComplete).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);

    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it("cancela uma animação pendente ao iniciar outra", () => {
    const firstCallback = vi.fn();
    const secondCallback = vi.fn();

    controller.hide(fadeOptions, firstCallback);

    controller.hide(
      {
        type: "fade",
        duration: 500,
        easing: "linear",
      },
      secondCallback,
    );

    vi.advanceTimersByTime(300);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(200);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalledTimes(1);
  });

  it("clear remove a transição e cancela o callback", () => {
    const onComplete = vi.fn();

    controller.hide(fadeOptions, onComplete);

    expect(element.style.transition).toBe(
      "opacity 300ms ease",
    );

    controller.clear();

    expect(element.style.transition).toBe("");

    vi.advanceTimersByTime(300);

    expect(onComplete).not.toHaveBeenCalled();
  });
});
