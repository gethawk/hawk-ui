#### Basic Input Group Usage:

```js
initialState = {
  fruits: [
    { key: 1, label: '', value: '1' },
  ],
};

<div className="styleguidist__btns-wrap">
  <p>Addon Left Placement</p>
  <br />
  <InputGroup
    addon="text"
    addonPlacement="left"
  />
  <br /><br />
  <p>Addon Right Placement</p>
  <br />
  <InputGroup
    addon="0.00"
    addonPlacement="right"
  />
  <br /><br />
  <p>Addon Small Placement</p>
  <br />
  <InputGroup
    addon="text"
    addonSize="small"
  />
  <br /><br />
  <p>Addon Medium Placement</p>
  <br />
  <InputGroup
    addon="text"
    addonSize="medium"
  />
  <br /><br />
  <p>Addon Large Placement</p>
  <br />
  <InputGroup
    addon="text"
    addonSize="large"
  />
  <br /><br />
  <p>Addon Element Placement</p>
  <br />
  <InputGroup
    addonIcon="fa fa-at"
  />
  <br /><br />
  <p>Addon Element Placement</p>
  <br />
  <InputGroup
    addon={
      <Checkbox
        options={state.fruits}
      />
    }
  />
</div>
```
