// vendor modules
import React, { Fragment, Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
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
    label: PropTypes.string,
    description: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    isIcon: PropTypes.bool,
    isDescribable: PropTypes.bool,
    isDraggable: PropTypes.bool,
    onUpload: PropTypes.func,
  };
  static defaultProps = {
    isDescribable: false,
    isDraggable: false,
    isIcon: false,
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
    const { label, description, placeholder, title, isDescribable, isDraggable, isIcon } = this.props;
    const { fileName } = this.state;

    return (
      <div className="hawk-file-upload">
        {isDraggable ? (
          <div className="hawk-file-upload__draggable">
            <div className="hawk-file-upload__draggable-content">
              <div className="hawk-file-upload__draggable-title">{title}</div>
              <div className="hawk-file-upload__draggable-description">{description}</div>
              <Button
                onClick={() => {
                  this.onFileUpload();
                }}
              >
                <span>Browse</span>
              </Button>
            </div>
            <input
              type="file"
              onChange={(event) => { this.onFileSelect(event); }}
            />
          </div>
        ) : (
          <Fragment>
            <div
              className={getClassnames('hawk-file-upload__section', {
                'hawk-file-upload__section-label': _.isString(label),
              })}
            >
              {isDescribable && (
                <div className="hawk-file-upload__option">
                  <Input
                    type="text"
                    label={label}
                    placeholder={placeholder}
                    value={fileName}
                    isDisabled
                    description={description}
                  />
                </div>
              )}
              <Button
                onClick={() => {
                  this.onFileUpload();
                }}
              >
                {!isIcon ? (
                  <span>{title}</span>
                ) : (
                  <i className={title} />
                )}
              </Button>
            </div>
            <input
              ref={(ref) => { this.uploadButton = ref; }}
              type="file"
              onChange={(event) => { this.onFileSelect(event); }}
            />
          </Fragment>
        )}
      </div>
    );
  }
}
