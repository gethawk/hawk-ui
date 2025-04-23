// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// React modules
import getClassnames from 'classnames';
import _ from 'lodash';
import Checkbox from '@hawk-ui/checkbox';
import Dropdown from '@hawk-ui/dropdown';
// utils modules
import { sortByColumn } from '../../utils/sorting';
// constant modules
import { sortOrders } from '../../constants';

export default class Head extends Component {
  static propTypes = {
    tableHeader: PropTypes.array,
    tableContent: PropTypes.array,
    isSelectable: PropTypes.bool,
    selected: PropTypes.array,
    isSorting: PropTypes.bool,
    isFilter: PropTypes.bool,
    sortBy: PropTypes.array,
    filterBy: PropTypes.array,
    onMultiSelect: PropTypes.func,
    onSort: PropTypes.func,
  };
  static defaultProps = {
    isSelectable: false,
    isSorting: false,
    isFilter: false,
  }
  state = {
    sortingMeta: {
      columnKey: '',
      order: 'ASCENDING',
    },
  };

  renderHeaderCell = (column) => {
    const { tableContent, onSort } = this.props;
    const isOrderingSetForColumn = this.state.sortingMeta.columnKey === column.key;

    return (
      <i
        className={getClassnames('icon fas', {
          'fa-sort': !isOrderingSetForColumn,
          'fa-arrow-up': isOrderingSetForColumn && _.isEqual(this.state.sortingMeta.order, sortOrders.ASCENDING),
          'fa-arrow-down': isOrderingSetForColumn && _.isEqual(this.state.sortingMeta.order, sortOrders.DESCENDING),
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

            onSort({
              index: column.dataIndex,
              order: this.state.sortingMeta.order,
              sortedColumn,
            });
          });
        }}
      />
    );
  };

  renderFilter = (suggestions, children) => (
    <div className="hawk-table__content-filter">
      <Dropdown
        title={<i className="fas fa-filter" />}
        suggestions={suggestions}
        renderSuggestion={(suggestion) => suggestion}
        children={children}
      />
    </div>
  );

  render() {
    const { tableHeader, tableContent, isSelectable, selected, isSorting, isFilter, sortBy, filterBy, onMultiSelect } = this.props;

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
            !_.isEmpty(item) && (
              <th key={index}>
                <div className="hawk-table-th">
                  <span>{item.title}</span>
                  {!_.isEmpty(item.dataIndex) && isSorting && _.includes(sortBy, item.dataIndex) && (
                    this.renderHeaderCell(item)
                  )}
                  {_.map(filterBy, (filter) => isFilter && _.includes(filter, item.key) && (
                    this.renderFilter(_.get(filter, 'properties', {}), _.get(filter, 'children'))
                  ))}
                </div>
              </th>
            )
          ))}
        </tr>
      </thead>
    );
  }
}
