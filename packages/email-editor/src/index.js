// vendor modules
import React, { Component } from 'react';
// react modules
import { Editor } from '@craftjs/core';
import Toolbar from './toolbar/Toolbar';
// block modules
import Button from './blocks/components/Button/Button';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class EmailEditor extends Component {
  state = {
    enabled: true,
  };

  render() {
    const { enabled } = this.state;

    return (
      <div className="hawk-email-editor">
        <Editor
          resolver={{ Button }}
          enabled={enabled}
        >
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
