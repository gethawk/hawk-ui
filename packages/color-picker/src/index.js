// vendor modules
import React, { Component } from 'react';
import Picker from './component/picker';
// css modules
import './index.scss';

const INITIAL_VALUE = 'hsl(229, 96%, 62%)';

/**
 * @example ../README.md
 */
export default class ColorPicker extends Component {
  state = {
    overrideValue: false,
  };
  // eslint-disable-next-line react/sort-comp
  instance = null;

  isDark = (color) => {
    const { r, g, b, a } = color;

    return !(((r * 0.299) + (g * 0.587) + (b * 0.114) > 186 ||
            a < 0.50));
  };

  setInstance = (picker) => {
    this.instance = picker;
  };

  onChange = (color) => {
    console.log('query color', color);
  };

  override = () => {
    this.instance.overrideValue('red');
  };

  render() {
    return (
      <div className="hawk-color-picker">
        <Picker
          mounted={this.setInstance}
          initialValue={INITIAL_VALUE}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
