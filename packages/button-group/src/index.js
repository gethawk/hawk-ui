// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
import Button from '@hawk-ui/button';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class ButtonGroup extends Component {
  static propTypes = {
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
    panes: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    value: PropTypes.object,
    onClick: PropTypes.func,
    className: PropTypes.string,
  };
  static defaultProps = {
    variant: 'contained',
  }
  state = {};

  render() {
    const { panes, variant, value, onClick, className } = this.props;

    return (
      <div
        className={getClassnames('hawk-button-group', {
          [`hawk-button-group__${variant}`]: _.isString(variant),
          [className]: _.isString(className),
        })}
      >
        {_.map(panes, (item, index) => (
          <Button
            key={index}
            variant={variant}
            className={getClassnames('hawk-button-group__button', {
              active: _.isEqual(value, index + 1),
            })}
            onClick={() => {
              const data = {
                key: item.key,
                title: item.title,
              };

              onClick(data);
            }}
          >
            <span>{item.title}</span>
          </Button>
        ))}
      </div>
    );
  }
}
