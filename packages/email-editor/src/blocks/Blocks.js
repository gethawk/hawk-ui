// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
import Card from '@hawk-ui/card';
// utils modules
import { blockOptions } from '../utils/blocks';

export default function Blocks() {
  return (
    <div className="hawk-email-editor-blocks">
      {_.map(blockOptions, (item, index) => (
        <Card
          key={index}
          isClickable
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
