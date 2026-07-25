// @vitest-environment happy-dom

import { afterEach, describe, expect, it } from "vitest";
import { act, cleanup, renderHook } from "@testing-library/react";

import { useOverlay } from "../src";

afterEach(() => {
  cleanup();
  document.body.innerHTML = "";
});

describe("useOverlay", () => {
  it("creates an overlay when mounted", () => {
    const { result } = renderHook(() =>
      useOverlay({
        src: "/logo.svg",
        position: "bottom-right",
        size: 120,
        offset: 24,
      }),
    );

    expect(result.current.isMounted).toBe(true);

    expect(document.querySelector('img[src="/logo.svg"]')).not.toBeNull();
  });

  it("shows and hides the overlay", () => {
    const { result } = renderHook(() =>
      useOverlay({
        src: "/logo.svg",
        position: "bottom-right",
        size: 120,
        offset: 24,
        animation: {
          type: "none",
          duration: 0,
          easing: "linear",
        },
      }),
    );

    act(() => {
      result.current.hide();
    });

    expect(result.current.isVisible).toBe(false);

    act(() => {
      result.current.show();
    });

    expect(result.current.isVisible).toBe(true);
  });

  it("toggles visibility", () => {
    const { result } = renderHook(() =>
      useOverlay({
        src: "/logo.svg",
        position: "bottom-right",
        size: 120,
        offset: 24,
        animation: {
          type: "none",
          duration: 0,
          easing: "linear",
        },
      }),
    );

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isVisible).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isVisible).toBe(true);
  });

  it("updates the overlay", () => {
    const { result } = renderHook(() =>
      useOverlay({
        src: "/logo.svg",
        position: "bottom-right",
        size: 120,
        offset: 24,
      }),
    );

    act(() => {
      result.current.update({
        size: 200,
        opacity: 0.4,
      });
    });

    const image = document.querySelector<HTMLImageElement>('img[src="/logo.svg"]');

    expect(image?.style.width).toBe("200px");
    expect(image?.style.opacity).toBe("0.4");
  });

  it("destroys the overlay", () => {
    const { result } = renderHook(() =>
      useOverlay({
        src: "/logo.svg",
        position: "bottom-right",
        size: 120,
        offset: 24,
      }),
    );

    act(() => {
      result.current.destroy();
    });

    expect(result.current.isMounted).toBe(false);

    expect(document.querySelector('img[src="/logo.svg"]')).toBeNull();
  });
});
