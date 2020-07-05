// vendor modules
import React, { useState } from 'react';
// react modules
import Tabbed from '@hawk-ui/tabbed';
import Layouts from '../layouts/Layouts';
import Blocks from '../blocks/Blocks';
import Styles from '../styles/Styles';

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hawk-email-editor-header">
      <Tabbed
        headers={['layouts', 'blocks', 'styles']}
        panes={[
          <Layouts />,
          <Blocks />,
          <Styles />,
        ]}
        activeTabIndex={activeIndex}
        onActiveTabChange={(event) => {
          setActiveIndex(event);
        }}
      />
    </div>
  );
}
