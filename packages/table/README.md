#### Basic Table Usage:

```js
const tableHeader1 = [
  { key: 'company', title: 'Company', dataIndex: 'company' },
  { key: 'contact', title: 'Contact', dataIndex: 'contact' },
  { key: 'country', title: 'Country', dataIndex: 'country' },
  { key: 'action', title: 'Action', dataIndex: '', render: (event) => <span onClick={() => { console.log(event); }} style={{ cursor: 'pointer' }}>Delete</span> },
];

const tableHeader2 = [
  { key: 'company', title: 'Company', dataIndex: ['company', 'contact'], dataRender: true, renderItem: (event) => ['', <span style={{ fontWeight: 'bold' }}>{event.contact}</span>] },
  { key: 'country', title: 'Country', dataIndex: 'country', },
  { key: 'action', title: 'Action', dataIndex: '', render: (event) => <span onClick={() => { console.log(event); }} style={{ cursor: 'pointer' }}>Delete</span> },
];

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
  <p>Signel Row</p>
  <br />
  <Table
    tableContent={state.searchContent}
    tableSearchContent={['company', 'contact', 'country']}
  >
    <Table.SEARCH />
    <Table.CONTENT
      tableHeader={tableHeader1}
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
  <br /><br />
  <p>Multiple Row</p>
  <br />
  <Table
    tableContent={state.searchContent}
    tableSearchContent={['company', 'contact', 'country']}
  >
    <Table.SEARCH />
    <Table.CONTENT
      tableHeader={tableHeader2}
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
