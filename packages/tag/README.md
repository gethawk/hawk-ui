#### Tag Usage:

```js
<div className="styleguidist__input-wrap">
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Tag>
      <span>Without icon</span>
    </Tag>
    <Tag
      icon="fa fa-plus"
    >
      <span>With left icon</span>
    </Tag>
    <Tag
      icon="fa fa-plus"
      iconPlacement="right"
    >
      <span>With right icon</span>
    </Tag>
    <Tag
      onClick={(e) => { alert('Click on Actionable tag'); }}
      isHover
    >
      <span>With clickable</span>
    </Tag>
  </div>
</div>
```