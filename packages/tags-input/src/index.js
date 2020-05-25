// vendor modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import getClassNames from 'classnames';
import Suggestions from '@hawk-ui/suggestions';
import Label from '@hawk-ui/label';
// utility modules
import { keyCodes } from '../../../constants';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class TagsInput extends Component {
  static propTypes = {
    suggestions: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    label: PropTypes.string,
    description: PropTypes.string,
    isRequired: PropTypes.bool,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
    tags: PropTypes.array,
    renderTag: PropTypes.func,
    searchValue: PropTypes.string,
    searchContent: PropTypes.array,
    placeholder: PropTypes.string,
    renderSuggestion: PropTypes.func,
    messageIfEmpty: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onAddTag: PropTypes.func,
    onRemoveTag: PropTypes.func,
  };
  static defaultProps = {
    renderTag: () => ('render tag'),
  }
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    suggestions: this.props.suggestions,
    isOpen: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  onClick = (event) => {
    if (this.myRef.current.contains(event.target)) {
      return;
    }
    this.setState({
      isOpen: false,
    });
  }

  triggerFocus = () => {
    this.inputInstance.focus();
  };

  render() {
    const { label, description, isRequired, isError, errorMessage, placeholder, onChange, renderSuggestion, messageIfEmpty, onAddTag, tags } = this.props;
    const { isOpen } = this.state;

    return (
      <Fragment>
        {label && (
          <Label
            title={label}
            isRequired={isRequired}
            className="hawk-tags-input__label"
          />
        )}
        <div ref={this.myRef} className="hawk-tags-input">
          <Suggestions
            suggestions={this.state.suggestions}
            renderSuggestion={renderSuggestion}
            searchContent={this.props.searchContent}
            onSuggestionSelect={
              (suggestion, meta) => {
                onAddTag(suggestion, meta);
                this.setState({ isOpen: false });
              }
            }
          >
            <div
              className={getClassNames('hawk-tags-input__wrapper', {
                'hawk-tags-input__wrapper-error': isRequired && isError,
              })}
              onClick={() => { this.triggerFocus(); }}
            >
              {_.map(tags, (item, index) => (
                <React.Fragment>
                  {!_.isEmpty(item) && (
                    <span
                      className="hawk-tags-input__tag"
                      key={index}
                    >
                      {this.props.renderTag(item)}
                      <i
                        className="fa fa-times hawk-tags-input__tag-icon"
                        onClick={() => { this.props.onRemoveTag(item, index, { isBackspace: false }); }}
                      />
                    </span>
                  )}
                </React.Fragment>
              ))}
              <Suggestions.INPUT
                value={this.props.searchValue}
                placeholder={placeholder}
                onChange={(event) => {
                  onChange(event);
                  this.setState({ isOpen: true });
                }}
                ref={(ref) => { this.inputInstance = ref; }}
                onKeyDown={(event) => {
                  if (event.keyCode === keyCodes.BACKSPACE) {
                    if (_.isEmpty(this.props.searchValue)) {
                      const index = this.props.tags.length - 1;

                      this.props.onRemoveTag(this.props.tags[index], index, { isBackspace: true });
                    }
                  }
                }}
                isRequired={isRequired}
                isError={isError && isRequired}
              />
            </div>
            {!_.isEmpty(messageIfEmpty) && isOpen && (
              <Suggestions.CONTAINER
                messageIfEmpty={messageIfEmpty}
                onSuggestionClick={(suggestion, meta) => {
                  this.setState({ isOpen: false });
                  onAddTag(suggestion, { ...meta, isSuggestion: true });
                  this.triggerFocus();
                }}
              />
            )}
          </Suggestions>
        </div>
        {!_.isEmpty(description) && (
          <div className="hawk-tags-input__description">{description}</div>
        )}
        {isRequired && isError && (
          <span className="hawk-tags-input__error-message">{errorMessage}</span>
        )}
      </Fragment>
    );
  }
}
