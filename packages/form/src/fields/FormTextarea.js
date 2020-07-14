// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';

import Input from '@hawk-ui/input';

export default class FormTextarea extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    noTitle: PropTypes.bool,
  };
  static defaultProps = {
    value: '',
  };
  componentDidMount() {
    const { value, onChange } = this.props;

    onChange({ value });
  }

  render() {
    const { property, value, placeholder, onChange, noTitle } = this.props;

    return (
      <div
        data-field={property}
        className={getClassnames('dynamic-form-field', {
          'dynamic-form-field_no-padding': noTitle,
        })}
      >
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(val) => { onChange({ value: val }); }}
          isTextarea
        />
      </div>
    );
  }
}
