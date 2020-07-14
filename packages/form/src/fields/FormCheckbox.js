// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';

import Checkbox from '@hawk-ui/checkbox';

export default class FormCheckbox extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    visual: PropTypes.object,
    noTitle: PropTypes.bool,
  };
  state = {};

  render() {
    const { property, noTitle } = this.props;

    return (
      <div
        data-field={property}
        className={getClassnames('dynamic-form-field', {
          'dynamic-form-field_no-padding': noTitle,
        })}
      >
        <Checkbox />
      </div>
    );
  }
}
