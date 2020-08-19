// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
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
    theme: PropTypes.oneOf(['light', 'dark']),
  };
  static defaultProps = {
    id: 'json-pretty',
    theme: 'light',
    data: {},
  }
  state = {};

  render() {
    const { data, theme } = this.props;

    return (
      <div
        className="hawk-json-pretty"
      >
        <pre
          className={theme}
        >
          <code
            dangerouslySetInnerHTML={{ __html: pretty(data) }}
          />
        </pre>
      </div>
    );
  }
}
