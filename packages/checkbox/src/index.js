// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
import Label from '@hawk-ui/label';
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
    isRequired: PropTypes.bool,
    selectedItem: PropTypes.array,
    htmlAttributes: PropTypes.object,
    className: PropTypes.string,
  };
  state = {};

  render() {
    const { index, value, label, checked, onChange, isError, isRequired, selectedItem, htmlAttributes, className } = this.props;

    return (
      <label
        className={getClassnames('hawk-checkbox', {
          disabled: _.includes(_.keys(htmlAttributes), 'disabled'),
          [className]: _.isString(className),
        })}
        key={index}
      >
        <span className="hawk-checkbox__label">{label}</span>
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onClick={onChange}
          {...htmlAttributes}
        />
        <span
          className={getClassnames('hawk-checkbox__checkmark', {
            'hawk-checkbox__checkmark-error': !isError,
            'hawk-checkbox__error': (isError && isRequired && _.isEmpty(selectedItem)),
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
    label: PropTypes.string,
    description: PropTypes.string,
    options: PropTypes.array,
    selectedItem: PropTypes.array,
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
    className: null,
    isChecked: false,
    htmlAttributes: {},
  }
  state = {};

  render() {
    const { className, label, description, options, selectedItem, isRequired, isError, errorMessage, onChange, isChecked, title, value, htmlAttributes } = this.props;

    return (
      <Fragment>
        {label && (
          <Label
            title={label}
            isRequired={isRequired}
            className="hawk-checkbox__title"
          />
        )}
        <div
          className={getClassnames('hawk-checkbox__content', {
            [className]: _.isString(className),
          })}
        >
          {_.isEmpty(options) ? (
            <CheckboxContent
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
              {_.map(options, (item, index) => {
                let checked = false;

                if (selectedItem && selectedItem.length > 0) {
                  checked = selectedItem.indexOf(item.value) > -1;
                }

                return (
                  <CheckboxContent
                    key={index}
                    index={index}
                    label={item.label}
                    value={item.value}
                    selectedItem={selectedItem}
                    checked={checked}
                    onChange={onChange}
                    isError={isError}
                    isRequired={isRequired}
                  />
                );
              })}
            </Fragment>
          )}
        </div>
        {!_.isEmpty(description) && (
          <div className="hawk-checkbox__description">{description}</div>
        )}
        {isError && isRequired && _.isEmpty(selectedItem) ? (
          <CheckboxError
            errorMessage={errorMessage}
          />
        ) : null}
      </Fragment>
    );
  }
}
