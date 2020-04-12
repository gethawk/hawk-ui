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
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    isError: PropTypes.bool,
    selectedItem: PropTypes.array,
  };
  state = {};

  render() {
    const { index, value, label, checked, onChange, isError, selectedItem } = this.props;

    return (
      <label
        className="hawk-checkbox"
        key={index}
      >
        <span className="hawk-checkbox__label">{label}</span>
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onClick={onChange}
        />
        <span
          className={getClassnames('hawk-checkbox__checkmark', {
            'hawk-checkbox__checkmark-error': !isError,
            'hawk-checkbox__error': (isError && _.isEmpty(selectedItem)),
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
    className: PropTypes.string,
    options: PropTypes.array,
    selectedItem: PropTypes.array,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    className: null,
  }
  state = {};

  render() {
    const { className, options, selectedItem, isError, errorMessage, onChange } = this.props;

    return (
      <Fragment>
        <div
          className={`hawk-checkbox__content${!_.isNull(className) ? ` ${className}` : ''}`}
        >
          {_.map(options, (item, index) => {
            let checked = false;

            if (selectedItem && selectedItem.length > 0) {
              checked = selectedItem.indexOf(item.value) > -1;
            }

            return (
              <CheckboxContent
                index={index}
                label={item.label}
                value={item.value}
                selectedItem={selectedItem}
                checked={checked}
                onChange={onChange}
                isError={isError}
              />
            );
          })}
        </div>
        {isError && _.isEmpty(selectedItem) ? (
          <CheckboxError
            errorMessage={errorMessage}
          />
        ) : null}
      </Fragment>
    );
  }
}
