import { show, hide, setScreen } from "../core/state.js";
import { standby, logo, profileImg, profileBtn, profileBtnImg } from "../core/dom.js";

// Botón sprites
const BTN_SPRITES = {
    active: "assets/images/profiles/ProfileButton_Active.webp",
    inactive: "assets/images/profiles/ProfileButton_Inactive.webp",
};

let currentProfile = null;
let currentStep = 1;

function getProfileImage(perfil, step) {
    const basePath = `assets/images/profiles/${perfil.toLowerCase()}/${perfil.toLowerCase()}_0${step}.webp`;
    return basePath;
}

export function goToProfile(perfil) {

    hide(standby);

    currentProfile = perfil;
    currentStep = 1;

    profileImg.src = getProfileImage(currentProfile, currentStep);

    show(profileImg, profileBtn, logo);

    profileBtnImg.src = BTN_SPRITES.inactive;

    setScreen(7);
}

profileBtn.addEventListener("pointerdown", () => {
    profileBtnImg.src = BTN_SPRITES.active;
});
profileBtn.addEventListener("pointerup", () => {
    profileBtnImg.src = BTN_SPRITES.inactive;
});
profileBtn.addEventListener("pointerleave", () => {
    profileBtnImg.src = BTN_SPRITES.inactive;
});

profileBtn.addEventListener("click", () => {
    if (!currentProfile) return;

    if (currentStep < 3) {
        currentStep++;
        profileImg.src = getProfileImage(currentProfile, currentStep);
    } else {
        window.location.href = "https://www.klar.mx/";
    }
});