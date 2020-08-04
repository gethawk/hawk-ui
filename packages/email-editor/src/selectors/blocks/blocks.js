// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
import { useEditor, Element } from '@craftjs/core';
import FormColumn from './formColumn/formColumn';
import FormText from './formText/formText';
import FormButton from './formButton/formButton';
import FormDivider from './formDivider/formDivider';
import FormImage from './formImage/formImage';
import { blockOptions } from './utils';

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
              <Element
                canvas
                is={FormColumn}
              />
            ) : _.isEqual(item.name, 'text') ? (
              <FormText />
            ) : _.isEqual(item.name, 'button') ? (
              <FormButton />
            ) : _.isEqual(item.name, 'divider') ? (
              <FormDivider />
            ) : _.isEqual(item.name, 'image') ? (
              <FormImage />
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
