// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
import Card from '@hawk-ui/card';
// utils modules
import { layoutOptions } from '../utils/layouts';
// css modules
import '../layouts.scss';

export default function Layouts() {
  return (
    <div className="hawk-email-editor-layouts">
      {_.map(layoutOptions, (item, index) => (
        <Card
          key={index}
          isClickable
        >
          <div
            dangerouslySetInnerHTML={{ __html: item.layouts }}
          />
        </Card>
      ))}
    </div>
  );
}
