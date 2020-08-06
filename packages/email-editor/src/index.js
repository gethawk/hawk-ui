// vendor modules
import React, { Component } from 'react';
// react modules
import { Editor } from '@craftjs/core';
import _ from 'lodash';
import Blocks from './selectors/blocks';
import RenderNode from './editor/renderNode';
import ViewPort from './editor/viewPort/viewPort';
import Layout1 from './selectors/layouts/sections/layout1';
import Layout2 from './selectors/layouts/sections/layout2';
// css modules
import './assets/scss/main.scss';

/**
 * @example ../README.md
 */
export default class EmailEditor extends Component {
  state = {
    layoutRender: 1,
    enabled: true,
  };

  render() {
    const { layoutRender, enabled } = this.state;

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
          <ViewPort
            onSelectLayout={(event) => {
              this.setState({
                layoutRender: event,
              });
            }}
            selectedLayout={layoutRender}
          >
            {_.isEqual(layoutRender, 1) ? (
              <Layout1 />
            ) : _.isEqual(layoutRender, 2) ? (
              <Layout2 />
            ) : null}
          </ViewPort>
        </Editor>
      </div>
    );
  }
}
