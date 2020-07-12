// vendor modules
import React, { Component } from 'react';
// react modules
import { Editor, Frame, Element } from '@craftjs/core';
// block modules
import HawkColumn from './components/blocks/hawkColumn/HawkColumn';
import HawkButton from './components/blocks/hawkButton/HawkButton';
import HawkText from './components/blocks/hawkText/HawkText';
import HawkDivider from './components/blocks/hawkDivider/HawkDivider';
import HawkImage from './components/blocks/hawkImage/HawkImage';
import HawkContainer from './components/blocks/hawkContainer/HawkContainer';
import RenderNode from './components/globals/RenderNode';
import ViewPort from './components/viewPort/ViewPort';
// css modules
import './scss/index.scss';

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
          resolver={{
            HawkColumn, HawkButton, HawkText, HawkDivider, HawkImage,
          }}
          enabled={enabled}
          onRender={RenderNode}
        >
          <ViewPort>
            <Frame>
              <Element canvas is={HawkContainer} padding={5} background="#eeeeee">
                <HawkText>This is title</HawkText>
              </Element>
            </Frame>
          </ViewPort>
        </Editor>
      </div>
    );
  }
}
