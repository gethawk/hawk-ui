// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import { useNode } from '@craftjs/core';

export default function HawkContainer(props) {
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

export const HawkContainerSettings = () => {
  const { background, padding, actions: {setProp} } = useNode(node => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      {/* <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker defaultValue={background || '#000'} onChange={color => {
          setProp(props => props.background = color)
        }} />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider defaultValue={padding} onChange={(_, value) => setProp(props => props.padding = value)} />
      </FormControl> */}
    </div>
  );
};

HawkContainer.craft = {
  props: {
    background: '#ffffff',
    padding: 3,
  },
  related: {
    settings: HawkContainerSettings,
  },
};

HawkContainer.propTypes = {
  background: PropTypes.number,
  padding: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};
