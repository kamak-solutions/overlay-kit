import { createOverlay } from "@overlay-kit/dom";

import "./style.css";

type PlaygroundPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "center-left"
  | "center"
  | "center-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

interface PlaygroundState {
  position: PlaygroundPosition;
  size: number;
  opacity: number;
  rotate: number;
  duration: number;
}

const app =
  document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error(
    'Elemento principal "#app" não encontrado.',
  );
}

app.innerHTML = `
  <main class="app">
    <header class="header">
      <span class="badge">
        Versão de desenvolvimento
      </span>

      <h1>OverlayKit Playground</h1>

      <p>
        Teste a criação, visibilidade, animação e
        configuração dos overlays diretamente no navegador.
      </p>
    </header>

    <section class="layout">
      <div class="preview">
        <div class="preview-content">
          <div class="preview-icon">🖼️</div>

          <h2>Área de demonstração</h2>

          <p>
            O overlay será exibido sobre esta página.
            Use os controles para testar o comportamento
            da biblioteca em tempo real.
          </p>
        </div>
      </div>

      <aside class="panel">
        <h2>Controles</h2>

        <div class="field">
          <label for="position">Posição</label>

          <select id="position">
            <option value="top-left">
              Superior esquerda
            </option>

            <option value="top-center">
              Superior centro
            </option>

            <option value="top-right">
              Superior direita
            </option>

            <option value="center-left">
              Centro esquerda
            </option>

            <option value="center">
              Centro
            </option>

            <option value="center-right">
              Centro direita
            </option>

            <option value="bottom-left">
              Inferior esquerda
            </option>

            <option value="bottom-center">
              Inferior centro
            </option>

            <option
              value="bottom-right"
              selected
            >
              Inferior direita
            </option>
          </select>
        </div>

        <div class="field">
          <label for="size">
            Tamanho:
            <span
              id="size-value"
              class="field-value"
            >
              180px
            </span>
          </label>

          <input
            id="size"
            type="range"
            min="80"
            max="320"
            step="10"
            value="180"
          />
        </div>

        <div class="field">
          <label for="opacity">
            Opacidade:
            <span
              id="opacity-value"
              class="field-value"
            >
              0.85
            </span>
          </label>

          <input
            id="opacity"
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value="0.85"
          />
        </div>

        <div class="field">
          <label for="rotate">
            Rotação:
            <span
              id="rotate-value"
              class="field-value"
            >
              0°
            </span>
          </label>

          <input
            id="rotate"
            type="range"
            min="-45"
            max="45"
            step="1"
            value="0"
          />
        </div>

        <div class="field">
          <label for="duration">
            Duração do fade:
            <span
              id="duration-value"
              class="field-value"
            >
              300ms
            </span>
          </label>

          <input
            id="duration"
            type="range"
            min="0"
            max="1500"
            step="50"
            value="300"
          />
        </div>

        <div class="actions">
          <button
            id="create"
            class="button button-primary"
          >
            Criar
          </button>

          <button
            id="show"
            class="button"
          >
            Exibir
          </button>

          <button
            id="hide"
            class="button"
          >
            Ocultar
          </button>

          <button
            id="toggle"
            class="button"
          >
            Alternar
          </button>

          <button
            id="apply"
            class="button"
          >
            Aplicar
          </button>

          <button
            id="destroy"
            class="button button-danger"
          >
            Destruir
          </button>
        </div>

        <div class="status">
          <span
            id="status-dot"
            class="status-dot"
          ></span>

          <span id="status-text">
            Overlay ainda não criado
          </span>
        </div>

        <pre
          id="config"
          class="config"
        ></pre>
      </aside>
    </section>
  </main>
`;

const state: PlaygroundState = {
  position: "bottom-right",
  size: 180,
  opacity: 0.85,
  rotate: 0,
  duration: 300,
};

let overlay:
  | ReturnType<typeof createOverlay>
  | null = null;

function getElement<T extends HTMLElement>(
  selector: string,
): T {
  const element =
    document.querySelector<T>(selector);

  if (!element) {
    throw new Error(
      `Elemento "${selector}" não encontrado.`,
    );
  }

  return element;
}

