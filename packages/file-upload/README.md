#### Basic File Upload Usage:

```js
<div className="styleguidist__btns-wrap">
  <p>File Upload With Button</p>
  <br />
  <FileUpload
    title="Browse"
    onUpload={(file) => {
      console.log('query file', file);
    }}
  />
  <br /><br />
  <p>File Upload With Icon</p>
  <br />
  <FileUpload
    title="fas fa-upload"
    isIcon
    onUpload={(file) => {
      console.log('query file', file);
    }}
  />
  <br /><br />
  <p>File Upload With Describable</p>
  <br />
  <FileUpload
    title="Browse"
    label="File Upload"
    description="Supported file types: (*.png, *.jpg, *.jpeg). View format instructions."
    placeholder="Please select a file to Upload"
    isDescribable
    onUpload={(file) => {
      console.log('query file', file);
    }}
  />
</div>
```
