// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
import PropTypes from 'prop-types';
import Button from '@hawk-ui/button';
import { useNode } from '@craftjs/core';
import HawkImageSettings from './HawkImageSettings';

export default function HawkImage(props) {
  const { image } = props;
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={(ref) => { connect(drag(ref)); }}
      className="image-editor"
    >
      {!_.isEmpty(image) ? (
        <img
          src={image}
        />
      ) : (
        <div className="image-editor__box">
          <div className="image-editor__box-title">Choose image for upload</div>
          <Button>
            <span>Upload Image</span>
          </Button>
        </div>
      )}
    </div>
  );
}

HawkImage.craft = {
  displayName: 'Image',
  related: {
    settings: HawkImageSettings,
  },
};

HawkImage.propTypes = {
  image: PropTypes.string,
};
