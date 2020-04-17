// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import Input from '@hawk-ui/input';
import _ from 'lodash';
import { keyCodes } from '../../../constants';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class SelectDropdown extends Component {
  static propTypes = {
    isInput: PropTypes.bool,
    isIcon: PropTypes.bool,
    suggestions: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    renderSuggestion: PropTypes.func,
    onSuggestionSelect: PropTypes.func,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
    searchValue: PropTypes.string,
    renderSelectedItem: PropTypes.func,
  };
  static defaultProps = {
    isInput: false,
    renderSuggestion: () => ('render suggestion'),
    renderSelectedItem: () => (
      'Select Item'
    ),
  }
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    selectedIndex: -1,
    shouldDropdownShow: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }

  componentWillReceiveProps() {
    this.setState({
      selectedIndex: -1,
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  onClick = (event) => {
    if (this.myRef.current.contains(event.target)) {
      return;
    }
    this.setState({
      shouldDropdownShow: false,
    });
  }

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case keyCodes.ENTER: {
        const isSuggestion = this.state.selectedIndex !== -1;
        const suggestion = isSuggestion ? this.props.suggestions[this.state.selectedIndex] : event.target.value;

        this.setState({ shouldDropdownShow: false }, () => {
          this.props.onSuggestionSelect(suggestion, {
            provider: isSuggestion ? 'suggestions' : 'user',
            isSuggestion,
          });
        });
        break;
      }
      case keyCodes.UP_ARROW: {
        if (_.isEmpty(this.props.suggestions)) {
          return;
        }
        event.preventDefault();
        const selectedIndex = (this.state.selectedIndex < 1) ? this.props.suggestions.length - 1 : this.state.selectedIndex - 1;

        this.setState({ selectedIndex });
        break;
      }
      case keyCodes.DOWN_ARROW: {
        if (_.isEmpty(this.props.suggestions)) {
          return;
        }
        event.preventDefault();
        const selectedIndex = (this.state.selectedIndex === this.props.suggestions.length - 1) ? 0 : this.state.selectedIndex + 1;

        this.setState({ selectedIndex });
        break;
      }
      default:
    }
  }

  render() {
    const { isInput, isIcon, suggestions, renderSuggestion, onSuggestionSelect, onSearch, searchValue, renderSelectedItem, placeholder } = this.props;

    return (
      <div ref={this.myRef} className="hawk-select-dropdown">
        {isInput ? (
          <div
            onClick={() => { this.setState({ shouldDropdownShow: !this.state.shouldDropdownShow }); }}
          >
            {isIcon ? (
              <i className="fa fa-sort-down hawk-select-dropdown__input-icon" />
            ) : null}
            <Input
              className="hawk-select-dropdown__input"
              value={searchValue}
              placeholder={placeholder}
              onChange={(value) => {
                onSearch(value);
                if (!_.isEmpty(suggestions)) {
                  this.setState({
                    shouldDropdownShow: true,
                  });
                }
              }}
              onKeyDown={(event) => { this.handleKeyDown(event); }}
            />
          </div>
        ) : (
          <div
            className="hawk-select-dropdown__container"
            onClick={() => { this.setState({ shouldDropdownShow: !this.state.shouldDropdownShow }); }}
          >
            <div className="hawk-select-dropdown__title">{renderSelectedItem()}</div>
            <i className="fa fa-sort-down hawk-select-dropdown__icon" />
          </div>
        )}
        {this.state.shouldDropdownShow && !_.isEmpty(suggestions) ? (
          <div
            className={getClassnames('hawk-select-dropdown__menu', {
              'hawk-select-dropdown__menu-transform': isInput,
            })}
          >
            {_.map(suggestions, (item, index) => (
              <div
                id="list"
                className={getClassnames('hawk-select-dropdown__item', {
                  'hawk-select-dropdown__item-hover': index === this.state.selectedIndex,
                })}
                key={index}
                onClick={() => {
                  this.setState({ shouldDropdownShow: false }, () => {
                    onSuggestionSelect(item, {
                      provider: 'suggestions',
                    });
                  });
                }}
              >
                {renderSuggestion(item)}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
