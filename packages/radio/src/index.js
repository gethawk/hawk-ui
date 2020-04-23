// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
import Label from '@hawk-ui/label';
// css modules
import './index.scss';

class RadioContent extends Component {
  static propTypes = {
    index: PropTypes.number,
    value: PropTypes.string,
    label: PropTypes.string,
    selectedItem: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    isRequired: PropTypes.bool,
    isError: PropTypes.bool,
  };
  state = {};

  render() {
    const { index, value, label, selectedItem, checked, onChange, isRequired, isError } = this.props;

    return (
      <label
        className="hawk-radio"
        key={index}
      >
        <span className="hawk-radio__label">{label}</span>
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span
          className={getClassnames('hawk-radio__checkmark', {
            'hawk-radio__checkmark-error': !isError,
            'hawk-radio__error': (isError && isRequired && _.isEmpty(selectedItem)),
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
    label: PropTypes.string,
    description: PropTypes.string,
    options: PropTypes.array,
    selectedItem: PropTypes.string,
    isRequired: PropTypes.bool,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
  };
  state = {};

  render() {
    const { label, description, options, selectedItem, isRequired, isError, errorMessage, onChange } = this.props;

    return (
      <Fragment>
        {label && (
          <Label
            title={label}
            isRequired={isRequired}
            className="hawk-radio__title"
          />
        )}
        <div className="hawk-radio__content">
          {_.map(options, (item, index) => (
            <RadioContent
              key={index}
              index={index}
              value={item.value}
              label={item.label}
              selectedItem={selectedItem}
              checked={item.value === selectedItem}
              onChange={onChange}
              isRequired={isRequired}
              isError={isError}
            />
          ))}
        </div>
        {!_.isEmpty(description) && (
          <div className="hawk-radio__description">{description}</div>
        )}
        {isError && isRequired && _.isEmpty(selectedItem) ? (
          <RadioError
            errorMessage={errorMessage}
          />
        ) : null}
      </Fragment>
    );
  }
}
