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
  { id: 1, 'company': 'Alfreds Futterkiste', 'contact': 'Maria Anders', 'country': 'Germany' },
  { id: 2, 'company': 'Centro comercial Moctezuma', 'contact': 'Francisco Chang', 'country': 'Mexico' },
  { id: 3, 'company': 'Ernst Handel', 'contact': 'Roland Mendel', 'country': 'Austria' },
  { id: 4, 'company': 'Island Trading', 'contact': 'Helen Bennett', 'country': 'UK' },
  { id: 5, 'company': 'Alfreds Futterkiste', 'contact': 'Maria Anders', 'country': 'Germany' },
];

const [PAGE_RANGE_DISPLAYED, PAGE_SIZE, TOTAL_RESULTS] = [3, 10, 1000];

initialState = {
  searchContent: tableContent,
  activePage: 1,
  selectedItems: [1, 3],
};

<div className="styleguidist__btns-wrap">
  <p>Signel Row</p>
  <br />
  <Table
    tableContent={state.searchContent}
    tableSearchContent={['company', 'contact', 'country']}
    exports={[
      {
        key: 'csv',
        title: 'CSV Download',
        columns: [0, 1, 2],
      },
      {
        key: 'print',
        title: 'Print',
        columns: [0, 1, 2],
      },
    ]}
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
    id="table2"
    tableContent={state.searchContent}
    tableSearchContent={['company', 'contact', 'country']}
    exports={['csv', 'print']}
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
  <br /><br />
  <p>Without Header</p>
  <Table
    tableContent={state.searchContent}
    tableSearchContent={['company', 'contact', 'country']}
  >
    <Table.SEARCH />
    <Table.CONTENT
      isHeaderShow={false}
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
  <p>Table Selectable</p>
  <Table
    tableContent={state.searchContent}
    tableSearchContent={['company', 'contact', 'country']}
  >
    <Table.SEARCH />
    <Table.CONTENT
      tableHeader={tableHeader1}
      isSelectable
      selected={state.selectedItems}
      onSelect={(items) => {
        setState({ selectedItems: items });
      }}
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
  <p>Table Sorting</p>
  <Table
    tableContent={state.searchContent}
    tableSearchContent={['company', 'contact', 'country']}
  >
    <Table.SEARCH />
    <Table.CONTENT
      tableHeader={tableHeader1}
      isSorting
      sortBy={['company', 'country']}
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
  <br />
</div>
```
