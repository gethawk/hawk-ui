/* eslint-disable react/no-did-update-set-state */
// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// React modules
import _ from 'lodash';
import Head from './head';
import Body from './body';
// context modules
import { TableContext } from '../../context/tableContext';

export default class TContent extends Component {
  static displayName = 'TContent';
  static contextType = TableContext;
  static propTypes = {
    tableHeader: PropTypes.array,
    isHeaderShow: PropTypes.bool,
    isSelectable: PropTypes.bool,
    isSorting: PropTypes.bool,
    isFilter: PropTypes.bool,
    isLoading: PropTypes.bool,
    selected: PropTypes.array,
    onSelect: PropTypes.func,
    sortBy: PropTypes.array,
    onSort: PropTypes.func,
    filterBy: PropTypes.array,
    renderLoading: PropTypes.element,
    rowRender: PropTypes.func,
    renderDataNotFound: PropTypes.func,
    collapseIndex: PropTypes.number,
  };
  static defaultProps = {
    isHeaderShow: true,
    isSelectable: false,
    isSorting: false,
    isFilter: false,
    isLoading: false,
  }
  state = {
    selectedItems: this.props.selected || [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selected !== this.props.selected) {
      this.setState({
        selectedItems: this.props.selected || [],
      });
    }
  }

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
    const { tableHeader, isHeaderShow, isSelectable, isSorting, isFilter, isLoading, renderLoading, rowRender, sortBy, onSort: propsOnSort, filterBy, renderDataNotFound, collapseIndex } = this.props;
    const { selectedItems } = this.state;
    const { tableContent } = this.context;
    const onSort = propsOnSort || this.context.onSort;

    return (
      <table id={this.context.id}>
        {isHeaderShow && (
          <Head
            tableHeader={tableHeader}
            tableContent={tableContent}
            isSelectable={isSelectable}
            selected={selectedItems}
            isSorting={isSorting}
            isFilter={isFilter}
            sortBy={sortBy}
            onSort={onSort}
            filterBy={filterBy}
            onMultiSelect={this.onMultiSelect}
          />
        )}
        <Body
          tableHeader={tableHeader}
          tableContent={tableContent}
          selectedItems={selectedItems}
          isLoading={isLoading}
          renderLoading={renderLoading}
          rowRender={rowRender}
          isSelectable={isSelectable}
          onSelect={this.onSelect}
          renderDataNotFound={renderDataNotFound}
          collapseIndex={collapseIndex}
        />
      </table>
    );
  }
}
