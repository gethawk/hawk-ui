// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Label extends Component {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    isRequired: PropTypes.bool,
  };
  static defaultProps = {
    isRequired: false,
  };
  state = {};

  render() {
    const { title, className, isRequired } = this.props;

    return (
      <label
        className={getClassNames('hawk-label', {
          [className]: _.isString(className),
        })}
      >
        {title} {isRequired && <span>*</span>}
      </label>
    );
  }
}
