## Installation
`$ npm install @hawk-ui/toggle --save`


## Usage


#### Without Required
[Demo]()
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
[Demo]()
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
[Demo]()
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