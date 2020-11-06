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
    headers: {
      company: 'Company',
      contact: 'Contact No.',
      country: 'Country',
    },
    items: content,
  }}
>
  <Table.SEARCH />
  <Table.CONTENT
    tableHeader={header}
    isLoading={false}
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


#### Multiple Row
[Demo](https://hawk.wallnit.com/#!/Table/3)
```js static
import Table from '@hawk-ui/table';
```
```js
const header = [
  { key: 'company', title: 'Company', dataIndex: ['company', 'contact'], dataRender: true, renderItem: (event) => ['', <span style={{ fontWeight: 'bold' }}>{event.contact}</span>] },
  { key: 'country', title: 'Country', dataIndex: 'country', },
  { key: 'action', title: 'Action', dataIndex: '', render: (event) => <span onClick={() => { console.log(event); }} style={{ cursor: 'pointer' }}>Delete</span> },
];

const content = [
  { id: 1, 'company': 'Alfreds Futterkiste', 'contact': 'Maria Anders', 'country': 'Germany' },
  { id: 2, 'company': 'Centro comercial Moctezuma', 'contact': 'Francisco Chang', 'country': 'Mexico' },
  { id: 3, 'company': 'Ernst Handel', 'contact': 'Roland Mendel', 'country': 'Austria' },
  { id: 4, 'company': 'Island Trading', 'contact': 'Helen Bennett', 'country': 'UK' },
  { id: 5, 'company': 'Alfreds Futterkiste', 'contact': 'Maria Anders', 'country': 'Germany' },
];

const contentValue = [
  { 'company': 'Alfreds Futterkiste', 'contact': 'Maria Anders', 'country': 'Germany' },
  { 'company': 'Centro comercial Moctezuma', 'contact': 'Francisco Chang', 'country': 'Mexico' },
  { 'company': 'Ernst Handel', 'contact': 'Roland Mendel', 'country': 'Austria' },
];

const [PAGE_RANGE_DISPLAYED, PAGE_SIZE, TOTAL_RESULTS] = [3, 10, 1000];

initialState = {
  searchContent: content,
  activePage: 1,
  selectedItems: [1, 3],
};

<Table
  id="table2"
  tableContent={state.searchContent}
  tableSearchContent={['company', 'contact', 'country']}
  exports={{
    options: [
      {
        key: 'csv',
        title: 'CSV Download',
      },
      {
        key: 'print',
        title: 'Print',
      },
    ],
    headers: {
      company: 'Company',
      contact: 'Contact No.',
      country: 'Country',
    },
    items: contentValue,
  }}
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


#### Without Header
[Demo](https://hawk.wallnit.com/#!/Table/5)
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
>
  <Table.SEARCH />
  <Table.CONTENT
    isHeaderShow={false}
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


#### Table Selectable
[Demo](https://hawk.wallnit.com/#!/Table/7)
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
>
  <Table.SEARCH />
  <Table.CONTENT
    tableHeader={header}
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
```


#### Download Selectable
[Demo](https://hawk.wallnit.com/#!/Table/9)
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

initialState = {
  searchContent: content,
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
  }}
>
  <Table.SEARCH
    selected={state.selectedItems}
    isSelectedExport
  />
  <Table.CONTENT
    tableHeader={header}
    isSelectable
    selected={state.selectedItems}
    onSelect={(items) => {
      setState({ selectedItems: items });
    }}
  />
</Table>
```


#### Table Sorting
[Demo](https://hawk.wallnit.com/#!/Table/11)
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
>
  <Table.SEARCH />
  <Table.CONTENT
    tableHeader={header}
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
```


#### Table Filter
[Demo]()
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

const filterCompany = [
  { key: 1, label: 'Centro', value: 1 },
  { key: 1, label: 'Ernst', value: 1 },
  { key: 1, label: 'Alfreds', value: 1 },
];

const filterCountry = [
  { key: 1, label: 'Austria', value: 1 },
  { key: 1, label: 'Germany', value: 2 },
  { key: 3, label: 'Mexico', value: 3 },
];

initialState = {
  searchContent: content,
  selectedItems: [1, 3],
};

<Table
  tableContent={state.searchContent}
  tableSearchContent={['company', 'contact', 'country']}
>
  <Table.CONTENT
    tableHeader={header}
    isFilter
    filterBy={[
      {
        key: 'company',
        properties: {
          search: (
            <Input
              type="text"
              className="hawk-input"
              onChange={(event) => {
                console.log('company search', event)
              }}
              placeholder="Search Company"
            />
          ),
          options: (
            <Checkbox
              options={filterCompany}
            />
          ),
        },
      },
      {
        key: 'country',
        properties: {
          options: (
            <Checkbox
              options={filterCountry}
            />
          ),
        },
      },
    ]}
  />
</Table>
```


#### Table Expandable
[Demo]()
```js static
import Table from '@hawk-ui/table';
```
```js
const header = [
  { key: 'company', title: 'Company', dataIndex: 'company' },
  { key: 'contact', title: 'Contact', dataIndex: 'contact' },
  { key: 'action', title: 'Action', dataIndex: '', render: (event) => <i class="fa fa-sort-down" style={{ cursor: 'pointer' }} onClick={() => { console.log(event); }} /> },
];

const content = [
  { id: 1, 'company': 'Alfreds Futterkiste', 'contact': 'Maria Anders',
    expandable: [
      { id: 1, contact: '+91-7867890109' },
      { id: 1, contact: 'dummy@example.com' },
    ],
  },
  { id: 2, 'company': 'Centro comercial Moctezuma', 'contact': 'Francisco Chang',
    expandable: [
      { id: 1, contact: '+91-7867890109' },
    ],
  },
  { id: 3, 'company': 'Ernst Handel', 'contact': 'Roland Mendel',
    expandable: [
      { id: 1, contact: 'dummy@example.com' },
    ],
  },
  { id: 4, 'company': 'Island Trading', 'contact': 'Helen Bennett' },
  { id: 5, 'company': 'Alfreds Futterkiste', 'contact': 'Maria Anders',
    expandable: [
      { id: 1, contact: '+91-7867890109' },
    ],
  },
];

<Table
  tableContent={content}
>
  <Table.CONTENT
    tableHeader={header}
  />
</Table>
```