## Installation
`$ npm install @hawk-ui/button-group --save`


## Usage


#### Addon Left Placement
[Demo](https://hawk.wallnit.com/#!/InputGroup/1)
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
```js
<InputGroup
  addon="Text"
  addonSize="medium"
/>
```


#### Addon Large Placement
[Demo](https://hawk.wallnit.com/#!/InputGroup/9)
```js
<InputGroup
  addon="Text"
  addonSize="large"
/>
```


#### Addon Icon
[Demo](https://hawk.wallnit.com/#!/InputGroup/11)
```js
<InputGroup
  addon="fa fa-at"
  isAddonIcon
/>
```


#### Addon Element
[Demo](https://hawk.wallnit.com/#!/InputGroup/13)
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
