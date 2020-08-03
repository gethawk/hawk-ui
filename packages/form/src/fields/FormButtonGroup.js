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
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noTitle: PropTypes.bool,
    dataType: PropTypes.string,
  };
  state = {};

  render() {
    const { visual, property, noTitle, onChange } = this.props;
    const variant = _.get(visual, 'variant', 'text');
    const suggestion = _.get(visual, 'suggest.options', []);
    const active = _.get(visual, 'active', 0);

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
          activeIndex={active}
          onClick={(event) => {
            onChange(event);
          }}
        />
      </div>
    );
  }
}
