// vendor modules
import React from 'react';
// react modules
import SelectDropdown from '@hawk-ui/select-dropdown';

const suggestions = [
  { title: '1', value: '1' },
  { title: '2', value: '2' },
];
const lineSuggestions = [
  { title: 'Single', value: '1' },
  { title: '1.25', value: '2' },
  { title: '1.5', value: '3' },
  { title: 'Double', value: '4' },
];

export default function HawkTextContent() {
  return (
    <div className="text-editor-content">
      {/* <div className="editor-form-section">
        <SelectDropdown
          suggestions={suggestions}
          isIcon
          placeholder="Select Number of Columns"
          renderSuggestion={(suggestion) => suggestion.title}
          label="Number of Columns"
        />
      </div>
      <div className="editor-form-section">
        <SelectDropdown
          suggestions={lineSuggestions}
          isIcon
          placeholder="Select Number of Columns"
          renderSuggestion={(suggestion) => suggestion.title}
          label="Number of Columns"
        />
      </div> */}
    </div>
  );
}
