## Installation


#### To install a component run
`$ npm install @hawk-ui/resizable --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/resizable/dist/index.min.css
```


## Usage


#### Draggable And Resizable
[Demo](https://hawk.oncrypt.co/#!/Resizable/1)
```js static
import Resizable from '@hawk-ui/resizable';
```
```js
<div style={{ position: 'relative' }}>
  <Resizable
    config={{
      id: 'resizable',
      width: '350px',
      height: '100px',
    }}
  >
    <div id="resizable">
      <p>Move</p>
      <p>this</p>
      <p>DIV</p>
    </div>
  </Resizable>
</div>
```
