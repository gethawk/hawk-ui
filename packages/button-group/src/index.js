// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
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
    activeIndex: PropTypes.number,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    variant: 'contained',
  }
  state = {};

  render() {
    const { panes, variant, activeIndex, onClick } = this.props;

    return (
      <div
        className={getClassNames('hawk-button-group', {
          [`hawk-button-group__${variant}`]: _.isString(variant),
        })}
      >
        {_.map(panes, (item, index) => (
          <Button
            key={index}
            variant={variant}
            className={getClassNames('hawk-button-group__button', {
              active: _.isEqual(activeIndex, index),
            })}
            onClick={() => {
              const data = {
                key: item.key,
                title: item.title,
                active: index,
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
