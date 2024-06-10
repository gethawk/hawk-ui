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
    variant: PropTypes.oneOf(['spinner', 'jelly', 'wheel']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    className: PropTypes.string,
  };
  static defaultProps = {
    variant: 'spinner',
    size: 'large',
  }
  state = {};

  render() {
    const { variant, size, className } = this.props;

    return (
      <div
        className={getClassnames({
          [`hawk-loader--${variant}`]: _.isString(variant),
          [className]: _.isString(className),
        })}
      >
        {variant === 'spinner' ? (
          <Fragment>
            <div
              className={getClassnames({
                [`hawk-loader--${variant}-bounce1`]: _.isString(variant),
              })}
            />
            <div
              className={getClassnames({
                [`hawk-loader--${variant}-bounce2`]: _.isString(variant),
              })}
            />
            <div
              className={getClassnames({
                [`hawk-loader--${variant}-bounce3`]: _.isString(variant),
              })}
            />
          </Fragment>
        ) : variant === 'jelly' ? (
          <div
            className={getClassnames({
              [`hawk-loader--${variant}-container`]: _.isString(variant),
            })}
          >
            <div
              className={getClassnames({
                [`hawk-loader--${variant}-shadow`]: _.isString(variant),
              })}
            />
            <div
              className={getClassnames({
                [`hawk-loader--${variant}-box`]: _.isString(variant),
              })}
            />
          </div>
        ) : (
          <div
            className={getClassnames({
              [`hawk-loader--${variant}-circle`]: _.isString(variant),
              [`hawk-loader--${variant}-circle-${size}`]: _.isString(size),
            })}
          />
        )}
      </div>
    );
  }
}
