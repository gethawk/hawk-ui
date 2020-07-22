// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import SelectDropdown from '@hawk-ui/select-dropdown';

export default class FormSelectDropdown extends Component {
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
        <SelectDropdown />
      </div>
    );
  }
}
