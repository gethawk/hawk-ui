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
    addonIcon: PropTypes.string,
    addonSize: PropTypes.oneOf(['small', 'medium', 'large']),
    addonPlacement: PropTypes.oneOf(['left', 'right']),
  };
  static defaultProps = {
    addonSize: 'small',
    addonPlacement: 'left',
  }
  state = {};

  render() {
    const { addon, addonSize, addonPlacement, addonIcon } = this.props;

    return (
      <div
        className={getClassNames('hawk-input-group', {
          [`hawk-input-group__addon-size__${addonSize}`]: _.isString(addonSize),
          [`hawk-input-group__addon-placement__${addonPlacement}`]: _.isString(addonPlacement),
        })}
      >
        <Button>
          {_.isString(addon) ? (
            <span>{addon}</span>
          ) : _.isString(addonIcon) ? (
            <i
              className={addonIcon}
            />
          ) : addon}
        </Button>
        <Input />
      </div>
    );
  }
}
