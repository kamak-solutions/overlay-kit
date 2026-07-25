// @vitest-environment happy-dom

import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";

import { Overlay } from "../src";

afterEach(() => {
  cleanup();
  document.body.innerHTML = "";
});

describe("Overlay", () => {
  it("creates the overlay when mounted", () => {
    render(<Overlay src="/logo.svg" position="bottom-right" size={120} offset={24} />);

    const image = document.querySelector('img[src="/logo.svg"]');

    expect(image).not.toBeNull();
  });

  it("removes the overlay when unmounted", () => {
    const result = render(
      <Overlay src="/logo.svg" position="bottom-right" size={120} offset={24} />,
    );

    expect(document.querySelector('img[src="/logo.svg"]')).not.toBeNull();

    result.unmount();

    expect(document.querySelector('img[src="/logo.svg"]')).toBeNull();
  });

  it("updates the overlay when props change", () => {
    const result = render(
      <Overlay
        src="/logo.svg"
        position="bottom-right"
        size={120}
        offset={24}
        opacity={1}
      />,
    );

    result.rerender(
      <Overlay
        src="/logo.svg"
        position="bottom-right"
        size={180}
        offset={24}
        opacity={0.5}
      />,
    );

    const image = document.querySelector<HTMLImageElement>('img[src="/logo.svg"]');
    expect(image).not.toBeNull();
    expect(image?.style.width).toBe("180px");
    expect(image?.style.opacity).toBe("0.5");
  });
});
