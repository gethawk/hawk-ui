## Installation


#### To install a component run
`$ npm install @hawk-ui/range-slider --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/range-slider/dist/index.min.css
```


## Usage


#### Default Range Slider
[Demo](https://hawk.wallnit.com/#!/RangeSlider/1)
```js static
import RangeSlider from '@hawk-ui/range-slider';
```
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
```js static
import RangeSlider from '@hawk-ui/range-slider';
```
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
