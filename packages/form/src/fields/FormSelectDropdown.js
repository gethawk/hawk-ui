// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import SelectDropdown from '@hawk-ui/select-dropdown';

export default class FormSelectDropdown extends Component {
  static propTypes = {
    configuration: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noTitle: PropTypes.bool,
  };
  state = {};

  render() {
    const { configuration, property, noTitle } = this.props;
    const visual = _.get(configuration, 'visual', {});

    const options = _.get(visual, 'suggest.options', []);
    const renderOption = _.get(visual, 'suggest.name', 'title');
    const isIcon = _.get(visual, 'show_icon', false);

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <SelectDropdown
          suggestions={options}
          isIcon={isIcon}
          placeholder="Select anyone"
          renderSuggestion={(suggestion) => suggestion[renderOption]}
        />
      </div>
    );
  }
}
