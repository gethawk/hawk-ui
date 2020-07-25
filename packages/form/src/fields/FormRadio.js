// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import Radio from '@hawk-ui/radio';

export default class FormRadio extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    visual: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noTitle: PropTypes.bool,
  };
  state = {};

  componentDidMount() {
    const { value, onChange } = this.props;

    onChange({ value });
  }

  render() {
    const { property, value, noTitle, visual, onChange } = this.props;
    const options = _.get(visual, 'options', []);

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <Radio
          options={options}
          selectedItem={value}
          onChange={(event) => {
            onChange({ value: event.target.value });
          }}
        />
      </div>
    );
  }
}
