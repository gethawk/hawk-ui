## Installation
`$ npm install @hawk-ui/radio --save`


## Usage


#### Without Required
[Demo](https://hawk.wallnit.com/#!/Radio/1)
```js
initialState = {
  fruits: [
    { key: 1, label: 'apple', value: 'apple' },
    { key: 1, label: 'mango', value: 'mango' },
    { key: 1, label: 'banana', value: 'banana' },
    { key: 1, label: 'orange', value: 'orange' },
    { key: 1, label: 'pineapple', value: 'pineapple' },
  ],
  selectedItem: '',
};

<Radio
  options={state.fruits}
  selectedItem={state.selectedItem}
  onChange={(event) => {
    setState({
      selectedItem: event.target.value
    });
  }}
/>
```


#### With Required
[Demo](https://hawk.wallnit.com/#!/Radio/3)
```js
initialState = {
  fruits: [
    { key: 1, label: 'apple', value: 'apple' },
    { key: 1, label: 'mango', value: 'mango' },
    { key: 1, label: 'banana', value: 'banana' },
    { key: 1, label: 'orange', value: 'orange' },
    { key: 1, label: 'pineapple', value: 'pineapple' },
  ],
  selectedItem: '',
};

<Radio
  label="Select Fruit"
  options={state.fruits}
  selectedItem={state.selectedItem}
  onChange={(event) => {
    setState({
      selectedItem: event.target.value
    });
  }}
  isRequired
  isError
  errorMessage="This field is a compulsory field."
/>
```