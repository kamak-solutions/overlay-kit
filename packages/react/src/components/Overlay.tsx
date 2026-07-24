"use client";

import type {
  CreateOverlayOptions,
} from "@overlay-kit/dom";

import {
  useOverlay,
} from "../hooks/useOverlay";

export type OverlayProps =
  CreateOverlayOptions;

/**
 * Componente declarativo do OverlayKit.
 *
 * O elemento visual é criado pelo pacote DOM,
 * portanto o componente não renderiza HTML próprio.
 */
export function Overlay(
  props: OverlayProps,
): null {
  useOverlay(props);

  return null;
}