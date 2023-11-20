/* eslint-disable no-use-before-define */
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
class Magnifier extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    className: PropTypes.string,
  };
  state = {};

  componentDidMount() {
    this.onHandleImage('imageMagnify', 'resultMagnify');
  }

  onHandleImage = (imageId, resultId) => {
    const img = document.getElementById(imageId);
    const result = document.getElementById(resultId);
    const lens = document.createElement('DIV');

    lens.setAttribute('class', 'hawk-magnifier__lens');
    img.parentElement.insertBefore(lens, img);

    const cx = result.offsetWidth / lens.offsetWidth;
    const cy = result.offsetHeight / lens.offsetHeight;

    result.style.backgroundImage = `url(${img.src})`;
    result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

    lens.addEventListener('mousemove', onMoveLens);
    img.addEventListener('mousemove', onMoveLens);
    lens.addEventListener('touchmove', onMoveLens);
    img.addEventListener('touchmove', onMoveLens);

    function onMoveLens(e) {
      e.preventDefault();

      const pos = getCursorPos(e);
      let x = pos.x - (lens.offsetWidth / 2);
      let y = pos.y - (lens.offsetHeight / 2);

      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      lens.style.left = `${x}px`;
      lens.style.top = `${y}px`;

      result.style.display = 'block';
      result.style.backgroundPosition = `-${x * cx}px -${y * cx}px`;
    }

    function getCursorPos(event) {
      let x = 0;
      let y = 0;
      const e = event || window.event;
      const a = img.getBoundingClientRect();

      x = e.pageX - a.left;
      y = e.pageY - a.top;
      x -= window.pageXOffset;
      y -= window.pageYOffset;

      return { x, y };
    }
  };

  render() {
    const { children, className } = this.props;

    return (
      <div
        className={getClassnames('hawk-magnifier', {
          [className]: _.isString(className),
        })}
      >
        {children}
        <div id="resultMagnify" className="hawk-magnifier__result" />
      </div>
    );
  }
}

export default Magnifier;
