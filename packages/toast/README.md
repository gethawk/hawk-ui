#### Basic Button Usage:

```js
initialState = {
  isToast: true,
};

<div className="styleguidist__btns-wrap">
  <Toast
    isVisible={state.isToast}
  />
  <button
    type="button"
    className="hawk-button"
    property="light"
    onClick={() => {
      setState({ isToast: state.isToast });
    }}
  >
    Show Toast
  </button>
</div>
```
