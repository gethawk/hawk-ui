// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Parallax extends Component {
  static propTypes = {
    panes: PropTypes.array,
    style: PropTypes.object,
    className: PropTypes.string,
  };
  state = {};

  render() {
    const { panes, style, className } = this.props;

    return (
      <div
        className={getClassnames('hawk-parallax', {
          [className]: _.isString(className),
        })}
        id="parallax-container"
        style={{ height: style.height }}
      >
        {_.map(panes, (item, index) => (
          <div
            key={index}
            style={{ background: `url(${item})`, height: style.height }}
            className="hawk-parallax__image"
          />
        ))}
      </div>
    );
  }
}
