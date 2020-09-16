## Installation


#### To install a component run
`$ npm install @hawk-ui/image --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/image/dist/index.min.css
```


## Usage


#### Image
[Demo](https://hawk.wallnit.com/#!/Image/1)
```js static
import Image from '@hawk-ui/image';
```
```js
<div style={{ width: '200px' }}>
  <Image
    src={null}
    fallbackSrc="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    alt="google image"
    role="show image"
    title="google"
  />
</div>
```