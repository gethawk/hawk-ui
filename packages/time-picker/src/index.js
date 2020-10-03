// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import SelectDropdown from '@hawk-ui/select-dropdown';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class TimePicker extends Component {
  static propTypes = {
    className: PropTypes.string,
    onSelect: PropTypes.func,
    dateTime: PropTypes.string,
  };
  static defaultProps = {
    dateTime: moment().format(),
  }
  state = {
    startDate: this.props.dateTime,
    startTimeOffset: { hours: moment(new Date()).hours(), minutes: moment(new Date()).minutes() },
    endTimeOffset: null,
    selectedItem: '',
    searchValue: '',
  };

  componentWillReceiveProps(nextProps, prevProps) {
    if (!_.isEqual(nextProps.dateTime, prevProps.dateTime)) {
      this.setState({
        startDate: nextProps.dateTime,
      });
    }
  }

  getTimings = ({ baseTime, startOffset, endOffset }) => {
    const baseStartOffset = {
      hours: 0,
      minutes: 0,
    };
    const baseEndOffset = {
      hours: 24,
      minutes: 0,
    };
    const startSlot = moment(baseTime).set(startOffset || baseStartOffset);
    const endSlot = moment(baseTime).set(endOffset || baseEndOffset);

    const slotCount = endSlot.diff(startSlot, 'minutes') / 30;

    return (slotCount >= 0) ? (
      _.map(_.range(0, slotCount + 1), (offset) => {
        const slot = moment(startSlot).add(offset * 30, 'minutes');

        return {
          hours: slot.hours(),
          minutes: slot.minutes(),
          label: slot.format('hh:mm A'),
          value: slot,
        };
      })
    ) : [{
      hours: startSlot.hours(),
      minutes: startSlot.minutes(),
      label: startSlot.format('hh:mm A'),
      value: startSlot,
    }];
  }

  render() {
    const { onSelect } = this.props;
    const { startDate, endTimeOffset } = this.state;
    const startSlots = this.getTimings({
      date: moment(startDate),
      endOffset: endTimeOffset ? {
        hours: moment(startDate).set(endTimeOffset).subtract(30, 'minutes').hours(),
        minutes: moment(startDate).set(endTimeOffset).subtract(30, 'minutes').minutes(),
      } : {
        hours: 23,
        minutes: 30,
      },
    });

    return (
      <div className="hawk-time-picker">
        <SelectDropdown
          suggestions={startSlots}
          isInput
          isIcon
          placeholder="Select Timepicker"
          searchValue={this.state.searchValue ? this.state.searchValue : startSlots[0].label}
          renderSuggestion={(suggestion) => suggestion.label}
          onSuggestionSelect={(item) => {
            this.setState({
              startTimeOffset: _.pick(item, ['hours', 'minutes']),
              selectedItem: item.label,
              searchValue: item.label,
            }, () => {
              onSelect(moment(startDate).set(this.state.startTimeOffset).format());
            });
          }}
          onSearch={(value) => {
            this.setState({
              searchValue: value,
            });
          }}
        />
      </div>
    );
  }
}
