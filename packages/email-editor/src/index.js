// vendor modules
import React, { Component } from 'react';
// react modules
import { Editor, Frame, Element } from '@craftjs/core';
import _ from 'lodash';
import Blocks from './selectors/blocks';
import RenderNode from './editor/renderNode';
import ViewPort from './editor/viewPort/viewPort';
// css modules
import './assets/scss/main.scss';

/**
 * @example ../README.md
 */
export default class EmailEditor extends Component {
  state = {
    enabled: true,
  };

  render() {
    const { enabled } = this.state;
    const Text = _.get(Blocks, 'text');

    return (
      <div className="hawk-email-editor">
        <Editor
          resolver={
            _.map(Blocks, (item) => {
              _.keys(item);
            })
          }
          enabled={enabled}
          onRender={RenderNode}
        >
          <ViewPort>
            <Frame>
              <Element canvas is={_.get(Blocks, 'container')} padding={5} background="#eeeeee">
                <Text>This is Title</Text>
              </Element>
            </Frame>
          </ViewPort>
        </Editor>
      </div>
    );
  }
}
