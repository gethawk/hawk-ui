#### Basic Table Usage:

```js
const tableHeader = ['Company', 'Contact', 'Country'];

const tableContent = [
  { 'company': 'Alfreds Futterkiste', 'contact': 'Maria Anders', 'country': 'Germany' },
  { 'company': 'Centro comercial Moctezuma', 'contact': 'Francisco Chang', 'country': 'Mexico' },
  { 'company': 'Ernst Handel', 'contact': 'Roland Mendel', 'country': 'Austria' },
  { 'company': 'Island Trading', 'contact': 'Helen Bennett', 'country': 'UK' },
  { 'company': 'Alfreds Futterkiste', 'contact': 'Maria Anders', 'country': 'Germany' },
];

const [PAGE_RANGE_DISPLAYED, PAGE_SIZE, TOTAL_RESULTS] = [3, 10, 1000];

initialState = {
  searchContent: tableContent,
  activePage: 1,
};

<div className="styleguidist__btns-wrap">
  <Table
    tableContent={state.searchContent}
    tableRenderContent={['company', 'contact', 'country']}
    tableSearchContent={['company', 'contact', 'country']}
  >
    <Table.SEARCH />
    <Table.CONTENT
      tableHeader={tableHeader}
    />
    <Table.PAGINATION
      pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
      itemsCountPerPage={PAGE_SIZE}
      totalItemsCount={TOTAL_RESULTS}
      onPaginationChange={(pageNumber) => {
        setState({ activePage: pageNumber });
      }}
    />
  </Table>
</div>
```
