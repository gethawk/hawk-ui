// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
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
    className: PropTypes.string,
  };
  static defaultProps = {
    type: 'solid',
  }
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    shouldBorderPickerShow: false,
    type: this.props.type,
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
    const { onSelect, className } = this.props;
    const { type } = this.state;

    return (
      <div
        ref={this.myRef}
        className={getClassnames('hawk-border-picker', {
          [className]: _.isString(className),
        })}
      >
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
                  this.setState({
                    shouldBorderPickerShow: false,
                    type: style.type,
                  }, () => {
                    onSelect(style.type);
                  });
                }}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
