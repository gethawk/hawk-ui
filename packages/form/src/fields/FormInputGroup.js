// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import InputGroup from '@hawk-ui/input-group';

export default class FormInputGroup extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    configuration: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    noTitle: PropTypes.bool,
    dataType: PropTypes.string,
  };
  state = {
    value: _.get(this.props, 'value', ''),
  }
  componentDidMount() {
    const { onChange } = this.props;
    const { value } = this.state;

    onChange({ value });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.debouncedOnChange({ value: this.state.value });
    }
  }
  onChange = (value) => {
    const { dataType } = this.props;
    const typeCastedValue = dataType === 'number' ? _.toNumber(value) : value;

    this.setState({ value: _.isNaN(typeCastedValue) || _.isEmpty(value) ? value : typeCastedValue });
  }
  debouncedOnChange = _.debounce(this.props.onChange, 500);

  render() {
    const { configuration, property, placeholder, noTitle } = this.props;
    const { value } = this.state;
    const visual = _.get(configuration, 'visual', {});

    const addon = _.get(visual, 'addon', '');
    const addonSize = _.get(visual, 'addon_size', 'small');
    const addonPlacement = _.get(visual, 'addon_placement', 'left');
    const isAddonIcon = _.get(visual, 'addon_icon', false);

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <InputGroup
          addon={addon}
          addonSize={addonSize}
          addonPlacement={addonPlacement}
          isAddonIcon={isAddonIcon}
          placeholder={placeholder}
          value={value}
          onChange={(event) => {
            this.onChange(event.target.value);
          }}
        />
      </div>
    );
  }
}
