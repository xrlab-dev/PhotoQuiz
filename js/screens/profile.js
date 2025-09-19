import { show, hide, setScreen } from "../core/state.js";
import { standby, logo, profileImg, profileBtn, profileBtnImg } from "../core/dom.js";

// Botón sprites
const BTN_SPRITES = {
    active: "assets/images/profiles/ProfileButton_Active.webp",
    inactive: "assets/images/profiles/ProfileButton_Inactive.webp",
};

// Imágenes de perfil (pantalla 1)
const PROFILE_IMAGES = {
    Emocional: "assets/images/profiles/emocional/emocional_01.webp",
    Social: "assets/images/profiles/social/social_01.webp",
    Emprendedor: "assets/images/profiles/emprendedor/emprendedor_01.webp",
    Influenciable: "assets/images/profiles/influenciable/influenciable_01.webp",
};

export function goToProfile(perfil) {
    // Oculta Standby
    hide(standby);

    // Imagen central según perfil
    profileImg.src = PROFILE_IMAGES[perfil];

    // Mostrar elementos
    show(profileImg, profileBtn, logo);

    // Reset botón
    profileBtnImg.src = BTN_SPRITES.inactive;

    setScreen(7);
}

// Eventos de botón
profileBtn.addEventListener("pointerdown", () => {
    profileBtnImg.src = BTN_SPRITES.active;
});
profileBtn.addEventListener("pointerup", () => {
    profileBtnImg.src = BTN_SPRITES.inactive;
});
profileBtn.addEventListener("pointerleave", () => {
    profileBtnImg.src = BTN_SPRITES.inactive;
});

// (más adelante en click → ir a Profile Screen 2)