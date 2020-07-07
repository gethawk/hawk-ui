// vendor modules
import React, { Component } from 'react';
// react modules
import _ from 'lodash';
import { Editor, Frame, Element } from '@craftjs/core';
import Toolbar from './toolbar/Toolbar';
import Blocks from './blocks/Blocks';
// block modules
import Column from './blocks/components/Column/Column';
import Button from './blocks/components/Button/Button';
import Text from './blocks/components/Text/Text';
import Divider from './blocks/components/Divider/Divider';
import Image from './blocks/components/Image/Image';
// layouts modules
import Container from './layouts/components/Container/Container';
import Layout1 from './layouts/components/Layout1/Layout1';
import Layout2 from './layouts/components/Layout2/Layout2';
import Layout3 from './layouts/components/Layout3/Layout3';
import Layout4 from './layouts/components/Layout4/Layout4';
import Layout5 from './layouts/components/Layout5/Layout5';
import Layout6 from './layouts/components/Layout6/Layout6';
import Layout7 from './layouts/components/Layout7/Layout7';
import Layout8 from './layouts/components/Layout8/Layout8';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class EmailEditor extends Component {
  state = {
    enabled: true,
    selectedLayout: 1,
  };

  render() {
    const { enabled, selectedLayout } = this.state;

    return (
      <div className="hawk-email-editor">
        <Editor
          resolver={{
            Column, Button, Text, Divider, Image,
          }}
          enabled={true}
        >
          <div container className="hawk-email-editor__container">
            <div className="hawk-email-editor__frame">
              <Frame>
                <Element
                  is={Container}
                >
                  <Element
                    is={Container}
                    padding={5}
                    background="#eeeeee"
                  />
                  <Element
                    is={Container}
                    padding={5}
                    background="#eeeeee"
                  >
                    {/* <Text /> */}
                  </Element>
                  {/* <Layout1 /> */}
                </Element>
              </Frame>
            </div>
            <div className="hawk-email-editor__panel">
              {/* <Blocks /> */}
              <Toolbar
                selectedLayout={selectedLayout}
                onSelectLayout={(event) => {
                  this.setState({
                    selectedLayout: event,
                  });
                }}
              />
            </div>
          </div>
        </Editor>
      </div>
    );
  }
}
