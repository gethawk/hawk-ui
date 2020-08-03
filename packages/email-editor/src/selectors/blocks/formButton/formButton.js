// vendor modules
import React from 'react';
// react modules
import Button from '@hawk-ui/button';
import { useNode } from '@craftjs/core';
import Settings from './settings';

export default function FormButton() {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={(ref) => { connect(drag(ref)); }}
    >
      <Button>
        <span>Hello World</span>
      </Button>
    </div>
  );
}

FormButton.craft = {
  displayName: 'Button',
  props: {},
  related: {
    settings: Settings,
  },
};
