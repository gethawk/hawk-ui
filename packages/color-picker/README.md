#### Basic Color Picker Usage:

```js
<div className="styleguidist__btns-wrap">
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
      <p>With Hex Code</p>
      <br />
      <ColorPicker
        defaultColor="f18ca6"
        onSave={(event) => { console.log('query onSave', event); }}
      />
    </div>
    <div>
      <p>With Background Color</p>
      <br />
      <ColorPicker
        defaultColor="f18ca6"
        showHexCode={false}
        onSave={(event) => { console.log('query onSave', event); }}
      />
    </div>
    <div>
      <p>With Text Color</p>
      <br />
      <ColorPicker
        defaultColor="f18ca6"
        showHexCode={false}
        forText
        onSave={(event) => { console.log('query onSave', event); }}
      />
    </div>
  </div>
</div>
```
