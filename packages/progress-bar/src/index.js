// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// css modules
import './index.scss';


function percentage(percent, total) {
  return ((percent / 100) * total).toFixed(2) * 100;
}

/**
 * @example ../README.md
 */
export default class ProgressBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    maxRange: PropTypes.number,
  };
  state = {};

  componentDidMount() {
    this.checkPasswordStrength(this.props.value);
  }

  checkPasswordStrength = (value) => {
    const { maxRange } = this.props;
    const progressBar = document.getElementById('progress');
    const percent = percentage(value, maxRange);

    if (percent === 0) {
      progressBar.removeAttribute('class');
    }
    if (percent > 0 && percent <= 50) {
      progressBar.classList.add('success');
    }
    if (percent > 50 && percent <= 75) {
      progressBar.classList.add('warning');
    }
    if (percent > 75) {
      progressBar.classList.add('danger');
    }
  };

  render() {
    const { className, value, maxRange } = this.props;

    return (
      <div className="hawk-progress-bar">
        <progress
          className={className}
          max={maxRange}
          value={value}
          id="progress"
        />
      </div>
    );
  }
}
