// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import Checkbox from '@hawk-ui/checkbox';

export default class FormCheckbox extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    visual: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noTitle: PropTypes.bool,
    isArraySupportedField: PropTypes.bool,
  };
  state = {};

  onChange = (selected) => {
    const { isArraySupportedField, value, onChange } = this.props;

    if (isArraySupportedField) {
      const isAlreadyPartOfArray = _.includes(value || [], selected);

      if (isAlreadyPartOfArray) {
        onChange({
          value: _.without(value || [], selected),
        });
      } else {
        onChange({
          value: _.concat(value || [], selected),
        });
      }
    } else {
      onChange({
        value: selected,
      });
    }
  };

  render() {
    const { property, value, noTitle, visual } = this.props;
    const options = _.get(visual, 'options', []);

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <Checkbox
          options={options}
          selectedItem={value}
          onChange={(event) => {
            this.onChange(event.target.value);
          }}
        />
      </div>
    );
  }
}
