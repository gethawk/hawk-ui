## Installation


#### To install a component run
`$ npm install @hawk-ui/label --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/label/dist/index.min.css
```


## Usage


#### Without Required
[Demo](https://hawk.oncrypt.co/#!/Label/1)
```js static
import Label from '@hawk-ui/label';
```
```js
<Label
  title="Label"
/>
```


#### With Required
[Demo](https://hawk.oncrypt.co/#!/Label/3)
```js static
import Label from '@hawk-ui/label';
```
```js
<Label
  title="Label"
  isRequired
/>
```


#### With Left icon
[Demo](https://hawk.oncrypt.co/#!/Label/5)
```js static
import Label from '@hawk-ui/label';
```
```js
<Label
  icon="fa fa-copy"
  title="Label"
/>
```


#### With Right icon
[Demo](https://hawk.oncrypt.co/#!/Label/7)
```js static
import Label from '@hawk-ui/label';
```
```js
<Label
  icon="fa fa-copy"
  iconPlacement="right"
  title="Label"
  isRequired
/>
```