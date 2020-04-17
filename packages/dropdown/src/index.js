// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import Button from '@hawk-ui/button';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Dropdown extends Component {
  static propTypes = {
    title: PropTypes.string,
    isIcon: PropTypes.bool,
    suggestions: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    renderSuggestion: PropTypes.func,
    selectValue: PropTypes.func,
  };
  static defaultProps = {
    renderSuggestion: () => ('render suggestion'),
  }
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    shouldDropdownShow: false,
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
      shouldDropdownShow: false,
    });
  }

  render() {
    const { title, isIcon, suggestions, renderSuggestion, selectValue } = this.props;

    return (
      <div ref={this.myRef} className="hawk-dropdown">
        <Button
          className="hawk-dropdown__button"
          onClick={() => {
            this.setState({
              shouldDropdownShow: !this.state.shouldDropdownShow,
            });
          }}
        >
          {title ? (
            <span
              className={getClassnames('hawk-dropdown__button-text', {
                'hawk-dropdown__button-text__icon': isIcon,
              })}
            >{title}</span>
          ) : null}
          {isIcon ? (
            <i className="fa fa-sort-down hawk-dropdown__button-icon" />
          ) : null}
        </Button>
        {this.state.shouldDropdownShow && !_.isEmpty(suggestions) ? (
          <div
            className={getClassnames('hawk-dropdown__menu', {
              'hawk-dropdown__menu-transform': _.isEmpty(title),
            })}
            id="hawk-dropdown__menu"
            x-placement="bottom-start"
          >
            {_.map(suggestions, (item, index) => (
              <div
                className="hawk-dropdown__item"
                key={index}
                onClick={() => {
                  this.setState({ shouldDropdownShow: false }, () => {
                    selectValue(index, item);
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
