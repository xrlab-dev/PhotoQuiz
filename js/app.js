// Punto de entrada: solo importa módulos para que registren sus listeners.
import { Audio } from "./core/audio.js";

await Audio.preload();     // precarga y deja listo el unlock
Audio.wireButtons();       // botones con data-sfx
Audio.playMusic(0.4);      // loop de fondo
Audio.play("startup");     // sfx inicial opcional

import "./core/sprites.js"; // define mapas (no export side effects)
import "./core/dom.js";     // cachea refs (no side effects)
import "./core/state.js";   // estado + helpers

import "./screens/start.js"; // listeners de botón start y goToScreen2()
import "./screens/q1.js";    // lógica de pregunta 1 (y escucha evento 'go:question1')
import "./screens/q2.js"; // lógica de pregunta 2 (y escucha evento 'go:question2')
import "./screens/q3.js";
import "./screens/standby.js"
import "./screens/profile.js";