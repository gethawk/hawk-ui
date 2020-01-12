// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '@hawk-ui/input';
import Pagination from '@hawk-ui/pagination';
import _ from 'lodash';
// css modules
import './index.scss';

class TableFilter extends Component {
  static propTypes = {
    onSearch: PropTypes.func,
  };
  state = {};

  render() {
    return (
      <div className="hawk-table__filter">
        <Input
          type="text"
          isLabel
          label="Search:"
          onChange={this.props.onSearch}
        />
      </div>
    );
  }
}

class TablePagination extends Component {
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

/**
 * @example ../README.md
 */
export default class Table extends Component {
  static propTypes = {
    tableHeaderItem: PropTypes.array,
    tableContentItem: PropTypes.any,
    pageRangeDisplayed: PropTypes.number,
    itemsCountPerPage: PropTypes.number,
    totalItemsCount: PropTypes.number,
    onPaginationChange: PropTypes.func,
    onSearch: PropTypes.func,
  };

  state = {};

  render() {
    const { tableHeaderItem, tableContentItem, pageRangeDisplayed, itemsCountPerPage, totalItemsCount, onPaginationChange, onSearch } = this.props;

    return (
      <div className="hawk-table">
        <TableFilter
          onSearch={onSearch}
        />
        <table>
          <thead>
            <tr>
              {_.map(tableHeaderItem, (item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableContentItem}
          </tbody>
        </table>
        <TablePagination
          pageRangeDisplayed={pageRangeDisplayed}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          onPaginationChange={onPaginationChange}
        />
      </div>
    );
  }
}
