## Installation


#### To install a component run
`$ npm install @hawk-ui/tag --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/tag/dist/index.min.css
```


## Usage


#### Tags
[Demo](https://hawk.oncrypt.co/#!/Tag/1)
```js static
import Tag from '@hawk-ui/tag';
```
```js
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Tag>
    <span>Without icon</span>
  </Tag>

  <Tag
    icon="fa fa-plus"
  >
    <span>With left icon</span>
  </Tag>

  <Tag
    icon="fa fa-plus"
    iconPlacement="right"
  >
    <span>With right icon</span>
  </Tag>

  <Tag
    onClick={(e) => { alert('Click on Actionable tag'); }}
    isHover
  >
    <span>With clickable</span>
  </Tag>
</div>
```