#### Basic Modal Usage:

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
        isDrawerOpen={state.isLeftDrawerWithCloseButton}
        isCloseOption
        type="dark"
        title="Modal Title"
        position="left"
        onKeyDown={(event) => {
          setState({ isLeftDrawerWithCloseButton: false });
        }}
        onModalClose={() => {
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
        isDrawerOpen={state.isRightDrawerWithCloseButton}
        isCloseOption
        type="dark"
        title="Modal Title"
        position="right"
        onKeyDown={(event) => {
          setState({ isRightDrawerWithCloseButton: false });
        }}
        onModalClose={() => {
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
        isDrawerOpen={state.isLeftDrawerWithoutCloseButton}
        type="light"
        title="Modal Title"
        position="left"
        onKeyDown={(event) => {
          setState({ isLeftDrawerWithoutCloseButton: false });
        }}
        onModalClose={() => {
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
        isDrawerOpen={state.isRightDrawerWithoutCloseButton}
        type="light"
        title="Modal Title"
        position="right"
        onKeyDown={(event) => {
          setState({ isRightDrawerWithoutCloseButton: false });
        }}
        onModalClose={() => {
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
