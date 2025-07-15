## Installation


#### To install a component run
`$ npm install @hawk-ui/file-upload --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/file-upload/dist/index.min.css
```


## Usage


#### File Upload With Button:
[Demo](https://hawk.oncrypt.co/#!/FileUpload/1)
```js static
import FileUpload from '@hawk-ui/file-upload';
```
```js
<FileUpload
  btnTitle="Browse"
  accept="images/*"
  isMultiple
  onUpload={(file) => {
    console.log('file', file);
  }}
/>
```


#### File Upload With Icon
[Demo](https://hawk.oncrypt.co/#!/FileUpload/3)
```js static
import FileUpload from '@hawk-ui/file-upload';
```
```js
<FileUpload
  btnIcon="fas fa-upload"
  onUpload={(file) => {
    console.log('file', file);
  }}
/>
```


#### File Upload With Describable
[Demo](https://hawk.oncrypt.co/#!/FileUpload/5)
```js static
import FileUpload from '@hawk-ui/file-upload';
```
```js
<FileUpload
  btnTitle="Browse"
  label="File Upload"
  description="Supported file types: (*.png, *.jpg, *.jpeg). View format instructions."
  placeholder="Please select a file to Upload"
  variant="input"
  onUpload={(file) => {
    console.log('file', file);
  }}
/>
```


#### On Drag and Drop
[Demo](https://hawk.oncrypt.co/#!/FileUpload/7)
```js static
import FileUpload from '@hawk-ui/file-upload';
```
```js
initialState = {
  fileNames: [],
};

<FileUpload
  content={(
    <>
      <div style={{ fontSize: '16px', fontWeight: '500', color: '#425a70' }}>Drag and Drop Image Here</div>
      <div style={{ fontSize: '12px', color: '#66788a', marginTop: '6px' }}>Supported file types: (*.png, *.jpg, *.jpeg). View format instructions.</div>
    </>
  )}
  title=""
  description=""
  variant="draggable"
  isLoading={false}
  onUpload={(files) => {
    console.log('files', files);
  }}
/>
```