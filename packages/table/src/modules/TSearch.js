// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// React modules
import _ from 'lodash';
import Input from '@hawk-ui/input';
import Button from '@hawk-ui/button';
import SelectDropdown from '@hawk-ui/select-dropdown';
// context modules
import { TableContext } from '../context/tableContext';
// exports modules
import { getExportClick, getExportTitle } from '../utils/exports/options';

export default class TSearch extends Component {
  static propTypes = {
    selected: PropTypes.array,
    isSelectedExport: PropTypes.bool,
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
          getExportClick({
            id: _.get(this.context, 'id'),
            key: _.get(item, 'key'),
            columns: _.get(item, 'columns'),
            headers,
            content,
            isSelected: isSelectedExport,
            selected,
          })
        }
      >
        <span>
          {getExportTitle(item)}
        </span>
      </Button>
    );
  };

  render() {
    const { exports, entries, noOfEntries } = this.context;

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
                  label="Entries"
                />
              )}
            </TableContext.Consumer>
          )}
          {_.map(_.get(exports, 'options'), (item) => (
            this.exportBtn(item, _.get(exports, 'headers'), _.get(exports, 'items'))
          ))}
        </div>
        <div className="hawk-table__filter-search">
          <TableContext.Consumer>
            {({ onSearch }) => (
              <Input
                type="text"
                isLabel
                label="Search:"
                onChange={(event) => {
                  onSearch(event);
                }}
              />
            )}
          </TableContext.Consumer>
        </div>
      </div>
    );
  }
}
