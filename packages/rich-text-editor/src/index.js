// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import getClassnames from 'classnames';
import Button from '@hawk-ui/button';
import FileUpload from '@hawk-ui/file-upload';
import Dropdown from '@hawk-ui/dropdown';
import Modal from '@hawk-ui/modal';
import ColorPicker from '@hawk-ui/color-picker';
import Components from './components';
// utils modules
import { getTools } from './utils/tools';
import { onCode } from './utils/codeHandler';
import { onPrint } from './utils/printHandler';
import { onTags } from './utils/tagHandler';
import { onSaveRangeEvent, onLinkFocus, onLinkBlur, onLinkInsert } from './utils/linkHandler';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class RichTextEditor extends Component {
  state = {
    isModalOpen: false,
    isSource: false,
    value: '',
    formMeta: {
      type: 'link',
      name: 'createlink',
    },
    selectedText: {},
  };

  onHandleInput = (event) => {
    this.setState({
      value: event.target.textContent,
    });
  };

  onSaveSelection = () => {
    if (window.getSelection) {
      const sel = window.getSelection();

      if (sel.getRangeAt && sel.rangeCount) {
        return sel.getRangeAt(0);
      }
    } else if (document.selection && document.selection.createRange) {
      return document.selection.createRange();
    }

    return null;
  };

  render() {
    const FormComponent = _.get(Components, _.get(this.state.formMeta, 'type'));

    return (
      <div className="hawk-rich-text-editor">
        <div className="hawk-rich-text-editor__toolbar">
          {_.map(getTools, (tool, index) => (
            <Fragment>
              {_.isEqual(tool.field_type, 'button') && (
                <Button
                  key={index}
                  onClick={_.isEqual(tool.name, 'pre') ? () => {
                    this.setState({
                      isSource: !this.state.isSource,
                    }, () => {
                      onCode(this.state.isSource);
                    });
                  } : _.isEqual(tool.name, 'print') ? () => {
                    onPrint();
                  } : _.includes(['link'], _.get(tool, 'tagNames')) ? () => {
                    this.setState({
                      formMeta: {
                        name: _.get(tool, 'name'),
                        type: _.get(tool, 'tagNames'),
                      },
                      isModalOpen: true,
                    });
                  } : () => {
                    onTags(_.get(tool, 'name'), _.get(tool, 'tagNames'));
                  }}
                >
                  {!_.isEmpty(tool.contentFA) ? (
                    <i className={tool.contentFA} />
                  ) : (
                    <span>{tool.contentDefault}</span>
                  )}
                </Button>
              )}
              {_.isEqual(tool.field_type, 'file') && (
                <FileUpload
                  title="Browse"
                  onUpload={(file) => {
                    console.log('file', file);
                  }}
                />
              )}
              {_.isEqual(tool.field_type, 'select') && (
                <Dropdown
                  title={tool.contentDefault}
                  isIcon
                  suggestions={_.get(tool, 'suggest.options')}
                  renderSuggestion={(suggestion) =>
                    <Fragment>
                      {_.isEqual(_.get(tool, 'suggest.style'), 'formatblock') ? (
                        <div
                          dangerouslySetInnerHTML={{ __html: `<h${suggestion[_.get(tool, 'suggest.value')]}>${suggestion[_.get(tool, 'suggest.name')]}</h${suggestion[_.get(tool, 'suggest.value')]}>` }}
                        />
                      ) : (
                        <span
                          style={_.isEqual(_.get(tool, 'suggest.style'), 'fontname') ?
                            { fontFamily: suggestion[_.get(tool, 'suggest.value')] } : null
                          }
                        >
                          {suggestion[_.get(tool, 'suggest.name')]}
                        </span>
                      )}
                    </Fragment>
                  }
                  selectValue={(meta, item) => {
                    onTags(_.get(tool, 'suggest.style'),
                      _.isEqual(_.get(tool, 'suggest.style'), 'formatblock') ?
                        `h${item.value}` :
                        item.value,
                    );
                  }}
                />
              )}
              {_.isEqual(tool.field_type, 'color-picker') && (
                <ColorPicker
                  defaultColor="000000"
                  showHexCode={false}
                  isIcon
                  title={tool.contentFA}
                  onSave={(event) => {
                    onTags(_.get(tool, 'style.prop'), _.get(event, 'hex'));
                  }}
                />
              )}
            </Fragment>
          ))}
        </div>
        <div
          className={getClassnames('hawk-rich-text-editor__editable', {
            'hawk-rich-text-editor__editable-blank': _.isEmpty(this.state.value),
          })}
          id="containerEditable"
          contentEditable
          data-placeholder="Add description"
          spellCheck="true"
          onInput={(event) => { this.onHandleInput(event); }}
          style={{ textAlign: 'left' }}
          onMouseUp={onSaveRangeEvent}
        />
        <Modal
          isOpen={this.state.isModalOpen}
          className="hawk-rich-text-editor__modal"
          title="Insert or Edit Link"
          onKeyDown={() => {
            this.setState({ isModalOpen: false });
          }}
          onClose={() => {
            this.setState({ isModalOpen: false });
          }}
        >
          <FormComponent
            onCancel={() => {
              this.setState({ isModalOpen: false });
            }}
            onInsert={(value) => {
              if (_.isEqual(_.get(this.state.formMeta, 'type'), 'link')) {
                onLinkInsert(value[_.get(this.state.formMeta, 'type')]);
              }
              this.setState({
                isModalOpen: false,
              });
            }}
            onFocus={() => {
              onLinkFocus();
            }}
            onBlur={() => {
              onLinkBlur();
            }}
          />
        </Modal>
      </div>
    );
  }
}