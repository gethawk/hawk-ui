// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import RichTextEditor from '@hawk-ui/rich-text-editor';

export default class FormRichTextEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    visual: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    noTitle: PropTypes.bool,
  };
  static defaultProps = {
    value: '',
  };
  componentDidMount() {
    const { value, onChange } = this.props;

    onChange({ value });
  }

  render() {
    const { visual, property, value, placeholder, onChange, noTitle } = this.props;

    const rows = _.get(visual, 'rows', 10);
    const editableId = _.get(visual, 'containerEditable', 'editableId');
    const toolbarItems = _.get(visual, 'options', ['bold', 'italic', 'underline', 'link', 'unlink', 'ordered list', 'unordered list']);

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <RichTextEditor
          editableId={editableId}
          placeholder={placeholder}
          value={value}
          toolbarItems={toolbarItems}
          htmlAttributes={{
            rows,
          }}
          onChange={({ html }) => {
            onChange({ value: html });
          }}
        />
      </div>
    );
  }
}
