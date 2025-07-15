## Installation


#### To install a component run
`$ npm install @hawk-ui/increment-decrement --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/increment-decrement/dist/index.min.css
```


## Usage


#### Increment Decrement:
[Demo](https://hawk.oncrypt.co/#!/IncrementDecrement/1)
```js static
import IncrementDecrement from '@hawk-ui/increment-decrement';
```
```js
<IncrementDecrement
  min={0}
  max={10}
  onClick={(e) => {
    console.log('value', e);
  }}
/>
```