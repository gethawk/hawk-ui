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
export default class Modal extends Component {
  static propTypes = {
    title: PropTypes.string,
    isCloseOption: PropTypes.bool,
    className: PropTypes.string,
    isModalOpen: PropTypes.bool,
    onKeyDown: PropTypes.func,
    onModalClose: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    type: PropTypes.oneOf(['light', 'dark']),
    position: PropTypes.oneOf(['left', 'right', 'center']),
  };
  static defaultProps = {
    type: 'dark',
    position: 'center',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, false);
  }

  onKeyDown = (event) => {
    if (event.keyCode === keyCodes.ESCAPE && this.props.isModalOpen) {
      this.props.onKeyDown(event);
    }
  }

  render() {
    const { title, className, isModalOpen, onModalClose, children, type, isCloseOption, position } = this.props;

    return (
      <div
        className={getClassnames('hawk-modal', className, {
          'hawk-modal__hidden': !isModalOpen,
          [`hawk-modal__type-${type}`]: type,
        })}
      >
        <div
          className={getClassnames('hawk-modal__content', `hawk-modal__content-${position}`)}
        >
          <div className="hawk-modal__content-header">
            {title ? (
              <div className="hawk-modal__content-header__title">Hello</div>
            ) : null}
            {isCloseOption ? (
              <span
                className="hawk-modal__content-header__close"
                onClick={() => { onModalClose(); }}
              >
                &times;
              </span>
            ) : null}
          </div>
          <div className="hawk-modal__content-body">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
