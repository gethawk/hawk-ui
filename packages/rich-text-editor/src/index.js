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

/**
 * @example ../README.md
 */
export default class RichTextEditor extends Component {
  state = {
    isModalOpen: false,
    isSource: false,
    value: '',
    formType: 'link',
  };

  onHandleTags = (tool, tag) => {
    if (_.includes(['link'], tag)) {
      this.setState({
        isModalOpen: true,
      });
    } else if (_.isEqual(tool, 'trash')) {
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

  render() {
    const { isModalOpen } = this.state;
    const FormComponent = _.get(Components, this.state.formType);

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
          onInput={(event) => {
            this.setState({
              value: event.target.textContent,
            });
          }}
          data-medium-focused
          style={{ textAlign: 'left' }}
        />
        <Modal
          isOpen={isModalOpen}
          className="hawk-rich-text-editor__modal"
          title="Insert or Edit Link"
          onKeyDown={() => {
            this.setState({ isModalOpen: false });
          }}
          onClose={() => {
            this.setState({ isModalOpen: false });
          }}
        >
          <FormComponent />
        </Modal>
      </div>
    );
  }
}
