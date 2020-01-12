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
    tableHeaderItem={tableHeader}
    tableContentItem={state.searchContent.map(content => <tr><td>{content.company}</td><td>{content.contact}</td><td>{content.country}</td></tr>)}
    pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
    itemsCountPerPage={PAGE_SIZE}
    totalItemsCount={TOTAL_RESULTS}
    onPaginationChange={(pageNumber) => {
      setState({ activePage: pageNumber });
    }}
    onSearch={(value) => {
      const searchValue = value.toLowerCase();

      const searchContent = tableContent.filter(content => (
        content['company'].toLowerCase().indexOf(searchValue) !== -1 || !searchValue ||
        content['contact'].toLowerCase().indexOf(searchValue) !== -1 || !searchValue ||
        content['country'].toLowerCase().indexOf(searchValue) !== -1 || !searchValue
      ));

      setState({ searchContent });
    }}
  />
</div>
```
