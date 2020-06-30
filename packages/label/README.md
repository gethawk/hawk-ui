#### Basic Label Usage:

```js
<div className="styleguidist__btns-wrap">
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
      <p>Without Required</p>
      <br />
      <Label
        title="Label"
      />
    </div>
    <div>
      <p>With Required</p>
      <br />
      <Label
        title="Label"
        isRequired
      />
    </div>
  </div>
  <br /><br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
      <p>With Left icon</p>
      <br />
      <Label
        icon="fa fa-copy"
        title="Label"
      />
    </div>
    <div>
      <p>With Right icon</p>
      <br />
      <Label
        icon="fa fa-copy"
        iconPlacement="right"
        title="Label"
        isRequired
      />
    </div>
  </div>
</div>
```
