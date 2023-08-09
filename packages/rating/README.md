## Installation


#### To install a component run
`$ npm install @hawk-ui/rating --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/rating/dist/index.min.css
```


## Usage


#### Rating
[Demo](https://hawk.oncrypt.co/#!/Rating/1)
```js static
import Rating from '@hawk-ui/rating';
```
```js
<Rating
  active={3}
  onClick={(item) => { console.log('item', item); }}
/>
```
