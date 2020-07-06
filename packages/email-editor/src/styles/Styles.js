// vendor modules
import React, { useState } from 'react';
// react modules
import Collapse from '@hawk-ui/collapse';
// utils modules
import { styleOptions } from '../utils/styles';
// css modules
import '../styles.scss';

export default function Styles() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hawk-email-editor-styles">
      <Collapse
        items={styleOptions}
        activeItem={activeIndex}
        setActiveItem={(event) => {
          setActiveIndex(event);
        }}
      />
    </div>
  );
}
