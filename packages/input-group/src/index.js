// vendor modules
import React, { Component, Fragment } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import _ from 'lodash';
import Button from '@hawk-ui/button';
import Input from '@hawk-ui/input';
import Label from '@hawk-ui/label';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class InputGroup extends Component {
  static propTypes = {
    addon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    isAddonIcon: PropTypes.bool,
    addonSize: PropTypes.oneOf(['small', 'medium', 'large']),
    addonPlacement: PropTypes.oneOf(['left', 'right']),
    type: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    description: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
  };
  static defaultProps = {
    isAddonIcon: false,
    addonSize: 'small',
    addonPlacement: 'left',
    type: 'text',
    isDisabled: false,
    isRequired: false,
  }
  state = {};

  render() {
    const { addon, isAddonIcon, addonSize, addonPlacement, label, description, type, value, placeholder, onChange, isDisabled, isRequired, isError, errorMessage } = this.props;

    return (
      <Fragment>
        {label && (
          <Label
            title={label}
            isRequired={isRequired}
            className="hawk-input-group__label"
          />
        )}
        <div
          className={getClassNames('hawk-input-group', {
            [`hawk-input-group__addon-size__${addonSize}`]: _.isString(addonSize),
            [`hawk-input-group__addon-placement__${addonPlacement}`]: _.isString(addonPlacement),
          })}
        >
          <Button
            isDisabled={isDisabled}
          >
            {isAddonIcon ? (
              <i className={addon} />
            ) : _.isString(addon) ? (
              <span>{addon}</span>
            ) : addon}
          </Button>
          <Input
            type={type}
            value={value}
            placeholder={placeholder}
            isDisabled={isDisabled}
            onChange={(event) => {
              onChange(event);
            }}
          />
        </div>
        {!_.isEmpty(description) && (
          <div className="hawk-input-group__description">{description}</div>
        )}
        {isRequired && isError && (
          <span className="hawk-input-group__error-message">{errorMessage}</span>
        )}
      </Fragment>
    );
  }
}
