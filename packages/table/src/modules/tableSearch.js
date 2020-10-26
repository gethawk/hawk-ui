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
import { exportToCsv } from '../utils/exports/csv';
import { exportToPrint } from '../utils/exports/print';

export default class TableSearch extends Component {
  static propTypes = {
    selected: PropTypes.array,
    isSelectedExport: PropTypes.bool,
  };
  static defaultProps = {
    isSelectedExport: false,
    selected: [],
  }
  static displayName = 'TableSearch';
  static contextType = TableContext;
  state = {};

  render() {
    const { selected, isSelectedExport } = this.props;

    return (
      <div className="hawk-table__filter">
        <div className="hawk-table__filter-downloads">
          {_.map(_.get(this.context, 'exports'), (item, index) => (
            <Button
              key={index}
              isDisabled={isSelectedExport && _.isEmpty(selected)}
              onClick={
                _.isObject(item) ?
                  _.isEqual(_.get(item, 'key'), 'csv') ? () => { exportToCsv(_.get(this.context, 'id'), _.get(item, 'columns'), isSelectedExport, selected); }
                    : _.isEqual(_.get(item, 'key'), 'print') ? () => { exportToPrint(_.get(this.context, 'id'), _.get(item, 'columns'), isSelectedExport, selected); }
                    : null
                  : _.isEqual(item, 'csv') ? () => { exportToCsv(_.get(this.context, 'id'), [], isSelectedExport, selected); }
                    : _.isEqual(item, 'print') ? () => { exportToPrint(_.get(this.context, 'id'), [], isSelectedExport, selected); }
                    : null
              }
            >
              <span>
                {_.isObject(item) ?
                  _.isEqual(_.get(item, 'key'), 'csv') ? _.get(item, 'title', 'CSV')
                    : _.isEqual(_.get(item, 'key'), 'excel') ? _.get(item, 'title', 'Excel')
                    : _.isEqual(_.get(item, 'key'), 'pdf') ? _.get(item, 'title', 'PDF')
                    : _.isEqual(_.get(item, 'key'), 'print') ? _.get(item, 'title', 'Print')
                    : null
                  : _.isEqual(item, 'csv') ? 'CSV'
                    : _.isEqual(item, 'excel') ? 'Excel'
                    : _.isEqual(item, 'pdf') ? 'PDF'
                    : _.isEqual(item, 'print') ? 'Print'
                    : null
                }
              </span>
            </Button>
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
