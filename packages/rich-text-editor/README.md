#### Basic Range Slider Usage:

```js
initialState = {};

<div className="styleguidist__btns-wrap">
  <RichTextEditor
    toolbarPosition="top"
    toolbarClass="toolbar"
    editableClass="editable"
    editableId="containerEditable"
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
  />
</div>
```
