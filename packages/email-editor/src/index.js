// vendor modules
import React, { Component } from 'react';
// react modules
import { Editor, Frame, Element } from '@craftjs/core';
import Toolbar from './components/toolbar/Toolbar';
// block modules
import HawkColumn from './components/blocks/hawkColumn/HawkColumn';
import HawkButton from './components/blocks/hawkButton/HawkButton';
import HawkText from './components/blocks/hawkText/HawkText';
import HawkDivider from './components/blocks/hawkDivider/HawkDivider';
import HawkImage from './components/blocks/hawkImage/HawkImage';
import HawkContainer from './components/blocks/hawkContainer/HawkContainer';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class EmailEditor extends Component {
  state = {
    selectedLayout: 1,
  };

  render() {
    const { selectedLayout } = this.state;

    return (
      <div className="hawk-email-editor">
        <Editor
          resolver={{
            HawkColumn, HawkButton, HawkText, HawkDivider, HawkImage,
          }}
        >
          <div container className="hawk-email-editor__container">
            <div className="hawk-email-editor__frame">
              <Frame>
                <Element canvas is={HawkContainer} padding={5} background="#eeeeee">
                  <HawkText>This is title</HawkText>
                </Element>
              </Frame>
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
