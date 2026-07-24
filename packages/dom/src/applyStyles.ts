import {
  getOverlayPositionStyle,
  type NormalizedOverlayOptions,
} from "@overlay-kit/core";
import { normalizeCssValue } from "@overlay-kit/shared";

/**
 * Aplica ao elemento os estilos calculados pelo OverlayKit.
 */
export function applyOverlayStyles(
  element: HTMLElement,
  options: NormalizedOverlayOptions,
): void {
  const positionStyle = getOverlayPositionStyle(
    options.position,
    options.offset,
  );

  Object.assign(element.style, {
    position: "fixed",
    width: normalizeCssValue(options.size),
    height: "auto",
    opacity: String(options.opacity),
    rotate: `${options.rotate}deg`,
    zIndex: String(options.zIndex),
    display: options.visible ? "block" : "none",
    pointerEvents: "none",
    userSelect: "none",
    ...positionStyle,
  });
}