// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import Input from '@hawk-ui/input';

export default class FormTextarea extends Component {
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
  };
  static defaultProps = {
    value: '',
  };
  componentDidMount() {
    const { value, onChange } = this.props;

    onChange({ value });
  }

  render() {
    const { configuration, property, value, placeholder, onChange, noTitle } = this.props;
    const visual = _.get(configuration, 'visual', {});

    const rows = _.get(visual, 'rows', 4);

    return (
      <div
        data-field={property}
        className={getClassnames('hawk-form-field', {
          'hawk-form-field_no-padding': noTitle,
        })}
      >
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(event) => {
            onChange({ value: event.target.value });
          }}
          isTextarea
          htmlAttributes={{
            rows,
          }}
        />
      </div>
    );
  }
}
