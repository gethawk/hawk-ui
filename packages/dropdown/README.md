## Installation


#### To install a component run
`$ npm install @hawk-ui/dropdown --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/dropdown/dist/index.min.css
```


## Usage


#### Dropdown Button Click
[Demo](https://hawk.wallnit.com/#!/Dropdown/1)
```js static
import Dropdown from '@hawk-ui/dropdown';
```
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


#### Dropdown Link
[Demo](https://hawk.wallnit.com/#!/Dropdown/3)
```js static
import Dropdown from '@hawk-ui/dropdown';
```
```js
const suggestions = [
  {title: 'Action', value: 'action', link: '/#'},
  {title: 'Another action', value: 'another action', link: '/#'},
  {title: 'Something else here', value: 'something else here', link: '/#'},
];

<Dropdown
  title="Dropdown"
  isIcon
  suggestions={suggestions}
  renderSuggestion={(suggestion) => suggestion.title}
  selectValue={(meta, item) => { console.log(meta, item); }}
/>
```


#### Dropdown Button Hover
[Demo](https://hawk.wallnit.com/#!/Dropdown/3)
```js static
import Dropdown from '@hawk-ui/dropdown';
```
```js
const suggestions = [
  {title: 'Action', value: 'action'},
  {title: 'Another action', value: 'another action'},
  {title: 'Something else here', value: 'something else here'},
];

<Dropdown
  title="Dropdown"
  isIcon
  isHoverable
  suggestions={suggestions}
  renderSuggestion={(suggestion) => suggestion.title}
  selectValue={(meta, item) => { console.log(meta, item); }}
/>
```