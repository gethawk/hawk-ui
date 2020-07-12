#### Basic Border Picker Usage:

```js
initialState = {
  selectedBorder: 'solid',
};

<div className="styleguidist__btns-wrap">
  <BorderPicker
    type={state.selectedBorder}
    onSelect={(event) => {
      setState({
        selectedBorder: event,
      });
    }}
  />
</div>
```
