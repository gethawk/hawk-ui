// vendor modules
import React from 'react';
// react modules
import Collapse from '@hawk-ui/collapse';
import Footer from '../../editor/toolbar/footer';
// utils modules
import { headers } from './utils';

export default function Styles() {
  return (
    <div className="hawk-email-editor-styles">
      <Collapse
        headers={headers}
        panes={['First Styles', 'Second Styles']}
      />
      <Footer />
    </div>
  );
}
