import type {
  CreateOverlayOptions,
  OverlayInstance,
} from "@overlay-kit/dom";

export interface UseOverlayResult {
  controller: OverlayInstance | null;
  isMounted: boolean;
  isVisible: boolean;
  show: () => void;
  hide: () => void;
  toggle: () => void;
  update: (
    options: Partial<CreateOverlayOptions>,
  ) => void;
  destroy: () => void;
}