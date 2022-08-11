## Installation


#### To install a component run
`$ npm install @hawk-ui/select-dropdown --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/select-dropdown/dist/index.min.css
```


## Usage


#### Without editable:
[Demo](https://hawk.wallnit.com/#!/SelectDropdown/1)
```js static
import SelectDropdown from '@hawk-ui/select-dropdown';
```
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

<SelectDropdown
  suggestions={state.suggestionContent}
  isIcon
  placeholder="Select anyone"
  searchValue={state.searchValue}
  renderSuggestion={(suggestion) => suggestion.title}
  onSuggestionSelect={(item, meta) => {
    setState({ selectedItem: item.title, searchValue: item.title });
  }}
  label="Select Dropdown"
  isRequired
  isError={!state.selectedItem}
  errorMessage="This field is a compulsory field."
/>
```


#### With editable
[Demo](https://hawk.wallnit.com/#!/SelectDropdown/3)
```js static
import SelectDropdown from '@hawk-ui/select-dropdown';
```
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

<SelectDropdown
  suggestions={state.suggestionContent}
  isIcon
  isReadOnly={false}
  placeholder="Select anyone"
  searchValue={state.searchValue}
  onChange={(event) => {
    setState({
      searchValue: event.target.value,
    })
  }}
  searchContent={['title']}
  renderSuggestion={(suggestion) => suggestion.title}
  onSuggestionSelect={(item, meta) => {
    setState({ selectedItem: item.title, searchValue: item.title });
  }}
  messageIfEmpty="No Item Found"
/>
```


#### With option:
[Demo](https://hawk.wallnit.com/#!/SelectDropdown/1)
```js static
import SelectDropdown from '@hawk-ui/select-dropdown';
```
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

<SelectDropdown
  suggestions={state.suggestionContent}
  isIcon
  placeholder="Select anyone"
  searchValue={state.searchValue}
  renderSuggestion={(suggestion) => suggestion.title}
  onSuggestionSelect={(item, meta) => {
    setState({ selectedItem: item.title, searchValue: item.title });
  }}
  label="Select Dropdown"
  children={(
    <React.Fragment>
      <Input
        type="text"
      />
      <Button>
        <span>Create</span>
      </Button>
    </React.Fragment>
  )}
/>
```