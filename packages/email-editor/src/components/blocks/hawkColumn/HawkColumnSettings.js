// vendor modules
import React, { useState } from 'react';
// react modules
import { useNode } from '@craftjs/core';
import _ from 'lodash';
import getClassnames from 'classnames';
// utils modules
import { columnOptions } from '../../../utils/columns';

export default function HawkColumnSettings() {
  const [selected, onSelected] = useState(0);
  const { actions: { setProp } } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="column-editor-setting">
      {_.map(columnOptions, (item, index) => (
        <button
          key={index}
          className={getClassnames('card-block', {
            active: _.isEqual(selected, index + 1),
          })}
          onClick={() => {
            onSelected(index);
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
