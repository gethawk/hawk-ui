// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import getClassnames from 'classnames';
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
  state = {
    value: '',
  };

  onHandleTags = (tool, tag) => {
    console.log('query tool', tool);
    console.log('query tag', tag);
    const containerEditable = document.getElementById('containerEditable');

    const sel = window.getSelection();
    const text = containerEditable.innerHTML;

    containerEditable.innerHTML = text.replace(sel, `<${tag}>${sel}</${tag}>`);
  };

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
                  // onClick={() => {
                  //   this.onHandleTags(_.get(tool, 'name'), _.get(tool, 'tagNames'));
                  // }}
                  onClick={() => {
                    document.execCommand(_.get(tool, 'name'), false, _.get(tool, 'tagNames'));
                  }}
                >
                  {!_.isEmpty(tool.contentFA) ? (
                    <i className={tool.contentFA} />
                  ) : (
                    <span>{tool.contentDefault}</span>
                  )}
                </Button>
              )}
            </Fragment>
          ))}
          {/* {_.map(getTools, (tool, index) => (
            <Fragment>
              {_.isEqual(tool.field_type, 'button') && (
                <Button
                  key={index}
                  onClick={() => {
                    this.onHandleTags(_.get(tool, 'type'));
                  }}
                  // onClick={() => {
                  //   document.execCommand(_.get(tool, 'type'), false, '');
                  // }}
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
                  renderSuggestion={(suggestion) =>
                    <Fragment>
                      {_.isEqual(_.get(tool, 'style'), 'heading') ? (
                        <div dangerouslySetInnerHTML={{ __html: `<h${suggestion[_.get(tool, 'suggest.value')]}>${suggestion[_.get(tool, 'suggest.name')]}</h${suggestion[_.get(tool, 'suggest.value')]}>` }} />
                      ) : (
                        <span
                          style={_.isEqual(_.get(tool, 'style'), 'fontSize') ?
                            { fontSize: `${suggestion[_.get(tool, 'suggest.name')]}px` } :
                              _.isEqual(_.get(tool, 'style'), 'fontFamily') ?
                            { fontFamily: suggestion[_.get(tool, 'suggest.name')] } : null
                          }
                        >
                          {suggestion[_.get(tool, 'suggest.name')]}
                        </span>
                      )}
                    </Fragment>
                  }
                  selectValue={(meta, item) => {
                    console.log('query select', meta, item);
                  }}
                />
              )}
            </Fragment>
          ))} */}
        </div>
        <div
          className={getClassnames('hawk-rich-text-editor__editable', {
            'hawk-rich-text-editor__editable-blank': _.isEmpty(this.state.value),
          })}
          id="containerEditable"
          contentEditable
          data-placeholder="Add description"
          spellCheck="true"
          onInput={(event) => {
            this.setState({
              value: event.target.textContent,
            });
          }}
          data-medium-focused
          style={{ textAlign: 'left' }}
        />
      </div>
    );
  }
}
