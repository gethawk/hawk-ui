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
    value: '',
  };

  onHandleTags = (tool, tag) => {
    if (_.includes(['link'], tag)) {
      this.setState({
        isModalOpen: true,
      });
    } else {
      document.execCommand(tool, false, tag);
    }
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="hawk-rich-text-editor">
        <div className="hawk-rich-text-editor__toolbar">
          {_.map(getTools, (tool, index) => (
            <Fragment>
              {_.isEqual(tool.field_type, 'button') && (
                <Button
                  key={index}
                  onClick={() => { this.onHandleTags(_.get(tool, 'name'), _.get(tool, 'tagNames')); }}
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
                  onSave={(event) => {
                    console.log('query event', event);
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
          title="Modal Title"
          onKeyDown={() => {
            this.setState({ isModalOpen: false });
          }}
          onClose={() => {
            this.setState({ isModalOpen: false });
          }}
        >
          <div>Modal Window</div>
        </Modal>
      </div>
    );
  }
}
