"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  createOverlay,
  type CreateOverlayOptions,
  type OverlayInstance,
} from "@overlay-kit/dom";

import type { UseOverlayResult } from "../types/react.types";

export function useOverlay(options: CreateOverlayOptions): UseOverlayResult {
  const controllerRef = useRef<OverlayInstance | null>(null);

  const optionsRef = useRef<CreateOverlayOptions>(options);

  const [isMounted, setIsMounted] = useState(false);

  const [isVisible, setIsVisible] = useState(options.visible ?? true);

  /*
   * Mantém a referência com as opções mais recentes
   * sem recriar o controller em cada renderização.
   */
  optionsRef.current = options;

  /*
   * Cria o overlay apenas quando o componente é montado.
   */
  useEffect(() => {
    const controller = createOverlay(optionsRef.current);

    controllerRef.current = controller;

    setIsMounted(true);
    setIsVisible(optionsRef.current.visible ?? true);

    return () => {
      controller.destroy();

      controllerRef.current = null;
    };
  }, []);

  /*
   * Atualiza o overlay quando as opções mudam.
   */
  useEffect(() => {
    const controller = controllerRef.current;

    if (!controller) {
      return;
    }

    controller.update(options);

    if (typeof options.visible === "boolean") {
      setIsVisible(options.visible);
    }
  }, [options]);

  const show = useCallback(() => {
    const controller = controllerRef.current;

    if (!controller) {
      return;
    }

    controller.show();
    setIsVisible(true);
  }, []);

  const hide = useCallback(() => {
    const controller = controllerRef.current;

    if (!controller) {
      return;
    }

    controller.hide();
    setIsVisible(false);
  }, []);

  const toggle = useCallback(() => {
    const controller = controllerRef.current;

    if (!controller) {
      return;
    }

    controller.toggle();

    setIsVisible((current) => !current);
  }, []);

  const update = useCallback((nextOptions: Partial<CreateOverlayOptions>) => {
    const controller = controllerRef.current;

    if (!controller) {
      return;
    }

    controller.update(nextOptions);

    optionsRef.current = {
      ...optionsRef.current,
      ...nextOptions,
    };

    if (typeof nextOptions.visible === "boolean") {
      setIsVisible(nextOptions.visible);
    }
  }, []);

  const destroy = useCallback(() => {
    const controller = controllerRef.current;

    if (!controller) {
      return;
    }

    controller.destroy();

    controllerRef.current = null;

    setIsMounted(false);
    setIsVisible(false);
  }, []);

  return {
    controller: controllerRef.current,
    isMounted,
    isVisible,
    show,
    hide,
    toggle,
    update,
    destroy,
  };
}
