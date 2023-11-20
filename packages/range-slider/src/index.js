// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class RangeSlider extends Component {
  static propTypes = {
    valueId: PropTypes.string,
    rangeId: PropTypes.string,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func,
    className: PropTypes.string,
  };
  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
  }

  state = {};

  componentDidMount() {
    const range = document.getElementById(this.props.rangeId);
    const rangeValue = document.getElementById(this.props.valueId);
    const newValue = Number((range.value - range.min) * 100 / (range.max - range.min));
    const newPosition = 10 - (newValue * 0.2);

    rangeValue.innerHTML = `<span>${range.value}</span>`;
    rangeValue.style.left = `calc(${newValue}% + (${newPosition}px))`;
  }

  setRange = (event) => {
    const rangeValue = document.getElementById(this.props.valueId);
    const newValue = Number((event.target.value - event.target.min) * 100 / (event.target.max - event.target.min));
    const newPosition = 10 - (newValue * 0.2);

    rangeValue.innerHTML = `<span>${event.target.value}</span>`;
    rangeValue.style.left = `calc(${newValue}% + (${newPosition}px))`;
    this.props.onChange(event.target.value);
  };

  render() {
    const { value, min, max, step, className } = this.props;

    return (
      <div
        className={getClassnames('hawk-range-slider', {
          [className]: _.isString(className),
        })}
      >
        <div
          className="hawk-range-slider__value"
          id={this.props.valueId}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          id={this.props.rangeId}
          onChange={(event) => { this.setRange(event); }}
        />
      </div>
    );
  }
}
