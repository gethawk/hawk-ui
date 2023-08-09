## Installation


#### To install a component run
`$ npm install @hawk-ui/collapse --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/collapse/dist/index.min.css
```


## Usage


#### Collapse
[Demo](https://hawk.oncrypt.co/#!/Collapse/1)
```js static
import Collapse from '@hawk-ui/collapse';
```
```js
const headers = [
  <h4>How do I find my Windows Product key?</h4>,
  <h4>I’ve downloaded an ISO file, now what?</h4>,
  <h4>What’s the difference between 32-bit and 64-bit versions of Windows?</h4>,
]
const panes = [
  <p>The product key is located inside the product packaging, on the receipt or confirmation page for a digital purchase or in a confirmation e-mail that shows you purchased Windows. If you purchased a digital copy from Microsoft Store, you can locate your product key in your Account under Digital Content.</p>,
  <p>You can use the ISO file to create bootable media for installation or recovery. You can also install Windows on your current device by opening the ISO file, selecting the Setup and following the instructions.</p>,
  <p>The terms 32-bit and 64-bit refer to the way a computer’s processor (also called a CPU) handles information. The 64-bit version of Windows handles large amounts of random access memory (RAM) more effectively than a 32-bit system. Not all devices can run the 64-bit versions of Windows.</p>,
];

<Collapse
  headers={headers}
  panes={panes}
/>
```