// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import { useNode } from '@craftjs/core';
import HawkColumnSettings from './HawkColumnSettings';

export default function HawkColumn(props) {
  const { background, padding, children } = props;
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        background,
        padding: `${padding}px`,
      }}
      className="column-editor"
    >
      {children}
    </div>
  );
}

HawkColumn.craft = {
  props: {
    background: '#ffffff',
    padding: 10,
  },
  related: {
    settings: HawkColumnSettings,
  },
};

HawkColumn.propTypes = {
  background: PropTypes.string,
  padding: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
  ]),
};
