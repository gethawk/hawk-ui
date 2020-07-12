// venodr modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import themeable from 'react-themeable';
import { autokey } from '../autokey';

export default class RGBGradient extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    opacityLow: PropTypes.number.isRequired,
    opacityHigh: PropTypes.number.isRequired,
  };
  state = {};

  render() {
    const theme = autokey(themeable(this.props.theme));
    const { active, color, opacityLow, opacityHigh } = this.props;

    if (!active) return <noscript />;

    return (
      <div>
        <div
          {...theme('gradient', `gradient${color.toUpperCase()}High`)}
          style={{ opacity: opacityHigh }}
        />
        <div
          {...theme('gradient', `gradient${color.toUpperCase()}Low`)}
          style={{ opacity: opacityLow }}
        />
      </div>
    );
  }
}
