// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import _ from 'lodash';
import Input from '@hawk-ui/input';
import Button from '@hawk-ui/button';

export default class FormImage extends Component {
  static propTypes = {
    onCancel: PropTypes.func,
    onInsert: PropTypes.func,
  };
  state = {
    link: '',
    width: '100%',
    height: '100%',
  };

  render() {
    const { onCancel, onInsert } = this.props;
    const { link, width, height } = this.state;

    return (
      <div className="hawk-rich-text-editor__form">
        <div className="hawk-rich-text-editor__form-content">
          <Input
            type="text"
            value={link}
            onChange={(event) => {
              this.setState({
                link: event.target.value,
              });
            }}
            label="Image (URL)"
            description="Please enter a valid URL or merge field."
            placeholder="https://example.com"
            isRequired
          />
        </div>
        <div className="hawk-rich-text-editor__form-content">
          <div className="hawk-rich-text-editor__form-rows">
            <div className="hawk-rich-text-editor__form-field">
              <Input
                type="text"
                value={width}
                onChange={(event) => {
                  this.setState({
                    width: event.target.value,
                  });
                }}
                label="Width"
                placeholder="100px / 100%"
                isRequired
              />
            </div>
            <div className="hawk-rich-text-editor__form-field">
              <Input
                type="text"
                value={height}
                onChange={(event) => {
                  this.setState({
                    height: event.target.value,
                  });
                }}
                label="Height"
                placeholder="100px / 100%"
                isRequired
              />
            </div>
          </div>
        </div>
        <div className="hawk-rich-text-editor__form-button">
          <Button
            variant="outlined"
            onClick={onCancel}
          >
            <span>Cancel</span>
          </Button>
          <Button
            isDisabled={_.isEmpty(link) && _.isEmpty(width) && _.isEmpty(height)}
            onClick={() => {
              onInsert(this.state);
              this.setState({
                link: '',
              });
            }}
          >
            <span>Insert</span>
          </Button>
        </div>
      </div>
    );
  }
}
