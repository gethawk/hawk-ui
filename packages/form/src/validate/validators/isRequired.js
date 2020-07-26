export default function isRequired(value, rule) {
  const defaultMsg = 'Required';

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
