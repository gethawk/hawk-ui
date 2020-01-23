#### Basic Date Picker Usage:

```js
initialState = {
  selectedDate: '',
};

<div className="styleguidist__btns-wrap">
  <DatePicker
    onChange={(value) => {
      setState({
        selectedDate: value,
      });
    }}
    renderInput={() => (
      !state.selectedDate ? <span>Start Date</span> : state.selectedDate
    )}
    value={{
      startMoment: state.selectedDate,
    }}
  />
</div>
```
