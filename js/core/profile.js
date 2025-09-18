/**
 * Busca un perfil recorriendo reglas (misma lógica que ProfileCalculator en Unity)
 * rules: [{ q1:0, q2:1, q3:2, profile:"Emocional" }, ...]
 */
export function computeProfileFrom(a1, a2, a3, rules) {
  for (let i = 0; i < rules.length; i++) {
    const r = rules[i];
    if (r.q1 === a1 && r.q2 === a2 && r.q3 === a3) return r.profile;
  }
  return "Undefined";
}