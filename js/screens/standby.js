import { show, hide, setScreen } from "../core/state.js";
import {
    standby,
    q3Title, q3A, q3B, q3C, q3D
} from "../core/dom.js";

export function goToStandby() {
    // Oculta Q3
    hide(q3Title, q3A, q3B, q3C, q3D);

    // Muestra Standby
    show(standby);

    setScreen(6); // ejemplo: 6 = standby
}