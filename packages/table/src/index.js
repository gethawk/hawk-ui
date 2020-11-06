// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// React modules
import TSearch from './modules/TSearch';
import TPagination from './modules/TPagination';
import TContent from './modules/TContent';
// context modules
import { TableContext } from './context/tableContext';
// css modules
import './assets/scss/index.scss';

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

  static SEARCH = TSearch;
  static PAGINATION = TPagination;
  static CONTENT = TContent;
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
      if (!_.isEmpty(content[key])) {
        if (content[key].toLowerCase().includes(searchValue)) { return true; }
      }

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
