import { Audio } from "./core/audio.js";

// Forzar fondo inicial al cargar la app
document.documentElement.style.backgroundImage = 'url("assets/images/start/Background_00.webp")';

async function initApp() {
    // 1️⃣ Preload y wire buttons
    await Audio.preload();
    Audio.wireButtons();

    // 2️⃣ Escucha el primer gesto del usuario para reproducir audio seguro en iOS
    const firstInteraction = () => {
        Audio.playMusic(0.4);   // música de fondo
        Audio.play("startup");  // SFX inicial
        window.removeEventListener("pointerdown", firstInteraction);
        window.removeEventListener("touchstart", firstInteraction);
        window.removeEventListener("keydown", firstInteraction);
    };

    window.addEventListener("pointerdown", firstInteraction, { passive: true });
    window.addEventListener("touchstart", firstInteraction, { passive: true });
    window.addEventListener("keydown", firstInteraction);

    // 3️⃣ Importaciones de módulos que no dependen de audio
    import("./core/sprites.js");
    import("./core/dom.js");
    import("./core/state.js");
    import("./screens/start.js");
    import("./screens/q1.js");
    import("./screens/q2.js");
    import("./screens/q3.js");
    import("./screens/standby.js");
    import("./screens/profile.js");
}

initApp();
