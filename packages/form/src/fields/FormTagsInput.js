// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import TagsInput from '../../../tags-input/src/index';
// import TagsInput from '@hawk-ui/tags-input';

import suggestAPI from '../utils/suggestAPI';

export default class FormTagsInput extends Component {
  static propTypes = {
    value: PropTypes.array,
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
  onAddTag = (tag, meta) => {
    const { visual, value, onChange } = this.props;

    this.setState({ query: '' });
    if (meta.isSuggestion) {
      const suggest = _.get(visual, 'suggest', null);
      const suggestValue = _.get(suggest, 'value', null);

      if (suggestValue) {
        onChange({ value: _.uniq(_.concat(value || [], tag[suggestValue])) });
      } else {
        onChange({ value: _.uniq(_.concat(value || [], tag)) });
      }
    } else {
      onChange({ value: _.uniq(_.concat(value || [], tag)) });
    }
  };
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
        // const suggestValue = _.get(suggest, 'value', null);
        // const suggestName = _.get(suggest, 'name', suggestValue);
        // const filteredSuggestion = _.filter(suggestOptions, option => (_.includes(_.toLower(option[suggestValue]), _.toLower(query)) || _.includes(_.toLower(option[suggestName]), _.toLower(query))));

        this.setState({ isLoading: false, suggestions: suggestOptions });
      }
    }
  };
  onRemoveTag = (item) => {
    const { value, onChange } = this.props;

    onChange({ value: _.without(value, item) });
  }
  debouncedSearch = _.debounce(this.onSearchChange, 500);

  render() {
    const { visual, property, noTitle, value } = this.props;
    const { query, isLoading, suggestions } = this.state;
    const renderOption = _.get(visual, 'suggest.name', 'title');
    const options = _.get(visual, 'suggest.options', null);

    console.log('query suggestions', suggestions);
    console.log('query options', options);
    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <TagsInput
          suggestions={suggestions}
          placeholder="Select anyone"
          searchValue={query}
          // isSearchLoading={isLoading}
          onChange={(event) => {
            this.setState({
              query: event.target.value,
            });
          }}
          searchContent={[renderOption]}
          renderSuggestion={(suggestion) => suggestion[renderOption]}
          messageIfEmpty="No Item Found"
          onAddTag={this.onAddTag}
          onRemoveTag={this.onRemoveTag}
          tags={value}
          renderTag={tag => tag}
        />
      </div>
    );
  }
}
