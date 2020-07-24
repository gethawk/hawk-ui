// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import ColorPicker from '@hawk-ui/color-picker';

export default class FormColorPicker extends Component {
  static propTypes = {
    configuration: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noTitle: PropTypes.bool,
  };
  state = {};

  render() {
    const { configuration, property, noTitle } = this.props;
    const visual = _.get(configuration, 'visual', {});

    const defaultColor = _.get(visual, 'default_color', '000000');

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <ColorPicker
          defaultColor={defaultColor}
          onSave={(event) => {
            console.log('query color event', event);
          }}
        />
      </div>
    );
  }
}
