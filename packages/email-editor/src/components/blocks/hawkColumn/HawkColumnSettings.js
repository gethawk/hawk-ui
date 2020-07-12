// vendor modules
import React from 'react';
// react modules
import { useNode } from '@craftjs/core';
import Label from '@hawk-ui/label';
import ColorPicker from '@hawk-ui/color-picker';
import SelectDropdown from '@hawk-ui/select-dropdown';

const suggestions = [
  { title: '1', value: '1' },
  { title: '2', value: '2' },
  { title: '3', value: '3' },
  { title: '4', value: '4' },
  { title: '5', value: '5' },
];

export default function HawkColumnSettings(props) {
  const { actions: { setProp } } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="column-editor-setting">
      <div className="editor-form-section">
        <Label
          title="Background Color"
        />
        <ColorPicker
          defaultColor="6997DB"
          onSave={(event) => {
            console.log('query event', event);
          }}
        />
      </div>
      <div className="editor-form-section">
        <SelectDropdown
          suggestions={suggestions}
          isIcon
          placeholder="Select Number of Columns"
          renderSuggestion={(suggestion) => suggestion.title}
          label="Number of Columns"
        />
      </div>
    </div>
  );
}
