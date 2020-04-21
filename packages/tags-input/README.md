#### Basic Tags Input Usage:

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
  <TagsInput
    suggestions={state.suggestionContent}
    isIcon
    placeholder="Select anyone"
    searchValue={state.searchValue}
    onChange={(value) => {
      setState({
        searchValue: value,
      })
    }}
    searchContent={['title']}
    renderSuggestion={(suggestion) => suggestion.title}
    onSuggestionSelect={(item, meta) => {
      setState({ selectedItem: item.title, searchValue: item.title });
    }}
    messageIfEmpty="No Item Found"
  />
</div>
```
