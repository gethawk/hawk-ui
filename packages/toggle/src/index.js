// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import Label from '@hawk-ui/label';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Toggle extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    isChecked: PropTypes.bool,
    onChange: PropTypes.func,
    isRequired: PropTypes.bool,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
  };
  state = {};

  render() {
    const { className, label, name, value, isChecked, onChange, isRequired, isError, errorMessage } = this.props;

    return (
      <Fragment>
        {label && (
          <Label
            title={label}
            isRequired={isRequired}
            className="hawk-toggle__label"
          />
        )}
        <label
          className={getClassnames('hawk-toggle', className)}
        >
          <input
            type="checkbox"
            onChange={(event) => { onChange(event); }}
            name={name}
            value={value}
            checked={isChecked}
            isDisabled
          />
          <span
            className="hawk-toggle__slider hawk-toggle__slider-round"
          />
        </label>
        {isError && isRequired && (
          <span className="hawk-toggle__error-message">{errorMessage}</span>
        )}
      </Fragment>
    );
  }
}
