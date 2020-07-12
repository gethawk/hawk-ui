// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import themeable from 'react-themeable';
import { autokey } from '../autokey';

export default class HGradient extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    hueBackground: PropTypes.string.isRequired,
  };
  state = {};

  render() {
    const theme = autokey(themeable(this.props.theme));
    const { active, hueBackground } = this.props;

    if (!active) return <noscript />;

    return (
      <div>
        <div {...theme('gradient')} style={{ backgroundColor: hueBackground }} />
        <div {...theme('gradient', 'gradientHue')} />
      </div>
    );
  }
}
