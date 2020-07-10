// vendor modules
import React, { Component } from 'react';
// react modules
import getClassnames from 'classnames';
import Input from '@hawk-ui/input';
import Picker from './component/picker';
// css modules
import './index.scss';

const INITIAL_VALUE = 'hsl(229, 96%, 62%)';

/**
 * @example ../README.md
 */
export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    overrideValue: false,
    shouldColorPickerShow: false,
  };
  // eslint-disable-next-line react/sort-comp
  instance = null;

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  isDark = (color) => {
    const { r, g, b, a } = color;

    return !(((r * 0.299) + (g * 0.587) + (b * 0.114) > 186 ||
            a < 0.50));
  };

  setInstance = (picker) => {
    this.instance = picker;
  };

  // eslint-disable-next-line react/sort-comp
  onChange = (color) => {
    console.log('query color', color);
  };

  override = () => {
    this.instance.overrideValue('red');
  };

  onClick = (event) => {
    if (this.myRef.current.contains(event.target)) {
      return;
    }
    this.setState({
      shouldColorPickerShow: false,
    });
  }

  onSave = (event) => {
    console.log('query onSave', event);
  };

  render() {
    return (
      <div ref={this.myRef} className="hawk-color-picker">
        <div className="hawk-color-picker__input-picker">
          <div
            className="hawk-color-picker__input-picker__color"
            onClick={() => {
              this.setState({
                shouldColorPickerShow: !this.state.shouldColorPickerShow,
              });
            }}
          />
          <Input
            type="text"
            value="#000"
          />
        </div>
        {this.state.shouldColorPickerShow ? (
          <div
            className="hawk-color-picker__dropdown"
            x-placement="bottom-start"
          >
            <Picker
              mounted={this.setInstance}
              initialValue={INITIAL_VALUE}
              onChange={this.onChange}
              onSave={this.onSave}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
