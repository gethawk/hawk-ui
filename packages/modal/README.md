## Installation
`$ npm install @hawk-ui/modal --save`


## Usage


#### With Close Button and background dark
[Demo]()
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
[Demo]()
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