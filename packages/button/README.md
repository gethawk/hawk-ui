## Installation


#### To install a component run
`$ npm install @hawk-ui/button --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/button/dist/index.min.css
```


## Usage


#### Simple Button:
[Demo](https://hawk.oncrypt.co/#!/Button/1)
```js static
import Button from '@hawk-ui/button';
```
```js
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Button
    type="button"
    variant="text"
    htmlAttributes={{
      id: 'button',
    }}
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Text Button</span>
  </Button>

  <Button
    type="button"
    variant="outlined"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Outlined Button</span>
  </Button>

  <Button
    type="button"
    variant="contained"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Contained Button</span>
  </Button>
</div>
```


#### Disabled Button:
[Demo](https://hawk.oncrypt.co/#!/Button/3)
```js static
import Button from '@hawk-ui/button';
```
```js
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Button
    type="button"
    variant="text"
    isDisabled
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Text Button</span>
  </Button>

  <Button
    type="button"
    variant="outlined"
    isDisabled
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Outlined Button</span>
  </Button>

  <Button
    type="button"
    variant="contained"
    isDisabled
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Contained Button</span>
  </Button>
</div>
```


#### Icon Button:
[Demo](https://hawk.oncrypt.co/#!/Button/5)
```js static
import Button from '@hawk-ui/button';
```
```js
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Button
    type="button"
    variant="text"
    icon="fa fa-star"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Text Button</span>
  </Button>
  <Button
    type="button"
    variant="outlined"
    icon="fa fa-star"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Outlined Button</span>
  </Button>
  <Button
    type="button"
    variant="contained"
    icon="fa fa-star"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Contained Button</span>
  </Button>
</div>
```
