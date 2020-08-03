// vendor modules
import React, { Component, useState } from 'react';
// react modules
import { useNode } from '@craftjs/core';
import Tabbed from '@hawk-ui/tabbed';
import Form from '@hawk-ui/form';
import { configuration } from './utils';

class Content extends Component {
  state = {};

  render() {
    return (
      <Form
        configuration={configuration('content')}
      />
    );
  }
}

class Style extends Component {
  state = {};

  render() {
    return (
      <Form
        configuration={configuration('style')}
      />
    );
  }
}

export default function Settings() {
  const { actions: { setProp } } = useNode((node) => ({
    props: node.data.props,
  }));
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="settings editor-text-setting">
      <Tabbed
        headers={['Content', 'Style']}
        panes={[
          <Content />,
          <Style />,
        ]}
        activeTabIndex={activeIndex}
        onActiveTabChange={(event) => {
          setActiveIndex(event);
        }}
      />
    </div>
  );
}