#### Basic Toast Usage:

```js
initialState = {
  isShowWithout: false,
  isShowWith: false,
};

<div className="styleguidist__btns-wrap">
  <div>Without Overflow</div>
  <br />
  <Toast
    isShow={state.isShowWithout}
    position="top-left"
  >
    <Toast.CONTENT
      type="success"
      title="title"
      message="Success Message"
      hideCloseOption
      onClick={() => { setState({ isShowWithout: !state.isShowWithout }); }}
    />
  </Toast>
  <Button
    onClick={() => { setState({ isShowWithout: !state.isShowWithout }); }}
  >Show Toast</Button>
  <br /><br />
  <div>With Overflow</div>
  <br />
  <Toast
    isOverflow
    isShow={state.isShowWith}
    position="top-left"
  >
    <Toast.CONTENT
      type="success"
      title="title"
      message="Success Message"
      hideCloseOption
      onClick={() => { setState({ isShowWith: !state.isShowWith }); }}
    />
    <Toast.OVERVIEW />
  </Toast>
  <Button
    onClick={() => { setState({ isShowWith: !state.isShowWith }); }}
  >Show Toast</Button>
</div>
```
