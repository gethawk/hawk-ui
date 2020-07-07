// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import Button from '@hawk-ui/button';
// import { useNode } from '@craftjs/core';
import HawkButtonSettings from './HawkButtonSettings';

export default function HawkButton(props) {
  const { size, variant, color, children } = props;
  // const { connectors: { connect, drag } } = useNode();

  return (
    <Button
      size={size}
      variant={variant}
      color={color}
      // ref={(ref) => { connect(drag(ref)); }}
    >
      {children}
    </Button>
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
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};
