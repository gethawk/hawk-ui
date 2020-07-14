import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';

import FormRow from './FormRow';

const FormSection = ({
  section,
  showInline = false,
  sectionKeys,
  properties,
  data,
  errors,
  onChange,
  noPadding = false,
}) => {
  const isUnnamedSection = section === 'unnamed-section';
  const sectionClass = (section || '').replace(/\s/, '-').toLowerCase();

  let description;
  let isCollapsible = false;
  let isDefaultExpanded = false;
  let sectionBgColor = 'transparent';

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

  const [isExpanded, setExpanded] = useState(isDefaultExpanded);

  return (
    <div className={classnames('dynamic-form-section', { 'dynamic-form-section_is-collapsible': isCollapsible, 'dynamic-form-section_no-padding': noPadding, [sectionClass]: !_.isEmpty(section) })} style={{ backgroundColor: sectionBgColor }}>
      {
        !isUnnamedSection && isCollapsible
        ? (
          <div className="dynamic-form-section__header" onClick={() => { setExpanded(!isExpanded); }}>
            {
              !_.isEmpty(section) && (
                <div className="dynamic-form-section__title">
                  {section}
                </div>
              )
            }

            {
              !_.isEmpty(description) && (
                <div className="dynamic-form-section__description">
                  {description}
                </div>
              )
            }

            <div className="dynamic-form-section__toggle">
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
          <div className={classnames('dynamic-form-section__content', { 'dynamic-form-section__content_inline': showInline })}>
            {
              _.map(sectionKeys, key => (
                <FormRow key={key} property={key} configuration={_.get(properties, key, {})} data={_.get(data, key)} errors={_.get(errors, key)} onChange={onChange} noPadding={noPadding} />
              ))
            }
          </div>
        )
        : null
      }
    </div>
  );
};

FormSection.propTypes = {
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
};

export default FormSection;
