// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// React modules
import Pagination from '@hawk-ui/pagination';

export default class TPagination extends Component {
  static displayName = 'TPagination';
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
