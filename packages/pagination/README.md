## Installation


#### To install a component run
`$ npm install @hawk-ui/pagination --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/pagination/dist/index.min.css
```


## Usage


#### Pagination
[Demo](https://hawk.oncrypt.co/#!/Pagination/1)
```js static
import Pagination from '@hawk-ui/pagination';
```
```js
const [PAGE_RANGE_DISPLAYED, PAGE_SIZE, totalResults] = [5, 15, 1000];

initialState = {
  activePage: 1,
};

<Pagination
  pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
  activePage={state.activePage}
  itemsCountPerPage={PAGE_SIZE}
  totalItemsCount={totalResults}
  renderPrevPage={() => (<i className="fa fa-chevron-left"></i>)}
  renderNextPage={() => (<i className="fa fa-chevron-right"></i>)}
  renderFirstPage={() => (<span>First</span>)}
  renderLastPage={() => (<span>Last</span>)}
  onChange={(pageNumber) => {
    setState({ activePage: pageNumber });
  }}
/>
```