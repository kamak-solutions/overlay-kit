export type AnimationType = "none" | "fade";

export interface AnimationOptions {
  type: AnimationType;
  duration: number;
  easing: string;
}

export const DEFAULT_ANIMATION_OPTIONS: AnimationOptions = {
  type: "none",
  duration: 300,
  easing: "ease",
};

export class AnimationController {
  private pendingTimeout:
    | ReturnType<typeof setTimeout>
    | undefined;

  constructor(
    private readonly element: HTMLElement,
  ) {}

  private cancelPendingAnimation(): void {
    if (this.pendingTimeout === undefined) {
      return;
    }

    clearTimeout(this.pendingTimeout);

    this.pendingTimeout = undefined;
  }

  public show(
    options: AnimationOptions,
    targetOpacity = 1,
  ): void {
    this.cancelPendingAnimation();

    if (
      options.type === "none" ||
      options.duration <= 0
    ) {
      this.element.style.transition = "";
      this.element.style.opacity = String(targetOpacity);

      return;
    }

    this.element.style.transition = "none";
    this.element.style.opacity = "0";

    // Força o navegador a aplicar o estado inicial antes
    // de iniciar a transição.
    void this.element.offsetWidth;

    this.element.style.transition =
      `opacity ${options.duration}ms ${options.easing}`;

    this.element.style.opacity = String(targetOpacity);
  }

  public hide(
    options: AnimationOptions,
    onComplete?: () => void,
  ): void {
    this.cancelPendingAnimation();

    if (
      options.type === "none" ||
      options.duration <= 0
    ) {
      this.element.style.transition = "";
      this.element.style.opacity = "0";

      onComplete?.();

      return;
    }

    this.element.style.transition =
      `opacity ${options.duration}ms ${options.easing}`;

    this.element.style.opacity = "0";

    this.pendingTimeout = setTimeout(() => {
      this.pendingTimeout = undefined;

      onComplete?.();
    }, options.duration);
  }

  public clear(): void {
    this.cancelPendingAnimation();

    this.element.style.transition = "";
  }
}