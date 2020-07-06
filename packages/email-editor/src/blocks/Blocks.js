// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
import { useEditor } from '@craftjs/core';
import Card from '@hawk-ui/card';
import Button from './components/Button/Button';
// utils modules
import { blockOptions } from '../utils/blocks';

export default function Blocks() {
  const { connectors } = useEditor();

  return (
    <div className="hawk-email-editor-blocks">
      <div
        style={{ width: '100px', height: '100px', border: '1px solid #000' }}
        ref={(ref) => {
          connectors.create(ref, <Button
            size="small"
            variant="contained"
            color="primary"
          >
            Click Me
          </Button>);
        }}
      ></div>
      {_.map(blockOptions, (item, index) => (
        <Card
          key={index}
          isClickable
          // ref={(ref) => {
          //   connectors.create(ref, <Button
          //     size="small"
          //     variant="contained"
          //     color="primary"
          //   >
          //     Click Me
          //   </Button>);
          // }}
        >
          <div className="hawk-email-editor-blocks__icon">
            <i className={item.icon} />
          </div>
          <div className="hawk-email-editor-blocks__title">{item.title}</div>
        </Card>
      ))}
    </div>
  );
}
