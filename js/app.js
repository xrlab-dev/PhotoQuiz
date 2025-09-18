// Punto de entrada: solo importa módulos para que registren sus listeners.
import "./core/sprites.js"; // define mapas (no export side effects)
import "./core/dom.js";     // cachea refs (no side effects)
import "./core/state.js";   // estado + helpers

import "./screens/start.js"; // listeners de botón start y goToScreen2()
import "./screens/q1.js";    // lógica de pregunta 1 (y escucha evento 'go:question1')

// (Opcional) init() si luego quieres preparar algo al cargar.
