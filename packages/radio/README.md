#### Basic Radio Usage:

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

<div className="styleguidist__btns-wrap">
  <p>Without Required</p>
  <br /><br />
  <Radio
    options={state.fruits}
    selectedItem={state.selectedItem}
    onChange={(event) => {
      setState({
        selectedItem: event.target.value
      });
    }}
  />
  <br /><br />
  <p>With Required</p>
  <br /><br />
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
</div>
```
