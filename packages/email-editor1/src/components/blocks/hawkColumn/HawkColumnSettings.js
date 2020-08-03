// vendor modules
import React, { useState } from 'react';
// react modules
import { useEditor, useNode, Element } from '@craftjs/core';
import _ from 'lodash';
import getClassnames from 'classnames';
import Column1 from './column1/Column1';
import Column2 from './column2/Column2';
import Column3 from './column3/Column3';
import Column4 from './column4/Column4';
import Column5 from './column5/Column5';
// utils modules
import { columnOptions } from '../../../utils/columns';

export default function HawkColumnSettings() {
  const [selected, onSelected] = useState(0);
  const { connectors } = useEditor();
  const { actions: { setProp } } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="column-editor-setting">
      {_.map(columnOptions, (item, index) => (
        <button
          key={index}
          className={getClassnames('card-block', {
            active: _.isEqual(selected, index),
          })}
          onClick={() => {
            onSelected(index);
          }}
          ref={(ref) => {
            connectors.create(ref, _.isEqual(item.name, 'column1') ? (
              <Element
                canvas
                is={Column1}
              />
            ) : _.isEqual(item.name, 'column2') ? (
              <Element
                canvas
                is={Column2}
              />
            ) : _.isEqual(item.name, 'column3') ? (
              <Element
                canvas
                is={Column3}
              />
            ) : _.isEqual(item.name, 'column4') ? (
              <Element
                canvas
                is={Column4}
              />
            ) : _.isEqual(item.name, 'column5') ? (
              <Element
                canvas
                is={Column5}
              />
            ) : null);
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: item.layout }}
          />
        </button>
      ))}
    </div>
  );
}
