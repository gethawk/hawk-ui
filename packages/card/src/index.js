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
export default class Card extends Component {
  static propTypes = {
    layout: PropTypes.oneOf(['box', 'circle']),
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    className: PropTypes.string,
    isHoverable: PropTypes.bool,
    isClickable: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    layout: 'box',
    isHoverable: false,
    isClickable: false,
    isDisabled: false,
    isSelected: false,
  }

  state = {};

  onClick = (event) => {
    if (this.props.isClickable && !this.props.isDisabled) {
      this.props.onClick(event);
    }
  }

  render() {
    const { className, layout, children, isHoverable, isClickable, isDisabled, isSelected } = this.props;

    return (
      <div
        className={getClassnames('hawk-card', {
          [className]: _.isString(className),
          [`hawk-card__layout-${layout}`]: _.isString(layout),
          'hawk-card__active': isSelected,
          'hawk-card__hover': isHoverable,
          'hawk-card__clickable': isClickable,
          'hawk-card__disabled': isDisabled,
        })}
        onClick={(event) => { this.onClick(event); }}
      >
        {children}
      </div>
    );
  }
}
