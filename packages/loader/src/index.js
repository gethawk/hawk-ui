// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Loader extends Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
  };
  static defaultProps = {
    type: 'spinner',
  }
  state = {};

  render() {
    const { type, className } = this.props;

    return (
      <div className={`hawk-loader__${type}`}>
        {type === 'spinner' ? (
          <Fragment>
            <div className={`hawk-loader__${type}-bounce1`} />
            <div className={`hawk-loader__${type}-bounce2`} />
            <div className={`hawk-loader__${type}-bounce3`} />
          </Fragment>
        ) : (
          <div className={`hawk-loader__${type}-container`}>
            <div className={`hawk-loader__${type}-shadow`} />
            <div className={getClassnames(`hawk-loader__${type}-box`, className)} />
          </div>
        )}
      </div>
    );
  }
}
