## Installation


#### To install a component run
`$ npm install @hawk-ui/input-group --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/input-group/dist/index.min.css
```


## Usage


#### Addon Left Placement
[Demo](https://hawk.wallnit.com/#!/InputGroup/1)
```js static
import InputGroup from '@hawk-ui/input-group';
```
```js
initialState = {
  value: 'Hello World',
};

<InputGroup
  addon="Text"
  addonPlacement="left"
  type="text"
  value={state.value}
  placeholder="Please enter value"
  onChange={(event) => {
    setState({
      value: event.target.value,
    });
  }}
/>
```


#### Addon Right Placement
[Demo](https://hawk.wallnit.com/#!/InputGroup/3)
```js static
import InputGroup from '@hawk-ui/input-group';
```
```js
<InputGroup
  addon="0.00"
  addonPlacement="right"
/>
```


#### Addon Small Placement
[Demo](https://hawk.wallnit.com/#!/InputGroup/5)
```js
<InputGroup
  addon="Text"
  addonSize="small"
/>
```


#### Addon Medium Placement
[Demo](https://hawk.wallnit.com/#!/InputGroup/7)
```js static
import InputGroup from '@hawk-ui/input-group';
```
```js
<InputGroup
  addon="Text"
  addonSize="medium"
/>
```


#### Addon Large Placement
[Demo](https://hawk.wallnit.com/#!/InputGroup/9)
```js static
import InputGroup from '@hawk-ui/input-group';
```
```js
<InputGroup
  addon="Text"
  addonSize="large"
/>
```


#### Addon Icon
[Demo](https://hawk.wallnit.com/#!/InputGroup/11)
```js static
import InputGroup from '@hawk-ui/input-group';
```
```js
<InputGroup
  addon="fa fa-at"
  isAddonIcon
/>
```


#### Addon Element
[Demo](https://hawk.wallnit.com/#!/InputGroup/13)
```js static
import InputGroup from '@hawk-ui/input-group';
```
```js
initialState = {
  fruits: [
    { key: 1, label: '', value: '1' },
  ],
};

<InputGroup
  addon={
    <Checkbox
      options={state.fruits}
    />
  }
/>
```
