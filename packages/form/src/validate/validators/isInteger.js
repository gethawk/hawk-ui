export default function isInteger(value, rule) {
  const defaultMsg = 'Only integer allowed';

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  const re = /^[+-]?\d+$/;

  if (!re.test(String(value)) || typeof value !== 'number') {
    return rule.message || defaultMsg;
  }

  return undefined;
}
