#### Basic Modal Usage:

```js
initialState = {
  isModalOpen: false,
};

<div className="styleguidist__btns-wrap">
  <Modal
    isModalOpen={state.isModalOpen}
    isCloseOption
    type="dark"
    title="Modal Title"
    onKeyDown={(event) => {
      setState({ isModalOpen: !state.isModalOpen });
    }}
    onModalClose={() => {
      setState({ isModalOpen: !state.isModalOpen });
    }}
  >
    <span>Modal Body</span>
  </Modal>
  <button
    type="button"
    className="hawk-button"
    property="light"
    onClick={() => {
      setState({ isModalOpen: !state.isModalOpen });
    }}
  >
    Launch modal
  </button>
</div>
```
