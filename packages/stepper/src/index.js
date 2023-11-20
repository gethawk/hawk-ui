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
class Stepper extends Component {
  static propTypes = {
    panes: PropTypes.array,
    activeIndex: PropTypes.number,
    className: PropTypes.string,
  };
  static defaultProps = {
    panes: [],
    activeIndex: 0,
  }

  state = {};

  render() {
    const { panes, activeIndex, className } = this.props;

    return (
      <ul
        className={getClassnames('hawk-stepper', {
          [className]: _.isString(className),
        })}
      >
        {_.map(panes, (item, index) => (
          <li
            key={index}
            className={getClassnames('hawk-stepper__step', {
              active: index + 1 <= activeIndex,
            })}
          >
            {_.get(item, 'title') && (
              <span
                className="hawk-stepper__step-title"
              >
                {item.title}
              </span>
            )}
            <span className="hawk-stepper__step-rounded" />
            {_.get(item, 'description') && (
              <span className="hawk-stepper__step-description">
                {item.description}
              </span>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default Stepper;
