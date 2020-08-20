## Installation
`$ npm install @hawk-ui/file-upload --save`


## Usage


#### File Upload With Button:
[Demo]()
```js
<FileUpload
  title="Browse"
  onUpload={(file) => {
    console.log('query file', file);
  }}
/>
```


#### File Upload With Icon
[Demo]()
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
[Demo]()
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
[Demo]()
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