// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import getClassnames from 'classnames';
import Tooltip from '@hawk-ui/tooltip';
import Button from '@hawk-ui/button';
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

    document.getElementById(config.id).style.cssText += `width: ${config.width}; height: ${config.height};`;
    initResizeElement(config.id);
  }

  render() {
    const { config, children, className } = this.props;

    return (
      <div
        className={getClassnames('hawk-resizable', {
          [className]: _.isString(className),
        })}
        id={`${config.id}-resizable`}
      >
        <Tooltip
          position="top"
          content={
            <Button
              onClick={() => {
                document.getElementById(config.id).style.width = '100%';
                document.getElementById(`${config.id}-content`).style.width = '100%';
                document.getElementById(`${config.id}-resizable`).style.width = '100%';
              }}
            >
              <span>Full Width</span>
            </Button>
          }
        >
          <div
            className="hawk-resizable__content"
            style={{
              width: config.width,
              height: config.height,
            }}
            id={`${config.id}-content`}
          >
            {children}
          </div>
        </Tooltip>
      </div>
    );
  }
}
