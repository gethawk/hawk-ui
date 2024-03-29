// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react modules
import getClassnames from 'classnames';
import _ from 'lodash';
import Suggestions from '@hawk-ui/suggestions';
import Label from '@hawk-ui/label';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class SelectDropdown extends Component {
  static propTypes = {
    isIcon: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    suggestions: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    children: PropTypes.element,
    label: PropTypes.string,
    description: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
    searchValue: PropTypes.string,
    searchContent: PropTypes.array,
    placeholder: PropTypes.string,
    renderSuggestion: PropTypes.func,
    onSuggestionSelect: PropTypes.func,
    messageIfEmpty: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    isOverflowEnabled: PropTypes.func,
    className: PropTypes.string,
  };
  static defaultProps = {
    isReadOnly: true,
    isRequired: false,
    isDisabled: false,
    isOverflowEnabled: false,
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

  componentWillReceiveProps(nextProps, prevProps) {
    if (!_.isEqual(nextProps.suggestions, prevProps.suggestions)) {
      this.setState({
        suggestions: nextProps.suggestions,
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  onChange = (event) => {
    if (!this.props.isReadOnly) {
      this.props.onChange(event);
      this.setState({ isOpen: true });
    }
  }

  onClick = (event) => {
    if (this.myRef.current.contains(event.target)) {
      return;
    }
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { children, isIcon, label, description, isDisabled, isRequired, isError, errorMessage, isReadOnly, placeholder, renderSuggestion, onSuggestionSelect, messageIfEmpty, isOverflowEnabled, className } = this.props;
    const { isOpen } = this.state;

    return (
      <div
        className={getClassnames('hawk-select-dropdown', {
          [className]: _.isString(className),
        })}
      >
        {label && (
          <Label
            title={label}
            isRequired={isRequired}
            className="hawk-select-dropdown__label"
          />
        )}
        <div ref={this.myRef} className="hawk-select-dropdown__content">
          <Suggestions
            suggestions={this.state.suggestions}
            renderSuggestion={renderSuggestion}
            searchContent={this.props.searchContent}
            onSuggestionSelect={
              (suggestion, meta) => {
                onSuggestionSelect(suggestion, meta);
                this.setState({ isOpen: false });
              }
            }
          >
            <div
              className="hawk-select-dropdown__input"
              onClick={() => {
                if (!isDisabled) {
                  this.setState({ isOpen: !isOpen });
                }
              }}
            >
              {isIcon && (
                <i className="fa fa-sort-down hawk-select-dropdown__icon" />
              )}
              <Suggestions.INPUT
                value={this.props.searchValue}
                placeholder={placeholder}
                onChange={(event) => {
                  this.onChange(event);
                }}
                readOnly={isReadOnly}
                isRequired={isRequired}
                isDisabled={isDisabled}
                isError={isError && isRequired}
              />
            </div>
            {isOpen && (
              <Suggestions.CONTAINER
                children={children}
                messageIfEmpty={messageIfEmpty}
                onSuggestionClick={(suggestion, meta) => {
                  onSuggestionSelect(suggestion, meta);
                  this.setState({ isOpen: false });
                }}
              />
            )}
          </Suggestions>
        </div>
        {!_.isEmpty(description) && (
          <div className="hawk-select-dropdown__description">{description}</div>
        )}
        {isRequired && isError && (
          <span className="hawk-select-dropdown__error-message">{errorMessage}</span>
        )}
        {isOpen && isOverflowEnabled ? (
          <div className="hawk-select-dropdown__overflow" />
        ) : null}
      </div>
    );
  }
}
