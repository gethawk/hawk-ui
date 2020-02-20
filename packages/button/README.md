#### Basic Button Usage:

```js
<div className="styleguidist__btns-wrap">
  <p>Simple Button</p>
  <br /><br />
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
  <br /><br />
  <p>Disabled Button</p>
  <br /><br />
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
  <br /><br />
  <p>Icon Button</p>
  <br /><br />
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
</div>
```
