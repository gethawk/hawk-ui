// vendor modules
import React from 'react';
// react modules
import Button from '@hawk-ui/button';

export default function Footer() {
  return (
    <div className="hawk-email-editor-footer">
      <Button
        variant="outlined"
      >
        <span>Cancel</span>
      </Button>
      <Button>
        <span>Save &amp; Continue</span>
      </Button>
    </div>
  );
}
