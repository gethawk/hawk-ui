// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import colorString from 'color-string';
import themeable from 'react-themeable';
import _ from 'lodash';
import Button from '@hawk-ui/button';
import Input from '@hawk-ui/input';
import XYControl from './xy';
import ModeInput from './inputs/mode-input';
import RGBInput from './inputs/rgb-input';
import HInput from './inputs/h-input';
import SLAlphaInput from './inputs/sl-alpha-input';
import RGBGradient from './gradients/rgb-gradient';
import HGradient from './gradients/h-gradient';
import SGradient from './gradients/s-gradient';
import LGradient from './gradients/l-gradient';
import { defaultTheme } from './theme';
import { autokey } from './autokey';

import {
  rgbaColor,
  rgb2hsl,
  rgb2hex,
  hsl2rgb,
  colorCoords,
  colorCoordValue,
  getColor,
  isDark,
} from './colorfunc';

const isRGBMode = c => c === 'r' || c === 'g' || c === 'b';
const isHSLMode = c => c === 'h' || c === 's' || c === 'l';

export default class Picker extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    channel: PropTypes.string,
    theme: PropTypes.object,
    mode: PropTypes.string,
    initialValue: PropTypes.string,
    reset: PropTypes.bool,
    readOnly: PropTypes.bool,
    mounted: PropTypes.func,
  };

  static defaultProps = {
    initialValue: '#000',
    reset: true,
    mode: 'rgb',
    channel: 'h',
    theme: {},
    readOnly: false,
  };

  constructor(props) {
    super(props);
    const { mode, channel, initialValue } = props;

    this.state = {
      mode,
      channel,
      initialValue,
      color: getColor(initialValue),
    };
  }
  // eslint-disable-next-line react/sort-comp
  modeInputName = `mode-${Math.random()}`;

  componentDidMount() {
    const { mounted } = this.props;

    if (mounted) {
      mounted(this);
    }
  }

  toNumber(v) {
    return parseInt(v || 0, 10);
  }

  toString(v) {
    return v.trim();
  }

  overrideValue = (cssColor, shouldUpdateInitialValue) => {
    const state = {
      color: getColor(cssColor),
    };

    if (shouldUpdateInitialValue) {
      state.initialValue = cssColor;
    }

    this.setState(state, this.emitOnChange);
  };

  emitOnChange = hexInput => {
    const { color, mode, channel } = this.state;

    this.props.onChange({ hexInput: !!hexInput, mode, channel, ...color });
  };

  changeHSL = (p, inputValue) => {
    const { color } = this.state;
    let j = p;

    if (inputValue !== undefined) {
      j = {};
      j[p] = inputValue;
    }
    const h = 'h' in j ? j.h : color.h;
    const s = 's' in j ? j.s : color.s;
    const l = 'l' in j ? j.l : color.l;
    const rgb = hsl2rgb(h, s, l);
    const hex = rgb2hex(rgb.r, rgb.g, rgb.b);

    const nextColor = Object.assign({}, color, j, rgb, { hex });

    this.setState({ color: nextColor }, this.emitOnChange);
  };

  changeRGB = (p, inputValue) => {
    const { color } = this.state;
    let j = p;

    if (inputValue !== undefined) {
      j = {};
      j[p] = inputValue;
    }
    const r = 'r' in j ? j.r : color.r;
    const g = 'g' in j ? j.g : color.g;
    const b = 'b' in j ? j.b : color.b;
    const hsl = rgb2hsl(r, g, b);
    const hex = rgb2hex(r, g, b);

    const nextColor = Object.assign({}, color, j, hsl, { hex });

    this.setState({ color: nextColor }, this.emitOnChange);
  };

  changeAlpha = (id, inputValue) => {
    const nextColor = Object.assign({}, this.state.color, { a: inputValue / 100 });

    this.setState({ color: nextColor }, this.emitOnChange);
  };

  changeHEX = e => {
    const value = this.toString(e.target.value);
    const hex = `#${value}`;
    const isValid = colorString.get(hex);
    const color = getColor(hex) || this.state.color;
    const nextColor = Object.assign({}, color, { hex: value });

    this.setState({ color: nextColor }, () => {
      if (isValid) this.emitOnChange(true);
    });
  };

  onBlurHEX = e => {
    const hex = `#${this.toString(e.target.value)}`;
    const nextColor = getColor(hex) || this.state.color;

    this.setState({ color: nextColor }, this.emitOnChange.bind(this, true));
  };

  selectColor = e => {
    const value = e;
    const hex = `#${value}`;
    const isValid = colorString.get(hex);
    const color = getColor(hex) || this.state.color;
    const nextColor = Object.assign({}, color, { hex: value });

    this.setState({ color: nextColor }, () => {
      if (isValid) this.emitOnChange(true);
    });
  };

  reset = () => {
    const { initialValue } = this.state;

    this.setState({ color: getColor(initialValue) }, this.emitOnChange);
  };

  onXYChange = pos => {
    const { channel } = this.state;
    const color = colorCoordValue(channel, pos);

    if (isRGBMode(channel)) this.changeRGB(color);
    if (isHSLMode(channel)) this.changeHSL(color);
  };

  onColorSliderChange = e => {
    const { channel } = this.state;
    const value = this.toNumber(e.target.value);
    const color = {};

    color[channel] = value;
    if (isRGBMode(channel)) this.changeRGB(color);
    if (isHSLMode(channel)) this.changeHSL(color);
  }

  onAlphaSliderChange = e => {
    const value = this.toNumber(e.target.value);

    this.changeHSL({
      a: value / 100,
    });
  };

  setMode = e => {
    const mode = e.target.value;

    this.setState({ mode }, this.emitOnChange);
  };

  setChannel = channel => {
    this.setState({ channel }, this.emitOnChange);
  };

  render() {
    const { channel, color, mode, initialValue } = this.state;
    const { r, g, b, h, s, l, hex } = color;
    const { readOnly } = this.props;
    const a = Math.round(color.a * 100);

    const themeObject = Object.assign({}, defaultTheme, this.props.theme);

    if (!readOnly) {
      themeObject.numberInput = `${themeObject.numberInput}`;
    } else {
      themeObject.xyControlContainer = `${themeObject.xyControlContainer} events-none`;
    }

    const theme = autokey(themeable(themeObject));

    const themeRGBGradient = {
      gradient: themeObject.gradient,
      gradientRHigh: themeObject.gradientRHigh,
      gradientRLow: themeObject.gradientRLow,
      gradientGHigh: themeObject.gradientGHigh,
      gradientGLow: themeObject.gradientGLow,
      gradientBHigh: themeObject.gradientBHigh,
      gradientBLow: themeObject.gradientBLow,
    };

    const themeNumberInput = {
      numberInputContainer: themeObject.numberInputContainer,
      numberInputLabel: themeObject.numberInputLabel,
      numberInput: themeObject.numberInput,
    };

    const themeModeInput = {
      modeInputContainer: themeObject.modeInputContainer,
      modeInput: themeObject.modeInput,
    };

    let channelMax;

    if (isRGBMode(channel)) {
      channelMax = 255;
    } else if (channel === 'h') {
      channelMax = 360;
    } else {
      channelMax = 100;
    }

    const rgbaBackground = rgbaColor(r, g, b, a);
    const opacityGradient =
      `linear-gradient(to right, ${rgbaColor(r, g, b, 0)}, ${rgbaColor(r, g, b, 100)})`;

    const hueBackground = `hsl(${h}, 100%, 50%)`;

    // Slider background color for saturation & value.
    const hueSlide = {};

    if (channel === 'l') {
      hueSlide.background = `linear-gradient(to left, #fff 0%, ${hueBackground} 50%, #000 100%)`;
    } else if (channel === 's') {
      hueSlide.background = `linear-gradient(to left, ${hueBackground} 0%, #bbb 100%)`;
    }

    // Opacity between colorspaces in RGB & SL
    let opacityHigh = 0;
    let opacityLow = 0;

    if (['r', 'g', 'b'].indexOf(channel) >= 0) {
      opacityHigh = Math.round(color[channel] / 255 * 100) / 100;
      opacityLow = Math.round(100 - color[channel] / 255 * 100) / 100;
    } else if (['s', 'l'].indexOf(channel) >= 0) {
      opacityHigh = Math.round(color[channel] / 100 * 100) / 100;
      opacityLow = Math.round(100 - color[channel] / 100 * 100) / 100;
    }

    const modeInputs = (
      <div className="hawk-color-picker__input-mode">
        <div
          {...theme('inputModeContainer', `${channel === 'r' ? 'active' : ''}`)}
        >
          {/* <ModeInput
            id="r"
            theme={themeModeInput}
            name={this.modeInputName}
            checked={channel === 'r'}
            onChange={this.setChannel}
            {...(readOnly ? { readOnly: true } : {})}
          /> */}
          <RGBInput
            id="r"
            theme={themeNumberInput}
            value={r}
            onChange={this.changeRGB}
            {...(readOnly ? { readOnly: true } : {})}
          />
        </div>
        <div
          {...theme('inputModeContainer', `${channel === 'g' ? 'active' : ''}`)}
        >
          {/* <ModeInput
            id="g"
            theme={themeModeInput}
            name={this.modeInputName}
            checked={channel === 'g'}
            onChange={this.setChannel}
            {...(readOnly ? { readOnly: true } : {})}
          /> */}
          <RGBInput
            id="g"
            value={g}
            theme={themeNumberInput}
            onChange={this.changeRGB}
            {...(readOnly ? { readOnly: true } : {})}
          />
        </div>
        <div
          {...theme(
            'inputModeContainer',
            `${channel === 'b' ? 'active' : ''}`,
          )}
        >
          {/* <ModeInput
            id="b"
            theme={themeModeInput}
            name={this.modeInputName}
            checked={channel === 'b'}
            onChange={this.setChannel}
            {...(readOnly ? { readOnly: true } : {})}
          /> */}
          <RGBInput
            id="b"
            theme={themeNumberInput}
            value={b}
            onChange={this.changeRGB}
            {...(readOnly ? { readOnly: true } : {})}
          />
        </div>
      </div>
    );
    const selectedColor = ['ef6737', 'f7b944', '7bdcb5', '5fd185', '8dd1fa', '3293e3', 'abb8c3', 'ec3a4d', 'f18ca6', '9c4bef'];

    return (
      <div {...theme('container')}>
        <div {...theme('topWrapper')}>
          <div {...theme('gradientContainer')}>
            <XYControl
              {...colorCoords(channel, color)}
              isDark={isDark([r, g, b]) ? '' : 'dark'}
              theme={{
                xyControlContainer: themeObject.xyControlContainer,
                xyControl: themeObject.xyControl,
                xyControlDark: themeObject.xyControlDark,
              }}
              onChange={this.onXYChange}
            >
              <RGBGradient
                active={channel === 'r'}
                theme={themeRGBGradient}
                color="r"
                opacityLow={opacityLow}
                opacityHigh={opacityHigh}
              />
              <RGBGradient
                active={channel === 'g'}
                theme={themeRGBGradient}
                color="g"
                opacityLow={opacityLow}
                opacityHigh={opacityHigh}
              />
              <RGBGradient
                active={channel === 'b'}
                theme={themeRGBGradient}
                color="b"
                opacityLow={opacityLow}
                opacityHigh={opacityHigh}
              />
              <HGradient
                theme={{
                  gradient: themeObject.gradient,
                  gradientHue: themeObject.gradientHue,
                }}
                active={channel === 'h'}
                hueBackground={hueBackground}
              />
              <SGradient
                theme={{
                  gradient: themeObject.gradient,
                  gradientSaturation: themeObject.gradientSaturation,
                }}
                active={channel === 's'}
                opacityLow={opacityLow}
                opacityHigh={opacityHigh}
              />
              <LGradient
                theme={{
                  gradient: themeObject.gradient,
                  gradientLight: themeObject.gradientLight,
                }}
                active={channel === 'l'}
                opacityLow={opacityLow}
                opacityHigh={opacityHigh}
              />
            </XYControl>
            <div {...theme('slider', 'colorModeSlider', `colorModeSlider${channel.toUpperCase()}`)}>
              <input
                {...(readOnly ? { disabled: true } : {})}
                type="range"
                value={color[channel]}
                style={hueSlide}
                onChange={this.onColorSliderChange}
                min={0}
                max={channelMax}
                orient="vertical"
              />
            </div>
            {/* <div {...theme('slider', 'tileBackground')}>
              <input
                {...(readOnly ? { disabled: true } : {})}
                type="range"
                value={a}
                onChange={this.onAlphaSliderChange}
                style={{ background: opacityGradient }}
                min={0}
                max={100}
              />
            </div> */}
          </div>
          <div {...theme('controlsContainer')}>
            {/* <div {...theme('toggleGroup')}>
              <label {...theme('toggleContainer')}>
                <input
                  data-test="mode-rgb"
                  checked={this.state.mode === 'rgb'}
                  onChange={this.setMode}
                  value="rgb"
                  name="toggle"
                  type="radio"
                />
                <div {...theme('toggle')}>RGB</div>
              </label>
            </div> */}
            {modeInputs}
            {/* <div {...theme('alphaContainer')}>
              <SLAlphaInput
                {...(readOnly ? { readOnly: true } : {})}
                id={String.fromCharCode(945)}
                value={a}
                theme={themeNumberInput}
                onChange={this.changeAlpha}
              />
            </div> */}
          </div>
        </div>
        <div {...theme('bottomWrapper')}>
          {_.map(selectedColor, (bgColor, index) => (
            <div
              key={index}
              className="hawk-color-picker__wrapper-box"
              style={{ backgroundColor: `#${bgColor}` }}
              onClick={() => {
                this.selectColor(bgColor);
              }}
            />
          ))}
          <div {...theme('hexContainer')}>
            <Input
              type="text"
              value={hex}
              onChange={this.changeHEX}
              onBlur={this.onBlurHEX}
            />
          </div>
        </div>
        <div>
          <div {...theme('swatchCompareContainer')}>
            {this.props.reset && (
              <Button
                variant="outlined"
                onClick={this.reset}
              >
                <span>Reset</span>
              </Button>
            )}
            <Button
              onClick={this.reset}
            >
              <span>Save</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
