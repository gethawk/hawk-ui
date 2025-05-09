// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import themeable from 'react-themeable';
import { autokey } from '../autokey';

export default class SGradient extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    opacityLow: PropTypes.number.isRequired,
    opacityHigh: PropTypes.number.isRequired,
  };
  state = {};

  render() {
    const theme = autokey(themeable(this.props.theme));
    const { active, opacityLow, opacityHigh } = this.props;

    if (!active) return <noscript />;

    return (
      <div>
        <div
          {...theme('gradient', 'gradientSaturation')}
          style={{ opacity: opacityHigh }}
        />
        <div
          {...theme('gradient')}
          style={{
            background: 'linear-gradient(to bottom, rgb(255,255,255) 0%, rgba(128,128,128,0) 50%, rgb(0,0,0) 100%)',
            opacity: opacityHigh,
          }}
        />
        <div
          {...theme('gradient')}
          style={{
            background: 'linear-gradient(to bottom, rgb(255,255,255) 0%, rgb(128,128,128) 50%, rgb(0,0,0) 100%)',
            opacity: opacityLow,
          }}
        />
      </div>
    );
  }
}
