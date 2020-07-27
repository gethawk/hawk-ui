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
      <p>With Background</p>
      <br />
      <ColorPicker
        defaultColor="f18ca6"
        showHexCode={false}
        onSave={(event) => { console.log('query onSave', event); }}
      />
    </div>
    <div>
      <p>With Text</p>
      <br />
      <ColorPicker
        defaultColor="f18ca6"
        showHexCode={false}
        isText
        title="A"
        onSave={(event) => { console.log('query onSave', event); }}
      />
    </div>
    <div>
      <p>With Icon</p>
      <br />
      <ColorPicker
        defaultColor="f18ca6"
        showHexCode={false}
        isIcon
        title="fas fa-paint-roller"
        onSave={(event) => { console.log('query onSave', event); }}
      />
    </div>
  </div>
</div>
```
