// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import SelectDropdown from '@hawk-ui/select-dropdown';

import suggestAPI from '../utils/suggestAPI';

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
    isLoading: false,
    suggestions: [],
  };
  componentDidMount() {
    const { value, onChange } = this.props;

    onChange({ value });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.debouncedSearch(this.state.query);
    }
  }
  onSearchChange = (query) => {
    if (_.size(query || '') > 0) {
      const { visual } = this.props;

      const suggest = _.get(visual, 'suggest', null);

      if (!_.isEmpty(suggest) && !_.isEmpty(_.get(suggest, 'api'))) {
        const data = _.get(suggest, 'data', 'data');
        const queryParam = _.get(suggest, 'query', 'query');
        const params = { [queryParam]: query };

        this.setState({ isLoading: true });

        suggestAPI(suggest.api, { params }).then((response) => {
          this.setState({ isLoading: false, suggestions: response[data] });
        }).catch(() => {
          this.setState({ isLoading: false, suggestions: [] });
        });
      } else if (!_.isEmpty(suggest) && !_.isEmpty(_.get(suggest, 'options'))) {
        const suggestOptions = _.get(suggest, 'options', []);

        this.setState({ isLoading: false, suggestions: suggestOptions });
      }
    }
  };
  debouncedSearch = _.debounce(this.onSearchChange, 500);

  render() {
    const { property, noTitle, visual, onChange, value } = this.props;
    const { isLoading, suggestions } = this.state;
    const options = _.get(visual, 'suggest.options', []);
    const renderOption = _.get(visual, 'suggest.name', 'title');
    const isIcon = _.get(visual, 'show_icon', false);
    const isReadable = _.get(visual, 'is_readable', true);

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <SelectDropdown
          suggestions={!_.isEmpty(_.get(visual, 'suggest.options')) ? options : suggestions}
          isIcon={isIcon}
          isSearchLoading={isLoading}
          isReadOnly={isReadable}
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
