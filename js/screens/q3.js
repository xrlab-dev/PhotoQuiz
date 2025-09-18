import { Q3_SPRITES } from "../core/sprites.js";
import { show, hide, setScreen } from "../core/state.js";
import { recordAnswer } from "../core/answers.js";
import {
    q2Title, q2A, q2B, q2C, q2D,
    q3Title, q3A, q3B, q3C, q3D,
    q3AImg, q3BImg, q3CImg, q3DImg
} from "../core/dom.js";

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

    // TODO: aquí disparar el cálculo del perfil y mostrar resultados
    // ej: window.dispatchEvent(new CustomEvent("go:results"));
}

// Listeners
q3A?.addEventListener("click", () => selectQ3("A"));
q3B?.addEventListener("click", () => selectQ3("B"));
q3C?.addEventListener("click", () => selectQ3("C"));
q3D?.addEventListener("click", () => selectQ3("D"));
