// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Loader extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['pulse', 'bricks']),
  };
  static defaultProps = {
    type: 'pulse',
  };

  render() {
    const { className, type } = this.props;

    return (
      <div
        className={getClassnames(`hawk-loader-${type}`, className)}
      />
    );
  }
}
