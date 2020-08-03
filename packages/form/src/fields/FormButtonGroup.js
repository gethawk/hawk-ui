// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import ButtonGroup from '@hawk-ui/button-group';

export default class FormButtonGroup extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    visual: PropTypes.object,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noTitle: PropTypes.bool,
    dataType: PropTypes.string,
  };
  state = {};

  render() {
    const { visual, property, noTitle, value, onChange } = this.props;
    const variant = _.get(visual, 'variant', 'text');
    const suggestion = _.get(visual, 'suggest.options', []);

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <ButtonGroup
          variant={variant}
          panes={suggestion}
          value={value || _.get(visual, 'active', 1)}
          onClick={(event) => {
            onChange({ value: event.key });
          }}
        />
      </div>
    );
  }
}
