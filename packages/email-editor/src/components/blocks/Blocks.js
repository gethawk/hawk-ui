// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
import { useEditor } from '@craftjs/core';
import HawkColumn from './hawkColumn/HawkColumn';
import HawkText from './hawkText/HawkText';
import HawkButton from './hawkButton/HawkButton';
import HawkDivider from './hawkDivider/HawkDivider';
import HawkImage from './hawkImage/HawkImage';
// utils modules
import { blockOptions } from '../../utils/blocks';

export default function Blocks() {
  const { connectors } = useEditor();

  return (
    <div className="hawk-email-editor-blocks">
      {_.map(blockOptions, (item, index) => (
        <button
          key={index}
          className="card-block"
          ref={(ref) => {
            connectors.create(ref, _.isEqual(item.name, 'column') ? (
              <HawkColumn />
            ) : _.isEqual(item.name, 'text') ? (
              <HawkText />
            ) : _.isEqual(item.name, 'button') ? (
              <HawkButton>Click me</HawkButton>
            ) : _.isEqual(item.name, 'divider') ? (
              <HawkDivider />
            ) : _.isEqual(item.name, 'image') ? (
              <HawkImage />
            ) : null);
          }}
        >
          <div className="hawk-email-editor-blocks__icon">
            <i className={item.icon} />
          </div>
          <div className="hawk-email-editor-blocks__title">{item.title}</div>
        </button>
      ))}
    </div>
  );
}
