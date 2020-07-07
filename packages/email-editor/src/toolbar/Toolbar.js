// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

export default function Toolbar(props) {
  const { selectedLayout, onSelectLayout } = props;

  return (
    <div>
      <Header
        selectedLayout={selectedLayout}
        onSelectLayout={onSelectLayout}
      />
      <Footer />
    </div>
  );
}

Toolbar.propTypes = {
  selectedLayout: PropTypes.number,
  onSelectLayout: PropTypes.func,
};
