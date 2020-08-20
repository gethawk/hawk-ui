## Installation
`$ npm install @hawk-ui/border-picker --save`


## Usage


#### Border Picker:
[Demo]()
```js
initialState = {
  selectedBorder: 'solid',
};

<BorderPicker
  type={state.selectedBorder}
  onSelect={(event) => {
    setState({
      selectedBorder: event,
    });
  }}
/>
```