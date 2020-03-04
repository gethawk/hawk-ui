#### Basic Select Dropdown Usage:

```js
const suggestions = [
  {title: 'Argentina', value: 'argentina'},
  {title: 'Australia', value: 'australia'},
  {title: 'Belgium', value: 'belgium'},
  {title: 'Bhutan', value: 'bhutan' },
  {title: 'Brazil', value: 'brazil' },
  {title: 'Canada', value: 'canada' },
  {title: 'China', value: 'china' },
  {title: 'Colombia', value: 'colombia' },
  {title: 'Egypt', value: 'egypt' },
  {title: 'Finland', value: 'finland' },
  {title: 'Georgia', value: 'georgia' },
  {title: 'Germany', value: 'germany' },
  {title: 'India', value: 'india' },
  {title: 'Indonesia', value: 'indonesia' },
];

initialState = {
  suggestionContent: suggestions,
  selectedItem: '',
  searchValue: '',
};

<div className="styleguidist__btns-wrap">
  <SelectDropdown
    suggestions={state.suggestionContent}
    renderSuggestion={(suggestion) => suggestion.title}
    renderSelectedItem={() => (
      state.selectedItem ? state.selectedItem : 'Select anyone'
    )}
    onSuggestionSelect={(item, meta) => { setState({ selectedItem: item.title }); }}
  />
  <br />
  <br />
  <br />
  <SelectDropdown
    suggestions={state.suggestionContent}
    isInput
    isIcon
    placeholder="Select anyone"
    searchValue={state.searchValue}
    renderSuggestion={(suggestion) => suggestion.title}
    onSuggestionSelect={(item, meta) => {
      setState({ selectedItem: item.title, searchValue: item.title });
    }}
    onSearch={(value) => {
      const searchValue = value.toLowerCase();

      const suggestionContent = suggestions.filter(content => (
        content['title'].toLowerCase().indexOf(searchValue) !== -1 || !searchValue
      ));

      setState({ suggestionContent, searchValue: value });
    }}
  />
</div>
```
