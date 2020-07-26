// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import RangeSlider from '@hawk-ui/range-slider';

export default class FormRangeSlider extends Component {
  static propTypes = {
    visual: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noTitle: PropTypes.bool,
    onChange: PropTypes.func,
  };
  state = {};

  render() {
    const { visual, property, noTitle, onChange } = this.props;

    const valueId = _.get(visual, 'value_id', '');
    const rangeId = _.get(visual, 'range_id', '');
    const min = _.get(visual, 'range_min', 0);
    const max = _.get(visual, 'range_max', 100);
    const rangeStep = _.get(visual, 'range_step', 1);

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <RangeSlider
          valueId={valueId}
          rangeId={rangeId}
          min={min}
          max={max}
          step={rangeStep}
          onChange={(event) => {
            onChange({ value: event });
          }}
        />
      </div>
    );
  }
}
