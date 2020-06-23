// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Pill extends Component {
  static propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'tab', 'step', 'counter']),
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    icon: PropTypes.element,
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    stepIndex: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    isHover: PropTypes.bool,
  };
  static defaultProps = {
    variant: 'default',
    iconPlacement: 'left',
  }
  state = {};

  render() {
    const { className, children, variant, icon, iconPlacement, stepIndex, isActive, onClick, isHover } = this.props;

    return (
      <div
        className={getClassNames('hawk-pill', {
          [`hawk-pill__variant-${variant}`]: _.isString(variant),
          [`hawk-pill__icon-placement_${iconPlacement}`]: _.isString(iconPlacement),
          [`hawk-pill__variant-${variant}-active`]: isActive,
          'hawk-pill__clickable': _.isFunction(onClick),
          'hawk-pill__hoverable': isHover,
          [className]: !_.isEmpty(className),
        })}
      >
        {icon && (
          <i
            className={getClassNames('hawk-pill__icon', {
              [icon]: _.isString(icon),
            })}
          />
        )}
        {stepIndex && (
          <div
            className={getClassNames('hawk-pill__step-index', {
              'hawk-pill__step-index__active': isActive,
            })}
          >
            {stepIndex}
          </div>
        )}
        <div className="hawk-pill__content">{children}</div>
      </div>
    );
  }
}
