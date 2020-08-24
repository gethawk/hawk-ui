## Installation
`$ npm install @hawk-ui/tooltip --save`


## Usage


#### Tooltip with content:
[Demo](https://hawk.wallnit.com/#!/Tooltip/1)
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