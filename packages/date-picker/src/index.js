// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react modules
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import Input from '@hawk-ui/input';
import moment from 'moment';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class DatePicker extends Component {
  static propTypes = {
    value: PropTypes.shape({
      startMoment: PropTypes.string,
      endMoment: PropTypes.object,
    }),
    isDisabled: PropTypes.shape({
      value: PropTypes.bool,
      reason: PropTypes.string,
    }),
    format: PropTypes.string,
    onChange: PropTypes.func,
    renderInput: PropTypes.func,
    isDayBlocked: PropTypes.func,
    isDayHighlighted: PropTypes.func,
    renderCalendarInfo: PropTypes.func,
  };
  static defaultProps = {
    format: 'DD MMM YYYY',
    value: {
      startMoment: moment(),
      endMoment: moment(),
    },
  };

  state = {
    isOpen: false,
    focusedInput: 'startDate',
  };

  onDateChange = (date) => {
    this.setState({
      isOpen: false,
    });

    this.props.onChange(date);
  };

  render() {
    const { format, value, renderInput } = this.props;
    const { startMoment } = value;

    return (
      <div className="hawk-date-picker">
        <div
          className="hawk-date-picker__container"
          onClick={() => { this.setState({ isOpen: !this.state.isOpen }); }}
        >
          <i className="fa fa-sort-down hawk-date-picker__input-icon" />
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
