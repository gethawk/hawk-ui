// vendor modules
import React, { Component, Fragment } from 'react';
// react modules
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';

import FormSection from './FormSection';
import validate from './validate';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Form extends Component {
  static propTypes = {
    configuration: PropTypes.object,
    data: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    showInlineErrors: PropTypes.bool,
    className: PropTypes.string,
  };
  static defaultProps = {
    data: {},
  }
  onChange = ({ property, value, configuration, addRow, removeRow }) => {
    const { onChange } = this.props;
    const { data } = this.props;
    let updatedData = _.cloneDeep(data);

    let error = {};

    if (!_.isUndefined(value) && !_.isNull(value) && !_.isEmpty(String(value))) {
      const visual = _.get(configuration, 'visual', {});
      const validation = _.get(configuration, 'validation', {});

      if (visual.dependentOptions) {
        const arrayProperty = property.replace(/^.+\./g, '');
        const parentArrayPath = property.replace(/\.[^\.]+\.[^\.]+$/g, '');
        const parentArray = _.get(updatedData, parentArrayPath, []);
        const options = _.get(visual, 'options', []);
        const defaultValue = _.get(_.find(options, opt => (opt.value === value)), 'default');

        const updatedParentArray = _.map(parentArray, (item) => {
          if (_.has(item, arrayProperty) && _.isEqual(item[arrayProperty], value)) {
            if (!_.isNil(defaultValue)) {
              return {
                ...item,
                [arrayProperty]: defaultValue,
              };
            } else if (_.get(configuration, 'data_type') === 'boolean') {
              return {
                ...item,
                [arrayProperty]: !value,
              };
            }

            return _.omit(item, arrayProperty);
          }

          return item;
        });

        updatedData = _.set(updatedData, parentArrayPath, updatedParentArray);
      }

      updatedData = _.set(updatedData, property, value);

      if (
        _.get(validation, 'required', false) || // Validate if value is required
        _.get(validation, 'required_if') || // Validate if requiredIf is present
        !_.isEmpty(String(value)) // Validate if value is not empty
      ) {
        error = validate(value, validation, updatedData);

        if (_.isEmpty(error) && _.has(validation, 'if_valid_check')) {
          const checkValidityOf = _.get(validation, 'if_valid_check', []);

          _.map(checkValidityOf, path => {
            const ifRequiredValue = _.get(updatedData, path);
            const ifRequiredValidation = _.get(this.getConfigurationForDataPath(path), 'validation');

            const ifRequiredError = validate(ifRequiredValue, ifRequiredValidation, updatedData);

            onChange({ property: path, data: updatedData, error: ifRequiredError });
          });
        }
      }

      if (typeof onChange === 'function') {
        onChange({ property, data: updatedData, error });
      }
    } else if (addRow) {
      updatedData = _.set(updatedData, property, value);

      if (typeof onChange === 'function') {
        onChange({ property, data: updatedData, error });
      }
    } else if (!_.isNil(removeRow) && _.isNumber(removeRow)) {
      const filteredData = _.map(_.get(updatedData, property), (val, index) => {
        if (_.isEqual(index, removeRow)) {
          return {
            ...val,
            is_deleted: true,
          };
        }

        return val;
      });

      updatedData = _.set(updatedData, property, filteredData);

      if (typeof onChange === 'function') {
        onChange({ property, data: updatedData, error });
      }
    } else if (_.isEmpty(String(value)) || _.isUndefined(value)) {
      updatedData = _.set(updatedData, property, value);

      const validation = _.get(configuration, 'validation', {});

      if (
        _.get(validation, 'required', false) ||
        _.get(validation, 'required_if') // Validate if requiredIf is present
      ) {
        error = validate(value, validation, updatedData);
      }

      if (_.has(validation, 'if_valid_check')) {
        const checkValidityOf = _.get(validation, 'if_valid_check', []);

        _.map(checkValidityOf, path => {
          const ifRequiredValue = _.get(updatedData, path);
          const ifRequiredValidation = _.get(this.getConfigurationForDataPath(path), 'validation');

          const ifRequiredError = validate(ifRequiredValue, ifRequiredValidation, updatedData);

          onChange({ property: path, data: updatedData, error: ifRequiredError });
        });
      }

      if (typeof onChange === 'function') {
        onChange({ property, error, data: updatedData });
      }
    }
  }
  getConfigurationForDataPath(path) {
    const { configuration } = this.props;
    let pathConfiguration = _.cloneDeep(configuration);

    const partsOfPath = _.filter(_.split(path, '.'), part => (_.isNaN(_.toNumber(part))));

    _.map(partsOfPath, part => {
      const dataType = _.get(pathConfiguration, 'data_type');
      const indexRemovedPart = part.replace(/\[\d+\]/, '');

      if (dataType === 'object') {
        pathConfiguration = _.get(pathConfiguration, `properties.${indexRemovedPart}`);
      } else if (dataType === 'array') {
        const itemsDataType = _.get(pathConfiguration, 'items.data_type');

        if (itemsDataType === 'object') {
          pathConfiguration = _.get(pathConfiguration, `items.properties.${indexRemovedPart}`);
        } else if (itemsDataType === 'array') {
          pathConfiguration = _.get(pathConfiguration, `items.items.${indexRemovedPart}`);
        }
      }
    });

    return pathConfiguration;
  }
  render() {
    const { data, errors, configuration, className } = this.props;
    const dataType = _.get(configuration, 'data_type');
    const title = _.get(configuration, 'title', '');
    const description = _.get(configuration, 'description', '');
    const visual = _.get(configuration, 'visual', {});

    if (dataType === 'object') {
      const properties = _.get(configuration, 'properties', {});
      const propertyKeys = _.keys(properties);
      const showTitle = _.get(visual, 'show_title', false);
      const showDescription = _.get(visual, 'show_description', false);
      const showInline = _.get(visual, 'show_inline', false);

      const sectionGrouped = _.groupBy(propertyKeys, (key) => (
        _.get(properties, `${key}.visual.section_title`, 'unnamed-section')
      ));

      return (
        <div className={classnames('dynamic-form', { [className]: !_.isEmpty(className) })}>

          {
            showTitle && !_.isEmpty(title) && (
              <div className="dynamic-form__title">
                {title}
              </div>
            )
          }

          {
            showDescription && !_.isEmpty(description) && (
              <div className="dynamic-form__description">
                {description}
              </div>
            )
          }

          {
            !_.isEmpty(propertyKeys) && (
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
                      isCollapsible
                    />
                  ))
                }
              </Fragment>
            )
          }

          <div className="dynamic-form__error" />
        </div>
      );
    }

    return null;
  }
}
