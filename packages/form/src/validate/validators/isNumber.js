export default function isNumber(value, rule) {
  const defaultMsg = 'Only number allowed';

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  const re = /^[+-]?\d+(\.\d+)?$/;

  if (!re.test(String(value)) || typeof value !== 'number') {
    return rule.message || defaultMsg;
  }

  return undefined;
}
