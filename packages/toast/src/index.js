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
export default class Toast extends Component {
  static propTypes = {
    position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
    type: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
      PropTypes.object,
    ]),
    isShow: PropTypes.bool,
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
  }
  state = {};

  render() {
    const { position, type, icon, isIcon, isShow, children, hideCloseOption, onClick, onClose } = this.props;

    if (isShow) {
      return (
        <div
          className={getClassnames('hawk-toast', {
            'hawk-toast__visible': isShow,
            [`hawk-toast__${position}`]: _.isString(position),
            [`hawk-toast__${position}-animation`]: _.isString(position),
          })}
          onClick={onClick}
        >
          <div className="hawk-toast__container">
            {isIcon && (
              <i
                className={getClassnames('fa hawk-toast__container-icon', {
                  'fa-check-circle': _.isEqual(type, 'success'),
                  'fa-times-circle': _.isEqual(type, 'danger'),
                  'fa-info-circle': _.isEqual(type, 'info'),
                  'fa-exclamation-triangle': _.isEqual(type, 'warning'),
                  [icon]: _.isString(icon),
                })}
              />
            )}
            <div className="hawk-toast__content">
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
      );
    }

    return null;
  }
}
