// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import themeable from 'react-themeable';
import Input from '@hawk-ui/input';
import { autokey } from '../autokey';

export default class NumberInput extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    readOnly: PropTypes.bool,
  };

  onChange = e => {
    const { id, onChange, max } = this.props;
    let value = parseInt(e.target.value || 0, 10);

    // Don't exceed max value
    if (value > max) value = max;
    onChange(id, value);
  };

  render() {
    const theme = autokey(themeable(this.props.theme));
    const { id, value, min, max, readOnly } = this.props;

    return (
      <div {...theme('numberInputContainer')}>
        <Input
          readOnly={readOnly}
          {...theme('numberInput')}
          value={value}
          onChange={this.onChange}
          type="number"
          min={min}
          max={max}
          step={1}
          label={id}
        />
      </div>
    );
  }
}
