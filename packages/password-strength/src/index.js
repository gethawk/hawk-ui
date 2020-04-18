// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class PasswordStrength extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
  };
  state = {};

  componentWillReceiveProps(nextProps, prevProps) {
    if (!_.isEqual(nextProps.value, prevProps.value)) {
      this.checkPasswordStrength(nextProps.value);
    }
  }

  checkPasswordStrength = (value) => {
    const progressBar = document.getElementById('strength');
    let strength = 0;

    if (value.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
      strength += 1;
    }
    if (value.match(/[~<>?]+/)) {
      strength += 1;
    }
    if (value.match(/[!@£$%^&*()]+/)) {
      strength += 1;
    }
    if (value.length > 5) {
      strength += 1;
    }
    if (value.length > 10) {
      strength += 1;
    }
    switch (strength) {
      case 0:
        progressBar.value = 0;
        progressBar.removeAttribute('class');
        break;
      case 1:
        progressBar.value = 20;
        progressBar.classList.add('danger');
        break;
      case 2:
        progressBar.value = 40;
        progressBar.classList.add('danger');
        break;
      case 3:
        progressBar.value = 60;
        progressBar.classList.add('warning');
        break;
      case 4:
        progressBar.value = 80;
        progressBar.classList.add('primary');
        break;
      case 5:
        progressBar.value = 100;
        progressBar.classList.add('success');
        break;
      default:
        break;
    }
  };

  render() {
    const { className } = this.props;

    return (
      <progress
        className={className}
        max="100"
        value="0"
        id="strength"
      />
    );
  }
}
