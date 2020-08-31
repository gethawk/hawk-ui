## Installation
`$ npm install @hawk-ui/table --save`


## Usage


#### Simple table
[Demo](https://hawk.wallnit.com/#!/Table/1)
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


#### Multiple Row
[Demo](https://hawk.wallnit.com/#!/Table/3)
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
  exports={['csv', 'print']}
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
[Demo](https://hawk.wallnit.com/#!/Table/13)
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
>
  <Table.CONTENT
    tableHeader={header}
    isFilter
    filterBy={['company', 'contact', 'country']}
    filterOptions={{
      company: {
        title: 'Company',
        visual: {
          show_title: false,
        },
        properties: {
          search: {
            title: 'Search',
            placeholder: 'Search',
            visual: {
              field_type: 'input',
              show_title: false,
              show_placeholder: true,
              suggest: {
                api: '/api/v1/suggest/skill/',
              },
            },
          },
          companies: {
            title: 'Companies',
            visual: {
              field_type: 'checkbox',
              show_title: false,
              suggest: {
                options: [
                  { key: 1, label: "apple", value: "apple" },
                  { key: 2, label: "mango", value: "mango" },
                  { key: 3, label: "banana", value: "banana" },
                  { key: 4, label: "orange", value: "orange" },
                  { key: 5, label: "pineapple", value: "pineapple" }
                ],
              },
            },
          },
        },
      },
      contact: {
        title: 'Contact',
        visual: {
          show_title: false,
        },
        properties: {
          contacts: {
            title: 'Contacts',
            visual: {
              field_type: 'checkbox',
              show_title: false,
              items: [
                { key: 1, label: "apple", value: "apple" },
                { key: 2, label: "mango", value: "mango" },
                { key: 3, label: "banana", value: "banana" },
                { key: 4, label: "orange", value: "orange" },
                { key: 5, label: "pineapple", value: "pineapple" }
              ],
            },
          },
        },
      },
      country: {
        title: 'Country',
        visual: {
          show_title: false,
        },
        properties: {
          country: {
            title: 'Country',
            visual: {
              field_type: 'input',
              show_title: false,
              show_placeholder: true,
              suggest: {
                api: '/api/v1/suggest/skill/',
              },
            },
          },
        },
      },
    }}
  />
</Table>
```