export default function isDate(value, rule) {
  const defaultMsg = 'Invalid date';

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  const date = new Date(value);

  if (Object.prototype.toString.call(date) === '[object Date]') {
    if (isNaN(date.getTime())) {
      return rule.message || defaultMsg;
    }
  } else {
    return rule.message || defaultMsg;
  }

  return undefined;
}
