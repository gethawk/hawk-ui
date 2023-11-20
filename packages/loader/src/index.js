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
      <div
        className={getClassnames({
          [`hawk-loader__${type}`]: _.isString(type),
          [className]: _.isString(className),
        })}
      >
        {type === 'spinner' ? (
          <Fragment>
            <div
              className={getClassnames({
                [`hawk-loader__${type}-bounce1`]: _.isString(type),
              })}
            />
            <div
              className={getClassnames({
                [`hawk-loader__${type}-bounce2`]: _.isString(type),
              })}
            />
            <div
              className={getClassnames({
                [`hawk-loader__${type}-bounce3`]: _.isString(type),
              })}
            />
          </Fragment>
        ) : (
          <div
            className={getClassnames({
              [`hawk-loader__${type}-container`]: _.isString(type),
            })}
          >
            <div
              className={getClassnames({
                [`hawk-loader__${type}-shadow`]: _.isString(type),
              })}
            />
            <div
              className={getClassnames({
                [`hawk-loader__${type}-box`]: _.isString(type),
              })}
            />
          </div>
        )}
      </div>
    );
  }
}
