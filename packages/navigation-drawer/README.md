## Installation
`$ npm install @hawk-ui/navigation-drawer --save`


## Usage


#### With Close Button and background dark
[Demo](https://hawk.wallnit.com/#!/NavigationDrawer/1)
```js
initialState = {
  isLeftOpen: false,
  isRightOpen: false,
};

<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <div>
    <NavigationDrawer
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
      <span>Navigation Drawer Body</span>
    </NavigationDrawer>

    <button
      type="button"
      className="hawk-button"
      onClick={() => {
        setState({ isLeftOpen: !state.isLeftOpen });
      }}
    >
      Left Navigation Drawer
    </button>
  </div>

  <div>
    <NavigationDrawer
      isOpen={state.isRightOpen}
      hideCloseIcon
      type="dark"
      title="Modal Title"
      position="right"
      onKeyDown={(event) => {
        setState({ isRightOpen: false });
      }}
      onClose={() => {
        setState({ isRightOpen: false });
      }}
    >
      <span>Navigation Drawer Body</span>
    </NavigationDrawer>
    <button
      type="button"
      className="hawk-button"
      onClick={() => {
        setState({ isRightOpen: !state.isRightOpen });
      }}
    >
      Right Navigation Drawer
    </button>
  </div>
</div>
```


#### Without Close Button and background light
[Demo](https://hawk.wallnit.com/#!/NavigationDrawer/3)
```js
initialState = {
  isLeftOpen: false,
  isRightOpen: false,
};

<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <div>
    <NavigationDrawer
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
      <span>Navigation Drawer Body</span>
    </NavigationDrawer>
    <button
      type="button"
      className="hawk-button"
      onClick={() => {
        setState({ isLeftOpen: !state.isLeftOpen });
      }}
    >
      Left Navigation Drawer
    </button>
  </div>
  <div>
    <NavigationDrawer
      isOpen={state.isRightOpen}
      type="light"
      title="Modal Title"
      position="right"
      onKeyDown={(event) => {
        setState({ isRightOpen: false });
      }}
      onClose={() => {
        setState({ isRightOpen: false });
      }}
    >
      <span>Navigation Drawer Body</span>
    </NavigationDrawer>
    <button
      type="button"
      className="hawk-button"
      onClick={() => {
        setState({ isRightOpen: !state.isRightOpen });
      }}
    >
      Right Navigation Drawer
    </button>
  </div>
</div>
```