import { Overlay } from "@overlay-kit/react";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <>
      <Overlay
        src={logo}
        position="bottom-right"
        size={120}
        offset={24}
        opacity={0.7}
      />

      {/* restante do componente */}
    </>
  );
}