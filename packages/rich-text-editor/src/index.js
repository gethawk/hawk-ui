// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import Button from '@hawk-ui/button';
import Dropdown from '@hawk-ui/dropdown';
// utils modules
import { getTools } from './utils/tools';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class RichTextEditor extends Component {
  state = {};

  render() {

    console.log('query getTools', getTools);
    return (
      <div className="hawk-rich-text-editor">
        <div className="hawk-rich-text-editor__toolbar">
          {_.map(getTools, (tool, index) => (
            <Fragment>
              {_.isEqual(tool.field_type, 'button') && (
                <Button
                  key={index}
                >
                  {tool.is_icon ? (
                    <i className={tool.title} />
                  ) : (
                    <span>{tool.title}</span>
                  )}
                </Button>
              )}
              {_.isEqual(tool.field_type, 'select') && (
                <Dropdown
                  title={tool.title}
                  isIcon
                  suggestions={_.get(tool, 'suggest.options')}
                  renderSuggestion={(suggestion) => suggestion[_.get(tool, 'suggest.name')]}
                  selectValue={(meta, item) => {
                    console.log('query select', meta, item);
                  }}
                />
              )}
            </Fragment>
          ))}
        </div>
        <div className="hawk-rich-text-editor__editable" contentEditable="true"></div>
      </div>
    );
  }
}
