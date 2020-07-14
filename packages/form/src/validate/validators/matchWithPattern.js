export default function matchWithPattern(value, rule) {
  const defaultMsg = 'Invalid pattern';

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
