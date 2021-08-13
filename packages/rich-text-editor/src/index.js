// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import getClassnames from 'classnames';
import Button from '@hawk-ui/button';
import Dropdown from '@hawk-ui/dropdown';
import Modal from '@hawk-ui/modal';
import ColorPicker from '@hawk-ui/color-picker';
import Components from './components';
import HTMLPreview from './components/HTMLPreview';
// utils modules
import { getTools, getBottomTools } from './utils/tools';
import { onCode } from './utils/codeHandler';
import { onPrint } from './utils/printHandler';
import { onTags } from './utils/tagHandler';
import {
  onSaveRangeEvent,
  onInputFocus,
  onInputBlur,
  onLinkInsert, onImageInsert,
} from './utils/inputHandler';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class RichTextEditor extends Component {
  static propTypes = {
    editableId: PropTypes.string,
    placeholder: PropTypes.string,
    toolbarClass: PropTypes.string,
    editableClass: PropTypes.string,
    toolbarItems: PropTypes.array,
    htmlAttributes: PropTypes.object,
    value: PropTypes.string,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    value: '',
    htmlAttributes: {},
  };
  state = {
    modal: {
      isOpen: false,
      type: '',
    },
    isSource: false,
    formMeta: {
      type: 'link',
      name: 'createlink',
    },
    selectedText: {},
  };

  componentDidMount() {
    const doc = document.getElementById(this.props.editableId);

    doc.innerHTML = this.props.value;
  }

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

  editorHelper = (() => ({
    openModal: ({ isOpen = true, type } = {}) => {
      this.setState({
        modal: {
          isOpen,
          type,
        },
      });
    },
    closeModal: ({ isOpen = false } = {}) => {
      this.setState({
        modal: {
          isOpen,
          type: '',
        },
      });
    },
  }))()

  render() {
    const { editableId, placeholder, toolbarClass, editableClass, toolbarItems, htmlAttributes, value, onChange } = this.props;
    const FormComponent = _.get(Components, _.get(this.state.formMeta, 'type'));

    return (
      <div className="hawk-rich-text-editor">
        <div className="hawk-rich-text-editor__content">
          <div
            className={getClassnames('hawk-rich-text-editor__toolbar', {
              [toolbarClass]: _.isString(toolbarClass),
            })}
          >
            {_.map(getTools, (tool, index) => (
              <Fragment>
                {_.includes(toolbarItems, tool.aria) && (
                  <Fragment>
                    {_.isEqual(tool.field_type, 'button') && tool.isEnable && (
                      <Button
                        key={index}
                        onClick={_.isEqual(tool.name, 'pre') ? () => {
                          this.setState({
                            isSource: !this.state.isSource,
                          }, () => {
                            onCode(this.state.isSource, editableId);
                          });
                        } : _.isEqual(tool.name, 'print') ? () => {
                          onPrint(editableId);
                        } : _.includes(['link', 'img'], _.get(tool, 'tagNames')) ? () => {
                          onSaveRangeEvent();
                          this.setState({
                            formMeta: {
                              name: _.get(tool, 'name'),
                              type: _.get(tool, 'tagNames'),
                            },
                          }, () => {
                            this.editorHelper.openModal({ type: _.get(tool, 'tagNames') });
                          });
                        } : () => {
                          onTags(_.get(tool, 'name'), _.get(tool, 'tagNames'), editableId);
                        }}
                      >
                        {!_.isEmpty(tool.contentFA) ? (
                          <i className={tool.contentFA} />
                        ) : (
                          <span>{tool.contentDefault}</span>
                        )}
                      </Button>
                    )}
                    {_.isEqual(tool.field_type, 'select') && tool.isEnable && (
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
                            editableId,
                          );
                        }}
                      />
                    )}
                    {_.isEqual(tool.field_type, 'color-picker') && tool.isEnable && (
                      <ColorPicker
                        defaultColor="000000"
                        showHexCode={false}
                        isIcon
                        title={tool.contentFA}
                        onSave={(event) => {
                          onTags(_.get(tool, 'style.prop'), _.get(event, 'hex'), editableId);
                        }}
                      />
                    )}
                  </Fragment>
                )}
              </Fragment>
            ))}
          </div>
          <div
            className={getClassnames('hawk-rich-text-editor__editable', {
              'hawk-rich-text-editor__editable-blank': _.isEmpty(value),
              [editableClass]: _.isString(editableClass),
            })}
            {...htmlAttributes}
            id={editableId}
            contentEditable
            data-placeholder={placeholder}
            spellCheck="true"
            onInput={(event) => {
              onChange({ html: event.target.innerHTML, text: event.target.textContent });
            }}
            style={{
              textAlign: 'left',
              height: !_.isEmpty(_.get(htmlAttributes, 'rows')) ? `${_.get(htmlAttributes, 'rows') * 20}px` : '200px',
            }}
          />
          <div className="hawk-rich-text-editor__footer">
            {_.map(getBottomTools, (tool, index) => (
              _.isEqual(tool.field_type, 'button') && tool.isEnable && (
                <Button
                  key={index}
                  onClick={_.isEqual(tool.name, 'preview') ? () => {
                    this.editorHelper.openModal({ type: _.get(tool, 'tagNames') });
                  } : null}
                >
                  <i className={tool.contentFA} />
                </Button>
              )
            ))}
          </div>
        </div>
        <Modal
          isOpen={this.state.modal.isOpen}
          hideCloseIcon={_.isEqual(this.state.modal.type, 'preview')}
          className={getClassnames('hawk-rich-text-editor__modal', {
            [`hawk-rich-text-editor__modal-type-${this.state.modal.type}`]: !_.isEmpty(this.state.modal.type),
          })}
          title={_.isEqual(_.get(this.state.modal, 'type'), 'link')
            ? 'Insert or Edit Link'
            : _.isEqual(_.get(this.state.modal, 'type'), 'img')
              && 'Insert or Edit Image'
          }
          onKeyDown={() => {
            this.editorHelper.closeModal();
          }}
          onClose={() => {
            this.editorHelper.closeModal();
          }}
        >
          {_.includes(['link', 'img'], _.get(this.state.modal, 'type')) && (
            <FormComponent
              onCancel={() => {
                this.editorHelper.closeModal();
              }}
              onInsert={(event) => {
                if (_.isEqual(_.get(this.state.formMeta, 'type'), 'link')) {
                  onLinkInsert(event[_.get(this.state.formMeta, 'type')]);
                } else if (_.isEqual(_.get(this.state.formMeta, 'type'), 'img')) {
                  onImageInsert(event);
                }
                this.editorHelper.closeModal();
              }}
              onFocus={() => {
                onInputFocus();
              }}
              onBlur={() => {
                onInputBlur();
              }}
            />
          )}
          {_.isEqual(this.state.modal.type, 'preview') && (
            <HTMLPreview
              html={value}
            />
          )}
        </Modal>
      </div>
    );
  }
}
