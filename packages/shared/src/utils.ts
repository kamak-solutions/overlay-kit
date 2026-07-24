/**
 * Limita um valor entre mínimo e máximo.
 */
export function clamp(
  value: number,
  min: number,
  max: number,
): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Garante que a opacidade fique entre 0 e 1.
 */
export function normalizeOpacity(opacity: number): number {
  return clamp(opacity, 0, 1);
}

/**
 * Converte números para pixels.
 */
export function normalizeCssValue(
  value: number | string,
): string {
  if (typeof value === "number") {
    return `${value}px`;
  }

  return value;
}