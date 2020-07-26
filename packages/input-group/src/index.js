// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import _ from 'lodash';
import Button from '@hawk-ui/button';
import Input from '@hawk-ui/input';
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
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    isAddonIcon: false,
    addonSize: 'small',
    addonPlacement: 'left',
    type: 'text',
  }
  state = {};

  render() {
    const { addon, isAddonIcon, addonSize, addonPlacement, type, value, placeholder, onChange } = this.props;

    return (
      <div
        className={getClassNames('hawk-input-group', {
          [`hawk-input-group__addon-size__${addonSize}`]: _.isString(addonSize),
          [`hawk-input-group__addon-placement__${addonPlacement}`]: _.isString(addonPlacement),
        })}
      >
        <Button>
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
          onChange={(event) => {
            onChange(event);
          }}
        />
      </div>
    );
  }
}
