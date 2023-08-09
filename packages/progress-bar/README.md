## Installation


#### To install a component run
`$ npm install @hawk-ui/progress-bar --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/progress-bar/dist/index.min.css
```


## Usage


#### Progress Bar With Vary Color
[Demo](https://hawk.oncrypt.co/#!/ProgressBar/1)
```js static
import ProgressBar from '@hawk-ui/progress-bar';
```
```js
<ProgressBar
  value={7}
  maxRange={10}
/>
```


#### Progress Bar With Same Color
[Demo](https://hawk.oncrypt.co/#!/ProgressBar/3)
```js static
import ProgressBar from '@hawk-ui/progress-bar';
```
```js
<ProgressBar
  value={85}
  maxRange={100}
  isColorVary={false}
  isProgress
/>
```
