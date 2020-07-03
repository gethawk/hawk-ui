#### Basic Range Slider Usage:

```js
initialState = {
  range: 50,
};

<div className="styleguidist__btns-wrap">
  <RangeSlider
    value={state.range}
    onChange={(value) => {
      setState({
        range: value,
      });
    }}
  />
</div>
```
