// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
import { Frame, Element } from '@craftjs/core';
import Blocks from '../../blocks';

export default function Layout7() {
  const Text = _.get(Blocks, 'text');
  const Image = _.get(Blocks, 'image');

  return (
    <Frame>
      <Element
        canvas
        is={_.get(Blocks, 'container')}
        padding={5}
        background="#eeeeee"
      >
        <div className="hawk-email-editor-frame">
          <div className="hawk-email-editor-frame__section">
            <Image />
            <Text />
          </div>
          <div className="hawk-email-editor-frame__section">
            <div className="hawk-email-editor-frame__rows">
              <div className="hawk-email-editor-frame__column">
                <Text />
              </div>
              <div className="hawk-email-editor-frame__column">
                <Image />
                <Text />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </Frame>
  );
}
