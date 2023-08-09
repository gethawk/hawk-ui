## Installation


#### To install a component run
`$ npm install @hawk-ui/time-picker --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/time-picker/dist/index.min.css
```


## Usage


#### Time Picker:
[Demo](https://hawk.oncrypt.co/#!/TimePicker/1)
```js static
import TimePicker from '@hawk-ui/time-picker';
```
```js
<TimePicker
  onSelect={(event) => { console.log('query event', event); }}
  dateTime="2020-10-01T01:30:27+05:30"
/>
```
