## Installation
`$ npm install @hawk-ui/range-slider --save`


## Usage


#### Default Range Slider
[Demo](https://hawk.wallnit.com/#!/RangeSlider/1)
```js
initialState = {
  range: 50,
};

<RangeSlider
  valueId="rangeValue1"
  rangeId="range1"
  value={state.range}
  onChange={(value) => {
    setState({
      range: value,
    });
  }}
/>
```


#### Range Slider 0 - 50
[Demo](https://hawk.wallnit.com/#!/RangeSlider/3)
```js
initialState = {
  range: 20,
};

<RangeSlider
  valueId="rangeValue2"
  rangeId="range2"
  min={0}
  max={50}
  step={5}
  value={state.range}
  onChange={(value) => {
    setState({
      range: value,
    });
  }}
/>
```