const positionSelect =
  getElement<HTMLSelectElement>("#position");

const sizeInput =
  getElement<HTMLInputElement>("#size");

const opacityInput =
  getElement<HTMLInputElement>("#opacity");

const rotateInput =
  getElement<HTMLInputElement>("#rotate");

const durationInput =
  getElement<HTMLInputElement>("#duration");

const sizeValue =
  getElement<HTMLSpanElement>("#size-value");

const opacityValue =
  getElement<HTMLSpanElement>("#opacity-value");

const rotateValue =
  getElement<HTMLSpanElement>("#rotate-value");

const durationValue =
  getElement<HTMLSpanElement>("#duration-value");

const statusText =
  getElement<HTMLSpanElement>("#status-text");

const statusDot =
  getElement<HTMLSpanElement>("#status-dot");

const configOutput =
  getElement<HTMLPreElement>("#config");

function getOptions() {
  return {
    src: "/overlaykit-logo.svg",
    position: state.position,
    size: state.size,
    offset: 24,
    opacity: state.opacity,
    rotate: state.rotate,
    zIndex: 9999,
    visible: true,
    animation: {
      type: "fade" as const,
      duration: state.duration,
      easing: "ease",
    },
  };
}

function renderConfiguration(): void {
  configOutput.textContent =
    JSON.stringify(getOptions(), null, 2);
}

function setStatus(
  message: string,
  destroyed = false,
): void {
  statusText.textContent = message;

  statusDot.classList.toggle(
    "destroyed",
    destroyed,
  );
}

function destroyOverlay(): void {
  if (!overlay) {
    setStatus(
      "Nenhum overlay para destruir",
      true,
    );

    return;
  }

  overlay.destroy();
  overlay = null;

  setStatus("Overlay destruído", true);
}

function createPlaygroundOverlay(): void {
  if (overlay) {
    overlay.destroy();
    overlay = null;
  }

  overlay = createOverlay(getOptions());

  overlay.on("show", () => {
    setStatus("Overlay visível");
  });

  overlay.on("hide", () => {
    setStatus("Overlay oculto");
  });

  overlay.on("destroy", () => {
    setStatus("Overlay destruído", true);
  });

  setStatus("Overlay criado e visível");
}

positionSelect.addEventListener(
  "change",
  () => {
    state.position =
      positionSelect.value as PlaygroundPosition;

    renderConfiguration();
  },
);

sizeInput.addEventListener("input", () => {
  state.size = Number(sizeInput.value);
  sizeValue.textContent = `${state.size}px`;

  renderConfiguration();
});

opacityInput.addEventListener(
  "input",
  () => {
    state.opacity =
      Number(opacityInput.value);

    opacityValue.textContent =
      state.opacity.toFixed(2);

    renderConfiguration();
  },
);

rotateInput.addEventListener(
  "input",
  () => {
    state.rotate =
      Number(rotateInput.value);

    rotateValue.textContent =
      `${state.rotate}°`;

    renderConfiguration();
  },
);

durationInput.addEventListener(
  "input",
  () => {
    state.duration =
      Number(durationInput.value);

    durationValue.textContent =
      `${state.duration}ms`;

    renderConfiguration();
  },
);

getElement<HTMLButtonElement>("#create")
  .addEventListener(
    "click",
    createPlaygroundOverlay,
  );

getElement<HTMLButtonElement>("#show")
  .addEventListener("click", () => {
    if (!overlay) {
      createPlaygroundOverlay();
      return;
    }

    overlay.show();
  });

getElement<HTMLButtonElement>("#hide")
  .addEventListener("click", () => {
    overlay?.hide();
  });

getElement<HTMLButtonElement>("#toggle")
  .addEventListener("click", () => {
    if (!overlay) {
      createPlaygroundOverlay();
      return;
    }

    overlay.toggle();
  });

getElement<HTMLButtonElement>("#apply")
  .addEventListener(
    "click",
    createPlaygroundOverlay,
  );

getElement<HTMLButtonElement>("#destroy")
  .addEventListener(
    "click",
    destroyOverlay,
  );

renderConfiguration();
createPlaygroundOverlay();