## Installation


#### To install a component run
`$ npm install @hawk-ui/color-picker --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/color-picker/dist/index.min.css
```


## Usage


#### With Hex Code
[Demo](https://hawk.wallnit.com/#!/ColorPicker/1)
```js static
import ColorPicker from '@hawk-ui/color-picker';
```
```js
<ColorPicker
  defaultColor="f18ca6"
  onSave={(event) => { console.log('query onSave', event); }}
/>
```


### With Background
[Demo](https://hawk.wallnit.com/#!/ColorPicker/3)
```js static
import ColorPicker from '@hawk-ui/color-picker';
```
```js
<ColorPicker
  defaultColor="f18ca6"
  showHexCode={false}
  onSave={(event) => { console.log('query onSave', event); }}
/>
```


### With Text
[Demo](https://hawk.wallnit.com/#!/ColorPicker/5)
```js static
import ColorPicker from '@hawk-ui/color-picker';
```
```js
<ColorPicker
  defaultColor="f18ca6"
  showHexCode={false}
  isText
  title="A"
  onSave={(event) => { console.log('query onSave', event); }}
/>
```


### With Icon
[Demo](https://hawk.wallnit.com/#!/ColorPicker/7)
```js static
import ColorPicker from '@hawk-ui/color-picker';
```
```js
<ColorPicker
  defaultColor="f18ca6"
  showHexCode={false}
  isIcon
  title="fas fa-paint-roller"
  onSave={(event) => { console.log('query onSave', event); }}
/>
```