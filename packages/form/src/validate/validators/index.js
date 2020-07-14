import isRequired from './isRequired';
import isRequiredIf from './isRequiredIf';
import isPhone from './isPhone';
import isEmail from './isEmail';
import containsAlphabets from './containsAlphabets';
import containsAlphabetsSpaces from './containsAlphabetsSpaces';
import containsDigits from './containsDigits';
import containsNoDigits from './containsNoDigits';
import containsNoSpecialCharacters from './containsNoSpecialCharacters';
import isNumber from './isNumber';
import isInteger from './isInteger';
import checkMinLength from './checkMinLength';
import checkMaxLength from './checkMaxLength';
import checkMinValue from './checkMinValue';
import checkMaxValue from './checkMaxValue';
import isURL from './isURL';
import isDate from './isDate';
import isDateGMT from './isDateGMT';
import isDateISO from './isDateISO';
import isDatetime from './isDatetime';
import isDatetimeISO from './isDatetimeISO';
import matchWithPattern from './matchWithPattern';

export default {
  required: isRequired,
  required_if: isRequiredIf,
  phone: isPhone,
  email: isEmail,
  only_alphabets: containsAlphabets,
  only_alphabets_spaces: containsAlphabetsSpaces,
  only_digits: containsDigits,
  no_digits: containsNoDigits,
  no_special_chars: containsNoSpecialCharacters,
  number: isNumber,
  integer: isInteger,
  minLength: checkMinLength,
  maxLength: checkMaxLength,
  min: checkMinValue,
  max: checkMaxValue,
  url: isURL,
  date: isDate,
  dateGMT: isDateGMT,
  dateISO: isDateISO,
  datetime: isDatetime,
  datetimeISO: isDatetimeISO,
  pattern: matchWithPattern,
};
