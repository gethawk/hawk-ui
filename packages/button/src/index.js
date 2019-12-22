// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import isFunction from 'lodash.isfunction';

import './index.scss';

/**
 * @example ../README.md
 */
// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    type: PropTypes.string,
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
  };

  onClick = (e) => {
    if (!this.props.isDisabled && isFunction(this.props.onClick)) {
      this.props.onClick(e);
    }
  }

  render() {
    const { className, children, type, isDisabled } = this.props;

    return (
      <button
        type={type}
        className={getClassnames('hawk-button', className, {
          'hawk-button__disabled': isDisabled,
        })}
        onClick={(e) => { this.onClick(e); }}
      >
        {children}
      </button>
    );
  }
}
