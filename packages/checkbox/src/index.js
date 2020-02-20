// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

class CheckboxContent extends Component {
  static propTypes = {
    index: PropTypes.number,
    value: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    isError: PropTypes.bool,
    checkboxes: PropTypes.array,
  };
  state = {};

  render() {
    const { index, value, checked, onChange, isError, checkboxes } = this.props;

    return (
      <label
        className="hawk-checkbox"
        key={index}
      >
        <span className="hawk-checkbox__label">{value}</span>
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onClick={onChange}
        />
        <span
          className={getClassnames('hawk-checkbox__checkmark', {
            'hawk-checkbox__checkmark-error': !isError,
            'hawk-checkbox__error': (isError && !_.find(checkboxes, 'isChecked')),
          })}
        />
      </label>
    );
  }
}

class CheckboxError extends Component {
  static propTypes = {
    errorMessage: PropTypes.string,
  };
  state = {};

  render() {
    const { errorMessage } = this.props;

    return (
      <span className="hawk-checkbox__error-message">{errorMessage}</span>
    );
  }
}

/**
 * @example ../README.md
 */
export default class Checkbox extends Component {
  static propTypes = {
    checkboxes: PropTypes.array,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
  };
  state = {};

  render() {
    const { checkboxes, isError, errorMessage, onChange } = this.props;

    return (
      <Fragment>
        <div className="hawk-checkbox__content">
          {_.map(checkboxes, (item, index) => (
            <CheckboxContent
              checkboxes={checkboxes}
              index={index}
              value={item.value}
              checked={item.isChecked}
              onChange={onChange}
              isError={isError}
            />
          ))}
        </div>
        {isError && !_.find(checkboxes, 'isChecked') ? (
          <CheckboxError
            errorMessage={errorMessage}
          />
        ) : null}
      </Fragment>
    );
  }
}
