import { Q3_SPRITES } from "../core/sprites.js";
import { show, hide, setScreen } from "../core/state.js";
import { recordAnswer } from "../core/answers.js";
import {
    q2Title, q2A, q2B, q2C, q2D,
    q3Title, q3A, q3B, q3C, q3D,
    q3AImg, q3BImg, q3CImg, q3DImg
} from "../core/dom.js";

import { goToStandby } from "./standby.js";

export function goToQuestion3() {
    // Oculta Q2
    hide(q2Title, q2A, q2B, q2C, q2D);

    // Muestra Q3
    show(q3Title, q3A, q3B, q3C, q3D);

    // Reset sprites a Passivo
    q3AImg.src = Q3_SPRITES.A.passivo;
    q3BImg.src = Q3_SPRITES.B.passivo;
    q3CImg.src = Q3_SPRITES.C.passivo;
    q3DImg.src = Q3_SPRITES.D.passivo;

    setScreen(5); // (ejemplo) 5 = estamos en Q3
}

function selectQ3(letter) {
    // Reset
    q3AImg.src = Q3_SPRITES.A.passivo;
    q3BImg.src = Q3_SPRITES.B.passivo;
    q3CImg.src = Q3_SPRITES.C.passivo;
    q3DImg.src = Q3_SPRITES.D.passivo;

    // Activo
    if (letter === "A") q3AImg.src = Q3_SPRITES.A.activo;
    if (letter === "B") q3BImg.src = Q3_SPRITES.B.activo;
    if (letter === "C") q3CImg.src = Q3_SPRITES.C.activo;
    if (letter === "D") q3DImg.src = Q3_SPRITES.D.activo;

    // Guardar respuesta (pregunta 3)
    const map = { A: 0, B: 1, C: 2, D: 3 };
    recordAnswer(3, map[letter]);

    console.log("Q3 =", map[letter]);

    goToStandby();
}

// A
q3A?.addEventListener("pointerdown", () => { q3AImg.src = Q3_SPRITES.A.activo; });
q3A?.addEventListener("pointerup", () => { q3AImg.src = Q3_SPRITES.A.passivo; });
q3A?.addEventListener("pointerleave", () => { q3AImg.src = Q3_SPRITES.A.passivo; });
q3A?.addEventListener("click", () => selectQ3("A"));

// B
q3B?.addEventListener("pointerdown", () => { q3BImg.src = Q3_SPRITES.B.activo; });
q3B?.addEventListener("pointerup", () => { q3BImg.src = Q3_SPRITES.B.passivo; });
q3B?.addEventListener("pointerleave", () => { q3BImg.src = Q3_SPRITES.B.passivo; });
q3B?.addEventListener("click", () => selectQ3("B"));

// C
q3C?.addEventListener("pointerdown", () => { q3CImg.src = Q3_SPRITES.C.activo; });
q3C?.addEventListener("pointerup", () => { q3CImg.src = Q3_SPRITES.C.passivo; });
q3C?.addEventListener("pointerleave", () => { q3CImg.src = Q3_SPRITES.C.passivo; });
q3C?.addEventListener("click", () => selectQ3("C"));

// D
q3D?.addEventListener("pointerdown", () => { q3DImg.src = Q3_SPRITES.D.activo; });
q3D?.addEventListener("pointerup", () => { q3DImg.src = Q3_SPRITES.D.passivo; });
q3D?.addEventListener("pointerleave", () => { q3DImg.src = Q3_SPRITES.D.passivo; });
q3D?.addEventListener("click", () => selectQ3("D"));
