// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import Radio from '@hawk-ui/radio';

export default class FormRadio extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    configuration: PropTypes.object,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    visual: PropTypes.object,
    noTitle: PropTypes.bool,
  };
  state = {
    selectedItem: '',
  };

  componentDidMount() {
    const { value, onChange } = this.props;

    onChange({ value });
  }

  render() {
    const { property, noTitle, configuration } = this.props;
    const options = _.get(configuration, 'visual.options', []);

    const { selectedItem } = this.state;

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <Radio
          options={options}
          selectedItem={selectedItem}
          onChange={(event) => {
            this.setState({
              selectedItem: event.target.value,
            });
          }}
        />
      </div>
    );
  }
}
