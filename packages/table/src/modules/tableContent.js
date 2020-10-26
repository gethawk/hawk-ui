// vendor modules
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
// React modules
import getClassnames from 'classnames';
import _ from 'lodash';
import Checkbox from '@hawk-ui/checkbox';
// context modules
import { TableContext } from '../context/tableContext';
// utils modules
import { sortByColumn } from '../utils/sorting';
// constant modules
import { sortOrders } from '../constants';

export default class TableContent extends Component {
  static displayName = 'TableContent';
  static contextType = TableContext;
  static propTypes = {
    tableHeader: PropTypes.array,
    isHeaderShow: PropTypes.bool,
    isSelectable: PropTypes.bool,
    isSorting: PropTypes.bool,
    selected: PropTypes.array,
    onSelect: PropTypes.func,
    sortBy: PropTypes.array,
  };
  static defaultProps = {
    isHeaderShow: true,
    isSelectable: false,
    isSorting: false,
  }
  state = {
    selectedItems: this.props.selected || [],
    sortingMeta: {
      columnKey: '',
      order: 'ASCENDING',
    },
  };

  onMultiSelect = () => {
    const { selectedItems } = this.state;
    const { tableContent } = this.context;
    const isItemSelected = selectedItems.length <= tableContent.length && selectedItems.length > 0;
    let selectedItemKeys = [];

    if (!isItemSelected) {
      selectedItemKeys = _.map(tableContent, (o) => o.id);
    }

    this.setState({
      selectedItems: selectedItemKeys,
    }, () => {
      this.props.onSelect(this.state.selectedItems);
    });
  };

  onSelect = (listKey) => {
    const { selectedItems } = this.state;

    if (selectedItems.indexOf(listKey) !== -1) {
      const items = _.filter(selectedItems, (item) => item !== listKey);

      this.setState({
        selectedItems: items,
      }, () => {
        this.props.onSelect(this.state.selectedItems);
      });
    } else {
      this.setState({
        selectedItems: [...selectedItems, listKey],
      }, () => {
        this.props.onSelect(this.state.selectedItems);
      });
    }
  };

  renderHeaderCell = (column) => {
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
                const sortedColumn = sortByColumn(column.dataIndex, this.context.tableContent, this.state.sortingMeta.order);

                onSort(sortedColumn);
              });
            }}
          />
        )}
      </TableContext.Consumer>
    );
  };

  render() {
    const { tableHeader, isHeaderShow, isSelectable, isSorting, sortBy } = this.props;
    const { selectedItems } = this.state;
    const { tableContent } = this.context;

    return (
      <table id={this.context.id}>
        {isHeaderShow && (
          <thead>
            <tr>
              {isSelectable && (
                <th>
                  <Checkbox
                    isChecked={selectedItems.length <= tableContent.length && selectedItems.length > 0}
                    onChange={() => { this.onMultiSelect(); }}
                    className={_.isEqual(selectedItems.length, tableContent.length) && selectedItems.length > 0 ? 'checkmark' : selectedItems.length < tableContent.length && selectedItems.length > 0 ? 'minus' : null}
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
        )}
        <tbody>
          {!_.isEmpty(tableContent) ? (
            <Fragment>
              {_.map(tableContent, (content, index) => (
                <Fragment>
                  <tr
                    key={index}
                    className={_.includes(selectedItems, content.id) ? 'active' : 'inactive'}
                  >
                    {isSelectable && (
                      <td>
                        <Checkbox
                          isChecked={_.includes(selectedItems, content.id)}
                          onChange={() => { this.onSelect(content.id); }}
                        />
                      </td>
                    )}
                    {_.map(tableHeader, (item, subIndex) => (
                      !_.isEmpty(item.dataIndex) ? (
                        <td key={subIndex}>
                          {_.isString(item.dataIndex) ? (
                            <span>
                              {content[item.dataIndex]}
                            </span>
                          ) : (
                            <div
                              className="hawk-table__content"
                            >
                              {_.map(item.dataIndex, (value, tdIndex) => (
                                (!item.dataRender) ? (
                                  <div key={tdIndex}>{content[value]}</div>
                                ) : (
                                  <Fragment>
                                    {_.isEmpty(item.renderItem(content)[tdIndex]) ? (
                                      <div key={tdIndex}>{content[value]}</div>
                                    ) : (
                                      <div key={tdIndex}>{item.renderItem(content)[tdIndex]}</div>
                                    )}
                                  </Fragment>
                                )
                              ))}
                            </div>
                          )}
                        </td>
                      ) : <td key={subIndex}>{item.render(content)}</td>
                    ))}
                  </tr>
                  {_.get(content, 'expandable') && (
                    <Fragment>
                      {_.map(content.expandable, (expandItem, subIndex) => (
                        <tr
                          key={subIndex}
                          className="active"
                        >
                          {_.map(tableHeader, (item, childIndex) => (
                            <td key={childIndex}>
                              {expandItem[item.dataIndex]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  )}
                </Fragment>
              ))}
            </Fragment>
          ) : (
            <tr>
              <td className="hawk-table__not-found" colSpan={tableHeader.length}>No matching records found</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
