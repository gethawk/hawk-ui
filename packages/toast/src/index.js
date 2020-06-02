// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

class ToastContent extends Component {
  static displayName = 'ToastContent';
  static propTypes = {
    type: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
    title: PropTypes.string,
    message: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
    hideCloseOption: PropTypes.bool,
    isIcon: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    hideCloseOption: false,
    isIcon: false,
    type: 'success',
  }
  state = {};

  onClick = () => {
    if (this.props.hideCloseOption && _.isFunction(this.props.onClick)) {
      this.props.onClick();
    }
  }

  render() {
    const { type, isIcon, icon, title, message, hideCloseOption } = this.props;

    return (
      <div
        className={getClassnames('hawk-toast__content', {
          [`hawk-toast__content-${type}`]: _.isString(type),
        })}
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
          <div className="hawk-toast__container-content">
            {title && (
              <div className="hawk-toast__container-content-title">{title}</div>
            )}
            {message && (
              <div className="hawk-toast__container-content-message">{message}</div>
            )}
          </div>
        </div>
        {hideCloseOption && (
          <span
            className="hawk-toast__container-close"
            onClick={this.onClick}
          >
            &times;
          </span>
        )}
      </div>
    );
  }
}

class TableOverview extends Component {
  static displayName = 'TableOverview';
  state = {};

  render() {
    return (
      <div className="hawk-toast__overflow" />
    );
  }
}

/**
 * @example ../README.md
 */
export default class Toast extends Component {
  static displayName = 'Toast';
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
      PropTypes.object,
    ]),
    position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
    isShow: PropTypes.bool,
    isOverflow: PropTypes.bool,
  };
  static defaultProps = {
    position: 'top-right',
    isShow: false,
    isOverflow: false,
  }
  static CONTENT = ToastContent;
  static OVERVIEW = TableOverview;
  state = {};

  render() {
    const { children, position, isShow, isOverflow } = this.props;

    return (
      <div
        className={getClassnames('hawk-toast', {
          'hawk-toast__hidden': !isShow,
          [`hawk-toast__${position}`]: _.isString(position),
          [`hawk-toast__${position}-animation`]: !isOverflow,
        })}
      >
        {children}
      </div>
    );
  }
}
