// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
import { useEditor } from '@craftjs/core';
import Layout1 from './components/Layout1/Layout1';
import Layout2 from './components/Layout2/Layout2';
import Layout3 from './components/Layout3/Layout3';
import Layout4 from './components/Layout4/Layout4';
import Layout5 from './components/Layout5/Layout5';
import Layout6 from './components/Layout6/Layout6';
import Layout7 from './components/Layout7/Layout7';
import Layout8 from './components/Layout8/Layout8';
// utils modules
import { layoutOptions } from '../utils/layouts';
// css modules
import '../layouts.scss';

export default function Layouts() {
  const { connectors } = useEditor();

  return (
    <div className="hawk-email-editor-layouts">
      {_.map(layoutOptions, (item, index) => (
        <button
          key={index}
          className="card-block"
          ref={(ref) => {
            connectors.create(ref, _.isEqual(item.id, 1) ? (
              <Layout1 />
            ) : _.isEqual(item.id, 2) ? (
              <Layout2 />
            ) : _.isEqual(item.id, 3) ? (
              <Layout3 />
            ) : _.isEqual(item.id, 4) ? (
              <Layout4 />
            ) : _.isEqual(item.id, 5) ? (
              <Layout5 />
            ) : _.isEqual(item.id, 6) ? (
              <Layout6 />
            ) : _.isEqual(item.id, 7) ? (
              <Layout7 />
            ) : _.isEqual(item.id, 8) ? (
              <Layout8 />
            ) : null);
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: item.layouts }}
          />
        </button>
      ))}
    </div>
  );
}
