#### Basic Radio Usage:

```js
initialState = {
  fruits: ['apple', 'mango', 'banana', 'orange', 'pineapple'],
  selected: '',
};

<div className="styleguidist__btns-wrap">
  <p>Without Required</p>
  <br /><br />
  <Radio
    options={state.fruits}
    selected={state.selected}
    onChange={(event) => {
      setState({
        selected: event.target.value
      });
    }}
  />
  <br /><br />
  <p>With Required</p>
  <br /><br />
  <Radio
    options={state.fruits}
    selected={state.selected}
    onChange={(event) => {
      setState({
        selected: event.target.value
      });
    }}
    isError={!state.isChecked}
    errorMessage="This field is a compulsory field."
  />
</div>
```
