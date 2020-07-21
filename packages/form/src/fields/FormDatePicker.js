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
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    noTitle: PropTypes.bool,
    validation: PropTypes.object,
  };
  componentDidMount() {
    const { value, onChange } = this.props;

    onChange({ value });
  }

  render() {
    const { value, property, placeholder, noTitle, validation, onChange } = this.props;
    const isDateISO = _.get(validation, 'dateISO', false);

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
        />
      </div>
    );
  }
}
