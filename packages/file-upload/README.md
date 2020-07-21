#### Basic File Upload Usage:

```js
<div className="styleguidist__btns-wrap">
  <p>File Upload With Button</p>
  <br />
  <FileUpload
    onUpload={(file) => {
      console.log('query file', file);
    }}
  />
  <br /><br />
  <p>File Upload With Describable</p>
  <br />
  <FileUpload
    isDescribable
    onUpload={(file) => {
      console.log('query file', file);
    }}
  />
</div>
```
