// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import _ from 'lodash';
import Button from '@hawk-ui/button';
import Input from '@hawk-ui/input';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class FileUpload extends Component {
  static propTypes = {
    isDescribable: PropTypes.bool,
    onUpload: PropTypes.func,
  };
  static defaultProps = {
    isDescribable: false,
  };
  state = {
    fileName: '',
  };

  onFileUpload = () => {
    this.uploadButton.click();
  };

  onFileSelect = (event) => {
    const files = event.target.files;

    if (files.length) {
      this.setState({
        fileName: _.get(files[0], 'name'),
      });
      this.props.onUpload(files[0]);
    }
  };

  render() {
    const { isDescribable } = this.props;
    const { fileName } = this.state;

    return (
      <div className="hawk-file-upload">
        <div className="hawk-file-upload__section">
          {isDescribable && (
            <div className="hawk-file-upload__option">
              <Input
                type="text"
                label="Upload File"
                placeholder=""
                value={fileName}
                isDisabled
                isRequired
                description="Supported file types: Microsoft Excel format (*.xls), Comma separated values format (*.csv), Text format (*.txt). View format instructions."
              />
            </div>
          )}
          <Button
            onClick={() => {
              this.onFileUpload();
            }}
          >
            <span>Browse</span>
          </Button>
        </div>
        <input
          ref={(ref) => { this.uploadButton = ref; }}
          type="file"
          onChange={(event) => { this.onFileSelect(event); }}
        />
      </div>
    );
  }
}
