// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import { useNode } from '@craftjs/core';
import Settings from './settings';

export default function FormText(props) {
  const { text, fontSize, textAlign } = props;
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        fontSize: `${fontSize}px`,
        textAlign,
      }}
      className="text-editor"
    >{text}</div>
  );
}

FormText.craft = {
  displayName: 'Text',
  name: 'Text',
  props: {
    text: 'This is text',
    fontSize: 17,
  },
  related: {
    settings: Settings,
  },
};

FormText.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
};
