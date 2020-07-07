// vendor modules
import React from 'react';
// react modules
import Checkbox from '@hawk-ui/checkbox';
import { useNode } from '@craftjs/core';

export default function HawkButtonSettings() {
  const { actions: { setProp } } = useNode((node) => ({
    props: node.data.props,
  }));
  const sizeOptions = [
    { key: 1, label: 'Small', value: 'small' },
    { key: 1, label: 'Medium', value: 'medium' },
    { key: 1, label: 'Large', value: 'large' },
  ];

  return (
    <div>
      <Checkbox
        options={sizeOptions}
        selectedItem="small"
        onChange={(event) => {
          setProp(prop => prop.size === event.target.value);
        }}
      />
    </div>
  );
}
