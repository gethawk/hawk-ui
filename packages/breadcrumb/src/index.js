// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
class Breadcrumb extends Component {
  static propTypes = {
    panes: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
  };
  state = {};

  render() {
    const { panes } = this.props;

    return (
      <ol className="hawk-breadcrumb">
        {_.map(panes, (item, index) => (
          <li
            key={index}
            className="hawk-breadcrumb__item"
          >
            {item.active ? (
              <a
                href={item.link}
              >{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    );
  }
}

export default Breadcrumb;
