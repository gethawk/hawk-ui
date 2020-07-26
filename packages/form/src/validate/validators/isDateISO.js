export default function isDateISO(value, rule) {
  const defaultMsg = 'Invalid date';

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  if (String(value).length === 0) {
    return rule.message || defaultMsg;
  }

  return undefined;
}
