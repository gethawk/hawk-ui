// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import ColorPicker from '@hawk-ui/color-picker';

export default class FormColorPicker extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    visual: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noTitle: PropTypes.bool,
  };
  state = {};

  render() {
    const { visual, property, noTitle, onChange } = this.props;
    const defaultColor = _.get(visual, 'default_color', '000000');

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <ColorPicker
          defaultColor={defaultColor}
          onSave={(event) => {
            onChange({ value: event });
          }}
        />
      </div>
    );
  }
}
