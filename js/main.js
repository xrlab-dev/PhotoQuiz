// Rutas de sprites
const SPRITES = {
  inactive: "assets/images/start/StartButton_Inactive.webp",
  active:   "assets/images/start/StartButton_Active.webp",
};

const startBtn    = document.getElementById("startBtn");
const startBtnImg = document.getElementById("startBtnImg");

// NUEVOS elementos a alternar
const bg       = document.getElementById("bg");
const titleImg = document.getElementById("titleImg");
const infoText = document.getElementById("infoText");
const logo     = document.getElementById("logo");

// Al presionar
startBtn.addEventListener("pointerdown", () => {
  startBtnImg.src = SPRITES.active;
});

// Al soltar vuelve al inactivo
startBtn.addEventListener("pointerup", () => {
  startBtnImg.src = SPRITES.inactive;
});

// Click → activar texto + logo, cambiar fondo, desactivar título
startBtn.addEventListener("click", () => {
  // 1) Fondo
  bg.src = "assets/images/start/Background_01.webp";

  // 2) Mostrar StartingText_00 y KlarLogo_Base
  infoText.classList.remove("hidden");
  logo.classList.remove("hidden");

  // 3) Ocultar StartingTitle_00
  titleImg.classList.add("hidden");
});
