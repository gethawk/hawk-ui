// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
// utils modules
import { layoutOptions } from '../utils/layouts';
// css modules
import '../layouts.scss';

export default function Layouts() {
  return (
    <div className="hawk-email-editor-layouts">
      {_.map(layoutOptions, (item, index) => (
        <button
          key={index}
          className="card-block"
        >
          <div
            dangerouslySetInnerHTML={{ __html: item.layouts }}
          />
        </button>
      ))}
    </div>
  );
}
