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
export default class Label extends Component {
  static propTypes = {
    icon: PropTypes.string,
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    title: PropTypes.string,
    className: PropTypes.string,
    isRequired: PropTypes.bool,
  };
  static defaultProps = {
    isRequired: false,
    iconPlacement: 'left',
  };
  state = {};

  render() {
    const { icon, iconPlacement, title, className, isRequired } = this.props;

    return (
      <label
        className={getClassNames('hawk-label', {
          [`hawk-label__icon-${iconPlacement}`]: iconPlacement,
          [className]: _.isString(className),
        })}
      >
        {icon && (
          <i
            className={getClassNames('hawk-label__icon', {
              [icon]: _.isString(icon),
            })}
          />
        )}
        <span>
          {title} {isRequired && <span className="hawk-label__required">*</span>}
        </span>
      </label>
    );
  }
}
