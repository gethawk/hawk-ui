// vendor modules
import React from 'react';
// react modules
import _ from 'lodash';
import PropTypes from 'prop-types';
import FileUpload from '@hawk-ui/file-upload';
import { useNode } from '@craftjs/core';
import Settings from './settings';

export default function FormImage(props) {
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
          <FileUpload />
        </div>
      )}
    </div>
  );
}

FormImage.craft = {
  displayName: 'Image',
  related: {
    settings: Settings,
  },
};

FormImage.propTypes = {
  image: PropTypes.string,
};
