// Rutas de sprites
const SPRITES = {
  inactive: "assets/images/start/StartButton_Inactive.webp",
  active:   "assets/images/start/StartButton_Active.webp",
};

const startBtn = document.getElementById("startBtn");
const startBtnImg = document.getElementById("startBtnImg");

// Al presionar
startBtn.addEventListener("pointerdown", () => {
  startBtnImg.src = SPRITES.active;
});

// Al soltar vuelve al inactivo
startBtn.addEventListener("pointerup", () => {
  startBtnImg.src = SPRITES.inactive;
});

// Click → aquí pasas a la siguiente pantalla
startBtn.addEventListener("click", () => {
  console.log("→ continuar flujo");
});