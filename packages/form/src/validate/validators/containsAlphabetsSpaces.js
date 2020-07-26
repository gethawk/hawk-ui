export default function containsAlphabetsSpaces(value, rule) {
  const defaultMsg = 'Only alphabets & spaces allowed';

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  const re = /^[a-zA-Z\s]+$/;

  if (!re.test(String(value))) {
    return rule.message || defaultMsg;
  }

  return undefined;
}
