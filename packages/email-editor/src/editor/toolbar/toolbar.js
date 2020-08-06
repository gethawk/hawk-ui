// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useEditor } from '@craftjs/core';
import Header from './header';
import Footer from './footer';

export default function Toolbar(props) {
  const { actions, selected } = useEditor((state, query) => {
    const currentNodeId = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.displayName,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });
  const { selectedLayout, onSelectLayout } = props;

  return (
    <div className="hawk-email-editor-toolbar">
      {_.isEmpty(selected) ? (
        <Header
          selectedLayout={selectedLayout}
          onSelectLayout={onSelectLayout}
        />
      ) : (
        <div className="hawk-email-editor-toolbar__container">
          <div className="hawk-email-editor-toolbar__title">
            {selected.name}
          </div>
          <div className="hawk-email-editor-toolbar__content">
            {selected.settings && React.createElement(selected.settings)}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

Toolbar.propTypes = {
  selectedLayout: PropTypes.number,
  onSelectLayout: PropTypes.func,
};
