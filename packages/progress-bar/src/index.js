// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

function percentage(value, total) {
  return ((value / total) * 100);
}

/**
 * @example ../README.md
 */
export default class ProgressBar extends Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    maxRange: PropTypes.number,
    isColorVary: PropTypes.bool,
    isProgress: PropTypes.bool,
    progressContent: PropTypes.string,
  };

  static defaultProps = {
    id: 'progress',
    isColorVary: true,
    isProgress: false,
    progressContent: 'Progress',
  }

  state = {};

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps, prevProps) {
    if (!_.isEqual(nextProps.value, prevProps.value)) {
      this.rangeVary(nextProps.value);
    }
  }

  rangeVary = (value) => {
    const { maxRange, isColorVary } = this.props;
    const progressBar = document.getElementById('progress');
    const percent = percentage(value, maxRange);

    if (isColorVary) {
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
    }
  };

  render() {
    const { id, className, value, maxRange, isProgress, progressContent } = this.props;

    return (
      <div
        className={getClassnames('hawk-progress-bar', {
          [className]: _.isString(className),
        })}
      >
        <progress
          className={className}
          max={maxRange}
          value={value}
          id={id}
        >
          {value}
        </progress>
        {isProgress && (
          <div className="hawk-progress-bar__content">
            <span>{progressContent}</span>
            <span>{`${value}%`}</span>
          </div>
        )}
      </div>
    );
  }
}
