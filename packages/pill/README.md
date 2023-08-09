## Installation


#### To install a component run
`$ npm install @hawk-ui/pill --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/pill/dist/index.min.css
```


## Usage


#### Pill:
[Demo](https://hawk.oncrypt.co/#!/Pill/1)
```js static
import Pill from '@hawk-ui/pill';
```
```js
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Pill>
    <span>Default</span>
  </Pill>

  <Pill
    variant="tab"
  >
    <span>Inactive</span>
  </Pill>

  <Pill
    variant="tab"
    icon="fa fa-file"
    isActive
  >
    <span>Active</span>
  </Pill>

  <Pill
    variant="counter"
  >
    <span>10</span>
  </Pill>

  <Pill
    variant="step"
    stepIndex="1"
  >
    <span>Inactive Pill</span>
  </Pill>

  <Pill
    variant="step"
    stepIndex="1"
    isActive
  >
    <span>Active Pill</span>
  </Pill>

  <Pill
    variant="step"
    icon="fa fa-file"
    iconPlacement="right"
    isActive
    onClick={(e) => { alert('Click on Actionable tag'); }}
    isHover
  >
    <span>Clickable</span>
  </Pill>
</div>
```