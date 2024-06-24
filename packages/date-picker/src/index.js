// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
// react modules
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import Input from '@hawk-ui/input';
import Label from '@hawk-ui/label';
import moment from 'moment';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class DatePicker extends Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.shape({
      startMoment: PropTypes.string,
      endMoment: PropTypes.object,
    }),
    isDisabled: PropTypes.shape({
      value: PropTypes.bool,
      reason: PropTypes.string,
    }),
    isRequired: PropTypes.bool,
    format: PropTypes.string,
    onChange: PropTypes.func,
    renderInput: PropTypes.func,
    isDayBlocked: PropTypes.func,
    isDayHighlighted: PropTypes.func,
    isOutsideRange: PropTypes.func,
    renderCalendarInfo: PropTypes.func,
    className: PropTypes.string,
  };
  static defaultProps = {
    isRequired: false,
    format: 'DD MMM YYYY',
    value: {
      startMoment: moment(),
      endMoment: moment(),
    },
  };
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    isOpen: false,
    focusedInput: 'startDate',
  };

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  onDateChange = (date) => {
    this.setState({
      isOpen: false,
    });
    this.props.onChange(date);
  };

  onClick = (event) => {
    if (this.myRef.current.contains(event.target)) {
      return;
    }
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { label, format, value, renderInput, className, isRequired } = this.props;
    const { startMoment } = value;

    return (
      <div
        ref={this.myRef}
        className={getClassnames('hawk-date-picker', {
          [className]: _.isString(className),
        })}
      >
        {label && (
          <Label
            title={label}
            isRequired={isRequired}
            className="hawk-date-picker__label"
          />
        )}
        <div
          className="hawk-date-picker__container"
          onClick={() => { this.setState({ isOpen: !this.state.isOpen }); }}
        >
          <i className="far fa-calendar hawk-date-picker__input-icon" />
          <Input
            className="hawk-date-picker__input"
            value={renderInput ? moment(renderInput()).format(format) : moment(startMoment).format(format)}
            readOnly
          />
        </div>
        {this.state.isOpen ? (
          <div className="hawk-date-picker__menu">
            <SingleDatePicker
              onDateChange={this.onDateChange}
              onFocusChange={() => { this.setState({ focused: true }); }}
              focused={this.state.isOpen}
              hideKeyboardShortcutsPanel
              date={startMoment}
              isDayBlocked={(day) => (
                _.isFunction(this.props.isDayBlocked) ? this.props.isDayBlocked(day) : false
              )}
              isDayHighlighted={(day) => (
                _.isFunction(this.props.isDayHighlighted) ? this.props.isDayHighlighted(day) : false
              )}
              renderCalendarInfo={() => (
                _.isFunction(this.props.renderCalendarInfo) ? this.props.renderCalendarInfo() : false
              )}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
