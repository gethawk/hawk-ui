/* eslint-disable no-unused-expressions */
// vendor modules
import React, { Fragment, Component } from 'react';
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
    isMultiClickable: PropTypes.bool,
    isHoverable: PropTypes.bool,
    suggestions: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    children: PropTypes.element,
    renderSuggestion: PropTypes.func,
    selectValue: PropTypes.func,
    isClickable: PropTypes.bool,
    className: PropTypes.string,
    shouldDropdownShow: PropTypes.bool,
  };
  static defaultProps = {
    renderSuggestion: () => ('render suggestion'),
    isClickable: true,
    isHoverable: false,
    shouldDropdownShow: false,
    isMultiClickable: false,
  }
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    shouldDropdownShow: false,
  };

  componentDidMount() {
    const { isHoverable } = this.props;

    document.addEventListener('click', this.onClick);
    if (isHoverable) {
      document.addEventListener('mouseout', this.onClick);
    }
  }

  componentWillReceiveProps(nextProps, prevProps) {
    if (!_.isEqual(nextProps.shouldDropdownShow, prevProps.shouldDropdownShow)) {
      this.setState({
        shouldDropdownShow: nextProps.shouldDropdownShow,
      });
    }
  }

  componentWillUnmount() {
    const { isHoverable } = this.props;

    document.removeEventListener('click', this.onClick);
    if (isHoverable) {
      document.removeEventListener('mouseout', this.onClick);
    }
  }

  onClick = (event) => {
    if (this.myRef.current.contains(event.target)) {
      return;
    }
    if (!isMultiClickable) {
      this.setState({
        shouldDropdownShow: false,
      });
    }
  }

  render() {
    const { children, title, isIcon, suggestions, renderSuggestion, isMultiClickable, selectValue, isClickable, isHoverable, className } = this.props;

    return (
      <div
        ref={this.myRef}
        className={getClassnames('hawk-dropdown', {
          [className]: _.isString(className),
        })}
      >
        <Button
          className="hawk-dropdown__button"
          onClick={() => {
            this.setState({
              shouldDropdownShow: !this.state.shouldDropdownShow,
            });
          }}
          onMouseOver={() => {
            isHoverable &&
              this.setState({ shouldDropdownShow: true });
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
        {this.state.shouldDropdownShow && (!_.isEmpty(suggestions) || !_.isEmpty(children)) ? (
          <div
            className={getClassnames('hawk-dropdown__menu', {
              'hawk-dropdown__menu-transform': _.isEmpty(title),
            })}
            id="hawk-dropdown__menu"
            x-placement="bottom-start"
          >
            {children ? (
              <div className="hawk-dropdown__children">{children}</div>
            ) : null}
            {_.map(suggestions, (item, index) => (
              <Fragment>
                {!item.isActive && !_.isUndefined(item.isActive) ? (
                  <span className="hawk-dropdown__item disabled">{renderSuggestion(item)}</span>
                ) : (
                  <Fragment>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="hawk-dropdown__item"
                      >
                        {renderSuggestion(item)}
                      </a>
                    ) : (
                      <div
                        className="hawk-dropdown__item"
                        key={index}
                        onClick={() => isClickable && !isMultiClickable && this.setState({
                          shouldDropdownShow: false,
                        }, () => {
                          selectValue(index, item);
                        })}
                      >
                        {renderSuggestion(item)}
                      </div>
                    )}
                  </Fragment>
                )}
              </Fragment>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
