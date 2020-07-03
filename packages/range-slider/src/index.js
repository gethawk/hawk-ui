// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class RangeSlider extends Component {
  static propTypes = {
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
  }

  state = {
    value: this.props.value,
  };

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', this.setRange);
    const range = document.getElementById('range');
    const rangeValue = document.getElementById('rangeValue');
    const newValue = Number((range.value - range.min) * 100 / (range.max - range.min));
    const newPosition = 10 - (newValue * 0.2);

    rangeValue.innerHTML = `<span>${range.value}</span>`;
    rangeValue.style.left = `calc(${newValue}% + (${newPosition}px))`;
  }

  componentWillUnmount() {
    document.removeEventListener('DOMContentLoaded', this.setRange);
  }

  setRange = (event) => {
    const rangeValue = document.getElementById('rangeValue');
    const newValue = Number((event.target.value - event.target.min) * 100 / (event.target.max - event.target.min));
    const newPosition = 10 - (newValue * 0.2);

    rangeValue.innerHTML = `<span>${event.target.value}</span>`;
    rangeValue.style.left = `calc(${newValue}% + (${newPosition}px))`;
    this.setState({
      value: event.target.value,
    }, () => {
      this.props.onChange(this.state.value);
    });
  };

  render() {
    const { value } = this.state;
    const { min, max, step } = this.props;

    return (
      <div className="hawk-range-slider">
        <div
          className="hawk-range-slider__value"
          id="rangeValue"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          id="range"
          onChange={(event) => { this.setRange(event); }}
        />
      </div>
    );
  }
}
