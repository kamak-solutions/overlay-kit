import { createOverlay } from "@overlay-kit/dom";

import "./style.css";

const overlayImage = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="220"
    height="72"
    viewBox="0 0 220 72"
  >
    <rect
      width="220"
      height="72"
      rx="18"
      fill="#0f172a"
    />

    <rect
      x="1"
      y="1"
      width="218"
      height="70"
      rx="17"
      fill="none"
      stroke="#38bdf8"
      stroke-width="2"
    />

    <circle
      cx="38"
      cy="36"
      r="18"
      fill="#38bdf8"
    />

    <path
      d="M29 36h18M38 27v18"
      stroke="#020617"
      stroke-width="4"
      stroke-linecap="round"
    />

    <text
      x="68"
      y="43"
      fill="#f8fafc"
      font-family="Arial, sans-serif"
      font-size="24"
      font-weight="700"
    >
      OverlayKit
    </text>
  </svg>
`;

const overlaySrc = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
  overlayImage,
)}`;

const overlay = createOverlay({
  src: overlaySrc,
  position: "bottom-right",
  size: 220,
  offset: 24,
  opacity: 0.92,
  zIndex: 9999,
});

const statusElement =
  document.querySelector<HTMLParagraphElement>("#status");

const showButton =
  document.querySelector<HTMLButtonElement>("#show-button");

const hideButton =
  document.querySelector<HTMLButtonElement>("#hide-button");

const toggleButton =
  document.querySelector<HTMLButtonElement>("#toggle-button");

const positionButton =
  document.querySelector<HTMLButtonElement>(
    "#position-button",
  );

const opacityButton =
  document.querySelector<HTMLButtonElement>(
    "#opacity-button",
  );

const destroyButton =
  document.querySelector<HTMLButtonElement>(
    "#destroy-button",
  );

function setStatus(message: string): void {
  if (statusElement) {
    statusElement.textContent = message;
  }
}

showButton?.addEventListener("click", () => {
  overlay.show();
  setStatus("Overlay visível.");
});

hideButton?.addEventListener("click", () => {
  overlay.hide();
  setStatus("Overlay oculto.");
});

toggleButton?.addEventListener("click", () => {
  overlay.toggle();
  setStatus("Visibilidade alternada.");
});

let isTopLeft = false;

positionButton?.addEventListener("click", () => {
  isTopLeft = !isTopLeft;

  overlay.update({
    position: isTopLeft
      ? "top-left"
      : "bottom-right",
    offset: isTopLeft ? 32 : 24,
  });

  setStatus(
    isTopLeft
      ? "Overlay movido para o canto superior esquerdo."
      : "Overlay movido para o canto inferior direito.",
  );
});

let isTransparent = false;

opacityButton?.addEventListener("click", () => {
  isTransparent = !isTransparent;

  overlay.update({
    opacity: isTransparent ? 0.35 : 0.92,
  });

  setStatus(
    isTransparent
      ? "Opacidade reduzida."
      : "Opacidade restaurada.",
  );
});

destroyButton?.addEventListener("click", () => {
  overlay.destroy();

  setStatus("Overlay removido do DOM.");

  showButton?.setAttribute("disabled", "");
  hideButton?.setAttribute("disabled", "");
  toggleButton?.setAttribute("disabled", "");
  positionButton?.setAttribute("disabled", "");
  opacityButton?.setAttribute("disabled", "");
  destroyButton.setAttribute("disabled", "");
});