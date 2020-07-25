// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import TagsInput from '@hawk-ui/tags-input';

export default class FormTagsInput extends Component {
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
          searchContent={[renderOption]}
          renderSuggestion={(suggestion) => suggestion[renderOption]}
          messageIfEmpty="No Item Found"
        />
      </div>
    );
  }
}
