import { createOverlay } from "./Overlay";

import type {
  CreateOverlayOptions,
  OverlayInstance,
  OverlayManagerInstance,
} from "./types";

export class OverlayManager
  implements OverlayManagerInstance
{
  private readonly overlays = new Set<OverlayInstance>();

  public get size(): number {
    return this.overlays.size;
  }

  public create(
    options: CreateOverlayOptions,
  ): OverlayInstance {
    const overlay = createOverlay(options);

    this.add(overlay);

    return overlay;
  }

  public add(overlay: OverlayInstance): void {
    this.overlays.add(overlay);
  }

  public has(overlay: OverlayInstance): boolean {
    return this.overlays.has(overlay);
  }

  public remove(
    overlay: OverlayInstance,
    destroy = false,
  ): boolean {
    const removed = this.overlays.delete(overlay);

    if (removed && destroy) {
      overlay.destroy();
    }

    return removed;
  }

  public getAll(): readonly OverlayInstance[] {
    return Array.from(this.overlays);
  }

  public showAll(): void {
    for (const overlay of this.overlays) {
      overlay.show();
    }
  }

  public hideAll(): void {
    for (const overlay of this.overlays) {
      overlay.hide();
    }
  }

  public toggleAll(): void {
    for (const overlay of this.overlays) {
      overlay.toggle();
    }
  }

  public destroyAll(): void {
    for (const overlay of this.overlays) {
      overlay.destroy();
    }

    this.overlays.clear();
  }
}

export function createOverlayManager(): OverlayManagerInstance {
  return new OverlayManager();
}