export const getPhoneComponents = (phone) => {
  const sanitisedValue = (phone || '').replace(/[^\d\+]/g, '').trim();

  let number = null;
  let code = null;

  if (sanitisedValue.length >= 10) {
    number = sanitisedValue.replace(/[^\d]/g, '').substr(-10);
    code = sanitisedValue.slice(0, -10);
  } else if (sanitisedValue[0] === '+' && sanitisedValue.length <= 5) {
    code = sanitisedValue;
  } else {
    number = sanitisedValue.replace(/[^\d]/g, '').substr(-10);
  }

  return { code, number };
};
