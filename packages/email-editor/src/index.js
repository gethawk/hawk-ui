// vendor modules
import React, { Component } from 'react';
// react modules
import { Editor } from '@craftjs/core';
import Toolbar from './toolbar/Toolbar';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class EmailEditor extends Component {
  state = {};

  render() {
    return (
      <div className="hawk-email-editor">
        <Editor>
          <div className="hawk-email-editor__container">
            <div className="hawk-email-editor__frame">
              Frame
            </div>
            <div className="hawk-email-editor__panel">
              <Toolbar />
            </div>
          </div>
        </Editor>
      </div>
    );
  }
}
