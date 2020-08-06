// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import { useNode } from '@craftjs/core';
import Settings from './settings';

export default function FormColumn(props) {
  const { background, padding, children } = props;
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        background,
        padding: `${padding}px`,
      }}
    >
      {children}
    </div>
  );
}

FormColumn.craft = {
  displayName: 'Column',
  props: {
    background: '#ffffff',
    padding: 10,
  },
  related: {
    settings: Settings,
  },
};

FormColumn.propTypes = {
  background: PropTypes.string,
  padding: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
  ]),
};
