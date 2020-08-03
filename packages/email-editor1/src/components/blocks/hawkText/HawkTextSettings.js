// vendor modules
import React, { useState } from 'react';
// react modules
import Tabbed from '@hawk-ui/tabbed';
import { useNode } from '@craftjs/core';
import HawkTextContainer from './HawkTextContainer';
import HawkTextContent from './HawkTextContent';

export default function HawkTextSettings() {
  const { actions: { setProp } } = useNode((node) => ({
    props: node.data.props,
  }));
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="text-editor-setting">
      <Tabbed
        headers={['Container', 'Content']}
        panes={[
          <div>Container</div>,
          <div>Content</div>,
        ]}
        activeTabIndex={activeTabIndex}
        onActiveTabChange={(event) => {
          setActiveTabIndex(event);
        }}
      />
      {/* <Tabbed
        headers={['Container', 'Content']}
        panes={[
          <HawkTextContainer />,
          <HawkTextContent />,
        ]}
        activeTabIndex={activeTabIndex}
        onActiveTabChange={(event) => {
          setActiveTabIndex(event);
        }}
      /> */}
    </div>
  );
}
