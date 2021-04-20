// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// utils modules
import { pretty } from './utils';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class JsonPretty extends Component {
  static propTypes = {
    id: PropTypes.string,
    data: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    className: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark']),
  };
  static defaultProps = {
    id: 'json-pretty',
    theme: 'light',
    data: {},
  }
  state = {};

  render() {
    const { data, theme, className } = this.props;

    return (
      <div className="hawk-json-pretty">
        <pre
          className={getClassnames(theme, {
            [className]: _.isString(className),
          })}
        >
          <code
            dangerouslySetInnerHTML={{ __html: pretty(data) }}
          />
        </pre>
      </div>
    );
  }
}
