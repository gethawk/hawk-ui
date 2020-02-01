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

// const startMoment = moment(new Date());

export default class TimePicker extends Component {
  static propTypes = {
    className: PropTypes.string,
  };
  state = {
    startDate: moment(new Date()).toISOString(),
    startTimeOffset: { hours: moment(new Date()).hours(), minutes: moment(new Date()).minutes() },
    endTimeOffset: null,
    selectedItem: '',
    searchValue: '',
  };

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
    const { startDate, startTimeOffset, endTimeOffset } = this.state;
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
          // renderSelectedItem={() => (
          //   this.state.selectedItem ? this.state.selectedItem : 'Select anyone'
          // )}
          // renderSelectedItem={() => (<span>Hello</span>)}
          // renderSelectedItem={() => 'hello'}
          // renderSelectedItem={() => (
          //   startTimeOffset ? _.findIndex(startSlots, startTimeOffset) : -1
          // )}
          onSuggestionSelect={(item, meta) => {
            this.setState({
              startTimeOffset: _.pick(item, ['hours', 'minutes']),
              selectedItem: item.label,
              searchValue: item.label,
            }, () => {
              console.log('query startSlots', startSlots);
              console.log('query startTimeOffset', startTimeOffset);
              console.log('query findIndex', _.findIndex(startSlots, this.state.startTimeOffset));
            });
          }}
          onSearch={(value) => {
            this.setState({
              searchValue: value,
            });
            console.log('query value', value);
          }}
        />
      </div>
    );
  }
}
