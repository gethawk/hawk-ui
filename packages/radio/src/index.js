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
    isError: PropTypes.bool,
    isRequired: PropTypes.bool,
    htmlAttributes: PropTypes.object,
  };

  state = {};

  render() {
    const { index, value, label, selectedItem, checked, onChange, isRequired, isError, htmlAttributes } = this.props;

    return (
      <label
        className={getClassnames('hawk-radio', {
          disabled: _.includes(_.keys(htmlAttributes), 'disabled'),
        })}
        key={index}
      >
        <span className="hawk-radio__label">{label}</span>
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
          {...htmlAttributes}
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
    className: PropTypes.string,
    options: PropTypes.array,
    selectedItem: PropTypes.string,
    isRequired: PropTypes.bool,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
    isChecked: PropTypes.bool,
    title: PropTypes.string,
    value: PropTypes.string,
    htmlAttributes: PropTypes.object,
  };
  static defaultProps = {
    isChecked: false,
    htmlAttributes: {},
  }
  state = {};

  render() {
    const { label, description, className, options, selectedItem, isRequired, isError, errorMessage, onChange, isChecked, title, value, htmlAttributes } = this.props;

    return (
      <Fragment>
        {label && (
          <Label
            title={label}
            isRequired={isRequired}
            className="hawk-radio__title"
          />
        )}
        <div
          className={getClassnames('hawk-radio__content', {
            [className]: _.isString(className),
          })}
        >
          {_.isEmpty(options) ? (
            <RadioContent
              label={title}
              value={value}
              selectedItem={selectedItem}
              checked={isChecked}
              onChange={onChange}
              isError={isError}
              isRequired={isRequired}
              htmlAttributes={htmlAttributes}
            />
          ) : (
            <Fragment>
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
            </Fragment>
          )}
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
