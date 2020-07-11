// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import _ from 'lodash';
import Input from '@hawk-ui/input';
// utils modules
import { borderTypes } from './utils';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class BorderPicker extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['dotted', 'dashed', 'solid', 'double', 'dotted dashed solid double']),
    onSelect: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    shouldBorderPickerShow: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  onClick = (event) => {
    if (this.myRef.current.contains(event.target)) {
      return;
    }
    this.setState({
      shouldBorderPickerShow: false,
    });
  }

  render() {
    const { type, onSelect } = this.props;

    return (
      <div ref={this.myRef} className="hawk-border-picker">
        <div
          className="hawk-border-picker__input-picker"
          onClick={() => {
            this.setState({
              shouldBorderPickerShow: !this.state.shouldBorderPickerShow,
            });
          }}
        >
          <div
            className="hawk-border-picker__input-picker__border"
            style={{
              borderStyle: type,
            }}
          />
          <Input
            type="text"
            value={type}
            readOnly
          />
        </div>
        {this.state.shouldBorderPickerShow ? (
          <div
            className="hawk-border-picker__dropdown"
            x-placement="bottom-start"
          >
            {_.map(borderTypes, (style, index) => (
              <div
                key={index}
                className="hawk-border-picker__border"
                style={{
                  borderStyle: style.type,
                }}
                onClick={() => {
                  onSelect(style.type);
                }}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
