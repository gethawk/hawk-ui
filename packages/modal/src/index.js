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
    isCloseOption: PropTypes.bool,
    onKeyDown: PropTypes.func,
    onModalClose: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    type: PropTypes.oneOf(['light', 'dark']),
    isModalOpen: PropTypes.bool,
  };
  static defaultProps = {
    type: 'dark',
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
    const element = document.getElementById('hawk-modal__overflow');

    if (element === event.target) {
      this.props.onKeyDown(event);
    }
  }

  render() {
    const { onModalClose, children, type, isCloseOption, isModalOpen } = this.props;

    return (
      <div
        className={getClassnames('hawk-modal', {
          'hawk-modal__closed': !isModalOpen,
        })}
      >
        <div
          className="hawk-modal__content"
          id="hawk-modal__content"
        >
          <div className="hawk-modal__content-header">
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
        {isModalOpen ? (
          <div
            className={getClassnames('hawk-modal__overflow', {
              [`hawk-modal__overflow-type-${type}`]: type,
            })}
            id="hawk-modal__overflow"
          />
        ) : null}
      </div>
    );
  }
}
