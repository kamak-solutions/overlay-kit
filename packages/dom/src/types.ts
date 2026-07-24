import type { ImageOverlayOptions } from "@overlay-kit/shared";

import type { EventListener } from "./EventEmitter";

export interface CreateOverlayOptions extends ImageOverlayOptions {
  container?: HTMLElement;
}

export interface OverlayEvents {
  show: void;
  hide: void;
  update: ImageOverlayOptions;
  destroy: void;
}

export interface OverlayInstance {
  readonly element: HTMLImageElement;

  update(
    options: Partial<ImageOverlayOptions>,
  ): void;

  show(): void;

  hide(): void;

  toggle(): void;

  destroy(): void;

  on<K extends keyof OverlayEvents>(
    event: K,
    listener: EventListener<OverlayEvents[K]>,
  ): void;

  off<K extends keyof OverlayEvents>(
    event: K,
    listener: EventListener<OverlayEvents[K]>,
  ): void;

  
}

export interface OverlayManagerInstance {
  readonly size: number;

  create(options: CreateOverlayOptions): OverlayInstance;

  add(overlay: OverlayInstance): void;

  has(overlay: OverlayInstance): boolean;

  remove(
    overlay: OverlayInstance,
    destroy?: boolean,
  ): boolean;

  getAll(): readonly OverlayInstance[];

  showAll(): void;

  hideAll(): void;

  toggleAll(): void;

  destroyAll(): void;
}
