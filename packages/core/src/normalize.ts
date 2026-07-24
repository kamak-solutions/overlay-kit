import {
  DEFAULT_ANIMATION_OPTIONS,
  DEFAULT_OVERLAY_OPTIONS,
  normalizeOpacity,
  type AnimationOptions,
  type ImageOverlayOptions,
} from "@overlay-kit/shared";

/**
 * Configuração completa utilizada internamente pelo OverlayKit.
 *
 * Todas as propriedades são obrigatórias e a animação
 * sempre possui type, duration e easing.
 */
export type NormalizedOverlayOptions = Omit<
  Required<ImageOverlayOptions>,
  "animation"
> & {
  animation: AnimationOptions;
};

/**
 * Completa as opções parciais de animação
 * com os valores padrão.
 */
function normalizeAnimationOptions(
  animation?: Partial<AnimationOptions>,
): AnimationOptions {
  return {
    type:
      animation?.type ??
      DEFAULT_ANIMATION_OPTIONS.type,

    duration:
      animation?.duration ??
      DEFAULT_ANIMATION_OPTIONS.duration,

    easing:
      animation?.easing ??
      DEFAULT_ANIMATION_OPTIONS.easing,
  };
}

/**
 * Combina as opções recebidas com os valores padrão.
 */
export function normalizeOverlayOptions(
  options: ImageOverlayOptions,
): NormalizedOverlayOptions {
  return {
    ...DEFAULT_OVERLAY_OPTIONS,
    ...options,

    opacity: normalizeOpacity(
      options.opacity ??
        DEFAULT_OVERLAY_OPTIONS.opacity,
    ),

    animation: normalizeAnimationOptions(
      options.animation,
    ),
  };
}