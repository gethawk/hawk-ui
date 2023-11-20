// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Rating extends Component {
  static propTypes = {
    active: PropTypes.number,
    onClick: PropTypes.func,
    className: PropTypes.string,
  };
  state = {
    active: this.props.active || 0,
  };

  onHandleClick = (item) => {
    this.setState({
      active: item,
    });
    if (_.isFunction(this.props.onClick)) {
      this.props.onClick(item);
    }
  };

  render() {
    const { active, className } = this.state;

    return (
      <div
        className={getClassnames('hawk-rating', {
          [className]: _.isString(className),
        })}
      >
        <div className="hawk-rating__group">
          <input
            type="radio"
            name="rating"
            id="rating-0"
            className="hawk-rating__input hawk-rating__input-none"
            value="0"
            disabled
            checked={!!_.isEqual(active, 0)}
          />
          {_.map(_.range(1, 6), (item) => (
            <Fragment>
              <label
                aria-label={`${item} star`}
                className="hawk-rating__label"
                htmlFor={`rating-${item}`}
                onClick={() => { this.onHandleClick(item); }}
              >
                <i className="hawk-rating__icon fas fa-star" />
              </label>
              <input
                type="radio"
                name="rating"
                id={`rating-${item}`}
                value={item}
                className="hawk-rating__input"
                checked={!!_.isEqual(active, item)}
              />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}
