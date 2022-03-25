// vendor modules
import React, { Component, Fragment } from 'react';
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
        {_.map(panes, (item, index) => (
          <Fragment key={index}>
            <div className="hawk-timeline__content">
              <div className="hawk-timeline__content-title hawk-timeline__content-title--right">{item.title}</div>
            </div>
            <div className="hawk-timeline__separator">
              <div className="hawk-timeline__separator-point" />
            </div>
            <div className="hawk-timeline__content hawk-timeline__content--bg">
              {item.content}
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
}
