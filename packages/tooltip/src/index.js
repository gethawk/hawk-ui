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
export default class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    content: PropTypes.string,
  };
  state = {};

  render() {
    const { children, position, content } = this.props;

    return (
      <div className="hawk-tooltip">
        {children}
        <div
          className={getClassnames('hawk-tooltip__content', {
            [`hawk-tooltip__content-${position}`]: _.isString(position),
          })}
        >
          {content}
        </div>
      </div>
    );
  }
}