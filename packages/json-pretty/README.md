## Installation


#### To install a component run
`$ npm install @hawk-ui/json-pretty --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/json-pretty/dist/index.min.css
```


## Usage


#### Theme: Light
[Demo](https://hawk.oncrypt.co/#!/JsonPretty/1)
```js static
import JsonPretty from '@hawk-ui/json-pretty';
```
```js
<JsonPretty
  data={[{ name: 'Earth', order: 3, stats: { life: true, mass: 5.9736 * Math.pow(10, 24) } }, { name: 'Saturn', order: 6, stats: { life: null, mass: 568.46 * Math.pow(10, 24) } }]}
/>
```


#### Theme: Dark
[Demo](https://hawk.oncrypt.co/#!/JsonPretty/3)
```js static
import JsonPretty from '@hawk-ui/json-pretty';
```
```js
<JsonPretty
  data={[{ name: 'Earth', order: 3, stats: { life: true, mass: 5.9736 * Math.pow(10, 24) } }, { name: 'Saturn', order: 6, stats: { life: null, mass: 568.46 * Math.pow(10, 24) } }]}
  theme="dark"
/>
```