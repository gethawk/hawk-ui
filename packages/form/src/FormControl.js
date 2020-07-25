import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Fields from './fields';

export default class FormControl extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    configuration: PropTypes.object,
    data: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.array,
    ]),
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noTitle: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isArraySupportedField: PropTypes.bool,
  };
  onChange = ({ value }) => {
    const { onChange, configuration } = this.props;

    onChange({ value, configuration });
  }
  render() {
    const { data, property, configuration, noTitle, isDisabled, isArraySupportedField } = this.props;

    const dataType = _.get(configuration, 'data_type', 'string');
    const visual = _.get(configuration, 'visual', {});
    const validation = _.get(configuration, 'validation', {});
    const placeholder = _.get(configuration, 'placeholder', '');
    const fieldType = _.get(visual, 'field_type', 'input');
    const FieldComponent = _.get(Fields, fieldType);

    if (!FieldComponent) {
      return null;
    }

    return (
      <div data-property={property} className="hawk-form-control">
        <FieldComponent
          isArraySupportedField={isArraySupportedField}
          configuration={configuration}
          property={property}
          dataType={dataType}
          value={data}
          visual={visual}
          validation={validation}
          placeholder={placeholder}
          noTitle={noTitle}
          onChange={this.onChange}
          isDisabled={isDisabled}
        />
      </div>
    );
  }
}
