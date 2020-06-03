#### Basic Toast Usage:

```js
initialState = {
  isShow: false,
  position: '',
};

<div className="styleguidist__btns-wrap">
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <button
      type="button"
      className="hawk-button"
      onClick={() => {
        setState({
          position: 'top-left',
          isShow: true,
        });
      }}
    >
      Top Left
    </button>
    <button
      type="button"
      className="hawk-button"
      onClick={() => {
        setState({
          position: 'top-right',
          isShow: true,
        });
      }}
    >
      Top Right
    </button>
    <button
      type="button"
      className="hawk-button"
      onClick={() => {
        setState({
          position: 'bottom-right',
          isShow: true,
        });
      }}
    >
      Bottom Right
    </button>
    <button
      type="button"
      className="hawk-button"
      onClick={() => {
        setState({
          position: 'bottom-left',
          isShow: true,
        });
      }}
    >
      Bottom Left
    </button>
  </div>
  <div
    style={state.position === 'top-left' ? {
      position: 'fixed', top: 0, left: 0, zIndex: 10
    } : state.position === 'top-right' ? {
      position: 'fixed', top: 0, right: 0, zIndex: 10
    } : state.position === 'bottom-right' ? {
      position: 'fixed', bottom: 0, right: 0, zIndex: 10
    } : state.position === 'bottom-left' ? {
      position: 'fixed', bottom: 0, left: 0, zIndex: 10
    } : null}
  >
    <Toast
      isShow={state.isShow}
      position={state.position}
      type="success"
      isIcon
      hideCloseOption
    >
      <div>
        <div className="title">Toast Title</div>
        <div className="message">Toast Message</div>
      </div>
    </Toast>
  </div>
</div>
```
