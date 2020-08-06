// vendor modules
import React, { useState } from 'react';
// react modules
import { useEditor } from '@craftjs/core';
import _ from 'lodash';
import getClassnames from 'classnames';

export default function Settings() {
  const { connectors } = useEditor();
  const { actions: { setProp } } = useNode((node) => ({
    props: node.data.props,
  }));
  const [selected, onSelected] = useState(0);

  return (
    <div className="settings editor-column-setting">
      Column Setting
    </div>
  );
}
