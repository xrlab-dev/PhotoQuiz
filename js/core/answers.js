// Almacenamiento temporal en memoria (por sesión de página)
const _answers = new Map(); // questionIndex (1..N) -> optionIndex (0..3)

/** Guarda/actualiza la respuesta de una pregunta */
export function recordAnswer(questionIndex, optionIndex) {
    _answers.set(Number(questionIndex), Number(optionIndex));
}

/** Obtiene la respuesta de una pregunta (o undefined) */
export function getAnswer(questionIndex) {
    return _answers.get(Number(questionIndex));
}

/** Obtiene un snapshot plano (útil para debug o cálculo de perfil) */
export function getAllAnswers() {
    // Devuelve un objeto con claves numéricas existentes
    const obj = {};
    for (const [q, opt] of _answers.entries()) obj[q] = opt;
    return obj;
}

/** Limpia todas las respuestas (reinicio de quiz) */
export function resetAnswers() {
    _answers.clear();
}