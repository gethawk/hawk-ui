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
    configuration: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    visual: PropTypes.object,
    noTitle: PropTypes.bool,
  };
  state = {};

  render() {
    const { property, noTitle, configuration } = this.props;
    const options = _.get(configuration, 'visual.options', []);

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <Checkbox
          options={options}
        />
      </div>
    );
  }
}
