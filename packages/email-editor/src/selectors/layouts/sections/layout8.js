// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
import { Frame, Element } from '@craftjs/core';
import Blocks from '../../blocks';

export default function Layout8() {
  const Text = _.get(Blocks, 'text');

  return (
    <Frame>
      <Element
        canvas
        is={_.get(Blocks, 'container')}
        padding={5}
        background="#eeeeee"
      >
        <Text />
      </Element>
    </Frame>
  );
}
