// vendor modules
import React, { Fragment, Component, createContext } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// React modules
import getClassnames from 'classnames';
import Input from '@hawk-ui/input';
import Pagination from '@hawk-ui/pagination';
import Checkbox from '@hawk-ui/checkbox';
import Button from '@hawk-ui/button';
// constant modules
import { sortOrders } from './constant';
// utils modules
import { sortByColumn } from './utils/sortBy';
import { exportToCsv } from './utils/exportCSV';
import { exportToPrint } from './utils/exportPrint';
// css modules
import './index.scss';

const TableContext = createContext({
  onSearch: () => {},
  onSort: () => {},
});

class TableSearch extends Component {
  static displayName = 'TableSearch';
  static contextType = TableContext;
  state = {};

  render() {
    return (
      <div className="hawk-table__filter">
        <div className="hawk-table__filter-downloads">
          {_.map(_.get(this.context, 'exports'), (item, index) => (
            <Button
              key={index}
              onClick={
                _.isObject(item) ?
                  _.isEqual(_.get(item, 'key'), 'csv') ? () => { exportToCsv(_.get(this.context, 'id'), _.get(item, 'columns')); }
                    : _.isEqual(_.get(item, 'key'), 'print') ? () => { exportToPrint(_.get(this.context, 'id'), _.get(item, 'columns')); }
                    : null
                  : _.isEqual(item, 'csv') ? () => { exportToCsv(_.get(this.context, 'id')); }
                    : _.isEqual(item, 'print') ? () => { exportToPrint(_.get(this.context, 'id')); }
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

class TablePagination extends Component {
  static displayName = 'TablePagination';
  static propTypes = {
    pageRangeDisplayed: PropTypes.number,
    itemsCountPerPage: PropTypes.number,
    totalItemsCount: PropTypes.number,
    onPaginationChange: PropTypes.func,
  };
  state = {
    activePage: 1,
  };

  render() {
    const { pageRangeDisplayed, itemsCountPerPage, totalItemsCount, onPaginationChange } = this.props;

    return (
      <Pagination
        pageRangeDisplayed={pageRangeDisplayed}
        activePage={this.state.activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        renderPrevPage={() => (<i className="fa fa-chevron-left"></i>)}
        renderNextPage={() => (<i className="fa fa-chevron-right"></i>)}
        renderFirstPage={() => (null)}
        renderLastPage={() => (null)}
        onChange={(pageNumber) => {
          this.setState({ activePage: pageNumber }, () => {
            onPaginationChange(this.state.activePage);
          });
        }}
      />
    );
  }
}

class TableContent extends Component {
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
              ))}
            </Fragment>
          ) : (
            <tr>
              <td className="not-found" colSpan={tableHeader.length}>No matching records found</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

/**
 * @example ../README.md
 */
export default class Table extends Component {
  static displayName = 'Table';
  static propTypes = {
    id: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
      PropTypes.object,
    ]),
    tableContent: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    tableSearchContent: PropTypes.array,
    onSearch: PropTypes.func,
    exports: PropTypes.array,
  };
  static defaultProps = {
    id: 'table',
    exports: [],
  }
  static SEARCH = TableSearch;
  static PAGINATION = TablePagination;
  static CONTENT = TableContent;
  constructor(props) {
    super(props);

    this.onSearch = (event) => {
      this.onSearchInput(event);
    };

    this.onSort = (event) => {
      this.onSortColumn(event);
    };

    this.state = {
      tableContent: this.props.tableContent,
      id: this.props.id,
      onSearch: this.onSearch,
      onSort: this.onSort,
      exports: this.props.exports,
    };
  }

  componentWillReceiveProps(nextProps, prevProps) {
    if (!_.isEqual(nextProps.tableContent, prevProps.tableContent)) {
      this.setState({
        tableContent: nextProps.tableContent,
      });
    }
  }

  onSearchInput = (event) => {
    const searchValue = event.target.value.toLowerCase();

    const tableContent = _.filter(this.props.tableContent, (content) => _.reduce(this.props.tableSearchContent, (result, key) => {
      if (content[key].toLowerCase().includes(searchValue)) { return true; }

      return result || false;
    }, false));

    this.setState({ tableContent });
  };

  onSortColumn = (event) => {
    this.setState({
      tableContent: event,
    });
  };

  render() {
    return (
      <TableContext.Provider value={this.state}>
        <div className="hawk-table">
          {this.props.children}
        </div>
      </TableContext.Provider>
    );
  }
}
