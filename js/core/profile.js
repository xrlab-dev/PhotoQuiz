import { RULES } from "./rules.js";

export function computeProfile(a1, a2, a3) {
  for (let i = 0; i < RULES.length; i++) {
    const r = RULES[i];
    if (r.q1 === a1 && r.q2 === a2 && r.q3 === a3) {
      return r.profile;
    }
  }
  return "Undefined";
}