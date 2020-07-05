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
export default class Collapse extends Component {
  static propTypes = {
    items: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    activeItem: PropTypes.bool,
    setActiveItem: PropTypes.func,
  };

  state = {};

  render() {
    const { items, activeItem, setActiveItem } = this.props;

    return (
      <div className="hawk-collapse">
        {_.map(items, (item, index) => (
          <div
            className="hawk-collapse__section"
            key={index}
          >
            <div
              className="hawk-collapse__header"
              onClick={() => {
                setActiveItem(index + 1);
              }}
            >
              <div className="hawk-collapse__header-title">
                {item.title}
              </div>
              <div className="hawk-collapse__header-icon">
                <i className="fa fa-angle-up" />
              </div>
            </div>
            <div
              className="hawk-collapse__content"
              style={activeItem !== index + 1 ? { maxHeight: '0px', padding: '0px' } : { maxHeight: '110px' }}
            >
              <div className="hawk-collapse__content-text">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
