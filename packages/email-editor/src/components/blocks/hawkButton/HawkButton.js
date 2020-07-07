// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import Button from '@hawk-ui/button';
import { useNode } from '@craftjs/core';
import HawkButtonSettings from './HawkButtonSettings';

export default function HawkButton(props) {
  const { size, variant, color, text } = props;
  const { connectors: { connect, drag } } = useNode();

  return (
    <React.Fragment
      ref={(ref) => { connect(drag(ref)); }}
    >
      <Button
        size={size}
        variant={variant}
        color={color}
        className="button-editor"
      >
        {text}
      </Button>
    </React.Fragment>
  );
}

HawkButton.craft = {
  props: {
    size: 'small',
    variant: 'contained',
    color: 'primary',
    text: 'Click me',
  },
  related: {
    settings: HawkButtonSettings,
  },
};

HawkButton.propTypes = {
  size: PropTypes.number,
  variant: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};
