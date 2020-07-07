// vendor modules
import React, { Component } from 'react';
// react modules
import _ from 'lodash';
import { Editor } from '@craftjs/core';
import Toolbar from './toolbar/Toolbar';
// block modules
import Column from './blocks/components/Column/Column';
import Button from './blocks/components/Button/Button';
import Text from './blocks/components/Text/Text';
import Divider from './blocks/components/Divider/Divider';
import Image from './blocks/components/Image/Image';
// layouts modules
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
          enabled={enabled}
        >
          <div className="hawk-email-editor__container">
            <div className="hawk-email-editor__frame">
              {_.isEqual(selectedLayout, 1) ? (
                <Layout1 />
              ) : _.isEqual(selectedLayout, 2) ? (
                <Layout2 />
              ) : _.isEqual(selectedLayout, 3) ? (
                <Layout3 />
              ) : _.isEqual(selectedLayout, 4) ? (
                <Layout4 />
              ) : _.isEqual(selectedLayout, 5) ? (
                <Layout5 />
              ) : _.isEqual(selectedLayout, 6) ? (
                <Layout6 />
              ) : _.isEqual(selectedLayout, 7) ? (
                <Layout7 />
              ) : _.isEqual(selectedLayout, 8) ? (
                <Layout8 />
              ) : null}
            </div>
            <div className="hawk-email-editor__panel">
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
