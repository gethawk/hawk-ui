## Installation
`$ npm install @hawk-ui/json-pretty --save`


## Usage


#### Theme: Light
[Demo](https://hawk.wallnit.com/#!/JsonPretty/1)
```js
<JsonPretty
  data={[{ name: 'Earth', order: 3, stats: { life: true, mass: 5.9736 * Math.pow(10, 24) } }, { name: 'Saturn', order: 6, stats: { life: null, mass: 568.46 * Math.pow(10, 24) } }]}
/>
```


#### Theme: Dark
[Demo](https://hawk.wallnit.com/#!/JsonPretty/3)
```js
<JsonPretty
  data={[{ name: 'Earth', order: 3, stats: { life: true, mass: 5.9736 * Math.pow(10, 24) } }, { name: 'Saturn', order: 6, stats: { life: null, mass: 568.46 * Math.pow(10, 24) } }]}
  theme="dark"
/>
```