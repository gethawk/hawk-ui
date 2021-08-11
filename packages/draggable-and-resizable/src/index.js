// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import getClassnames from 'classnames';
import { initDragElement } from './scripts/draggable';
import { initResizeElement } from './scripts/resizable';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class DraggableAndResizable extends Component {
  static propTypes = {};
  static defaultProps = {}

  state = {};

  componentDidMount() {
    initDragElement();
    initResizeElement();
  }

  render() {
    return (
      <div className="popup">
        <div className="popup-header">Click here to move</div>
        <p>Move</p>
        <p>this</p>
        <p>DIV</p>
      </div>
    );
  }
}
