## Installation


#### To install a component run
`$ npm install @hawk-ui/suggestions --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/suggestions/dist/index.min.css
```


## Usage


#### Suggestions
[Demo](https://hawk.oncrypt.co/#!/Suggestions/1)
```js static
import Suggestions from '@hawk-ui/suggestions';
```
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
};

<Suggestions
  suggestions={countries}
  renderSuggestion={(suggestion) => suggestion.title}
  searchContent={['title']}
  onSuggestionSelect={(value, meta) => {
    if (meta.isSuggestion) {
      window.alert(value.title);
    } else {
      window.alert(value);
    }
  }}
>
  <p>Suggestions Input</p>
  <br />
  <Suggestions.INPUT
    placeholder="Search country name"
    value={state.value}
    onChange={(event) => {
      setState({
        value: event.target.value,
      });
    }}
  />
  <br />
  <p>Suggestions Wrap</p>
  <br />
  <Suggestions.CONTAINER
    children={(
      <>
        <Input
          type="text"
        />
        <Button>
          <span>Create</span>
        </Button>
      </>
    )}
    messageIfEmpty="No item Found"
    onSuggestionClick={(value) => {
      window.alert(value.title);
    }}
  />
</Suggestions>
```