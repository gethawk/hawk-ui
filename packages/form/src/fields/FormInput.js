// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import Input from '@hawk-ui/input';

export default class FormInput extends Component {
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
    dataType: PropTypes.string,
  };
  state = {
    value: _.get(this.props, 'value', ''),
  }
  componentDidMount() {
    const { onChange } = this.props;
    const { value } = this.state;

    onChange({ value });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.debouncedOnChange({ value: this.state.value });
    }
  }
  onChange = (value) => {
    const { dataType } = this.props;
    const typeCastedValue = dataType === 'number' ? _.toNumber(value) : value;

    this.setState({ value: _.isNaN(typeCastedValue) || _.isEmpty(value) ? value : typeCastedValue });
  }
  debouncedOnChange = _.debounce(this.props.onChange, 500);

  render() {
    const { property, placeholder, noTitle } = this.props;
    const { value } = this.state;

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <Input
          placeholder={placeholder}
          value={value || ''}
          onChange={(event) => {
            this.onChange(event.target.value);
          }}
        />
      </div>
    );
  }
}
