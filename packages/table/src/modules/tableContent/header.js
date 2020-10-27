// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// React modules
import getClassnames from 'classnames';
import _ from 'lodash';
import Checkbox from '@hawk-ui/checkbox';
// context modules
import { TableContext } from '../../context/tableContext';
// utils modules
import { sortByColumn } from '../../utils/sorting';
// constant modules
import { sortOrders } from '../../constants';

export default class Header extends Component {
  static propTypes = {
    tableHeader: PropTypes.array,
    tableContent: PropTypes.array,
    isSelectable: PropTypes.bool,
    selected: PropTypes.array,
    isSorting: PropTypes.bool,
    sortBy: PropTypes.array,
    onMultiSelect: PropTypes.func,
  };
  static defaultProps = {
    isSelectable: false,
    isSorting: false,
  }
  state = {
    sortingMeta: {
      columnKey: '',
      order: 'ASCENDING',
    },
  };

  renderHeaderCell = (column) => {
    const { tableContent } = this.props;
    const isOrderingSetForColumn = this.state.sortingMeta.columnKey === column.key;

    return (
      <TableContext.Consumer>
        {({ onSort }) => (
          <i
            className={getClassnames('icon fas', {
              'fa-sort-amount-up': !isOrderingSetForColumn || _.isEqual(this.state.sortingMeta.order, sortOrders.ASCENDING),
              'fa-sort-amount-down': !isOrderingSetForColumn || _.isEqual(this.state.sortingMeta.order, sortOrders.DESCENDING),
            })}
            onClick={() => {
              const order = !isOrderingSetForColumn || _.isEqual(this.state.sortingMeta.order, sortOrders.DESCENDING) ? sortOrders.ASCENDING : sortOrders.DESCENDING;

              this.setState({
                sortingMeta: {
                  columnKey: column.dataIndex,
                  order,
                },
              }, () => {
                const sortedColumn = sortByColumn(column.dataIndex, tableContent, this.state.sortingMeta.order);

                onSort(sortedColumn);
              });
            }}
          />
        )}
      </TableContext.Consumer>
    );
  };

  render() {
    const { tableHeader, tableContent, isSelectable, selected, isSorting, sortBy, onMultiSelect } = this.props;

    return (
      <thead>
        <tr>
          {isSelectable && (
            <th>
              <Checkbox
                isChecked={selected.length <= tableContent.length && selected.length > 0}
                onChange={() => { onMultiSelect(); }}
                className={_.isEqual(selected.length, tableContent.length) && selected.length > 0 ? 'checkmark' : selected.length < tableContent.length && selected.length > 0 ? 'minus' : null}
              />
            </th>
          )}
          {_.map(tableHeader, (item, index) => (
            <th key={index}>
              <span>{item.title}</span>
              {!_.isEmpty(item.dataIndex) && isSorting && _.includes(sortBy, item.dataIndex) && (
                this.renderHeaderCell(item)
              )}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
