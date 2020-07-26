export default function checkMinValue(value, rule) {
  const defaultMsg = `Should be greater than or equal to ${rule.check}`;

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  if (Number(value) >= rule.check) {
    return rule.message || defaultMsg;
  }

  return undefined;
}
