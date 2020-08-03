// vendor modules
import React from 'react';
// react modules
import { useNode } from '@craftjs/core';

export default function Settings() {
  const { actions: { setProp } } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>Divider Settings</div>
  );
}
