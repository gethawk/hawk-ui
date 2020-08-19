#### Basic Input Group Usage:

```js
<div className="styleguidist__btns-wrap">
  <p>Theme: Light</p>
  <br />
  <JsonPretty
    data={[{ name: 'Earth', order: 3, stats: { life: true, mass: 5.9736 * Math.pow(10, 24) } }, { name: 'Saturn', order: 6, stats: { life: null, mass: 568.46 * Math.pow(10, 24) } }]}
  />
  <br />
  <p>Theme: Dark</p>
  <br />
  <JsonPretty
    data={[{ name: 'Earth', order: 3, stats: { life: true, mass: 5.9736 * Math.pow(10, 24) } }, { name: 'Saturn', order: 6, stats: { life: null, mass: 568.46 * Math.pow(10, 24) } }]}
    theme="dark"
  />
</div>
```
