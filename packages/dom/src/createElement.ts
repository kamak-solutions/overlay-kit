/**
 * Cria o elemento de imagem usado pelo OverlayKit.
 */
export function createImageElement(src: string): HTMLImageElement {
  const image = document.createElement("img");

  image.src = src;
  image.alt = "";
  image.draggable = false;

  return image;
}