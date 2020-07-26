#### Basic Range Slider Usage:

```js
initialState = {
  range1: 50,
  range2: 20,
};

<div className="styleguidist__btns-wrap">
  <p>Default Range Slider</p>
  <br />
  <RangeSlider
    valueId="rangeValue1"
    rangeId="range1"
    value={state.range1}
    onChange={(value) => {
      setState({
        range1: value,
      });
    }}
  />
  <br /><br />
  <p>Range Slider 0 - 50</p>
  <br />
  <RangeSlider
    valueId="rangeValue2"
    rangeId="range2"
    min={0}
    max={50}
    step={5}
    value={state.range2}
    onChange={(value) => {
      setState({
        range2: value,
      });
    }}
  />
</div>
```
