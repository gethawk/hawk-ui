## Installation


#### To install a component run
`$ npm install @hawk-ui/toggle --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/toggle/dist/index.min.css
```


## Usage


#### Without Required
[Demo](https://hawk.wallnit.com/#!/Toggle/1)
```js static
import Toggle from '@hawk-ui/toggle';
```
```js
initialState = {
  name: 'fruits',
  value: 'apple',
  isChecked: false,
};

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
```


#### With Required
[Demo](https://hawk.wallnit.com/#!/Toggle/3)
```js static
import Toggle from '@hawk-ui/toggle';
```
```js
initialState = {
  name: 'fruits',
  value: 'apple',
  isChecked: false,
};

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
```


#### With Disabled
[Demo](https://hawk.wallnit.com/#!/Toggle/5)
```js static
import Toggle from '@hawk-ui/toggle';
```
```js
initialState = {
  name: 'fruits',
  isChecked: false,
};

<Toggle
  name={state.name}
  isChecked={state.isChecked}
  isDisabled
/>
```