import { Q1_SPRITES } from "../core/sprites.js";
import {
  bg, titleImg, infoText, logo, startBtn,
  q1Title, q1A, q1B, q1C, q1D, q1AImg, q1BImg, q1CImg, q1DImg
} from "../core/dom.js";
import { show, hide, setScreen } from "../core/state.js";
import { recordAnswer } from "../core/answers.js";

import { goToQuestion2 } from "./q2.js";

export function goToQuestion1() {
  // Asegura el fondo de pantalla 2 (no pasa nada si ya está)
  bg.src = "assets/images/start/Background_01.webp";

  document.documentElement.style.backgroundImage = 'url("assets/images/start/Background_01.webp")';


  // Oculta intro y botón
  hide(titleImg, infoText, startBtn);

  // Muestra elementos de Q1
  show(q1Title, q1A, q1B, q1C, q1D);

  // Reset sprites a Passivo
  q1AImg.src = Q1_SPRITES.A.passivo;
  q1BImg.src = Q1_SPRITES.B.passivo;
  q1CImg.src = Q1_SPRITES.C.passivo;
  q1DImg.src = Q1_SPRITES.D.passivo;

  setScreen(3);
}

function selectQ1(letter) {
  q1AImg.src = Q1_SPRITES.A.passivo;
  q1BImg.src = Q1_SPRITES.B.passivo;
  q1CImg.src = Q1_SPRITES.C.passivo;
  q1DImg.src = Q1_SPRITES.D.passivo;

  if (letter === "A") q1AImg.src = Q1_SPRITES.A.activo;
  if (letter === "B") q1BImg.src = Q1_SPRITES.B.activo;
  if (letter === "C") q1CImg.src = Q1_SPRITES.C.activo;
  if (letter === "D") q1DImg.src = Q1_SPRITES.D.activo;

  const map = { A: 0, B: 1, C: 2, D: 3 };
  recordAnswer(1, map[letter]);

  console.log("Q1 =", map[letter]);

  goToQuestion2();
}

// A
q1A?.addEventListener("pointerdown", () => { q1AImg.src = Q1_SPRITES.A.activo; });
q1A?.addEventListener("pointerup", () => { q1AImg.src = Q1_SPRITES.A.passivo; });
q1A?.addEventListener("pointerleave", () => { q1AImg.src = Q1_SPRITES.A.passivo; });
q1A?.addEventListener("click", () => selectQ1("A"));

// B
q1B?.addEventListener("pointerdown", () => { q1BImg.src = Q1_SPRITES.B.activo; });
q1B?.addEventListener("pointerup", () => { q1BImg.src = Q1_SPRITES.B.passivo; });
q1B?.addEventListener("pointerleave", () => { q1BImg.src = Q1_SPRITES.B.passivo; });
q1B?.addEventListener("click", () => selectQ1("B"));

// C
q1C?.addEventListener("pointerdown", () => { q1CImg.src = Q1_SPRITES.C.activo; });
q1C?.addEventListener("pointerup", () => { q1CImg.src = Q1_SPRITES.C.passivo; });
q1C?.addEventListener("pointerleave", () => { q1CImg.src = Q1_SPRITES.C.passivo; });
q1C?.addEventListener("click", () => selectQ1("C"));

// D
q1D?.addEventListener("pointerdown", () => { q1DImg.src = Q1_SPRITES.D.activo; });
q1D?.addEventListener("pointerup", () => { q1DImg.src = Q1_SPRITES.D.passivo; });
q1D?.addEventListener("pointerleave", () => { q1DImg.src = Q1_SPRITES.D.passivo; });
q1D?.addEventListener("click", () => selectQ1("D"));