// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

class RadioContent extends Component {
  static propTypes = {
    index: PropTypes.number,
    value: PropTypes.string,
    selected: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    isError: PropTypes.bool,
  };
  state = {};

  render() {
    const { index, value, selected, checked, onChange, isError } = this.props;

    return (
      <label
        className="hawk-radio"
        key={index}
      >
        <span className="hawk-radio__label">{value}</span>
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span
          className={getClassnames('hawk-radio__checkmark', {
            'hawk-radio__checkmark-error': !isError,
            'hawk-radio__error': (isError && _.isEmpty(selected)),
          })}
        />
      </label>
    );
  }
}

class RadioError extends Component {
  static propTypes = {
    errorMessage: PropTypes.string,
  };
  state = {};

  render() {
    const { errorMessage } = this.props;

    return (
      <span className="hawk-radio__error-message">{errorMessage}</span>
    );
  }
}

/**
 * @example ../README.md
 */
export default class Radio extends Component {
  static propTypes = {
    options: PropTypes.array,
    selected: PropTypes.string,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
  };
  state = {};

  render() {
    const { options, selected, isError, errorMessage, onChange } = this.props;

    return (
      <Fragment>
        <div className="hawk-radio__content">
          {_.map(options, (item, index) => (
            <RadioContent
              index={index}
              value={item}
              selected={selected}
              checked={item === selected}
              onChange={onChange}
              isError={isError}
            />
          ))}
        </div>
        {isError && _.isEmpty(selected) ? (
          <RadioError
            errorMessage={errorMessage}
          />
        ) : null}
      </Fragment>
    );
  }
}
