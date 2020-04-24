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
export default class Tabbed extends Component {
  static propTypes = {
    headers: PropTypes.array,
    panes: PropTypes.array,
    layout: PropTypes.oneOf(['horizontalTop', 'horizontalBottom', 'verticalLeft', 'verticalRight']),
    activeTabIndex: PropTypes.number,
    onActiveTabChange: PropTypes.func,
    className: PropTypes.string,
  };
  static defaultProps = {
    layout: 'horizontalTop',
    activeTabIndex: 0,
  }

  state = {
    activeTabIndex: this.props.activeTabIndex || 0,
  };

  render() {
    const { headers, panes, layout, className, activeTabIndex, onActiveTabChange } = this.props;

    return (
      <div
        className={getClassnames('hawk-tabbed', {
          [`hawk-tabbed__${layout}`]: _.isString(layout),
          [className]: _.isString(className),
        })}
      >
        <div
          className={getClassnames('hawk-tabbed__header', {
            [`hawk-tabbed__header-${layout}`]: _.isString(layout),
          })}
        >
          {_.map(headers, (header, index) => (
            <div
              key={index}
              className={getClassnames('hawk-tabbed__header-item', {
                [`hawk-tabbed__header-item__${layout}`]: _.isString(layout),
                active: _.isEqual(activeTabIndex, index),
              })}
              onClick={() => {
                this.setState({
                  activeTabIndex: index,
                });
                onActiveTabChange(index);
              }}
            >
              {header}
            </div>
          ))}
        </div>
        <div className="hawk-tabbed__content">
          {panes[activeTabIndex]}
        </div>
      </div>
    );
  }
}
