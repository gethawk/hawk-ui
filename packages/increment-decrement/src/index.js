// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import getClassnames from 'classnames';
import Button from '@hawk-ui/button';
import Input from '@hawk-ui/input';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class IncrementDecrement extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    className: PropTypes.string,
    value: PropTypes.number,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    min: null,
    max: null,
    value: 0,
  };

  state = {
    value: this.props.value,
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.number) {
      this.setState({ number: nextProps.value });
    }
  }

  onHandleClick = (e) => {
    this.setState({
      value: _.isEqual(e, 'dec') ? this.state.value - 1 : this.state.value + 1,
    }, () => {
      if (this.props.onClick) {
        this.props.onClick(this.state.value);
      }
    });
  };

  render() {
    const { value } = this.state;
    const { min, max, className } = this.props;

    return (
      <div
        className={getClassnames('hawk-increment-decrement', {
          [className]: _.isString(className),
        })}
      >
        <Button
          variant="outlined"
          className="hawk-increment-decrement--dec-btn"
          onClick={() => { this.onHandleClick('dec'); }}
          isDisabled={_.isEqual(value, min)}
        >
          <span>-</span>
        </Button>
        <Input
          type="number"
          className="hawk-increment-decrement--input"
          value={value}
          isDisabled
        />
        <Button
          variant="outlined"
          className="hawk-increment-decrement--inc-btn"
          onClick={() => { this.onHandleClick('inc'); }}
          isDisabled={_.isEqual(value, max)}
        >
          <span>+</span>
        </Button>
      </div>
    );
  }
}
