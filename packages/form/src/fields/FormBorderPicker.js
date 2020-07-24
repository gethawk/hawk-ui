// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import BorderPicker from '@hawk-ui/border-picker';

export default class FormBorderPicker extends Component {
  static propTypes = {
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noTitle: PropTypes.bool,
  };
  state = {};

  render() {
    const { property, noTitle } = this.props;

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <BorderPicker
          type="solid"
        />
      </div>
    );
  }
}
