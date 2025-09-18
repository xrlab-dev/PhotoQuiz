import { Q1_SPRITES } from "../core/sprites.js";
import { bg, titleImg, infoText, logo, startBtn,
         q1Title, q1A, q1B, q1C, q1D, q1AImg, q1BImg, q1CImg, q1DImg } from "../core/dom.js";
import { show, hide, setScreen } from "../core/state.js";

export function goToQuestion1() {
  // Asegura el fondo de pantalla 2 (no pasa nada si ya está)
  bg.src = "assets/images/start/Background_01.webp";

  // Oculta intro y botón
  hide(titleImg, infoText, logo, startBtn);

  // Muestra elementos de Q1
  show(q1Title, q1A, q1B, q1C, q1D);

  // Reset sprites a Passivo
  q1AImg.src = Q1_SPRITES.A.passivo;
  q1BImg.src = Q1_SPRITES.B.passivo;
  q1CImg.src = Q1_SPRITES.C.passivo;
  q1DImg.src = Q1_SPRITES.D.passivo;

  setScreen(3);
}

function selectQ1(letter){
  q1AImg.src = Q1_SPRITES.A.passivo;
  q1BImg.src = Q1_SPRITES.B.passivo;
  q1CImg.src = Q1_SPRITES.C.passivo;
  q1DImg.src = Q1_SPRITES.D.passivo;

  if (letter === "A") q1AImg.src = Q1_SPRITES.A.activo;
  if (letter === "B") q1BImg.src = Q1_SPRITES.B.activo;
  if (letter === "C") q1CImg.src = Q1_SPRITES.C.activo;
  if (letter === "D") q1DImg.src = Q1_SPRITES.D.activo;
}

// Listeners de opciones
q1A?.addEventListener("click", ()=> selectQ1("A"));
q1B?.addEventListener("click", ()=> selectQ1("B"));
q1C?.addEventListener("click", ()=> selectQ1("C"));
q1D?.addEventListener("click", ()=> selectQ1("D"));

// Puente: escuchar el evento global para saltar a Q1
window.addEventListener("go:question1", goToQuestion1);
