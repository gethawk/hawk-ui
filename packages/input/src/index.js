// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
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
    isLabel: PropTypes.bool,
    label: PropTypes.string,
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
    onBlur: () => {},
    onFocus: () => {},
    onEnter: () => {},
    onEscape: () => {},
  };
  state = {
    value: this.props.value,
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
    const { type, readOnly, isLabel, label, isRequired, isError, errorMessage, isTextarea, htmlAttributes, className, isDisabled, placeholder } = this.props;

    return (
      <Fragment>
        {isLabel ? (
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
          <input
            {...htmlAttributes}
            ref={(node) => { this.fieldNode = node; }}
            type={type}
            readOnly={readOnly}
            className={getClassNames('hawk-input', className, {
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
        )}
        {isError ? (
          <span className="hawk-input__error-message">{errorMessage}</span>
        ) : null}
      </Fragment>
    );
  }
}
