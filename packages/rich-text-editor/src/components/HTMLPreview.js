// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';

export default class HTMLPreview extends Component {
  static propTypes = {
    html: PropTypes.string,
  };

  state = {};

  render() {
    const { html } = this.props;

    return (
      <div className="hawk-rich-text-editor__html-preview">
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }
}
