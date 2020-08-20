## Installation
`$ npm install @hawk-ui/file-upload --save`


## Usage


#### File Upload With Button:
[Demo](https://hawk.wallnit.com/#!/FileUpload/1)
```js
<FileUpload
  title="Browse"
  onUpload={(file) => {
    console.log('query file', file);
  }}
/>
```


#### File Upload With Icon
[Demo](https://hawk.wallnit.com/#!/FileUpload/3)
```js
<FileUpload
  title="fas fa-upload"
  isIcon
  onUpload={(file) => {
    console.log('query file', file);
  }}
/>
```


#### File Upload With Describable
[Demo](https://hawk.wallnit.com/#!/FileUpload/5)
```js
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
```


#### On Drag and Drop
[Demo](https://hawk.wallnit.com/#!/FileUpload/7)
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