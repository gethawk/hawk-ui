#### Basic Navigation Drawer Usage:

```js
initialState = {
  isLeftDrawerWithCloseButton: false,
  isRightDrawerWithCloseButton: false,
  isLeftDrawerWithoutCloseButton: false,
  isRightDrawerWithoutCloseButton: false,
};

<div className="styleguidist__btns-wrap">
  <p>With Close Button and background dark</p>
  <br /><br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
      <NavigationDrawer
        isOpen={state.isLeftDrawerWithCloseButton}
        hideCloseIcon
        type="dark"
        title="Modal Title"
        position="left"
        onKeyDown={(event) => {
          setState({ isLeftDrawerWithCloseButton: false });
        }}
        onClose={() => {
          setState({ isLeftDrawerWithCloseButton: false });
        }}
      >
        <span>Navigation Drawer Body</span>
      </NavigationDrawer>
      <button
        type="button"
        className="hawk-button"
        onClick={() => {
          setState({ isLeftDrawerWithCloseButton: !state.isLeftDrawerWithCloseButton });
        }}
      >
        Left Navigation Drawer
      </button>
    </div>
    <div>
      <NavigationDrawer
        isOpen={state.isRightDrawerWithCloseButton}
        hideCloseIcon
        type="dark"
        title="Modal Title"
        position="right"
        onKeyDown={(event) => {
          setState({ isRightDrawerWithCloseButton: false });
        }}
        onClose={() => {
          setState({ isRightDrawerWithCloseButton: false });
        }}
      >
        <span>Navigation Drawer Body</span>
      </NavigationDrawer>
      <button
        type="button"
        className="hawk-button"
        onClick={() => {
          setState({ isRightDrawerWithCloseButton: !state.isRightDrawerWithCloseButton });
        }}
      >
        Right Navigation Drawer
      </button>
    </div>
  </div>
  <br /><br />
  <p>Without Close Button and background light</p>
  <br /><br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
      <NavigationDrawer
        isOpen={state.isLeftDrawerWithoutCloseButton}
        type="light"
        title="Modal Title"
        position="left"
        onKeyDown={(event) => {
          setState({ isLeftDrawerWithoutCloseButton: false });
        }}
        onClose={() => {
          setState({ isLeftDrawerWithoutCloseButton: false });
        }}
      >
        <span>Navigation Drawer Body</span>
      </NavigationDrawer>
      <button
        type="button"
        className="hawk-button"
        onClick={() => {
          setState({ isLeftDrawerWithoutCloseButton: !state.isLeftDrawerWithoutCloseButton });
        }}
      >
        Left Navigation Drawer
      </button>
    </div>
    <div>
      <NavigationDrawer
        isOpen={state.isRightDrawerWithoutCloseButton}
        type="light"
        title="Modal Title"
        position="right"
        onKeyDown={(event) => {
          setState({ isRightDrawerWithoutCloseButton: false });
        }}
        onClose={() => {
          setState({ isRightDrawerWithoutCloseButton: false });
        }}
      >
        <span>Navigation Drawer Body</span>
      </NavigationDrawer>
      <button
        type="button"
        className="hawk-button"
        onClick={() => {
          setState({ isRightDrawerWithoutCloseButton: !state.isRightDrawerWithoutCloseButton });
        }}
      >
        Right Navigation Drawer
      </button>
    </div>
  </div>
</div>
```
