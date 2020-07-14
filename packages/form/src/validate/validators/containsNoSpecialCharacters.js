export default function containsNoSpecialCharacters(value, rule) {
  const defaultMsg = 'No special characters allowed';

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  const re = /^[a-zA-Z0-9]+$/;

  if (!re.test(String(value))) {
    return rule.message || defaultMsg;
  }

  return undefined;
}
