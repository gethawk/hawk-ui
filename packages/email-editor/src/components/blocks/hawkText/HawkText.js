// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import { useNode } from '@craftjs/core';
import HawkTextSettings from './HawkTextSettings';

export default function HawkText(props) {
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

HawkText.craft = {
  props: {
    text: 'This is text',
    fontSize: 17,
  },
  related: {
    settings: HawkTextSettings,
  },
};


HawkText.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
};
