// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Label extends Component {
  static propTypes = {
    title: PropTypes.string,
    isRequired: PropTypes.bool,
  };
  static defaultProps = {
    isRequired: false,
  };
  state = {};

  render() {
    const { title, isRequired } = this.props;

    return (
      <label className="hawk-label">
        {title} {isRequired && <span>*</span>}
      </label>
    );
  }
}
