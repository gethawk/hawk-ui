export default function checkMinLength(value, rule) {
  const defaultMsg = `Minimum ${rule.check} characters expected`;

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  if (String(value).length < rule.check) {
    return rule.message || defaultMsg;
  }

  return undefined;
}
