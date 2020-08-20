## Installation
`$ npm install @hawk-ui/button-group --save`


## Usage


#### Addon Left Placement
[Demo]()
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
[Demo]()
```js
<InputGroup
  addon="0.00"
  addonPlacement="right"
/>
```


#### Addon Small Placement
[Demo]()
```js
<InputGroup
  addon="Text"
  addonSize="small"
/>
```


#### Addon Medium Placement
[Demo]()
```js
<InputGroup
  addon="Text"
  addonSize="medium"
/>
```


#### Addon Large Placement
[Demo]()
```js
<InputGroup
  addon="Text"
  addonSize="large"
/>
```


#### Addon Icon
[Demo]()
```js
<InputGroup
  addon="fa fa-at"
  isAddonIcon
/>
```


#### Addon Element
[Demo]()
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
