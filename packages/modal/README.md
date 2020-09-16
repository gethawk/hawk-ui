## Installation


#### To install a component run
`$ npm install @hawk-ui/modal --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/modal/dist/index.min.css
```


## Usage


#### With Close Button and background dark
[Demo](https://hawk.wallnit.com/#!/Modal/1)
```js static
import Modal from '@hawk-ui/modal';
```
```js
initialState = {
  isOpen: false,
};

<div>
  <Modal
    isOpen={state.isOpen}
    hideCloseIcon
    type="dark"
    title="Modal Title"
    position="center"
    onKeyDown={(event) => {
      setState({ isOpen: false });
    }}
    onClose={() => {
      setState({ isOpen: false });
    }}
  >
    <div>
      <div style={{ marginTop: '20px' }}>Modal Box</div>
    </div>
  </Modal>

  <button
    type="button"
    className="hawk-button"
    onClick={() => {
      setState({ isOpen: !state.isOpen });
    }}
  >
    Modal With Close Option
  </button>
</div>
```


#### Without Close Button and background light
[Demo](https://hawk.wallnit.com/#!/Modal/3)
```js static
import Modal from '@hawk-ui/modal';
```
```js
initialState = {
  isOpen: false,
};

<div>
  <Modal
    isOpen={state.isOpen}
    type="light"
    position="center"
    onKeyDown={(event) => {
      setState({ isOpen: false });
    }}
    onClose={() => {
      setState({ isOpen: false });
    }}
  >
    <div>
      <div style={{ fontSize: '24px', fontWeight: '500', color: '#555555' }}>Title</div>
      <div style={{ marginTop: '20px' }}>Modal Box</div>
    </div>
  </Modal>

  <button
    type="button"
    className="hawk-button"
    onClick={() => {
      setState({ isOpen: !state.isOpen });
    }}
  >
    Modal Without Close Option
  </button>
</div>
```