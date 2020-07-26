import validators from './validators';

export default function validate(value, rules, data) {
  if (typeof rules !== 'object' || !rules) {
    return {};
  }

  function getRule(rule) {
    if (typeof rule === 'object' && rule !== null && rule.check) {
      return {
        check: rule.check,
        message: rule.message,
      };
    } else if (typeof rule === 'object' && rule !== null && rule instanceof RegExp) {
      return {
        check: rule,
      };
    } else if (typeof rule === 'boolean' && rule === true) {
      return {
        check: true,
      };
    } else if (typeof rule === 'string' && rule.length > 0) {
      return {
        check: true,
        message: rule,
      };
    } else if (typeof rule === 'number') {
      return {
        check: rule,
      };
    }

    return undefined;
  }

  const errors = {};
  const attributes = Object.keys(rules);

  attributes.map((attr) => {
    const validator = validators[attr];

    if (validator && typeof validator === 'function') {
      const errMsg = validators[attr](value, getRule(rules[attr]), data);

      if (errMsg) {
        errors[attr] = errMsg;
      }
    }

    return attr;
  });

  return errors;
}
