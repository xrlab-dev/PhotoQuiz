import { Q2_SPRITES } from "../core/sprites.js";
import { show, hide, setScreen } from "../core/state.js";
import { recordAnswer } from "../core/answers.js";
import {
    q1Title, q1A, q1B, q1C, q1D,
    q2Title, q2A, q2B, q2C, q2D,
    q2AImg, q2BImg, q2CImg, q2DImg
} from "../core/dom.js";

export function goToQuestion2() {
    // Oculta Q1
    hide(q1Title, q1A, q1B, q1C, q1D);

    // Muestra Q2
    show(q2Title, q2A, q2B, q2C, q2D);

    // Reset sprites a Passivo
    q2AImg.src = Q2_SPRITES.A.passivo;
    q2BImg.src = Q2_SPRITES.B.passivo;
    q2CImg.src = Q2_SPRITES.C.passivo;
    q2DImg.src = Q2_SPRITES.D.passivo;

    setScreen(4); // (opcional) 4 = estamos en Q2
}

function selectQ2(letter) {
    // Reset
    q2AImg.src = Q2_SPRITES.A.passivo;
    q2BImg.src = Q2_SPRITES.B.passivo;
    q2CImg.src = Q2_SPRITES.C.passivo;
    q2DImg.src = Q2_SPRITES.D.passivo;

    // Activo
    if (letter === "A") q2AImg.src = Q2_SPRITES.A.activo;
    if (letter === "B") q2BImg.src = Q2_SPRITES.B.activo;
    if (letter === "C") q2CImg.src = Q2_SPRITES.C.activo;
    if (letter === "D") q2DImg.src = Q2_SPRITES.D.activo;

    // Guardar respuesta (pregunta 2)
    const map = { A: 0, B: 1, C: 2, D: 3 };
    recordAnswer(2, map[letter]);

    // TODO: aquí invocar goToQuestion3() cuando tengas Q3
    // window.dispatchEvent(new CustomEvent("go:question3"));
}

// Listeners
q2A?.addEventListener("click", () => selectQ2("A"));
q2B?.addEventListener("click", () => selectQ2("B"));
q2C?.addEventListener("click", () => selectQ2("C"));
q2D?.addEventListener("click", () => selectQ2("D"));