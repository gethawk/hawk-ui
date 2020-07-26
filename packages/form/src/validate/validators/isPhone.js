export default function isPhone(value, rule) {
  const defaultMsg = 'Invalid phone';

  if (!rule) {
    return undefined;
  }

  if (!value) {
    return rule.message || defaultMsg;
  }

  if (typeof value === 'object' && value !== null) {
    const { phone, dialCode } = value;
    const reDialCode = /^\+[\d]{1,4}$/;

    if (!reDialCode.test(String(dialCode))) {
      return 'Enter valid country calling code';
    }

    const rePhone = /^[\d]{10}$/;

    if (!rePhone.test(String(phone))) {
      return rule.message || defaultMsg;
    }

    return undefined;
  }

  const rePhone = /^\+[\d]{11,14}$/;

  if (!rePhone.test(String(value))) {
    return rule.message || defaultMsg;
  }

  return undefined;
}
