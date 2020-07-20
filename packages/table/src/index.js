// vendor modules
import React, { Fragment, Component, createContext } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// React modules
import Input from '@hawk-ui/input';
import Pagination from '@hawk-ui/pagination';
import Checkbox from '@hawk-ui/checkbox';
// css modules
import './index.scss';

const TableContext = createContext({
  onSearch: () => {},
});

class TableSearch extends Component {
  static displayName = 'TableSearch';
  state = {};

  render() {
    return (
      <div className="hawk-table__filter">
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
    selected: PropTypes.array,
    onSelect: PropTypes.func,
  };
  static defaultProps = {
    isHeaderShow: true,
    isSelectable: false,
  }
  state = {
    tableContent: this.context.tableContent,
    selectedItems: this.props.selected || [],
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

  render() {
    const { tableHeader, isHeaderShow, isSelectable } = this.props;
    const { selectedItems } = this.state;
    const { tableContent } = this.context;

    return (
      <table>
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
                <th key={index}>{item.title}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {_.map(this.context.tableContent, (content, index) => (
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
  };
  static SEARCH = TableSearch;
  static PAGINATION = TablePagination;
  static CONTENT = TableContent;
  constructor(props) {
    super(props);

    this.onSearch = (event) => {
      this.onSearchInput(event);
    };

    this.state = {
      tableContent: this.props.tableContent,
      onSearch: this.onSearch,
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
