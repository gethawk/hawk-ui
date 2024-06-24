// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// React modules
import _ from 'lodash';
import Button from '@hawk-ui/button';
import Dropdown from '@hawk-ui/dropdown';
import Input from '@hawk-ui/input';
import SelectDropdown from '@hawk-ui/select-dropdown';
// context modules
import { TableContext } from '../context/tableContext';
// exports modules
import { getExportClick, getExportTitle } from '../utils/exports/options';

export default class TSearch extends Component {
  static propTypes = {
    selected: PropTypes.array,
    isSelectedExport: PropTypes.bool,
    placeholder: PropTypes.string,
    label: PropTypes.object,
    onSearch: PropTypes.func,
  };
  static defaultProps = {
    isSelectedExport: false,
    selected: [],
  }
  static displayName = 'TSearch';
  static contextType = TableContext;

  state = {};

  exportBtn = (item, headers = {}, content = []) => {
    const { selected, isSelectedExport } = this.props;

    return (
      <Button
        isDisabled={isSelectedExport && _.isEmpty(selected)}
        onClick={
          _.includes(['csv', 'print'], item.key) ?
            getExportClick({
              id: _.get(this.context, 'id'),
              key: _.get(item, 'key'),
              columns: _.get(item, 'columns'),
              headers,
              content,
              isSelected: isSelectedExport,
              selected,
            }) : () => item.onClick()
        }
      >
        <span>
          {
            _.includes(['csv', 'print'], item.key) ?
              getExportTitle(item) : item.title
          }
        </span>
      </Button>
    );
  };

  exportDropdown = (item) => (
    <Dropdown
      title={item.title}
      suggestions={item.suggestions}
      renderSuggestion={(suggestion) => suggestion[item.renderSuggestion]}
      selectValue={(meta, value) => item.onClick(meta, value)}
    />
  );

  render() {
    const { exports, entries, noOfEntries } = this.context;
    const { placeholder, label, onSearch: propsOnSearch } = this.props;
    const onSearch = propsOnSearch || this.context.onSearch;

    return (
      <div className="hawk-table__filter">
        <div className="hawk-table__filter-downloads">
          {entries.isVisible && !_.isUndefined(noOfEntries) && (
            <TableContext.Consumer>
              {({ onEntries }) => (
                <SelectDropdown
                  suggestions={entries.range}
                  isIcon
                  placeholder="Select"
                  renderSuggestion={(suggestion) => suggestion}
                  searchValue={noOfEntries}
                  onSuggestionSelect={(item) => {
                    onEntries(item);
                  }}
                />
              )}
            </TableContext.Consumer>
          )}
          {_.map(_.get(exports, 'options'), (item) => (_.isEqual(item.key, 'dropdown') ? (
            this.exportDropdown(item)
          ) : (
            this.exportBtn(item, _.get(exports, 'headers'), _.get(exports, 'items'))
          )))}
        </div>
        <div className="hawk-table__filter-search">
          <Input
            type="text"
            placeholder={placeholder}
            label={_.get(label, 'isVisible', false) ? label.title || 'Search:' : null}
            onChange={(event) => {
              onSearch(event);
            }}
          />
        </div>
      </div>
    );
  }
}
