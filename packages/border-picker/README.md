## Installation
`$ npm install @hawk-ui/border-picker --save`


## Usage


#### Border Picker:
[Demo](https://hawk.wallnit.com/#!/BorderPicker/1)
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