// vendor modules
import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// React modules
import Input from '@hawk-ui/input';
import Pagination from '@hawk-ui/pagination';
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
  };
  state = {
    tableContent: this.context.tableContent,
  };

  render() {
    const { tableHeader } = this.props;

    return (
      <table>
        <thead>
          <tr>
            {_.map(tableHeader, (item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {_.map(this.context.tableContent, (content, index) => (
            <tr key={index}>
              {_.map(this.context.tableRenderContent, (item) => <td>{content[item]}</td>)}
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
    children: PropTypes.element,
    tableContent: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    tableRenderContent: PropTypes.array,
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
      tableRenderContent: this.props.tableRenderContent,
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
    const searchValue = event.toLowerCase();

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
