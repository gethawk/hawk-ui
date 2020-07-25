// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import TagsInput from '@hawk-ui/tags-input';

export default class FormTagsInput extends Component {
  static propTypes = {
    value: PropTypes.array,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    noTitle: PropTypes.bool,
    visual: PropTypes.object,
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
  onRemoveTag = (item) => {
    const { value, onChange } = this.props;

    onChange({ value: _.without(value, item) });
  }

  render() {
    const { visual, property, noTitle, value } = this.props;
    const { query } = this.state;
    const options = _.get(visual, 'suggest.options', []);
    const renderOption = _.get(visual, 'suggest.name', 'title');

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <TagsInput
          suggestions={options}
          placeholder="Select anyone"
          searchValue={query}
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
