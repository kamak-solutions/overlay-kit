import { OverlayController } from "./OverlayController";

import type {
  CreateOverlayOptions,
  OverlayInstance,
} from "./types";

export function createOverlay(
  options: CreateOverlayOptions,
): OverlayInstance {
  return new OverlayController(options);
}