// vendor modules
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import getClassnames from 'classnames';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class ColorPicker extends Component {
  state = {};

  componentDidMount() {
    const inp1 = document.getElementById('inp1');
    const inp2 = document.getElementById('inp2');
    const inp3 = document.getElementById('inp3');
    const txt = document.getElementById('txt');
    const view = document.getElementById('view');
    const root = document.documentElement;
    let h = [];
    let s = [];
    let l = [];

    function update() {
      h = [];
      s = [];
      l = [];
      for (let i = 0; i < 360; i++) {
        h.push(`hsl(${i + 1}, ${100}%, ${50}%)`);
      }
      for (let i = 0; i < 100; i++) {
        s.push(`hsl(${inp1.value}, ${i}%, 50%)`);
        l.push(`hsl(${inp1.value}, 100%, ${i}%)`);
      }
      inp1.style.background = `linear-gradient(to right, ${h.join(', ')})`;
      inp2.style.background = `linear-gradient(to right, ${s.join(', ')})`;
      inp3.style.background = `linear-gradient(to right, ${l.join(', ')})`;

      txt.value = `hsl(${inp1.value}, ${inp2.value}%, ${inp3.value}%)`;
      view.style.backgroundColor = `hsl(${inp1.value}, ${inp2.value}%, ${inp3.value}%)`;

      root.style.setProperty('--color1', `hsl(${inp1.value}, 100%, 50%)`);
      root.style.setProperty('--color2', `hsl(${inp1.value}, ${inp2.value}%, 50%)`);
      root.style.setProperty('--color3', `hsl(${inp1.value}, 100%, ${inp3.value}%)`);
      document.getElementById('rgb').innerHTML = window.getComputedStyle(view).backgroundColor;

      let str = window.getComputedStyle(view).backgroundColor;

      str = str.replace('rgb', '');
      str = str.replace('(', '');
      str = str.replace(')', '');
      str = str.split(',');
      const hex = [0, 0, 0];

      hex[0] = parseFloat(str[0]).toString(16);
      hex[1] = parseFloat(str[1]).toString(16);
      hex[2] = parseFloat(str[2]).toString(16);

      if (hex[0].length < 2) {
        hex[0] = `0${hex[0]}`;
      }
      if (hex[1].length < 2) {
        hex[1] = `0${hex[1]}`;
      }
      if (hex[2].length < 2) {
        hex[2] = `0${hex[2]}`;
      }

      document.getElementById('hex').innerHTML = `#${hex.join('')}`;
    }
    update();
    inp1.oninput = update;
    inp2.oninput = update;
    inp3.oninput = update;

    function convert() {
      let str = this.value;

      str = str.replace('hsl', '');
      str = str.replace('(', '');
      str = str.replace(')', '');
      str = str.replace('%', '');
      str = str.replace('%', '');
      str = str.split(',');
      inp1.value = parseFloat(str[0]);
      inp2.value = parseFloat(str[1]);
      inp3.value = parseFloat(str[2]);
      update();
    }
    txt.oninput = convert;
  }

  render() {
    return (
      <div className="hawk-color-picker">
        <div className="hawk-color-picker__view" id="view" />
        <div className="hawk-color-picker__colors" id="colors">
          <input
            type="text"
            id="txt"
            value=""
            className="hawk-color-picker__colors-text"
          />
          <button id="copy" className="hawk-color-picker__colors-copy">
            <i className="fa fa-copy" />
          </button>
          <input
            type="range"
            className="hawk-color-picker__colors-input hawk-color-picker__colors-input1"
            id="inp1"
            min="0"
            max="360"
            value="331"
            draggable="false"
          />
          <input
            type="range"
            className="hawk-color-picker__colors-input hawk-color-picker__colors-input2"
            id="inp2"
            min="0"
            max="100"
            value="100"
            draggable="false"
          />
          <input
            type="range"
            className="hawk-color-picker__colors-input hawk-color-picker__colors-input3"
            id="inp3"
            min="0"
            max="100"
            value="50"
            draggable="false"
          />
          <p id="rgb">rgb(255, 255, 255)</p>
          <p id="hex">#ffffff</p>
        </div>
      </div>
    );
  }
}
