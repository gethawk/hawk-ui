// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import Suggestions from '@hawk-ui/suggestions';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class TagsInput extends Component {
  static propTypes = {
    isIcon: PropTypes.bool,
    suggestions: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    searchValue: PropTypes.string,
    searchContent: PropTypes.array,
    placeholder: PropTypes.string,
    onSearchChange: PropTypes.string,
    renderSuggestion: PropTypes.func,
    onSuggestionSelect: PropTypes.func,
    messageIfEmpty: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
  };
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

  render() {
    const { isIcon, placeholder, onSearchChange, renderSuggestion, onSuggestionSelect, messageIfEmpty } = this.props;
    const { isOpen } = this.state;

    return (
      <div ref={this.myRef} className="hawk-tags-input">
        <Suggestions
          suggestions={this.state.suggestions}
          renderSuggestion={renderSuggestion}
          onSuggestionSelect={
            (suggestion, meta) => {
              onSuggestionSelect(suggestion, meta);
              this.setState({ isOpen: false });
            }
          }
        >
          <div
            className="hawk-tags-input__input"
            onClick={() => { this.setState({ isOpen: !isOpen }); }}
          >
            {isIcon && (
              <i className="fa fa-sort-down hawk-tags-input__icon" />
            )}
            <Suggestions.INPUT
              value={this.props.searchValue}
              placeholder={placeholder}
              onChange={(value) => {
                const searchValue = value.toLowerCase();

                const suggestions = _.filter(this.props.suggestions, (suggestion) => _.reduce(this.props.searchContent, (result, key) => {
                  if (suggestion[key].toLowerCase().includes(searchValue)) { return true; }

                  return result || false;
                }, false));

                this.setState({
                  suggestions,
                }, () => {
                  onSearchChange(value);
                });

                if (!_.isEmpty(suggestions)) {
                  this.setState({ isOpen: true });
                }
              }}
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
