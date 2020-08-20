## Installation
`$ npm install @hawk-ui/button --save`


## Usage


#### Simple Button:
[Demo](https://hawk.wallnit.com/#!/Button/1)
```js
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Button
    type="button"
    variant="text"
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
[Demo](https://hawk.wallnit.com/#!/Button/3)
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
[Demo](https://hawk.wallnit.com/#!/Button/5)
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
