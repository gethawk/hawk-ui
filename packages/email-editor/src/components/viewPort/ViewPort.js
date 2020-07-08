// vendor modules
import React, { useState } from 'react';
// react modules
import PropTypes from 'prop-types';
import { useEditor } from '@craftjs/core';
import Toolbar from '../toolbar/Toolbar';

export default function ViewPort({ children }) {
  const { connectors } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const [selectedLayout, setSelectedLayout] = useState(1);

  return (
    <div
      className="hawk-email-editor__container"
    >
      <div
        className="hawk-email-editor__frame"
        ref={(ref) => {
          connectors.select(connectors.hover(ref, null), null);
        }}
      >
        {children}
      </div>
      <div className="hawk-email-editor__panel">
        <Toolbar
          selectedLayout={selectedLayout}
          onSelectLayout={(event) => {
            setSelectedLayout(event);
          }}
        />
      </div>
    </div>
  );
}

ViewPort.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
  ]),
};
