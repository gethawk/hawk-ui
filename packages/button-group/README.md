## Installation
`$ npm install @hawk-ui/button-group --save`

## Usage

#### Text Button:
[Demo](https://hawk.wallnit.com/#!/ButtonGroup/1)
```js
initialState = {
  grouped: [
    { key: 1, title: 'First' },
    { key: 2, title: 'Second' },
    { key: 3, title: 'Third' },
  ],
  value: 1,
};

<ButtonGroup
  variant="text"
  panes={state.grouped}
  value={state.value}
  onClick={(event) => {
    setState({
      value: event.key,
    });
  }}
/>
```


#### Outlined Button:
[Demo](https://hawk.wallnit.com/#!/ButtonGroup/3)
```js
initialState = {
  grouped: [
    { key: 1, title: 'First' },
    { key: 2, title: 'Second' },
    { key: 3, title: 'Third' },
  ],
  value: 1,
};

<ButtonGroup
  variant="outlined"
  panes={state.grouped}
  value={state.value}
  onClick={(event) => {
    setState({
      value: event.key,
    });
  }}
/>
```

#### Contained Button:
[Demo](https://hawk.wallnit.com/#!/ButtonGroup/5)
```js
initialState = {
  grouped: [
    { key: 1, title: 'First' },
    { key: 2, title: 'Second' },
    { key: 3, title: 'Third' },
  ],
  value: 1,
};

<ButtonGroup
  panes={state.grouped}
  value={state.value}
  onClick={(event) => {
    setState({
      value: event.key,
    });
  }}
/>
```
