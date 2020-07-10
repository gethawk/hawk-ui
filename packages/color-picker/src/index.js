// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import Input from '@hawk-ui/input';
import Picker from './component/picker';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class ColorPicker extends Component {
  static propTypes = {
    onSave: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    overrideValue: false,
    shouldColorPickerShow: false,
    defaultColor: '4163fb',
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

  onClick = (event) => {
    if (this.myRef.current.contains(event.target)) {
      return;
    }
    this.setState({
      shouldColorPickerShow: false,
    });
  }

  setInstance = (picker) => {
    this.instance = picker;
  };

  override = () => {
    this.instance.overrideValue('red');
  };

  onSave = (event) => {
    this.setState({
      defaultColor: event.hex,
      shouldColorPickerShow: false,
    }, () => {
      this.props.onSave(event);
    });
  };

  render() {
    return (
      <div ref={this.myRef} className="hawk-color-picker">
        <div className="hawk-color-picker__input-picker">
          <div
            className="hawk-color-picker__input-picker__color"
            style={{
              backgroundColor: `#${this.state.defaultColor}`,
            }}
            onClick={() => {
              this.setState({
                shouldColorPickerShow: !this.state.shouldColorPickerShow,
              });
            }}
          />
          <Input
            type="text"
            value={`#${this.state.defaultColor}`}
          />
        </div>
        {this.state.shouldColorPickerShow ? (
          <div
            className="hawk-color-picker__dropdown"
            x-placement="bottom-start"
          >
            <Picker
              mounted={this.setInstance}
              initialValue={`#${this.state.defaultColor}`}
              onSave={this.onSave}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
