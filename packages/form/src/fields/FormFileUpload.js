// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import FileUpload from '@hawk-ui/file-upload';

export default class FormFileUpload extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    configuration: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    noTitle: PropTypes.bool,
    dataType: PropTypes.string,
  };
  state = {};

  render() {
    const { configuration, property, placeholder, noTitle } = this.props;
    const visual = _.get(configuration, 'visual', {});

    const describable = _.get(visual, 'describable', false);

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <FileUpload
          title="Upload"
          isDescribable={describable}
        />
      </div>
    );
  }
}
