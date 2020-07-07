// vendor modules
import React, { useState } from 'react';
// react modules
import PropTypes from 'prop-types';
import Tabbed from '@hawk-ui/tabbed';
import Layouts from '../layouts/Layouts';
import Blocks from '../blocks/Blocks';
import Styles from '../styles/Styles';

export default function Header(props) {
  const { selectedLayout, onSelectLayout } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hawk-email-editor-header">
      <Tabbed
        headers={['layouts', 'blocks', 'styles']}
        panes={[
          <Layouts
            selected={selectedLayout}
            onSelectLayout={onSelectLayout}
          />,
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

Header.propTypes = {
  selectedLayout: PropTypes.number,
  onSelectLayout: PropTypes.func,
};
