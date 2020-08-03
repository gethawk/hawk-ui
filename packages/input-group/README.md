#### Basic Input Group Usage:

```js
initialState = {
  fruits: [
    { key: 1, label: '', value: '1' },
  ],
  value: 'Hello World',
};

<div className="styleguidist__btns-wrap">
  <p>Addon Left Placement</p>
  <br />
  <InputGroup
    addon="Text"
    addonPlacement="left"
    type="text"
    value={state.value}
    placeholder="Please enter value"
    onChange={(event) => {
      setState({
        value: event.target.value,
      });
    }}
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
    addon="Text"
    addonSize="small"
  />
  <br /><br />
  <p>Addon Medium Placement</p>
  <br />
  <InputGroup
    addon="Text"
    addonSize="medium"
  />
  <br /><br />
  <p>Addon Large Placement</p>
  <br />
  <InputGroup
    addon="Text"
    addonSize="large"
  />
  <br /><br />
  <p>Addon Element Placement</p>
  <br />
  <InputGroup
    addon="fa fa-at"
    isAddonIcon
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
