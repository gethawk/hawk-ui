#### Basic Dropdown Usage:

```js
const suggestions = [
  {title: 'Action', value: 'action'},
  {title: 'Another action', value: 'another action'},
  {title: 'Something else here', value: 'something else here'},
];

<div className="styleguidist__btns-wrap">
  <Dropdown
    title="Dropdown"
    isIcon
    suggestions={suggestions}
    renderSuggestion={(suggestion) => suggestion.title}
    selectValue={(meta, item) => { console.log(meta, item); }}
  />
</div>
```
