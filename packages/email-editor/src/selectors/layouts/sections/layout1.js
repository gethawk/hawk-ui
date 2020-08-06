// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
import { Frame, Element } from '@craftjs/core';
import Blocks from '../../blocks';

export default function Layout1() {
  const Text = _.get(Blocks, 'text');
  const Image = _.get(Blocks, 'image');

  return (
    <Frame>
      <Element canvas is={_.get(Blocks, 'container')} padding={5} background="#eeeeee">
        <div>
          <div className="">
            <Image />
            <Text />
          </div>
          <div className="">
            <Image />
            <Text />
          </div>
        </div>
      </Element>
    </Frame>
  );
}
