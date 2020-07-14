// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';

import Radio from '@hawk-ui/radio';

export default class FormRadio extends Component {
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

  componentDidMount() {
    const { value, onChange } = this.props;

    onChange({ value });
  }

  render() {
    const { property, noTitle } = this.props;

    return (
      <div
        data-field={property}
        className={getClassnames('dynamic-form-field', {
          'dynamic-form-field_no-padding': noTitle,
        })}
      >
        <Radio />
      </div>
    );
  }
}
