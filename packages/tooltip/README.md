## Installation


#### To install a component run
`$ npm install @hawk-ui/tooltip --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/tooltip/dist/index.min.css
```


## Usage


#### Tooltip with content:
[Demo](https://hawk.wallnit.com/#!/Tooltip/1)
```js static
import Tooltip from '@hawk-ui/tooltip';
```
```js
<Tooltip
  position="right"
  content="Tooltip"
>
  Hover me
</Tooltip>
```


#### Tooltip with options:
[Demo](https://hawk.wallnit.com/#!/Tooltip/3)
```js static
import Tooltip from '@hawk-ui/tooltip';
```
```js
const panes = [
  <i class="fas fa-edit" />,
  <i class="fas fa-trash" />,
];

<Tooltip
  position="bottom"
  content={panes}
>
  Hover me
</Tooltip>
```