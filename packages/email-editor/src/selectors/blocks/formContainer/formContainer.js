// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import { useNode } from '@craftjs/core';

export default function FormContainer(props) {
  const { children, background, padding = 0 } = props;
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={(ref) => { connect(drag(ref)); }}
      style={{ background, padding: `${padding}px` }}
    >
      {children}
    </div>
  );
}

FormContainer.craft = {
  displayName: 'Container',
  props: {
    background: '#ffffff',
    padding: 3,
  },
};

FormContainer.propTypes = {
  background: PropTypes.number,
  padding: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};