// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Radio extends Component {
  static propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    isChecked: PropTypes.bool,
    onChange: PropTypes.func,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
  };
  state = {};

  render() {
    const { label, className, name, value, isChecked, onChange, isError, errorMessage } = this.props;

    return (
      <Fragment>
        <label
          className={getClassnames('hawk-radio', className)}
        >
          {label}
          <input
            type="radio"
            onChange={(event) => { onChange(event); }}
            name={name}
            value={value}
            checked={isChecked}
            isDisabled
          />
          <span
            className={getClassnames('hawk-radio__checkmark', {
              'hawk-radio__checkmark-error': !isError,
              'hawk-radio__error': isError,
            })}
          />
        </label>
        {isError ? (
          <span className="hawk-radio__error-message">{errorMessage}</span>
        ) : null}
      </Fragment>
    );
  }
}
