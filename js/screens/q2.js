import { Q2_SPRITES } from "../core/sprites.js";
import { show, hide, setScreen } from "../core/state.js";
import { recordAnswer } from "../core/answers.js";
import {
    q1Title, q1A, q1B, q1C, q1D,
    q2Title, q2A, q2B, q2C, q2D,
    q2AImg, q2BImg, q2CImg, q2DImg
} from "../core/dom.js";

import { goToQuestion3 } from "./q3.js";

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

    console.log("Q2 =", map[letter]);

    goToQuestion3();
}

// A
q2A?.addEventListener("pointerdown", () => { q2AImg.src = Q2_SPRITES.A.activo; });
q2A?.addEventListener("pointerup", () => { q2AImg.src = Q2_SPRITES.A.passivo; });
q2A?.addEventListener("pointerleave", () => { q2AImg.src = Q2_SPRITES.A.passivo; });
q2A?.addEventListener("click", () => selectQ2("A"));

// B
q2B?.addEventListener("pointerdown", () => { q2BImg.src = Q2_SPRITES.B.activo; });
q2B?.addEventListener("pointerup", () => { q2BImg.src = Q2_SPRITES.B.passivo; });
q2B?.addEventListener("pointerleave", () => { q2BImg.src = Q2_SPRITES.B.passivo; });
q2B?.addEventListener("click", () => selectQ2("B"));

// C
q2C?.addEventListener("pointerdown", () => { q2CImg.src = Q2_SPRITES.C.activo; });
q2C?.addEventListener("pointerup", () => { q2CImg.src = Q2_SPRITES.C.passivo; });
q2C?.addEventListener("pointerleave", () => { q2CImg.src = Q2_SPRITES.C.passivo; });
q2C?.addEventListener("click", () => selectQ2("C"));

// D
q2D?.addEventListener("pointerdown", () => { q2DImg.src = Q2_SPRITES.D.activo; });
q2D?.addEventListener("pointerup", () => { q2DImg.src = Q2_SPRITES.D.passivo; });
q2D?.addEventListener("pointerleave", () => { q2DImg.src = Q2_SPRITES.D.passivo; });
q2D?.addEventListener("click", () => selectQ2("D"));