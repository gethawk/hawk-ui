/* eslint-disable no-underscore-dangle */
// vendor modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// react modules
import PropTypes from 'prop-types';
import themeable from 'react-themeable';
import clamp from 'clamp';
import { autokey } from './autokey';

export default class XYControl extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.object.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    xmax: PropTypes.number.isRequired,
    ymax: PropTypes.number.isRequired,
    isDark: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  // eslint-disable-next-line react/sort-comp
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  change(pos) {
    if (!this._isMounted) return;
    const rect = this.getOwnBoundingRect();

    this.props.onChange({
      x: clamp(pos.left, 0, rect.width) / rect.width * this.props.xmax,
      y: clamp(pos.top, 0, rect.height) / rect.height * this.props.ymax,
    });
  }

  getOwnBoundingRect() {
    return ReactDOM.findDOMNode(this).getBoundingClientRect();
  }

  dragStart = e => {
    e.preventDefault();
    if (!this._isMounted) return;
    const rect = this.getOwnBoundingRect();
    const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const y = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;

    const offset = {
      left: x - rect.left,
      top: y - rect.top,
    };

    this.change(offset);

    // Handle interaction
    this.setState({
      start: { x: offset.left, y: offset.top },
      offset: { x, y },
    });

    window.addEventListener('mousemove', this.drag);
    window.addEventListener('mouseup', this.dragEnd);

    window.addEventListener('touchmove', this.drag);
    window.addEventListener('touchend', this.dragEnd);
  };

  drag = e => {
    e.preventDefault();
    const { start, offset } = this.state;
    const top =
      (e.changedTouches ? e.changedTouches[0].clientY : e.clientY) +
      start.y - offset.y;
    const left =
      (e.changedTouches ? e.changedTouches[0].clientX : e.clientX) +
      start.x - offset.x;

    this.change({ top, left });
  };

  dragEnd = () => {
    window.removeEventListener('mousemove', this.drag);
    window.removeEventListener('mouseup', this.dragEnd);

    window.removeEventListener('touchmove', this.drag);
    window.removeEventListener('touchend', this.dragEnd);
  };

  render() {
    const theme = autokey(themeable(this.props.theme));
    const {
      children,
      x,
      y,
      xmax,
      ymax,
      isDark,
    } = this.props;

    const top = Math.round(clamp(y / ymax * 100, 0, 100));
    const left = Math.round(clamp(x / xmax * 100, 0, 100));

    return (
      <div
        {...theme('xyControlContainer')}
        onTouchStart={this.dragStart}
        onMouseDown={this.dragStart}
      >
        <div
          {...theme('xyControl', `${isDark ? 'xyControlDark' : ''}`)}
          style={{
            top: `${top}%`,
            left: `${left}%`,
          }}
        />
        {children}
      </div>
    );
  }
}
