import {
  normalizeOverlayOptions,
  type NormalizedOverlayOptions,
} from "@overlay-kit/core";

import type { ImageOverlayOptions } from "@overlay-kit/shared";

import { AnimationController } from "./AnimationController";
import { applyOverlayStyles } from "./applyStyles";
import { createImageElement } from "./createElement";
import { EventEmitter } from "./EventEmitter";

import type {
  CreateOverlayOptions,
  OverlayEvents,
  OverlayInstance,
} from "./types";

export class OverlayController
  extends EventEmitter<OverlayEvents>
  implements OverlayInstance
{
  public readonly element: HTMLImageElement;

  private currentOptions: NormalizedOverlayOptions;

  private readonly container: HTMLElement;

  private readonly animation: AnimationController;

  private destroyed = false;

  constructor(options: CreateOverlayOptions) {
    super();

    const {
      container = document.body,
      ...overlayOptions
    } = options;

    this.container = container;

    this.currentOptions =
      normalizeOverlayOptions(overlayOptions);

    this.element = createImageElement(
      this.currentOptions.src,
    );

    this.animation = new AnimationController(
      this.element,
    );

    this.render();

    this.container.appendChild(this.element);
  }

  private clearPositionStyles(): void {
    this.element.style.top = "";
    this.element.style.right = "";
    this.element.style.bottom = "";
    this.element.style.left = "";
    this.element.style.transform = "";
  }

  private render(): void {
    this.clearPositionStyles();

    this.element.src = this.currentOptions.src;

    applyOverlayStyles(
      this.element,
      this.currentOptions,
    );
  }

  public update(
    options: Partial<ImageOverlayOptions>,
  ): void {
    if (this.destroyed) {
      return;
    }

    this.currentOptions =
      normalizeOverlayOptions({
        ...this.currentOptions,
        ...options,
      });

    this.render();

    this.emit("update", this.currentOptions);
  }

  public show(): void {
    if (this.destroyed) {
      return;
    }

    this.currentOptions =
      normalizeOverlayOptions({
        ...this.currentOptions,
        visible: true,
      });

    this.element.style.display = "block";

    this.animation.show(
      this.currentOptions.animation,
      this.currentOptions.opacity,
    );

    this.emit("update", this.currentOptions);
    this.emit("show", undefined);
  }

  public hide(): void {
    if (this.destroyed) {
      return;
    }

    this.currentOptions =
      normalizeOverlayOptions({
        ...this.currentOptions,
        visible: false,
      });

    this.emit("update", this.currentOptions);

    this.animation.hide(
      this.currentOptions.animation,
      () => {
        if (this.destroyed) {
          return;
        }

        this.element.style.display = "none";

        this.emit("hide", undefined);
      },
    );
  }

  public toggle(): void {
    if (this.destroyed) {
      return;
    }

    if (this.currentOptions.visible) {
      this.hide();

      return;
    }

    this.show();
  }

  public destroy(): void {
    if (this.destroyed) {
      return;
    }

    this.destroyed = true;

    this.animation.clear();

    this.element.remove();

    this.emit("destroy", undefined);

    this.clear();
  }
}