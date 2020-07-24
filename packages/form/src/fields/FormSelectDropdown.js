// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import SelectDropdown from '@hawk-ui/select-dropdown';

export default class FormSelectDropdown extends Component {
  static propTypes = {
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noTitle: PropTypes.bool,
  };
  state = {};

  render() {
    const { property, noTitle } = this.props;

    const suggestions = [
      { title: 'Argentina', value: 'argentina' },
      { title: 'Australia', value: 'australia' },
      { title: 'Belgium', value: 'belgium' },
      { title: 'Bhutan', value: 'bhutan' },
      { title: 'Brazil', value: 'brazil' },
      { title: 'Canada', value: 'canada' },
      { title: 'China', value: 'china' },
      { title: 'Colombia', value: 'colombia' },
      { title: 'Egypt', value: 'egypt' },
      { title: 'Finland', value: 'finland' },
      { title: 'Georgia', value: 'georgia' },
      { title: 'Germany', value: 'germany' },
      { title: 'India', value: 'india' },
      { title: 'Indonesia', value: 'indonesia' },
    ];

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <SelectDropdown
          suggestions={suggestions}
          isIcon
          placeholder="Select anyone"
          renderSuggestion={(suggestion) => suggestion.title}
        />
      </div>
    );
  }
}
