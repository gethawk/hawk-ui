// vendor modules
import React, { Component } from 'react';
// react modules
import Input from '@hawk-ui/input';
import Button from '@hawk-ui/button';

export default class FormLink extends Component {
  state = {};

  render() {
    return (
      <div className="hawk-rich-text-editor__form">
        <div className="hawk-rich-text-editor__form-content">
          <Input
            type="text"
            value=""
            label="Web address (URL)"
            description="Please enter a valid URL or merge field."
            placeholder="https://example.com"
            isRequired
          />
        </div>
        <div className="hawk-rich-text-editor__form-button">
          <Button
            variant="outlined"
          >
            <span>Cancel</span>
          </Button>
          <Button>
            <span>Insert</span>
          </Button>
        </div>
      </div>
    );
  }
}
