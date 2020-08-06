// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import { useEditor } from '@craftjs/core';
import Toolbar from '../toolbar/toolbar';

export default function ViewPort({ children, selectedLayout, onSelectLayout }) {
  const { connectors } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div
      className="hawk-email-editor__container"
    >
      <div
        className="hawk-email-editor__frame emailRender"
        ref={(ref) => {
          connectors.select(connectors.hover(ref, null), null);
        }}
      >
        {children}
      </div>
      <div className="hawk-email-editor__panel">
        <Toolbar
          selectedLayout={selectedLayout}
          onSelectLayout={onSelectLayout}
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
  selectedLayout: PropTypes.number,
  onSelectLayout: PropTypes.func,
};
