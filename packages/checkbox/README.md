#### Basic Checkbox Usage:

```js
initialState = {
  fruits: [
    { value: 'apple', isChecked: false },
    { value: 'mango', isChecked: false },
    { value: 'banana', isChecked: false },
    { value: 'orange', isChecked: false },
    { value: 'pineapple', isChecked: false },
  ],

};

<div className="styleguidist__btns-wrap">
  <p>Without Required</p>
  <br /><br />
  <Checkbox
    checkboxes={state.fruits}
    value={state.value}
    onChange={(event) => {
      let fruits = state.fruits;
      fruits.forEach(fruit => {
        if (fruit.value === event.target.value) {
          fruit.isChecked = event.target.checked
        }
      })
      setState({
        fruits: fruits,
      });
    }}
  />
  <br /><br />
  <p>With Required</p>
  <br /><br />
  <Checkbox
    checkboxes={state.fruits}
    value={state.value}
    onChange={(event) => {
      let fruits = state.fruits;
      fruits.forEach(fruit => {
        if (fruit.value === event.target.value) {
          fruit.isChecked = event.target.checked
        }
      })
      setState({
        fruits: fruits,
      });
    }}
    isError={!state.isChecked}
    errorMessage="This field is a compulsory field."
  />
</div>
```
