#### Basic Toggle Usage:

```js
initialState = {
  name: 'fruits',
  value: 'apple',
  isChecked: false,
};

<div className="styleguidist__btns-wrap">
  <p>Without Required</p>
  <br /><br />
  <Toggle
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
  <Toggle
    label="Toggle"
    name={state.name}
    value={state.value}
    isChecked={state.isChecked}
    onChange={(event) => {
      setState({
        isChecked: !state.isChecked,
      });
    }}
    isRequired
    isError={!state.isChecked}
    errorMessage="This field is a compulsory field."
  />
  <br /><br />
  <p>With Disabled</p>
  <br /><br />
  <Toggle
    name={state.name}
    isChecked={state.isChecked}
    isDisabled
  />
</div>
```
