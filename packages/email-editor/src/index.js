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
import Layout3 from './selectors/layouts/sections/layout3';
import Layout4 from './selectors/layouts/sections/layout4';
import Layout5 from './selectors/layouts/sections/layout5';
import Layout6 from './selectors/layouts/sections/layout6';
import Layout7 from './selectors/layouts/sections/layout7';
import Layout8 from './selectors/layouts/sections/layout8';
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
            ) : _.isEqual(layoutRender, 3) ? (
              <Layout3 />
            ) : _.isEqual(layoutRender, 4) ? (
              <Layout4 />
            ) : _.isEqual(layoutRender, 5) ? (
              <Layout5 />
            ) : _.isEqual(layoutRender, 6) ? (
              <Layout6 />
            ) : _.isEqual(layoutRender, 7) ? (
              <Layout7 />
            ) : _.isEqual(layoutRender, 8) ? (
              <Layout8 />
            ) : null}
          </ViewPort>
        </Editor>
      </div>
    );
  }
}
