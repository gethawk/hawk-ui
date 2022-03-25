// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Timeline extends Component {
  static propTypes = {
    panes: PropTypes.array,
  };

  state = {};

  render() {
    const { panes } = this.props;

    return (
      <div className="hawk-timeline">
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
