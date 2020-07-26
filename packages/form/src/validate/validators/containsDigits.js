export default function containsDigits(value, rule) {
  const defaultMsg = 'Only digits allowed';

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  const re = /^[0-9\.]+$/;

  if (!re.test(String(value))) {
    return rule.message || defaultMsg;
  }

  return undefined;
}
