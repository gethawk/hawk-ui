## Installation


#### To install a component run
`$ npm install @hawk-ui/table --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/table/dist/index.min.css
```


## Usage


#### Simple table
[Demo](https://hawk.wallnit.com/#!/Table/1)
```js static
import Table from '@hawk-ui/table';
```
```js
const header = [
  { key: 'company', title: 'Company', dataIndex: 'company' },
  { key: 'contact', title: 'Contact', dataIndex: 'contact' },
  { key: 'country', title: 'Country', dataIndex: 'country' },
  { key: 'action', title: 'Action', dataIndex: '', render: (event) => <span onClick={() => { console.log(event); }} style={{ cursor: 'pointer' }}>Delete</span> },
];

const content = [
  { id: 1, 'company': 'Alfreds Futterkiste', 'contact': 'Maria Anders', 'country': 'Germany' },
  { id: 2, 'company': 'Centro comercial Moctezuma', 'contact': 'Francisco Chang', 'country': 'Mexico' },
  { id: 3, 'company': 'Ernst Handel', 'contact': 'Roland Mendel', 'country': 'Austria' },
  { id: 4, 'company': 'Island Trading', 'contact': 'Helen Bennett', 'country': 'UK' },
  { id: 5, 'company': 'Alfreds Futterkiste', 'contact': 'Maria Anders', 'country': 'Germany' },
];

const [PAGE_RANGE_DISPLAYED, PAGE_SIZE, TOTAL_RESULTS] = [3, 10, 1000];

initialState = {
  searchContent: content,
  activePage: 1,
  selectedItems: [1, 3],
};

<Table
  tableContent={state.searchContent}
  tableSearchContent={['company', 'contact', 'country']}
  exports={{
    options: [
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
    ],
    items: content,
  }}
  // exports={[
  //   {
  //     key: 'csv',
  //     title: 'CSV Download',
  //     columns: [0, 1, 2],
  //   },
  //   {
  //     key: 'print',
  //     title: 'Print',
  //     columns: [0, 1, 2],
  //   },
  // ]}
>
  <Table.SEARCH />
  <Table.CONTENT
    tableHeader={header}
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
```