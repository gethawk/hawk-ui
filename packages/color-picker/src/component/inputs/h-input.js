// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberInput from './number-input';

export default class HInput extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
  };

  state = {};

  render() {
    return (
      <NumberInput
        {...this.props}
        min={0}
        max={360}
      />
    );
  }
}
