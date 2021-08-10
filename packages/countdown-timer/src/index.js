// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import getClassnames from 'classnames';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class CountdownTimer extends Component {
  static propTypes = {
    variant: PropTypes.oneOf(['default', 'circular']),
    id: PropTypes.string,
    countdown: PropTypes.number,
    className: PropTypes.string,
  };
  static defaultProps = {
    variant: 'default',
    id: 'countdown-number',
  }

  state = {};

  componentDidMount() {
    const { id } = this.props;
    const countdownNumberEl = document.getElementById(id);
    let countdown = this.props.countdown;

    if (countdownNumberEl) {
      countdownNumberEl.textContent = countdown;
      setInterval(() => {
        countdown = --countdown <= 0 ? this.props.countdown : countdown;
        countdownNumberEl.textContent = countdown;
      }, 1000);
    }
  }

  render() {
    const { variant, id, countdown, className } = this.props;

    return (
      <div
        className={getClassnames('hawk-countdown-timer', {
          [className]: _.isString(className),
        })}
      >
        <div
          id={id}
          className="hawk-countdown-timer__number"
        />
        {_.isEqual(variant, 'circular') && (
          <svg>
            <circle
              r="18"
              cx="20"
              cy="20"
              style={{ animation: `countdown ${countdown}s linear infinite forwards` }}
            />
          </svg>
        )}
      </div>
    );
  }
}
