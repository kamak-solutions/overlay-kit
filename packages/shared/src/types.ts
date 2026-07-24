/**
 * Posições possíveis do overlay.
 */
export type OverlayPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "center-left"
  | "center"
  | "center-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

/**
 * Tamanho do overlay.
 */
export type OverlaySize =
  | number
  | `${number}px`
  | `${number}%`
  | "auto";

/**
 * Distância das bordas.
 */
export type OverlayOffset =
  | number
  | `${number}px`
  | `${number}%`;

/**
 * Opções do overlay de imagem.
 */

/**
 * Tipos de animação disponíveis.
 */
export type AnimationType =
  | "none"
  | "fade";

/**
 * Configurações de animação.
 */
export interface AnimationOptions {
  type: AnimationType;
  duration: number;
  easing: string;
}

/**
 * Opções do overlay de imagem.
 */
export interface ImageOverlayOptions {
  src: string;

  position?: OverlayPosition;

  size?: OverlaySize;

  offset?: OverlayOffset;

  opacity?: number;

  rotate?: number;

  zIndex?: number;

  visible?: boolean;

  animation?: Partial<AnimationOptions>;
}