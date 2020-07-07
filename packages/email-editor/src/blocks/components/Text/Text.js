// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import { useNode } from '@craftjs/core';

export default function Text(props) {
  const { children } = props;
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={(ref) => { connect(drag(ref)); }}
    >
      {children}
    </div>
  );
}

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  rules: {
    canDrag: (node) => node.data.props.text !== 'Drag',
  },
};
