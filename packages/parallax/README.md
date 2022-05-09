## Installation


#### To install a component run
`$ npm install @hawk-ui/parallax --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/parallax/dist/index.min.css
```


## Usage


#### With Close Button and background dark
[Demo](https://hawk.wallnit.com/#!/Parallax/1)
```js static
import Parallax from '@hawk-ui/parallax';
```
```js
initialState = {};

<Parallax
  panes={[
    'https://cdn2.hubspot.net/hubfs/1951013/Parallax/SkyBG.png',
    'https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds1.png',
    'https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds2.png',
    'https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds3.png',
    'https://cdn2.hubspot.net/hubfs/1951013/Parallax/Moon.png',
    'https://cdn2.hubspot.net/hubfs/1951013/Parallax/Hill.png',
  ]}
  style={{
    height: '320px',
  }}
/>
```
