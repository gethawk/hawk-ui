## Installation
`$ npm install @hawk-ui/dropdown --save`


## Usage


#### Dropdown
[Demo]()
```js
const suggestions = [
  {title: 'Action', value: 'action'},
  {title: 'Another action', value: 'another action'},
  {title: 'Something else here', value: 'something else here'},
];

<Dropdown
  title="Dropdown"
  isIcon
  suggestions={suggestions}
  renderSuggestion={(suggestion) => suggestion.title}
  selectValue={(meta, item) => { console.log(meta, item); }}
/>
```