import type {
  AnimationOptions,
  ImageOverlayOptions,
} from "./types";

export const DEFAULT_OVERLAY_OPTIONS: Required<
  Omit<ImageOverlayOptions, "src" | "animation">
> = {
  position: "bottom-right",
  size: 64,
  offset: 16,
  opacity: 0.8,
  rotate: 0,
  zIndex: 9999,
  visible: true,
};

export const DEFAULT_ANIMATION_OPTIONS: AnimationOptions = {
  type: "none",
  duration: 300,
  easing: "ease",
};
