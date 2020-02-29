// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
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
    isCloseOption: PropTypes.bool,
    onKeyDown: PropTypes.func,
    onModalClose: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    type: PropTypes.oneOf(['light', 'dark']),
    position: PropTypes.oneOf(['left', 'right']),
    isDrawerOpen: PropTypes.bool,
  };
  static defaultProps = {
    type: 'dark',
    position: 'left',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, false);
    document.addEventListener('click', this.onClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, false);
    document.removeEventListener('click', this.onClick, false);
  }

  onKeyDown = (event) => {
    if (event.keyCode === keyCodes.ESCAPE) {
      this.props.onKeyDown(event);
    }
  }

  onClick = (event) => {
    const element = document.getElementById('hawk-navigation-drawer__overflow');

    if (element === event.target) {
      this.props.onKeyDown(event);
    }
  }

  render() {
    const { title, onModalClose, children, type, isCloseOption, position, isDrawerOpen } = this.props;

    return (
      <div className="hawk-navigation-drawer">
        <div
          className={getClassnames('hawk-navigation-drawer__content', `hawk-navigation-drawer__content-${position}`, {
            [`hawk-navigation-drawer__content-${position}-closed`]: !isDrawerOpen,
            [`hawk-navigation-drawer__content-${position}-opened`]: isDrawerOpen,
          })}
          id="hawk-navigation-drawer__content"
        >
          <div className="hawk-navigation-drawer__content-header">
            {title ? (
              <div className="hawk-navigation-drawer__content-header__title">Hello</div>
            ) : null}
            {isCloseOption ? (
              <span
                className="hawk-navigation-drawer__content-header__close"
                onClick={() => { onModalClose(); }}
              >
                &times;
              </span>
            ) : null}
          </div>
          <div className="hawk-navigation-drawer__content-body">
            {children}
          </div>
        </div>
        {isDrawerOpen ? (
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
