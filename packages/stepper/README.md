## Installation


#### To install a component run
`$ npm install @hawk-ui/stepper --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/stepper/dist/index.min.css
```


## Usage


#### Horizontal Stepper
[Demo](https://hawk.wallnit.com/#!/Stepper/1)
```js static
import Stepper from '@hawk-ui/stepper';
```
```js
const panes = [
  {
    title: '01',
    description: 'First',
  },
  {
    title: '02',
    description: 'Second',
  },
  {
    title: '03',
    description: 'Third',
  },
];

initialState = {
  activeIndex: 0,
};

<div>
  <Stepper
    panes={panes}
    activeIndex={state.activeIndex}
  />

  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px' }}>
    <button
      type="button"
      className="hawk-button"
      disabled={state.activeIndex === 0}
      onClick={() => {
        setState({ activeIndex: state.activeIndex - 1 });
      }}
      style={{ marginRight: '10px' }}
    >
      Prev
    </button>
    <button
      type="button"
      className="hawk-button"
      disabled={state.activeIndex === 3}
      onClick={() => {
        setState({ activeIndex: state.activeIndex + 1 });
      }}
    >
      Next
    </button>
  </div>
</div>
```
