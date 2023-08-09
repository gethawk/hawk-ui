## Installation


#### To install a component run
`$ npm install @hawk-ui/magnifier --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/magnifier/dist/index.min.css
```


## Usage


#### Magnifier
[Demo](https://hawk.oncrypt.co/#!/Magnifier/1)
```js static
import Magnifier from '@hawk-ui/magnifier';
```
```js
<Magnifier>
  <div style={{ height: '200px', width: '200px' }}>
    <img
      src="https://www.w3schools.com/howto/img_girl.jpg"
      style={{
        height: '100%',
        width: '100%',
        objectFit: 'cover',
      }}
      id="imageMagnify"
    />
  </div>
</Magnifier>
```
