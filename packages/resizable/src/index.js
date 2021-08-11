// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import getClassnames from 'classnames';
import { initResizeElement } from './scripts';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Resizable extends Component {
  static propTypes = {};
  static defaultProps = {}

  state = {};

  componentDidMount() {
    initResizeElement();
  }

  render() {
    return (
      <div className="hawk-resizable">
        <p>Move</p>
        <p>this</p>
        <p>DIV</p>
      </div>
    );
  }
}
