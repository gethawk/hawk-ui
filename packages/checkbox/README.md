## Installation
`$ npm install @hawk-ui/checkbox --save`


## Usage


#### Without Required
[Demo]()
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
[Demo]()
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
[Demo]()
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
/>
```