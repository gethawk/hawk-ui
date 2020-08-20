## Installation
`$ npm install @hawk-ui/color-picker --save`


## Usage


#### With Hex Code
[Demo](https://hawk.wallnit.com/#!/ColorPicker/1)
```js
<ColorPicker
  defaultColor="f18ca6"
  onSave={(event) => { console.log('query onSave', event); }}
/>
```


### With Background
[Demo](https://hawk.wallnit.com/#!/ColorPicker/3)
```js
<ColorPicker
  defaultColor="f18ca6"
  showHexCode={false}
  onSave={(event) => { console.log('query onSave', event); }}
/>
```


### With Text
[Demo](https://hawk.wallnit.com/#!/ColorPicker/5)
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
```js
<ColorPicker
  defaultColor="f18ca6"
  showHexCode={false}
  isIcon
  title="fas fa-paint-roller"
  onSave={(event) => { console.log('query onSave', event); }}
/>
```