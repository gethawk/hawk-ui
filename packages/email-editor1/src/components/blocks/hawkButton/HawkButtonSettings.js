// vendor modules
import React, { useState } from 'react';
// react modules
import Tabbed from '@hawk-ui/tabbed';
import { useNode } from '@craftjs/core';
import HawkButtonContainer from './HawkButtonContainer';
import HawkButtonContent from './HawkButtonContent';

export default function HawkButtonSettings() {
  const { actions: { setProp } } = useNode((node) => ({
    props: node.data.props,
  }));
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="button-editor-setting">
      <Tabbed
        headers={['Container', 'Content']}
        panes={[
          <HawkButtonContainer />,
          <HawkButtonContent />,
        ]}
        activeTabIndex={activeTabIndex}
        onActiveTabChange={(event) => {
          setActiveTabIndex(event);
        }}
      />
    </div>
  );
}
