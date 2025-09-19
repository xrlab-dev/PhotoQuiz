import { show, hide, setScreen } from "../core/state.js";
import { getAnswer } from "../core/answers.js";
import { computeProfile } from "../core/profileCalculator.js";
import { standby, q3Title, q3A, q3B, q3C, q3D } from "../core/dom.js";
import { goToProfile } from "./profile.js";

export function goToStandby() {
  // Oculta Q3
  hide(q3Title, q3A, q3B, q3C, q3D);

  bg.src = "assets/images/start/Background_00.webp";
  document.documentElement.style.backgroundImage = 'url("assets/images/start/Background_00.webp")';

  // Muestra Standby
  show(standby);

  setScreen(6);

  // Calcular perfil
  const a1 = getAnswer(1);
  const a2 = getAnswer(2);
  const a3 = getAnswer(3);
  const perfil = computeProfile(a1, a2, a3);

  console.log("Perfil calculado:", perfil);

  setTimeout(() => {
    goToProfile(perfil);
  }, 3000);

}