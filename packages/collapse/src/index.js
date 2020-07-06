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
export default class Collapse extends Component {
  static propTypes = {
    headers: PropTypes.array,
    panes: PropTypes.array,
    activeItem: PropTypes.bool,
    setActiveItem: PropTypes.func,
    className: PropTypes.string,
  };
  static defaultProps = {
    activeItem: 0,
  }

  state = {
    activeItem: this.props.activeItem || 0,
  };

  render() {
    const { headers, panes, className, activeItem, setActiveItem } = this.props;

    return (
      <div
        className={getClassnames('hawk-collapse', {
          [className]: _.isString(className),
        })}
      >
        {_.map(headers, (header, index) => (
          <div
            className="hawk-collapse__section"
            key={index}
          >
            <div
              className="hawk-collapse__header"
              onClick={() => {
                setActiveItem(index);
              }}
            >
              <div className="hawk-collapse__header-title">
                {header}
              </div>
              <div className="hawk-collapse__header-icon">
                <i
                  className={getClassnames('fa', {
                    'fa-angle-up': activeItem === index,
                    'fa-angle-down': activeItem !== index,
                  })}
                />
              </div>
            </div>
            <div
              className="hawk-collapse__content"
              style={activeItem !== index ? { maxHeight: '0px', padding: '0px' } : { maxHeight: '500px' }}
            >
              <div className="hawk-collapse__content-text">
                {panes[index]}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
