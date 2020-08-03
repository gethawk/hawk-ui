// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import { useNode } from '@craftjs/core';
import Settings from './settings';

export default function FormDivider(props) {
  const { height, width, align, variant, color } = props;
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={(ref) => { connect(drag(ref)); }}
    >
      <div
        style={{
          border: `${height}px ${variant} ${color}`,
          width: `${width}%`,
          alignItems: `${align}`,
        }}
        className="divider-editor"
      />
    </div>
  );
}

FormDivider.craft = {
  displayName: 'Divider',
  props: {
    height: 1,
    width: 100,
    align: 'center',
    variant: 'solid',
    color: '#d9d9d9',
  },
  related: {
    settings: Settings,
  },
};

FormDivider.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  align: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
};
