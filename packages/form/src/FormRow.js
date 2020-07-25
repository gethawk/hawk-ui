import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import Label from '@hawk-ui/label';

import FormSection from './FormSection';
import FormControl from './FormControl';
import FormErrors from './FormErrors';

export default class FormRow extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    configuration: PropTypes.object,
    data: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.array,
      PropTypes.number,
      PropTypes.bool,
    ]),
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noPadding: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isArraySupportedField: PropTypes.bool,
  };
  onChange = ({ value, property, configuration, addRow, removeRow }) => {
    const { onChange } = this.props;
    let key = null;

    if (_.isUndefined(property)) {
      key = this.props.property;
    } else {
      key = `${this.props.property}.${property}`;
    }

    onChange({ property: key, value, configuration, addRow, removeRow });
  }
  addMoreRow = () => {
    const { data, property, configuration, onChange } = this.props;

    onChange({ property: `${property}.${_.size(data)}`, configuration, addRow: true });
  }
  removeRow = (index) => {
    const { property, configuration, onChange } = this.props;

    onChange({ property, configuration, removeRow: index });
  }
  render() {
    const { data, errors, property, configuration, noPadding, onChange, isDisabled, isArraySupportedField } = this.props;
    const dataType = _.get(configuration, 'data_type');
    const title = _.get(configuration, 'title', '');
    const description = _.get(configuration, 'description', '');
    const visual = _.get(configuration, 'visual', {});

    const showTitle = _.get(visual, 'show_title', false);
    const showDescription = _.get(visual, 'show_description', false);
    const showInline = _.get(visual, 'show_inline', false);

    const showSeparator = _.get(visual, 'show_separator', null);
    const width = _.get(visual, 'width', null);
    const customAddRowLabel = _.get(visual, 'custom_add_row_label', 'Add +');

    let formControl = null;

    switch (dataType) {
      case 'object':
        {
          const properties = _.get(configuration, 'properties', {});
          const propertyKeys = _.keys(properties);
          const sectionGrouped = _.groupBy(propertyKeys, (key) => (
            _.get(properties, `${key}.visual.section_title`, 'unnamed-section')
          ));

          formControl = (
            <Fragment>
              {
                _.map(sectionGrouped, (sectionKeys, section) => (
                  <FormSection
                    key={section}
                    section={section}

                    sectionKeys={sectionKeys}
                    properties={properties}
                    data={data}
                    errors={errors}
                    onChange={this.onChange}

                    showInline={showInline}
                    noPadding={showInline}
                    isDisabled={isDisabled}
                  />
                ))
              }
            </Fragment>
          );
          break;
        }
      case 'array':
        {
          const items = _.get(configuration, 'items', {});
          const allDeleted = _.every(data, value => (value.is_deleted));
          const dataCount = _.size(data);

          if (isArraySupportedField) {
            formControl = (
              <div className={classnames('hawk-form-row__form-control', { 'hawk-form-row__form-control_inline': showInline })}>
                <FormRow property={property} configuration={items} data={data} errors={errors} onChange={onChange} isDisabled={isDisabled} isArraySupportedField={isArraySupportedField} />
              </div>
            );
          } else if (!allDeleted && !_.isEmpty(data) && dataCount > 0) {
            formControl = (
              <Fragment>
                {
                  _.map(data, (value, i) => {
                    if (_.get(value, 'is_deleted', false)) {
                      return null;
                    }

                    return (
                      <div key={i} className={classnames('hawk-form-row__form-control', { 'hawk-form-row__form-control_inline': showInline })}>
                        <FormRow key={i} property={i} configuration={items} data={value} errors={_.nth(errors, i)} onChange={this.onChange} isDisabled={isDisabled} isArraySupportedField={isArraySupportedField} noPadding />
                        <i
                          className="fas fa-trash-alt hawk-form-row__form-control-delete"
                          onClick={() => {
                            this.removeRow(i);
                          }}
                        />
                      </div>
                    );
                  })
                }
              </Fragment>
            );
          } else {
            formControl = (
              <div key={dataCount} className={classnames('hawk-form-row__form-control', { 'hawk-form-row__form-control_inline': showInline })}>
                <FormRow key={dataCount} property={dataCount} configuration={items} errors={_.nth(errors, dataCount)} onChange={this.onChange} isArraySupportedField={isArraySupportedField} noPadding />
              </div>
            );
          }

          break;
        }
      case 'string':
      case 'number':
      case 'int':
      case 'decimal':
      case 'boolean':
      case 'url':
      case 'datetime':
      case 'date':
      case 'link-array':
        {
          formControl = (
            <div className={classnames('hawk-form-row__form-control', { 'hawk-form-row__form-control_inline': showInline })}>
              <FormControl property={property} configuration={configuration} data={data} errors={errors} onChange={this.onChange} noTitle={!showTitle || _.isEmpty(title)} isDisabled={isDisabled} isArraySupportedField={isArraySupportedField} />
            </div>
          );
          break;
        }
      default: {
        return null;
      }
    }

    return (
      <div data-property={property} className={classnames('hawk-form-row', property, { 'hawk-form-row_with-separator': showSeparator, 'hawk-form-row_no-padding': noPadding })} style={_.isEmpty(width) ? {} : { width }}>

        {
          showTitle && !_.isEmpty(title) && (
            <Label
              className="hawk-form-row__title"
              title={title}
            />
          )
        }

        {
          showDescription && !_.isEmpty(description) && (
            <div className="hawk-form-row__description">
              {description}
            </div>
          )
        }

        {
          dataType === 'array' && !isArraySupportedField && !_.isUndefined(_.last(data)) && (
            <div className="hawk-form-row__add-row" onClick={this.addMoreRow}>
              {customAddRowLabel}
            </div>
          )
        }

        {
          !_.isEmpty(formControl) && (formControl)
        }

        {
          !_.includes(['object', 'array'], dataType)
          ? (
            <div className="hawk-form-row__error">
              <FormErrors property={property} errors={errors} />
            </div>
          )
          : null
        }
      </div>
    );
  }
}
