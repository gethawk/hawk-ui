## Installation


#### To install a component run
`$ npm install @hawk-ui/checkbox --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/checkbox/dist/index.min.css
```


## Usage


#### Without Required
[Demo](https://hawk.oncrypt.co/#!/Checkbox/1)
```js static
import Checkbox from '@hawk-ui/checkbox';
```
```js
initialState = {
  fruits: [
    { key: 1, label: 'apple', value: 'apple' },
    { key: 1, label: 'mango', value: 'mango' },
    { key: 1, label: 'banana', value: 'banana' },
    { key: 1, label: 'orange', value: 'orange' },
    { key: 1, label: 'pineapple', value: 'pineapple' },
  ],
  selectedItem: [],
};

<Checkbox
  options={state.fruits}
  selectedItem={state.selectedItem}
  onChange={(event) => {
    if (state.selectedItem.indexOf(event.target.value) !== -1) {
      let fruits = state.selectedItem.filter(function(item) {
        return item !== event.target.value;
      });
      setState({
        selectedItem: fruits,
      });
    } else {
      setState({
        selectedItem: [...state.selectedItem, event.target.value],
      });
    }
  }}
/>
```


#### With Required
[Demo](https://hawk.oncrypt.co/#!/Checkbox/3)
```js static
import Checkbox from '@hawk-ui/checkbox';
```
```js
initialState = {
  fruits: [
    { key: 1, label: 'apple', value: 'apple' },
    { key: 1, label: 'mango', value: 'mango' },
    { key: 1, label: 'banana', value: 'banana' },
    { key: 1, label: 'orange', value: 'orange' },
    { key: 1, label: 'pineapple', value: 'pineapple' },
  ],
  selectedItem: [],
};

<Checkbox
  label="Select Fruit"
  options={state.fruits}
  selectedItem={state.selectedItem}
  onChange={(event) => {
    if (state.selectedItem.indexOf(event.target.value) !== -1) {
      let fruits = state.selectedItem.filter(function(item) {
        return item !== event.target.value;
      });
      setState({
        selectedItem: fruits,
      });
    } else {
      setState({
        selectedItem: [...state.selectedItem, event.target.value],
      });
    }
  }}
  isRequired
  isError
  errorMessage="This field is a compulsory field."
/>
```


#### Without object
[Demo](https://hawk.oncrypt.co/#!/Checkbox/5)
```js static
import Checkbox from '@hawk-ui/checkbox';
```
```js
initialState = {
  isChecked: false,
};

<Checkbox
  label="Select Checkbox"
  title="Title"
  value="title"
  isChecked={state.isChecked}
  onChange={(event) => {
    setState({
      isChecked: !state.isChecked,
    });
  }}
  htmlAttributes={{
    disabled: true,
  }}
/>
```