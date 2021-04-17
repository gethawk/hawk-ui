## Installation


#### To install a component run
`$ npm install @hawk-ui/file-upload --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/file-upload/dist/index.min.css
```


## Usage


#### File Upload With Button:
[Demo](https://hawk.wallnit.com/#!/FileUpload/1)
```js static
import FileUpload from '@hawk-ui/file-upload';
```
```js
<FileUpload
  btnTitle="Browse"
  onUpload={(file) => {
    console.log('query file', file);
  }}
/>
```


#### File Upload With Icon
[Demo](https://hawk.wallnit.com/#!/FileUpload/3)
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
[Demo](https://hawk.wallnit.com/#!/FileUpload/5)
```js static
import FileUpload from '@hawk-ui/file-upload';
```
```js
<FileUpload
  btnTitle="Browse"
  label="File Upload"
  description="Supported file types: (*.png, *.jpg, *.jpeg). View format instructions."
  placeholder="Please select a file to Upload"
  isDescribable
  onUpload={(file) => {
    console.log('query file', file);
  }}
/>
```


#### On Drag and Drop
[Demo](https://hawk.wallnit.com/#!/FileUpload/7)
```js static
import FileUpload from '@hawk-ui/file-upload';
```
```js
<FileUpload
  title="Drag and Drop Image Here"
  description="Supported file types: (*.png, *.jpg, *.jpeg). View format instructions."
  isDraggable
  onUpload={(file) => {
    console.log('query file', file);
  }}
/>
```