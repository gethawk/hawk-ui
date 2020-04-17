// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import _ from 'lodash';
import Tooltip from '@hawk-ui/tooltip';
// utility modules
import { keyCodes } from '../../../constants';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Input extends Component {
  static propTypes = {
    type: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    description: PropTypes.string,
    isCopyable: PropTypes.bool,
    isPasswordVisible: PropTypes.bool,
    isRequired: PropTypes.bool,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
    isTextarea: PropTypes.bool,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    htmlAttributes: PropTypes.object,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onEnter: PropTypes.func,
    onEscape: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  };
  static defaultProps = {
    htmlAttributes: {},
    type: 'text',
    readOnly: false,
    isCopyable: false,
    onBlur: () => {},
    onFocus: () => {},
    onEnter: () => {},
    onEscape: () => {},
  };
  state = {
    type: this.props.type,
    value: this.props.value,
    isCopied: false,
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }
  onChange = (e) => {
    if (this.props.isDisabled) {
      return;
    }

    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    } else {
      this.setState({ value: e.target.value });
    }
  }
  onCopy = () => {
    const copyText = document.getElementById('hawk-input');

    copyText.select();
    copyText.setSelectionRange(0, 999999999999999);
    document.execCommand('copy');
    this.setState({
      isCopied: true,
    });
  }
  onPasswordVisible = () => {
    if (this.state.type === 'password') {
      this.setState({ type: 'text' });
    } else {
      this.setState({ type: 'password' });
    }
  }
  onKeyDown = (e) => {
    if (this.props.isDisabled) {
      return;
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }

    if (e.keyCode === keyCodes.ENTER) {
      this.props.onEnter(e.target.value);
    }

    if (e.keyCode === keyCodes.ESCAPE) {
      this.props.onEscape(e.target.value);
    }
  }
  onBlur = (e) => {
    if (this.props.isDisabled) {
      return;
    }

    this.props.onBlur(e.target.value);
  }
  onFocus = (e) => {
    if (this.props.isDisabled) {
      return;
    }

    this.props.onFocus(e.target.value);
  }
  focus() {
    if (this.fieldNode && !this.props.isDisabled) {
      this.fieldNode.focus();
    }
  }

  render() {
    const { readOnly, label, description, isCopyable, isPasswordVisible, isRequired, isError, errorMessage, isTextarea, htmlAttributes, className, isDisabled, placeholder } = this.props;
    const { type } = this.state;

    return (
      <Fragment>
        {label ? (
          <span className="hawk-input__label">{label} {isRequired ? <span>*</span> : null}</span>
        ) : null}
        {isTextarea ? (
          <textarea
            {...htmlAttributes}
            ref={(node) => { this.fieldNode = node; }}
            className={getClassNames('hawk-textarea', className, {
              'hawk-textarea__disabled': isDisabled,
              'hawk-textarea__error': isError,
            })}
            value={this.state.value}
            readOnly={readOnly}
            placeholder={placeholder}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            {...(isDisabled ? { disabled: 'true' } : {})}
          />
        ) : (
          <div className="hawk-input__wrapper">
            {isCopyable && (
              <Tooltip
                content={this.state.isCopied ? 'Copied' : 'Copy'}
                position="top"
                onmouseout={() => { this.setState({ isCopied: false }); }}
              >
                <i
                  className={getClassNames('fa fa-copy', {
                    'hawk-input__copy-icon': isCopyable,
                  })}
                  onClick={() => { this.onCopy(); }}
                />
              </Tooltip>
            )}
            {(isPasswordVisible && !_.isEmpty(this.state.value)) && (
              <i
                className={getClassNames('fa', {
                  'fa-eye': type === 'password',
                  'fa-eye-slash': type === 'text',
                  'hawk-input__copy-icon': isPasswordVisible,
                })}
                onClick={() => { this.onPasswordVisible(); }}
              />
            )}
            <input
              {...htmlAttributes}
              ref={(node) => { this.fieldNode = node; }}
              type={type}
              readOnly={readOnly}
              id="hawk-input"
              className={getClassNames('hawk-input', className, {
                'hawk-input__copy-text': isCopyable || isPasswordVisible,
                'hawk-input__disabled': isDisabled,
                'hawk-input__error': isError,
              })}
              value={this.state.value}
              placeholder={placeholder}
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              {...(isDisabled ? { disabled: 'true' } : {})}
            />
          </div>
        )}
        {!_.isEmpty(description) && (
          <div className="hawk-input__description">{description}</div>
        )}
        {isError && (
          <span className="hawk-input__error-message">{errorMessage}</span>
        )}
      </Fragment>
    );
  }
}
