// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react modules
import Suggestions from '@hawk-ui/suggestions';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class SelectDropdown extends Component {
  static propTypes = {
    isIcon: PropTypes.bool,
    isEditable: PropTypes.bool,
    suggestions: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    searchValue: PropTypes.string,
    searchContent: PropTypes.array,
    placeholder: PropTypes.string,
    renderSuggestion: PropTypes.func,
    onSuggestionSelect: PropTypes.func,
    messageIfEmpty: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
  };
  static defaultProps = {
    isEditable: false,
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

  onChange = (event) => {
    if (this.props.isEditable) {
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
    const { isIcon, isEditable, placeholder, renderSuggestion, onSuggestionSelect, messageIfEmpty } = this.props;
    const { isOpen } = this.state;

    return (
      <div ref={this.myRef} className="hawk-select-dropdown">
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
            onClick={() => { this.setState({ isOpen: !isOpen }); }}
          >
            {isIcon && (
              <i className="fa fa-sort-down hawk-select-dropdown__icon" />
            )}
            <Suggestions.INPUT
              value={this.props.searchValue}
              placeholder={placeholder}
              onChange={(value) => {
                this.onChange(value);
              }}
              readOnly={!isEditable}
            />
          </div>
          {isOpen && (
            <Suggestions.CONTAINER
              messageIfEmpty={messageIfEmpty}
              onSuggestionClick={(suggestion, meta) => {
                onSuggestionSelect(suggestion, meta);
                this.setState({ isOpen: false });
              }}
            />
          )}
        </Suggestions>
      </div>
    );
  }
}
