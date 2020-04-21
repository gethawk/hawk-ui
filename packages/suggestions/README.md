#### Basic Suggestions Usage:

```js
const countries = [
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
  value: '',
  filteredSuggstions: countries,
};

<div className="styleguidist__btns-wrap">
  <Suggestions
    suggestions={state.filteredSuggstions}
    renderSuggestion={(suggestion) => suggestion.title}
    onSuggestionSelect={(value, meta) => {
      if (meta.isSuggestion) {
        window.alert(value.title);
      } else {
        window.alert(value);
      }
      console.log('select', value, meta);
    }}
  >
    <p>Suggestions Input</p>
    <br />
    <Suggestions.INPUT
      placeholder="Search country name"
      value={state.value}
      onChange={(value) => {
        const searchValue = value.toLowerCase();

        const filteredSuggstions = countries.filter(suggestion => (
          suggestion['title'].toLowerCase().indexOf(searchValue) !== -1 || !searchValue
        ));

        setState({ filteredSuggstions, value: searchValue });
      }}
    />
    <br />
    <p>Suggestions Wrap</p>
    <br />
    <Suggestions.CONTAINER
      messageIfEmpty="No item Found"
      onSuggestionClick={(value) => {
        window.alert(value.title);
      }}
    />
  </Suggestions>
</div>
```
