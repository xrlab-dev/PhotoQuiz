import { SPRITES } from "../core/sprites.js";
import { bg, titleImg, infoText, logo, startBtn, startBtnImg } from "../core/dom.js";
import { screen, setScreen } from "../core/state.js";
import { goToQuestion1 } from "./q1.js";

// Feedback visual del botón
startBtn.addEventListener("pointerdown", () => { startBtnImg.src = SPRITES.active; });
startBtn.addEventListener("pointerup", () => { startBtnImg.src = SPRITES.inactive; });
startBtn.addEventListener("pointerleave", () => { startBtnImg.src = SPRITES.inactive; });

// Click → flujo por estados
startBtn.addEventListener("click", () => {
  if (screen === 1) {
    goToScreen2();
  } else if (screen === 2) {
    goToQuestion1();
  }
});

export function goToScreen2() {
  // Cambiar fondo y alternar elementos
  bg.src = "assets/images/start/Background_01.webp";
  infoText.classList.remove("hidden");  // StartingText_00
  logo.classList.remove("hidden");      // KlarLogo_Base
  titleImg.classList.add("hidden");     // Oculta StartingTitle_00
  setScreen(2);
}
