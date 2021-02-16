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
export default class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    isDisabled: PropTypes.bool,
    icon: PropTypes.string,
  };
  static defaultProps = {
    type: 'button',
    variant: 'contained',
  }

  onClick = (e) => {
    if (!this.props.isDisabled && _.isFunction(this.props.onClick)) {
      this.props.onClick(e);
    }
  }

  onMouseOver = (e) => {
    if (!this.props.isDisabled && _.isFunction(this.props.onMouseOver)) {
      this.props.onMouseOver(e);
    }
  }

  onMouseOut = (e) => {
    if (!this.props.isDisabled && _.isFunction(this.props.onMouseOut)) {
      this.props.onMouseOut(e);
    }
  }

  render() {
    const { type, variant, className, children, isDisabled, icon } = this.props;

    return (
      <button
        type={isDisabled ? _.isEqual(type, 'submit') && 'button' : type}
        className={getClassnames('hawk-button', className, {
          [`hawk-button__${variant}`]: _.isString(variant),
          [`hawk-button__${variant}-disabled`]: isDisabled,
        })}
        onClick={(e) => { this.onClick(e); }}
        onMouseOver={(e) => { this.onMouseOver(e); }}
        onMouseOut={(e) => { this.onMouseOut(e); }}
      >
        {_.isString(icon) ? (
          <i className={icon} />
        ) : null}
        {children}
      </button>
    );
  }
}
