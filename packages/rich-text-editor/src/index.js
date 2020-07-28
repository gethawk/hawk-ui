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
// utils modules
import { getTools } from './utils/tools';
// css modules
import './index.scss';

let fragment = null;
let range = null;

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

  onHandleTags = (tool, tag) => {
    if (_.isEqual(tool, 'trash')) {
      const doc = document.getElementById('containerEditable');

      doc.innerHTML = '';
      doc.focus();
    } else {
      document.execCommand(tool, false, tag);
    }
  };

  onHandleCode = () => {
    let content;
    const doc = document.getElementById('containerEditable');

    if (this.state.isSource) {
      content = document.createTextNode(doc.innerHTML);
      doc.innerHTML = '';
      const pre = document.createElement('pre');

      doc.contentEditable = false;
      pre.id = 'sourceText';
      pre.contentEditable = true;
      pre.appendChild(content);
      doc.appendChild(pre);
      document.execCommand('defaultParagraphSeparator', false, 'div');
    } else {
      if (document.all) {
        doc.innerHTML = doc.innerText;
      } else {
        content = document.createRange();
        content.selectNodeContents(doc.firstChild);
        doc.innerHTML = content.toString();
      }
      doc.contentEditable = true;
    }
  };

  onHandlePrint = () => {
    const doc = document.getElementById('containerEditable');
    const printWindow = window.open('', '_blank', 'width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes');

    printWindow.document.open();
    printWindow.document.write(`<!doctype html><html><head><title>Print<\/title><\/head><body onload="print();">${doc.innerHTML}<\/body><\/html>`);
    printWindow.document.close();
  };

  onHandleSelected = () => {
    let sel, range;
    // const doc = document.getElementById('containerEditable');
    // const replaceText = 'Hola Hola';

    // console.log('query doc', doc);
    if (window.getSelection) {
      sel = window.getSelection();

      console.log('query sel', sel);
      this.setState({
        selectedText: window.getSelection(),
      }, () => {
        console.log('query selectedText', this.state.selectedText);
      });
      // if (sel.rangeCount) {
      //   console.log('query sel rangeCount', sel.rangeCount);
      //   range = sel.getRangeAt(0);
      //   console.log('query sel range', range);
      //   range.deleteContents();
      //   range.insertNode(document.createTextNode(replaceText));
      // }
    }
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

  onSaveRangeEvent = (event) => {
    range = this.onSaveSelection();

    if (range && !range.collapsed) {
      fragment = range.cloneContents();
    }
    console.log('query onMouse range', range);
  }

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
                      this.onHandleCode();
                    });
                  } : _.isEqual(tool.name, 'print') ? () => {
                    this.onHandlePrint();
                  } : _.includes(['link'], _.get(tool, 'tagNames')) ? () => {
                    this.setState({
                      formMeta: {
                        name: _.get(tool, 'name'),
                        type: _.get(tool, 'tagNames'),
                      },
                      isModalOpen: true,
                    }, () => {
                      this.onHandleSelected();
                    });
                  } : () => {
                    this.onHandleTags(_.get(tool, 'name'), _.get(tool, 'tagNames'));
                  }}
                >
                  {!_.isEmpty(tool.contentFA) ? (
                    <i className={tool.contentFA} />
                  ) : (
                    <span>{tool.contentDefault}</span>
                  )}
                </Button>
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
                    this.onHandleTags(_.get(tool, 'suggest.style'),
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
                    this.onHandleTags(_.get(tool, 'style.prop'), _.get(event, 'hex'));
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
          onMouseUp={this.onSaveRangeEvent}
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
              console.log('query value', value);
              if (_.isEqual(_.get(this.state.formMeta, 'type'), 'link')) {
                const link = document.createElement('a');

                link.href = value[_.get(this.state.formMeta, 'type')];
                range.surroundContents(link);
              }
              // this.onHandleTags(_.get(this.state.formMeta, 'name'), event[_.get(this.state.formMeta, 'type')]);
              this.setState({
                isModalOpen: false,
              });
            }}
            onFocus={() => {
              if (fragment) {
                const span = document.createElement('span');

                console.log('query span', span);
                span.className = 'selected';
                range.surroundContents(span);
              }
            }}
            onBlur={() => {
              if (fragment) {
                range.deleteContents();
                range.insertNode(fragment);
              }
            }}
          />
        </Modal>
      </div>
    );
  }
}
