## Installation


#### To install a component run
`$ npm install @hawk-ui/rich-text-editor --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/rich-text-editor/dist/index.min.css
```


## Usage


#### Rich Text Editor
[Demo](https://hawk.wallnit.com/#!/RichTextEditor/1)
```js static
import RichTextEditor from '@hawk-ui/rich-text-editor';
```
```js
initialState = {
  body: '',
};

<RichTextEditor
  toolbarClass="toolbar"
  editableClass="editable"
  editableId="containerEditable1"
  placeholder="Click here to start typing"
  toolbarItems={[
    'bold', 'italic', 'underline', 'link', 'unlink', 'strike through', 'ordered list'
    , 'unordered list', 'formatblock', 'cut', 'copy', 'print', 'pre', 'header', 'font family'
    , 'font size', 'select all', 'text color picker', 'background color picker', 'remove format', 'clean', 'divider', 'left justify'
    , 'center justify', 'right justify', 'outdent', 'indent', 'undo', 'redo'
  ]}
  htmlAttributes={{
    rows: '10',
  }}
  value={state.body}
  onChange={({ html, text }) => {
    console.log('query html', html);
    console.log('query text', text);
    setState({ body: html });
  }}
/>
```
