// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// utility modules
import { keyCodes } from '../../../constants';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class BottomDrawer extends Component {
  static propTypes = {
    title: PropTypes.string,
    hideCloseIcon: PropTypes.bool,
    onKeyDown: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    type: PropTypes.oneOf(['light', 'dark']),
    isOpen: PropTypes.bool,
    className: PropTypes.string,
  };
  static defaultProps = {
    type: 'dark',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, false);
    document.addEventListener('click', this.onClick, false);
  }

  componentWillReceiveProps(nextProps, preProps) {
    if (!_.isEqual(nextProps.isOpen, preProps.isOpen) && nextProps.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, false);
    document.removeEventListener('click', this.onClick, false);
  }

  onKeyDown = (event) => {
    if (event.keyCode === keyCodes.ESCAPE) {
      document.body.style.overflow = 'auto';
      this.props.onKeyDown(event);
    }
  }

  onClick = (event) => {
    const element = document.getElementById('hawk-bottom-drawer__overflow');

    if (element === event.target) {
      document.body.style.overflow = 'auto';
      this.props.onKeyDown(event);
    }
  }

  onClose = () => {
    if (_.isFunction(this.props.onClose)) {
      document.body.style.overflow = 'auto';
      this.props.onClose();
    }
  }

  render() {
    const { title, children, type, hideCloseIcon, isOpen, className } = this.props;

    return (
      <div
        className={getClassnames('hawk-bottom-drawer', {
          [className]: _.isString(className),
        })}
      >
        <div
          className={getClassnames('hawk-bottom-drawer__content', 'hawk-bottom-drawer__content', {
            'hawk-bottom-drawer__content-closed': !isOpen,
            'hawk-bottom-drawer__content-opened': isOpen,
          })}
          id="hawk-bottom-drawer__content"
        >
          <div className="hawk-bottom-drawer__content-header">
            {title ? (
              <div className="hawk-bottom-drawer__content-header__title">{title}</div>
            ) : null}
            {hideCloseIcon ? (
              <span
                className="hawk-bottom-drawer__content-header__close"
                onClick={() => { this.onClose(); }}
              >
                &times;
              </span>
            ) : null}
          </div>
          <div className="hawk-bottom-drawer__content-body">
            {children}
          </div>
        </div>
        {isOpen ? (
          <div
            className={getClassnames('hawk-bottom-drawer__overflow', {
              [`hawk-bottom-drawer__overflow-type-${type}`]: type,
            })}
            id="hawk-bottom-drawer__overflow"
          />
        ) : null}
      </div>
    );
  }
}
