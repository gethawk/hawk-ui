## Installation


#### To install a component run
`$ npm install @hawk-ui/border-picker --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/border-picker/dist/index.min.css
```


## Usage


#### Border Picker:
[Demo](https://hawk.oncrypt.co/#!/BorderPicker/1)
```js static
import BorderPicker from '@hawk-ui/border-picker';
```
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