export default function guardrail(mathFunction) {
  try {
    const value = mathFunction();
    return [value, 'Guardrail was processed'];
  } catch (err) {
    return [err.toString(), 'Guardrail was processed'];
  }
}
