// vendor modules
import React, { Fragment, Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
import Button from '@hawk-ui/button';
import Input from '@hawk-ui/input';
import Loader from '@hawk-ui/loader';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class FileUpload extends Component {
  static propTypes = {
    variant: PropTypes.oneOf(['button', 'input', 'draggable']),
    label: PropTypes.string,
    description: PropTypes.string,
    placeholder: PropTypes.string,
    accept: PropTypes.string,
    title: PropTypes.string,
    btnTitle: PropTypes.string,
    btnIcon: PropTypes.string,
    isMultiple: PropTypes.bool,
    isLoading: PropTypes.bool,
    fileNames: PropTypes.array,
    onUpload: PropTypes.func,
  };
  static defaultProps = {
    variant: 'button',
    accept: '*',
    isMultiple: false,
    isLoading: false,
    fileNames: [],
    btnTitle: <span>Browse</span>,
  };
  state = {};

  onFileUpload = () => {
    this.uploadButton.click();
  };

  onFileSelect = (event) => {
    const files = event.target.files;

    if (files.length) {
      this.props.onUpload(files);
    }
  };

  render() {
    const { variant, label, description, placeholder, title, btnTitle, btnIcon, accept, isMultiple, isLoading, fileNames } = this.props;

    return (
      <div className="hawk-file-upload">
        {_.isEqual(variant, 'draggable') ? (
          <div className="hawk-file-upload__draggable">
            <div className="hawk-file-upload__draggable-content">
              {_.isEmpty(fileNames) ? (
                <Fragment>
                  {title && (
                    <div className="hawk-file-upload__draggable-title">{title}</div>
                  )}
                  {description && (
                    <div className="hawk-file-upload__draggable-description">{description}</div>
                  )}
                </Fragment>
              ) : (
                <Fragment>
                  {isLoading ? (
                    <Loader
                      type="jelly"
                    />
                  ) : (
                    <div className="hawk-file-upload__draggable-filenames">
                      {_.map(fileNames, (name) => `${name}, `)}
                    </div>
                  )}
                </Fragment>
              )}
            </div>
            <input
              type="file"
              accept={accept}
              multiple={isMultiple}
              onChange={(event) => {
                this.onFileSelect(event);
              }}
              onClick={(event) => {
                event.target.value = null;
              }}
            />
          </div>
        ) : (
          <Fragment>
            <div
              className={getClassnames('hawk-file-upload__section', {
                'hawk-file-upload__section-label': _.isString(label),
              })}
            >
              {_.isEqual(variant, 'input') && (
                <div className="hawk-file-upload__option">
                  <Input
                    type="text"
                    label={label}
                    placeholder={placeholder}
                    value={fileNames}
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
                {_.isEmpty(fileNames) ? (
                  !btnIcon ? (
                    btnTitle
                  ) : (
                    <i className={btnIcon} />
                  )
                ) : (
                  <span>Selected</span>
                )}
              </Button>
            </div>
            <input
              ref={(ref) => { this.uploadButton = ref; }}
              type="file"
              accept={accept}
              multiple={isMultiple}
              onChange={(event) => { this.onFileSelect(event); }}
            />
          </Fragment>
        )}
      </div>
    );
  }
}
