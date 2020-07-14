export default function containsNoDigits(value, rule) {
  const defaultMsg = 'No digits allowed';

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  const re = /^[^0-9]+$/;

  if (!re.test(String(value))) {
    return rule.message || defaultMsg;
  }

  return undefined;
}
