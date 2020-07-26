import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';

import FormRow from './FormRow';

let description;
let isCollapsible = false;
let isDefaultExpanded = false;
let sectionBgColor = 'transparent';

class FormSection extends Component {
  static propTypes = {
    section: PropTypes.string,
    showInline: PropTypes.bool,
    sectionKeys: PropTypes.array,
    properties: PropTypes.object,
    data: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.array,
      PropTypes.number,
      PropTypes.bool,
    ]),
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    noPadding: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isSubmitted: PropTypes.bool,
  };
  static defaultProps = {
    showInline: false,
    noPadding: false,
  }
  state = {
    isExpanded: isDefaultExpanded,
  };

  render() {
    const { section, showInline, sectionKeys, properties, data, errors, onChange, noPadding, isDisabled, isSubmitted } = this.props;
    const { isExpanded } = this.state;
    const isUnnamedSection = section === 'unnamed-section';
    const sectionClass = (section || '').replace(/\s/, '-').toLowerCase();

    if (!isUnnamedSection) {
      _.map(sectionKeys, key => {
        if (_.isUndefined(description)) {
          description = _.get(properties, `${key}.visual.section_description`);
        }

        if (!isCollapsible) {
          isCollapsible = _.get(properties, `${key}.visual.section_is_collapsible`);
        }

        if (!isDefaultExpanded) {
          isDefaultExpanded = _.get(properties, `${key}.visual.section_load_expanded`);
        }

        if (sectionBgColor === 'transparent') {
          sectionBgColor = _.get(properties, `${key}.visual.section_bg_color`);
        }
      });
    }

    return (
      <div className={classnames('hawk-form-section', { 'hawk-form-section_is-collapsible': isCollapsible, 'hawk-form-section_no-padding': noPadding, [sectionClass]: !_.isEmpty(section) })} style={{ backgroundColor: sectionBgColor }}>
        {
          !isUnnamedSection && isCollapsible
          ? (
            <div
              className="hawk-form-section__header"
              onClick={() => {
                this.setState({
                  isExpanded: !isExpanded,
                });
              }}
            >
              {
                !_.isEmpty(section) && (
                  <div className="hawk-form-section__title">
                    {section}
                  </div>
                )
              }

              {
                !_.isEmpty(description) && (
                  <div className="hawk-form-section__description">
                    {description}
                  </div>
                )
              }

              <div className="hawk-form-section__toggle">
                {
                  isExpanded
                  ? (
                    <i className="fa fa-chevron-up"></i>
                  )
                  : (
                    <i className="fa fa-chevron-down"></i>
                  )
                }
              </div>
            </div>
          )
          : null
        }

        {
          isExpanded || isUnnamedSection || !isCollapsible
          ? (
            <div className={classnames('hawk-form-section__content', { 'hawk-form-section__content_inline': showInline })}>
              {
                _.map(sectionKeys, key => (
                  <FormRow
                    key={key}
                    property={key}
                    configuration={_.get(properties, key, {})}
                    data={_.get(data, key)}
                    errors={_.get(errors, key)}
                    onChange={onChange}
                    noPadding={noPadding}
                    isDisabled={isDisabled}
                    isSubmitted={isSubmitted}
                    isArraySupportedField={_.get(properties, `${key}.visual.array_supported_field`, false)}
                  />
                ))
              }
            </div>
          )
          : null
        }
      </div>
    );
  }
}

export default FormSection;
