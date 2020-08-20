## Installation
`$ npm install @hawk-ui/color-picker --save`


## Usage


#### With Hex Code
[Demo]()
```js
<ColorPicker
  defaultColor="f18ca6"
  onSave={(event) => { console.log('query onSave', event); }}
/>
```


### With Background
[Demo]()
```js
<ColorPicker
  defaultColor="f18ca6"
  showHexCode={false}
  onSave={(event) => { console.log('query onSave', event); }}
/>
```


### With Text
[Demo]()
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
[Demo]()
```js
<ColorPicker
  defaultColor="f18ca6"
  showHexCode={false}
  isIcon
  title="fas fa-paint-roller"
  onSave={(event) => { console.log('query onSave', event); }}
/>
```