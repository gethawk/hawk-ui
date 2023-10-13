// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Divider extends Component {
  static propTypes = {
    variant: PropTypes.oneOf(['vertical', 'horizontal']),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
  };
  static defaultProps = {
    variant: 'vertical',
  }

  state = {};

  render() {
    const { variant, children } = this.props;

    return (
      <div
        className={getClassnames('hawk-divider', {
          [`hawk-divider--${variant}`]: variant,
        })}
      >
        {children}
      </div>
    );
  }
}
