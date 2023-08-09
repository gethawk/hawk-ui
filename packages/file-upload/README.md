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
    console.log('query file', file);
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
    console.log('query file', file);
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
    console.log('query file', file);
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
  title="Drag and Drop Image Here"
  description="Supported file types: (*.png, *.jpg, *.jpeg). View format instructions."
  variant="draggable"
  isLoading
  onUpload={(files) => {
    console.log('query files', files);
  }}
/>
```