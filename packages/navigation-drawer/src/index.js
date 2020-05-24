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
export default class NavigationDrawer extends Component {
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
    position: PropTypes.oneOf(['left', 'right']),
    isOpen: PropTypes.bool,
  };
  static defaultProps = {
    type: 'dark',
    position: 'left',
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
    const element = document.getElementById('hawk-navigation-drawer__overflow');

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
    const { title, children, type, hideCloseIcon, position, isOpen } = this.props;

    return (
      <div className="hawk-navigation-drawer">
        <div
          className={getClassnames('hawk-navigation-drawer__content', `hawk-navigation-drawer__content-${position}`, {
            [`hawk-navigation-drawer__content-${position}-closed`]: !isOpen,
            [`hawk-navigation-drawer__content-${position}-opened`]: isOpen,
          })}
          id="hawk-navigation-drawer__content"
        >
          <div className="hawk-navigation-drawer__content-header">
            {title ? (
              <div className="hawk-navigation-drawer__content-header__title">{title}</div>
            ) : null}
            {hideCloseIcon ? (
              <span
                className="hawk-navigation-drawer__content-header__close"
                onClick={() => { this.onClose(); }}
              >
                &times;
              </span>
            ) : null}
          </div>
          <div className="hawk-navigation-drawer__content-body">
            {children}
          </div>
        </div>
        {isOpen ? (
          <div
            className={getClassnames('hawk-navigation-drawer__overflow', {
              [`hawk-navigation-drawer__overflow-type-${type}`]: type,
            })}
            id="hawk-navigation-drawer__overflow"
          />
        ) : null}
      </div>
    );
  }
}
