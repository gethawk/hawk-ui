// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
import { useEditor } from '@craftjs/core';
import Column from './components/Column/Column';
import Button from './components/Button/Button';
import Text from './components/Text/Text';
import Divider from './components/Divider/Divider';
import Image from './components/Image/Image';
// utils modules
import { blockOptions } from '../utils/blocks';

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
              <Column />
            ) : _.isEqual(item.name, 'text') ? (
              <Text />
            ) : _.isEqual(item.name, 'button') ? (
              <Button />
            ) : _.isEqual(item.name, 'divider') ? (
              <Divider />
            ) : _.isEqual(item.name, 'image') ? (
              <Image />
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
