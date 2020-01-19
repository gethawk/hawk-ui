#### Basic Select Dropdown Usage:

```js
const suggestions = [
  {title: 'Alfreds Futterkiste', value: 'alfreds futterkiste'},
  {title: 'Centro comercial Moctezuma', value: 'centro comercial moctezuma'},
  {title: 'Ernst Handel', value: 'ernst handel'},
  {title: 'Island Trading', value: 'island trading' },
  {title: 'Alfreds Futterkiste', value: 'alfreds futterkiste' },
  {title: 'Maria Anders', value: 'maria anders' },
  {title: 'Francisco Chang', value: 'francisco chang' },
  {title: 'Roland Mendel', value: 'roland mendel' },
  {title: 'Helen Bennett', value: 'helen bennett' },
  {title: 'Maria Anders', value: 'maria anders' },
];

initialState = {
  suggestionContent: suggestions,
  activePage: 1,
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
    renderSelectedItem={() => (
      state.selectedItem ? state.selectedItem : 'Select anyone'
    )}
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
