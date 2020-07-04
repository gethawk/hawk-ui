// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class ColorPicker extends Component {
  state = {
    prevX: 0,
    prevY: 0,
  };

  componentDidMount() {
    const colorBlock = document.getElementById('color-block');
    const ctx1 = colorBlock.getContext('2d');
    const width1 = colorBlock.width;
    const height1 = colorBlock.height;

    const colorStrip = document.getElementById('color-strip');
    const ctx2 = colorStrip.getContext('2d');
    const width2 = colorStrip.width;
    const height2 = colorStrip.height;

    const colorLabel = document.getElementById('color-label');

    let x = 0;
    let y = 0;
    let drag = false;
    let rgbaColor = 'rgba(255,0,0,1)';

    function fillGradient() {
      ctx1.fillStyle = rgbaColor;
      ctx1.fillRect(0, 0, width1, height1);

      const grdWhite = ctx2.createLinearGradient(0, 0, width1, 0);

      grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
      grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
      ctx1.fillStyle = grdWhite;
      ctx1.fillRect(0, 0, width1, height1);

      const grdBlack = ctx2.createLinearGradient(0, 0, 0, height1);

      grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
      grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
      ctx1.fillStyle = grdBlack;
      ctx1.fillRect(0, 0, width1, height1);
    }

    ctx1.rect(0, 0, width1, height1);
    fillGradient();

    ctx2.rect(0, 0, width2, height2);
    const grd1 = ctx2.createLinearGradient(0, 0, 0, height1);

    grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
    grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
    grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
    grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
    grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
    grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
    grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
    ctx2.fillStyle = grd1;
    ctx2.fill();

    function click(e) {
      x = e.offsetX;
      y = e.offsetY;
      const imageData = ctx2.getImageData(x, y, 1, 1).data;

      rgbaColor = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},1)`;
      fillGradient();
    }

    function drawCoordinates(x1, y1) {
      const pointSize = 3;
      const ctx = document.getElementById('color-block').getContext('2d');

      ctx.fillStyle = '#ff2626';
      // ctx.beginPath();
      // ctx.clearRect(this.state.x1, this.state.y1, pointSize, 0, Math.PI * 2, true);
      // ctx.closePath();
      ctx.beginPath();
      ctx.arc(x1, y1, pointSize, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      // this.setState({
      //   prevX: x1,
      //   prevY: y1,
      // });
    }

    function changeColor(e) {
      x = e.offsetX;
      y = e.offsetY;
      const imageData = ctx1.getImageData(x, y, 1, 1).data;

      drawCoordinates(x, y);
      rgbaColor = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},1)`;
      colorLabel.style.backgroundColor = rgbaColor;
    }

    function mousedown(e) {
      drag = true;
      changeColor(e);
    }

    function mousemove(e) {
      if (drag) {
        changeColor(e);
      }
    }

    function mouseup() {
      drag = false;
    }

    colorStrip.addEventListener('click', click, false);

    colorBlock.addEventListener('mousedown', mousedown, false);
    colorBlock.addEventListener('mouseup', mouseup, false);
    colorBlock.addEventListener('mousemove', mousemove, false);
  }

  render() {
    return (
      <div className="hawk-color-picker">
        <div
          htmlFor="color-input"
          id="color-label"
          style={{ backgroundColor: 'red' }}
          className="hawk-color-picker__label"
        />
        <input type="checkbox" id="color-input" checked />
        <div className="hawk-color-picker__block">
          <canvas
            className="hawk-color-picker__block-color"
            id="color-block"
            width="150"
            height="150"
          />
          <canvas className="hawk-color-picker__block-strip" id="color-strip" />
        </div>
      </div>
    );
  }
}
