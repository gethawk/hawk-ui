// vendor modules
import React from 'react';
// react modules
import { useNode } from '@craftjs/core';
import Form from '@hawk-ui/form';
import { configuration } from './utils';

export default function Settings() {
  const { actions: { setProp } } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Form
      configuration={configuration('content')}
    />
  );
}
