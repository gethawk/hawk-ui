// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// React modules
import _ from 'lodash';
import Input from '@hawk-ui/input';
import Button from '@hawk-ui/button';
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

  exportBtn = (item) => {
    const { selected, isSelectedExport } = this.props;

    return (
      <Button
        isDisabled={isSelectedExport && _.isEmpty(selected)}
        onClick={
          getExportClick({
            id: _.get(this.context, 'id'),
            key: _.get(item, 'key'),
            columns: _.get(item, 'columns'),
            items: {},
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
    return (
      <div className="hawk-table__filter">
        <div className="hawk-table__filter-downloads">
          {_.map(_.get(this.context, 'exports.options'), (item) => (
            this.exportBtn(item)
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
