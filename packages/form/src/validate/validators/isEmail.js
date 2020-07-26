export default function isEmail(value, rule) {
  const defaultMsg = 'Invalid email';

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(value).toLowerCase())) {
    return rule.message || defaultMsg;
  }

  return undefined;
}
