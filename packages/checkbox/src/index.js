// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Checkbox extends Component {
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
          className={getClassnames('hawk-checkbox', className)}
        >
          {label}
          <input
            type="checkbox"
            onChange={(event) => { onChange(event); }}
            name={name}
            value={value}
            checked={isChecked}
            isDisabled
          />
          <span
            className={getClassnames('hawk-checkbox__checkmark', {
              'hawk-checkbox__checkmark-error': !isError,
              'hawk-checkbox__error': isError,
            })}
          />
        </label>
        {isError ? (
          <span className="hawk-checkbox__error-message">{errorMessage}</span>
        ) : null}
      </Fragment>
    );
  }
}
