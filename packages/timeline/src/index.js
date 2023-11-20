// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Timeline extends Component {
  static propTypes = {
    panes: PropTypes.array,
    className: PropTypes.string,
  };

  state = {};

  render() {
    const { panes, className } = this.props;

    return (
      <div
        className={getClassnames('hawk-timeline', {
          [className]: _.isString(className),
        })}
      >
        <ul>
          {_.map(panes, (item, index) => (
            <li key={index}>
              <div className="hawk-timeline__content">{item.content}</div>
              <div className="hawk-timeline__title">{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
