## Installation


#### To install a component run
`$ npm install @hawk-ui/bottom-drawer --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/bottom-drawer/dist/index.min.css
```


## Usage


#### With Close Button and background dark
[Demo](https://hawk.oncrypt.co/#!/BottomDrawer/1)
```js static
import BottomDrawer from '@hawk-ui/bottom-drawer';
```
```js
initialState = {
  isLeftOpen: false,
};

<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <div>
    <BottomDrawer
      isOpen={state.isLeftOpen}
      hideCloseIcon
      type="dark"
      title="Modal Title"
      position="left"
      onKeyDown={(event) => {
        setState({ isLeftOpen: false });
      }}
      onClose={() => {
        setState({ isLeftOpen: false });
      }}
    >
      <span>Bottom Drawer Body</span>
    </BottomDrawer>

    <button
      type="button"
      className="hawk-button"
      onClick={() => {
        setState({ isLeftOpen: !state.isLeftOpen });
      }}
    >
      Click here
    </button>
  </div>
</div>
```


#### Without Close Button and background light
[Demo](https://hawk.oncrypt.co/#!/BottomDrawer/3)
```js static
import BottomDrawer from '@hawk-ui/bottom-drawer';
```
```js
initialState = {
  isLeftOpen: false,
  isRightOpen: false,
};

<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <div>
    <BottomDrawer
      isOpen={state.isLeftOpen}
      type="light"
      title="Modal Title"
      position="left"
      onKeyDown={(event) => {
        setState({ isLeftOpen: false });
      }}
      onClose={() => {
        setState({ isLeftOpen: false });
      }}
    >
      <span>Bottom Drawer Body</span>
    </BottomDrawer>
    <button
      type="button"
      className="hawk-button"
      onClick={() => {
        setState({ isLeftOpen: !state.isLeftOpen });
      }}
    >
      Click here
    </button>
  </div>
</div>
```