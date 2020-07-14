import _ from 'lodash';

export default function isRequiredIf(value, rule, data) {
  const defaultMsg = 'Required';

  if (!rule) {
    return undefined;
  }

  const requiredIfValue = _.get(data, rule.check);

  if (requiredIfValue) {
    if (!value) {
      return rule.message || defaultMsg;
    }

    if (String(value).length === 0) {
      return rule.message || defaultMsg;
    }
  }

  return undefined;
}
