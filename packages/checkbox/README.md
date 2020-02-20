#### Basic Checkbox Usage:

```js
initialState = {
  name: 'fruits',
  value: 'apple',
  isChecked: false,
};

<div className="styleguidist__btns-wrap">
  <p>Without Required</p>
  <br /><br />
  <Checkbox
    label="checkbox"
    name={state.name}
    value={state.value}
    isChecked={state.isChecked}
    onChange={(event) => {
      setState({
        isChecked: !state.isChecked,
      });
    }}
  />
  <br /><br />
  <p>With Required</p>
  <br /><br />
  <Checkbox
    label="checkbox"
    name={state.name}
    value={state.value}
    isChecked={state.isChecked}
    onChange={(event) => {
      setState({
        isChecked: !state.isChecked,
      });
    }}
    isError={!state.isChecked}
    errorMessage="This field is a compulsory field."
  />
</div>
```
