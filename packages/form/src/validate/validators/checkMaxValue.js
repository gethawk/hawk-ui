export default function checkMaxValue(value, rule) {
  const defaultMsg = `Should be less than or equal to ${rule.check}`;

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  if (Number(value) <= rule.check) {
    return rule.message || defaultMsg;
  }

  return undefined;
}
