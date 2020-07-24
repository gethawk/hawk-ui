// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import BorderPicker from '@hawk-ui/border-picker';

export default class FormBorderPicker extends Component {
  static propTypes = {
    configuration: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noTitle: PropTypes.bool,
    dataType: PropTypes.string,
  };
  state = {};

  render() {
    const { configuration, property, noTitle } = this.props;
    const visual = _.get(configuration, 'visual', {});

    const borderType = _.get(visual, 'border_type', '');

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <BorderPicker
          type={borderType}
          onSelect={(event) => {
            console.log('query event', event);
          }}
        />
      </div>
    );
  }
}
