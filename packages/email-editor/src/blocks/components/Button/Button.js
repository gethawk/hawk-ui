// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import { Button as HawkButton } from '@hawk-ui/button';
import { useNode } from '@craftjs/core';
import ButtonSettings from './ButtonSettings';

export default function Button(props) {
  const { size, variant, color, children } = props;
  const { connectors: { connect, drag } } = useNode();

  return (
    <HawkButton
      size={size}
      variant={variant}
      color={color}
      ref={(ref) => { connect(drag(ref)); }}
    >
      {children}
    </HawkButton>
  );
}

Button.craft = {
  props: {
    size: 'small',
    variant: 'contained',
    color: 'primary',
    text: 'Click me',
  },
  related: {
    settings: ButtonSettings,
  },
};

Button.propTypes = {
  size: PropTypes.number,
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};
