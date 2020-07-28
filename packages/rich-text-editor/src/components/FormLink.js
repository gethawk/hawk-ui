// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import _ from 'lodash';
import Input from '@hawk-ui/input';
import Button from '@hawk-ui/button';

export default class FormLink extends Component {
  static propTypes = {
    onCancel: PropTypes.func,
    onInsert: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };
  state = {
    link: '',
  };

  render() {
    const { onCancel, onInsert, onFocus, onBlur } = this.props;
    const { link } = this.state;

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
            onFocus={() => { onFocus(); }}
            onBlur={() => { onBlur(); }}
            label="Web address (URL)"
            description="Please enter a valid URL or merge field."
            placeholder="https://example.com"
            isRequired
          />
        </div>
        <div className="hawk-rich-text-editor__form-button">
          <Button
            variant="outlined"
            onClick={onCancel}
          >
            <span>Cancel</span>
          </Button>
          <Button
            isDisabled={_.isEmpty(link)}
            onClick={() => {
              onInsert(this.state);
            }}
          >
            <span>Insert</span>
          </Button>
        </div>
      </div>
    );
  }
}
