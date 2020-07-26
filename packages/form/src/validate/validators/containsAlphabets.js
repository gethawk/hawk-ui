export default function containsAlphabets(value, rule) {
  const defaultMsg = 'Only alphabets allowed';

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  const re = /^[a-zA-Z]+$/;

  if (!re.test(String(value))) {
    return rule.message || defaultMsg;
  }

  return undefined;
}
