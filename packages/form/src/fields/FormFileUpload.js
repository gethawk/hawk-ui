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
    visual: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    noTitle: PropTypes.bool,
    dataType: PropTypes.string,
  };
  state = {};

  render() {
    const { visual, property, placeholder, noTitle, onChange } = this.props;
    const title = _.get(visual, 'title', 'Browse');
    const description = _.get(visual, 'description', '');
    const describable = _.get(visual, 'describable', false);
    const draggable = _.get(visual, 'draggable', false);

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <FileUpload
          title={title}
          description={description}
          isDescribable={describable}
          isDraggable={draggable}
          placeholder={placeholder}
          onUpload={(file) => {
            onChange({ value: file });
          }}
        />
      </div>
    );
  }
}
