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
    isVisible: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isIcon: PropTypes.bool,
    className: PropTypes.string,
    position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
  };
  static defaultProps = {
    isSuccess: true,
    isIcon: true,
    position: 'bottom-right',
  }
  state = {
    isVisible: false,
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      isVisible: nextProps.isVisible,
    });
    setTimeout(() => {
      this.setState({ isVisible: false });
    }, 7000);
  }

  render() {
    const { isSuccess, isIcon, className, position } = this.props;

    return (
      <div
        className={getClassnames('hawk-toast', {
          [`hawk-toast__${position}`]: _.isString(position),
        })}
      >
        <div
          className={getClassnames('hawk-toast__content', {
            'hawk-toast__content-fadeIn': this.state.isVisible,
            'hawk-toast__content-fadeOut': !this.state.isVisible,
          })}
        >
          {isIcon ? (
            <i
              className={getClassnames('fa', className, {
                'fa-check-circle': isSuccess,
                'fa-times-circle': !isSuccess,
              })}
            />
          ) : null}
          <div className="hawk-toast__content-message">Heads up, toasts will stack automatically</div>
        </div>
      </div>
    );
  }
}
