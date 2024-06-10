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
export default class Modal extends Component {
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
    className: PropTypes.string,
    type: PropTypes.oneOf(['light', 'dark']),
    isOpen: PropTypes.bool,
    bgScroll: PropTypes.bool,
  };
  static defaultProps = {
    type: 'dark',
    bgScroll: true,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, false);
    document.addEventListener('click', this.onClick, false);
  }

  componentWillReceiveProps(nextProps, preProps) {
    if (this.props.bgScroll) {
      if (!_.isEqual(nextProps.isOpen, preProps.isOpen) && nextProps.isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }

  componentWillUnmount() {
    if (this.props.bgScroll) {
      document.removeEventListener('keydown', this.onKeyDown, false);
      document.removeEventListener('click', this.onClick, false);
    }
  }

  onKeyDown = (event) => {
    if (event.keyCode === keyCodes.ESCAPE) {
      if (this.props.bgScroll) {
        document.body.style.overflow = 'auto';
      }
      this.props.onKeyDown(event);
    }
  }

  onClick = (event) => {
    const element = document.getElementById('hawk-modal__overflow');

    if (element === event.target) {
      if (this.props.bgScroll) {
        document.body.style.overflow = 'auto';
      }
      this.props.onKeyDown(event);
    }
  }

  onClose = () => {
    if (_.isFunction(this.props.onClose)) {
      if (this.props.bgScroll) {
        document.body.style.overflow = 'auto';
      }
      this.props.onClose();
    }
  }

  render() {
    const { title, children, type, hideCloseIcon, isOpen, className } = this.props;

    return (
      <div
        className={getClassnames('hawk-modal', {
          'hawk-modal__closed': !isOpen,
          [className]: !_.isEmpty(className),
        })}
      >
        <div
          className="hawk-modal__content"
          id="hawk-modal__content"
        >
          <div className="hawk-modal__content-header">
            <div className="hawk-modal__content-header__title">{title || null}</div>
            {hideCloseIcon ? (
              <span
                className="hawk-modal__content-header__close"
                onClick={() => { this.onClose(); }}
              >
                &times;
              </span>
            ) : null}
          </div>
          <div className="hawk-modal__content-body">
            {children}
          </div>
        </div>
        {isOpen ? (
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
