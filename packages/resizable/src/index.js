// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import getClassnames from 'classnames';
import Tooltip from '@hawk-ui/tooltip';
import { initResizeElement } from './scripts';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Resizable extends Component {
  static propTypes = {
    config: PropTypes.object,
    children: PropTypes.element,
    className: PropTypes.string,
  };
  static defaultProps = {
    config: {
      width: '200px',
      height: '200px',
      id: 'resizable',
    },
  }

  state = {};

  componentDidMount() {
    const { config } = this.props;

    initResizeElement(config.id);
  }

  render() {
    const { config, children, className } = this.props;

    return (
      <div
        className={getClassnames('hawk-resizable', {
          [className]: _.isString(className),
        })}
      >
        <Tooltip
          position="top"
          content="Hello World"
        >
          <div
            className="hawk-resizable__content"
            style={{
              width: config.width,
              height: config.height,
            }}
          >
            {children}
          </div>
        </Tooltip>
      </div>
    );
  }
}
