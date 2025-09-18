// Rutas de sprites (botón Start)
const SPRITES = {
  inactive: "assets/images/start/StartButton_Inactive.webp",
  active:   "assets/images/start/StartButton_Active.webp",
};

// Refs START
const startBtn    = document.getElementById("startBtn");
const startBtnImg = document.getElementById("startBtnImg");

// Refs elementos de la intro
const bg       = document.getElementById("bg");
const titleImg = document.getElementById("titleImg"); // StartingTitle_00 (visible al inicio)
const infoText = document.getElementById("infoText"); // StartingText_00 (se activa en pantalla 2)
const logo     = document.getElementById("logo");     // KlarLogo_Base (se activa en pantalla 2)

// ===== Estado de pantallas =====
// 1 = pantalla inicial (title), 2 = segunda pantalla (texto+logo), 3 = Q1
let screen = 1;

// ===== Eventos del botón START (feedback visual) =====
startBtn.addEventListener("pointerdown", () => {
  startBtnImg.src = SPRITES.active;
});
startBtn.addEventListener("pointerup", () => {
  startBtnImg.src = SPRITES.inactive;
});
startBtn.addEventListener("pointerleave", () => {
  startBtnImg.src = SPRITES.inactive;
});

// ===== Click del botón START (flujo por estados) =====
startBtn.addEventListener("click", () => {
  if (screen === 1) {
    goToScreen2();   // primer click → NO saltar; mostrar texto+logo y cambiar fondo
  } else if (screen === 2) {
    goToQuestion1(); // segundo click → ir a Q1
  }
});

// ----- Pantalla 2 (intro) -----
function goToScreen2(){
  // Cambiar fondo
  bg.src = "assets/images/start/Background_01.webp";

  // Mostrar StartingText_00 y KlarLogo_Base
  infoText.classList.remove("hidden");
  logo.classList.remove("hidden");

  // Ocultar StartingTitle_00
  titleImg.classList.add("hidden");

  screen = 2;
}

// ====== PREGUNTA 1 ======
// Paths de sprites (usa "Passivo" tal cual)
const Q1_SPRITES = {
  A: {
    activo:  "assets/images/quiz/question01/Preg_01_A_Activo.webp",
    passivo: "assets/images/quiz/question01/Preg_01_A_Passivo.webp",
  },
  B: {
    activo:  "assets/images/quiz/question01/Preg_01_B_Activo.webp",
    passivo: "assets/images/quiz/question01/Preg_01_B_Passivo.webp",
  },
  C: {
    activo:  "assets/images/quiz/question01/Preg_01_C_Activo.webp",
    passivo: "assets/images/quiz/question01/Preg_01_C_Passivo.webp",
  },
  D: {
    activo:  "assets/images/quiz/question01/Preg_01_D_Activo.webp",
    passivo: "assets/images/quiz/question01/Preg_01_D_Passivo.webp",
  },
};

// Refs Q1
const q1Title = document.getElementById("q1Title"); // question_01 (placeholder)
const q1A = document.getElementById("q1A");
const q1B = document.getElementById("q1B");
const q1C = document.getElementById("q1C");
const q1D = document.getElementById("q1D");
const q1AImg = document.getElementById("q1AImg");
const q1BImg = document.getElementById("q1BImg");
const q1CImg = document.getElementById("q1CImg");
const q1DImg = document.getElementById("q1DImg");

// Helpers
const show = (...els) => els.forEach(el => el?.classList.remove("hidden"));
const hide = (...els) => els.forEach(el => el?.classList.add("hidden"));

// Ir a Q1 (mantener solo fondo + mostrar título y 4 opciones)
function goToQuestion1() {
  // Asegura fondo de pantalla 2 (no pasa nada si ya está)
  bg.src = "assets/images/start/Background_01.webp";

  // Oculta todo lo previo de la intro y el botón start
  hide(titleImg, infoText, logo, startBtn);

  // Muestra elementos de Q1
  show(q1Title, q1A, q1B, q1C, q1D);

  // Reset sprites a Passivo
  q1AImg.src = Q1_SPRITES.A.passivo;
  q1BImg.src = Q1_SPRITES.B.passivo;
  q1CImg.src = Q1_SPRITES.C.passivo;
  q1DImg.src = Q1_SPRITES.D.passivo;

  screen = 3;
}

// Selección (activa solo una opción)
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

// Eventos de los 4 botones
q1A?.addEventListener("click", ()=> selectQ1("A"));
q1B?.addEventListener("click", ()=> selectQ1("B"));
q1C?.addEventListener("click", ()=> selectQ1("C"));
q1D?.addEventListener("click", ()=> selectQ1("D"));