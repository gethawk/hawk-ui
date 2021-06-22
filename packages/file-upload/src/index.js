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
    variant: PropTypes.oneOf(['button', 'input', 'draggable']),
    label: PropTypes.string,
    description: PropTypes.string,
    placeholder: PropTypes.string,
    accept: PropTypes.string,
    title: PropTypes.string,
    btnTitle: PropTypes.string,
    btnIcon: PropTypes.string,
    isMultiple: PropTypes.bool,
    onUpload: PropTypes.func,
  };
  static defaultProps = {
    variant: 'button',
    accept: '*',
    isMultiple: false,
    btnTitle: <span>Browse</span>,
  };
  state = {
    fileNames: [],
  };

  onFileUpload = () => {
    this.uploadButton.click();
  };

  onFileSelect = (event) => {
    const files = event.target.files;
    const names = _.map(files, (item) => item.name);

    if (files.length) {
      this.setState({
        fileNames: names,
      });
      this.props.onUpload(files);
    }
  };

  render() {
    const { variant, label, description, placeholder, title, btnTitle, btnIcon, accept, isMultiple } = this.props;
    const { fileNames } = this.state;

    return (
      <div className="hawk-file-upload">
        {_.isEqual(variant, 'draggable') ? (
          <div
            className="hawk-file-upload__draggable"
            onClick={() => {
              this.onFileUpload();
            }}
          >
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
                <div className="hawk-file-upload__draggable-filenames">
                  {_.map(fileNames, (name) => `${name}, `)}
                </div>
              )}
            </div>
            <input
              type="file"
              accept={accept}
              multiple={isMultiple}
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
