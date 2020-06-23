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
export default class Tag extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    className: PropTypes.string,
    icon: PropTypes.element,
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    isHover: PropTypes.bool,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    isHover: false,
    iconPlacement: 'left',
  }
  state = {};

  onClick = (e) => {
    if (_.isFunction(this.props.onClick)) {
      this.props.onClick(e);
    }
  }

  render() {
    const { children, className, icon, iconPlacement, isHover, onClick } = this.props;

    return (
      <div
        className={getClassnames('blng-tag', {
          'blng-tag__hoverable': isHover,
          'blng-tag__clickable': _.isFunction(onClick),
          [`blng-tag__icon-placement_${iconPlacement}`]: _.isString(iconPlacement),
          [className]: !_.isEmpty(className),
        })}
        onClick={(e) => { this.onClick(e); }}
      >
        {icon && (
          <i
            className={getClassnames('blng-tag__icon', {
              [icon]: _.isString(icon),
            })}
          />
        )}
        <div className="blng-tag__content">{children}</div>
      </div>
    );
  }
}
