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
    onClick: PropTypes.func,
  };
  static defaultProps = {
    layout: 'box',
    isHoverable: false,
    isClickable: false,
  }

  state = {};

  onClick = (event) => {
    if (this.props.isClickable) {
      this.props.onClick(event);
    }
  }

  render() {
    const { className, layout, children, isHoverable, isClickable } = this.props;

    return (
      <div
        className={getClassnames('hawk-card', {
          [className]: _.isString(className),
          [`hawk-card__layout-${layout}`]: _.isString(layout),
          'hawk-card__hover': isHoverable,
          'hawk-card__clickable': isClickable,
        })}
        onClick={(event) => { this.onClick(event); }}
      >
        {children}
      </div>
    );
  }
}
