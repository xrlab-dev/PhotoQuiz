// 1 = pantalla inicial (title), 2 = segunda pantalla (texto+logo), 3 = Q1
export let screen = 1;

export const setScreen = (n) => { screen = n; };

// Helpers de visibilidad
export const show = (...els) => els.forEach(el => el?.classList.remove("hidden"));
export const hide = (...els) => els.forEach(el => el?.classList.add("hidden"));
