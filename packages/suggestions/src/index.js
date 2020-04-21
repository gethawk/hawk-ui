// vendor modules
import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// React modules
import Input from '@hawk-ui/input';
// utility modules
import { keyCodes } from '../../../constants';
// css modules
import './index.scss';

const SuggestionContext = createContext({
  onKeyDown: () => {},
  onSearch: () => {},
});

class SuggestionsInput extends Component {
  static displayName = 'SuggestionsInput';
  static propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func,
  };
  state = {};

  render() {
    const { placeholder, value, onChange } = this.props;

    return (
      <SuggestionContext.Consumer>
        {({ onKeyDown, onSearch }) => (
          <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(event) => {
              onSearch(event);
              onChange(event);
            }}
            onKeyDown={(event) => {
              onKeyDown(event);
            }}
          />
        )}
      </SuggestionContext.Consumer>
    );
  }
}

class SuggestionsWrap extends Component {
  static displayName = 'SuggestionsWrap';
  static contextType = SuggestionContext;
  static propTypes = {
    messageIfEmpty: PropTypes.string,
    onSuggestionClick: PropTypes.func,
  };
  state = {};

  render() {
    return (
      <div className="hawk-suggestions__wrap">
        {!_.isEmpty(_.get(this.context, 'suggestions')) ? (
          <React.Fragment>
            {_.map(_.get(this.context, 'suggestions'), (item, index) => (
              <div
                key={index}
                className={getClassnames('hawk-suggestions__wrap-item', {
                  'hawk-suggestions__wrap-item__selected': this.context.selectedIndex === index,
                })}
                onClick={() => {
                  this.props.onSuggestionClick(item, {
                    provider: 'suggestions',
                  });
                }}
              >
                {this.context.renderSuggestion(item)}
              </div>
            ))}
          </React.Fragment>
        ) : <div className="hawk-suggestions__wrap-message">{this.props.messageIfEmpty}</div>}
      </div>
    );
  }
}

/**
 * @example ../README.md
 */
export default class Suggestions extends Component {
  static displayName = 'Suggestions';
  static propTypes = {
    placeholder: PropTypes.string,
    children: PropTypes.element,
    suggestions: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    renderSuggestion: PropTypes.func,
    onSuggestionSelect: PropTypes.func,
    searchContent: PropTypes.array,
    onSearch: PropTypes.func,
  };
  static INPUT = SuggestionsInput;
  static CONTAINER = SuggestionsWrap;
  constructor(props) {
    super(props);

    this.onSearch = (event) => {
      this.onSearchInput(event);
    };
    this.onKeyDown = (event) => {
      this.onSuggestionsInputKeydown(event);
    };

    this.state = {
      suggestions: this.props.suggestions,
      renderSuggestion: this.props.renderSuggestion,
      selectedIndex: -1,
      onKeyDown: this.onKeyDown,
      onSearch: this.onSearch,
    };
  }

  componentWillReceiveProps() {
    this.setState({
      selectedIndex: -1,
    });
  }

  onSearchInput = (event) => {
    const searchValue = event.toLowerCase();

    const suggestions = _.filter(this.props.suggestions, (content) => _.reduce(this.props.searchContent, (result, key) => {
      if (content[key].toLowerCase().includes(searchValue)) { return true; }

      return result || false;
    }, false));

    this.setState({ suggestions });
  };

  onSuggestionsInputKeydown = (event) => {
    switch (event.keyCode) {
      case keyCodes.ENTER: {
        const isSuggestion = this.state.selectedIndex !== -1;
        const suggestion = isSuggestion ? this.state.suggestions[this.state.selectedIndex] : event.target.value;

        this.props.onSuggestionSelect(suggestion, {
          provider: isSuggestion ? 'suggestions' : 'user',
          isSuggestion,
        });

        break;
      }
      case keyCodes.UP_ARROW: {
        if (_.isEmpty(this.state.suggestions)) {
          return;
        }
        event.preventDefault();

        const selectedIndex = this.state.selectedIndex < 1 ? this.state.suggestions.length - 1 : this.state.selectedIndex - 1;

        this.setState({ selectedIndex });
        break;
      }
      case keyCodes.DOWN_ARROW: {
        if (_.isEmpty(this.state.suggestions)) {
          return;
        }
        event.preventDefault();

        const selectedIndex = (this.state.selectedIndex === this.state.suggestions.length - 1) ? 0 : this.state.selectedIndex + 1;

        this.setState({ selectedIndex });
        break;
      }
      default:
    }
  };

  render() {
    return (
      <SuggestionContext.Provider value={this.state}>
        <div className="hawk-suggestions">
          {this.props.children}
        </div>
      </SuggestionContext.Provider>
    );
  }
}
