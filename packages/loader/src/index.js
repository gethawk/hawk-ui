// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Loader extends Component {
  static propTypes = {
    className: PropTypes.string,
  };
  state = {};

  render() {
    const { className } = this.props;

    return (
      <div className="hawk-loader">
        <div className="hawk-loader__container">
          <div className="hawk-loader__shadow" />
          <div className={getClassnames('hawk-loader__box', className)} />
        </div>
      </div>
    );
  }
}
