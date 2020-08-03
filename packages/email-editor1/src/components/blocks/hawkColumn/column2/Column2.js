// vendor modules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import { useNode } from '@craftjs/core';

export default function Column2(props) {
  const { children } = props;
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className="column-editor-container"
    >
      <div className="column-editor-container__column">
        {children}
      </div>
      <div className="column-editor-container__column">
        {children}
      </div>
    </div>
  );
}

Column2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
  ]),
};
