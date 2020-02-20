// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Toggle extends Component {
  static propTypes = {
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
    const { className, name, value, isChecked, onChange, isError, errorMessage } = this.props;

    return (
      <Fragment>
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
        {isError ? (
          <span className="hawk-toggle__error-message">{errorMessage}</span>
        ) : null}
      </Fragment>
    );
  }
}
