// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Toast extends Component {
  static propTypes = {
    position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
    type: PropTypes.oneOf(['success', 'failed', 'info', 'warning']),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
      PropTypes.object,
    ]),
    isShow: PropTypes.bool,
    isOverflow: PropTypes.bool,
    hideCloseOption: PropTypes.bool,
    isIcon: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
  };
  static defaultProps = {
    hideCloseOption: false,
    isIcon: false,
    type: 'success',
    position: 'bottom-left',
    isOverflow: false,
  }
  state = {};

  render() {
    const { position, type, icon, isIcon, isShow, isOverflow, children, hideCloseOption, onClick, onClose } = this.props;

    if (isShow) {
      return (
        <Fragment>
          <div
            className={getClassnames('hawk-toast', {
              'hawk-toast__visible': isShow,
              [`hawk-toast__${position}`]: _.isString(position),
              [`hawk-toast__${position}-animation`]: _.isString(position),
            })}
            onClick={onClick}
          >
            <div className="hawk-toast__container">
              <div className="hawk-toast__content">
                {isIcon && (
                  <i
                    className={getClassnames('fa hawk-toast__container-icon', {
                      'fa-check-circle': _.isEqual(type, 'success'),
                      'fa-times-circle': _.isEqual(type, 'failed'),
                      'fa-info-circle': _.isEqual(type, 'info'),
                      'fa-exclamation-triangle': _.isEqual(type, 'warning'),
                      [icon]: _.isString(icon),
                    })}
                  />
                )}
                {children}
              </div>
              {hideCloseOption && (
                <span
                  className="hawk-toast__container-close"
                  onClick={onClose}
                >
                  &times;
                </span>
              )}
            </div>
          </div>
          {isOverflow && (
            <div className="hawk-toast__overflow"></div>
          )}
        </Fragment>
      );
    }

    return null;
  }
}
