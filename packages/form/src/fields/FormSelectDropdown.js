// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import SelectDropdown from '@hawk-ui/select-dropdown';

export default class FormSelectDropdown extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    visual: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    noTitle: PropTypes.bool,
    onChange: PropTypes.func,
  };
  state = {
    query: '',
  };
  componentDidMount() {
    const { value, onChange } = this.props;

    onChange({ value });
  }

  render() {
    const { property, noTitle, visual, onChange, value } = this.props;
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
          searchValue={value}
          onChange={(event) => {
            this.setState({
              query: event.target.value,
            });
          }}
          onSuggestionSelect={(item) => {
            onChange({ value: item.value });
          }}
        />
      </div>
    );
  }
}
