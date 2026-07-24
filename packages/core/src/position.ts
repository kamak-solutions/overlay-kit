import {
  normalizeCssValue,
  type OverlayOffset,
  type OverlayPosition,
} from "@overlay-kit/shared";

export interface OverlayPositionStyle {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  transform?: string;
}

/**
 * Converte uma posição semântica em propriedades de posicionamento.
 */
export function getOverlayPositionStyle(
  position: OverlayPosition,
  offset: OverlayOffset,
): OverlayPositionStyle {
  const normalizedOffset = normalizeCssValue(offset);

  switch (position) {
    case "top-left":
      return {
        top: normalizedOffset,
        left: normalizedOffset,
      };

    case "top-center":
      return {
        top: normalizedOffset,
        left: "50%",
        transform: "translateX(-50%)",
      };

    case "top-right":
      return {
        top: normalizedOffset,
        right: normalizedOffset,
      };

    case "center-left":
      return {
        top: "50%",
        left: normalizedOffset,
        transform: "translateY(-50%)",
      };

    case "center":
      return {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      };

    case "center-right":
      return {
        top: "50%",
        right: normalizedOffset,
        transform: "translateY(-50%)",
      };

    case "bottom-left":
      return {
        bottom: normalizedOffset,
        left: normalizedOffset,
      };

    case "bottom-center":
      return {
        bottom: normalizedOffset,
        left: "50%",
        transform: "translateX(-50%)",
      };

    case "bottom-right":
      return {
        right: normalizedOffset,
        bottom: normalizedOffset,
      };
  }
}