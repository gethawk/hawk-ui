// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
class Stepper extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <ul className="hawk-stepper">
        <li className="hawk-stepper__step active">
          <span className="hawk-stepper__step-upper-text">01</span>
          <span className="hawk-stepper__step-rounded" />
          <span className="hawk-stepper__step-lower-text">
            First
          </span>
        </li>
        <li className="hawk-stepper__step">
          <span className="hawk-stepper__step-upper-text">02</span>
          <span className="hawk-stepper__step-dot" />
          <span className="hawk-stepper__step-lower-text">
            Second
          </span>
        </li>
        <li className="hawk-stepper__step">
          <span className="hawk-stepper__step-upper-text">03</span>
          <span className="hawk-stepper__step-dot" />
          <span className="hawk-stepper__step-lower-text">
            Third
          </span>
        </li>
      </ul>
    );
  }
}

export default Stepper;
