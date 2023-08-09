## Installation


#### To install a component run
`$ npm install @hawk-ui/countdown-timer --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/countdown-timer/dist/index.min.css
```


## Usage


#### Password Strength
[Demo](https://hawk.oncrypt.co/#!/CountdownTimer/1)
```js static
import CountdownTimer from '@hawk-ui/countdown-timer';
```
```js
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <div>
    <div>Without Circular</div>
    <div style={{ marginTop: '20px' }}>
      <CountdownTimer
        countdown={20}
        id="countdown-number-1"
      />
    </div>
  </div>
  <div>
    <div>With Circular</div>
    <div style={{ marginTop: '20px' }}>
      <CountdownTimer
        variant="circular"
        countdown={20}
        id="countdown-number-2"
      />
    </div>
  </div>
</div>
```
