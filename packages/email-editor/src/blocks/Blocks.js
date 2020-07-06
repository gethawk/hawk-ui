// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
import { useEditor } from '@craftjs/core';
import Button from './components/Button/Button';
// utils modules
import { blockOptions } from '../utils/blocks';

export default function Blocks() {
  const { connectors } = useEditor();

  return (
    <div className="hawk-email-editor-blocks">
      {_.map(blockOptions, (item, index) => (
        <button
          key={index}
          ref={(ref) => {
            connectors.create(ref, _.isEqual(item.name, 'column') ? (
              <Button
                size="small"
                variant="contained"
                color="primary"
              >Click Me</Button>
            ) : (<div>Hello</div>));
          }}
          className="card-block"
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
