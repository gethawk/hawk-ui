// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
import moment from 'moment';

import DatePicker from '@hawk-ui/date-picker';

export default class FormDatePicker extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    configuration: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    noTitle: PropTypes.bool,
    validation: PropTypes.object,
  };
  state = {
    value: '2020-07-24T06:30:00.000Z',
    startDate: null,
    endDate: null,
  };

  render() {
    const { configuration, property, placeholder, noTitle, validation, onChange } = this.props;
    const isDateISO = _.get(validation, 'dateISO', false);
    const visual = _.get(configuration, 'visual', {});

    console.log('query datepicker visual', visual);

    const { value, startDate, endDate } = this.state;

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <DatePicker
          value={{ startMoment: value ? moment(value) : moment() }}
          renderInput={() => (
            !value ? <span>{placeholder || 'Select date'}</span> : moment(value).format('DD MMM, YYYY')
          )}
          isDayBlocked={(day) => {
            if (_.get(visual, 'is_range') && _.isEqual(_.get(visual, 'range_type'), 'start')) {
              day.isBefore(moment(), 'days');
            }
            if (_.get(visual, 'is_range') && _.isEqual(_.get(visual, 'range_type'), 'end')) {
              day.isBefore(startDate ? moment(startDate) : moment(), 'days');
            }
          }}
          onChange={(event) => {
            if (_.get(visual, 'is_range') && _.isEqual(_.get(visual, 'range_type'), 'start')) {
              const updateEndDate = !endDate || moment(endDate).isBefore(moment(event), 'days') ? value : null;

              this.setState({
                startDate: event,
                ...(updateEndDate ? {
                  endDate: updateEndDate,
                } : {}),
              });
            }

            this.setState({
              value: event,
            });
          }}
        />
      </div>
    );
  }
}
