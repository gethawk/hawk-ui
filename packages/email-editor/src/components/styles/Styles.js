// vendor modules
import React, { useState } from 'react';
// react modules
import Collapse from '@hawk-ui/collapse';
// css modules
import '../../styles.scss';

export default function Styles() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hawk-email-editor-styles">
      <Collapse
        headers={['Background Color', 'Header', 'Body', 'Footer', 'Email Border']}
        panes={[
          <div>Background Color</div>,
          <div>Background Color</div>,
          <div>Background Color</div>,
          <div>Background Color</div>,
          <div>Background Color</div>,
        ]}
        activeItem={activeIndex}
        setActiveItem={(event) => {
          setActiveIndex(event);
        }}
      />
    </div>
  );
}
