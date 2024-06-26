## Installation


#### To install a component run
`$ npm install @hawk-ui/tags-input --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/tags-input/dist/index.min.css
```


## Usage


#### Tags Input
[Demo](https://hawk.oncrypt.co/#!/TagsInput/1)
```js static
import TagsInput from '@hawk-ui/tags-input';
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
  selectedItem: [],
  searchValue: '',
};

<TagsInput
  label="Tags Input"
  suggestions={state.suggestionContent}
  placeholder="Select anyone"
  searchValue={state.searchValue}
  onChange={(event) => {
    setState({
      searchValue: event.target.value,
    })
  }}
  searchContent={['title']}
  renderSuggestion={(suggestion) => suggestion.title}
  messageIfEmpty="No Item Found"
  onAddTag={(item, meta) => {
    if (meta.isSuggestion) {
      setState(prevState => ({
        selectedItem: [...prevState.selectedItem, item.value],
        searchValue: '',
      }));
    } else {
      setState(prevState => ({
        selectedItem: [...prevState.selectedItem, item],
        searchValue: '',
      }));
    }
  }}
  onRemoveTag={(item, index, meta) => {
    setState({
      selectedItem: state.selectedItem.filter((item, i) => i !== index),
    });
  }}
  tags={state.selectedItem}
  renderTag={tag => tag}
  isRequired
  isError
  errorMessage="This field is a compulsory field."
/>
```