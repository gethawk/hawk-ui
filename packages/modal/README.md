#### Basic Modal Usage:

```js
initialState = {
  isLeftModalWithCloseButton: false,
  isCenterModalWithCloseButton: false,
  isRightModalWithCloseButton: false,
  isLeftModalWithoutCloseButton: false,
  isCenterModalWithoutCloseButton: false,
  isRightModalWithoutCloseButton: false,
  isLeftModalWithLightBackground: false,
  isCenterModalWithLightBackground: false,
  isRightModalWithLightBackground: false,
};

<div className="styleguidist__btns-wrap">
  <p>With Close Button</p>
  <br /><br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
    {state.isLeftModalWithCloseButton ? (
      <Modal
        isCloseOption
        type="dark"
        title="Modal Title"
        position="left"
        onKeyDown={(event) => {
          setState({ isLeftModalWithCloseButton: !state.isLeftModalWithCloseButton });
        }}
        onModalClose={() => {
          setState({ isLeftModalWithCloseButton: !state.isLeftModalWithCloseButton });
        }}
      >
        <span>Modal Body</span>
      </Modal>
    ) : null}
      <button
        type="button"
        className="hawk-button"
        property="light"
        onClick={() => {
          setState({ isLeftModalWithCloseButton: !state.isLeftModalWithCloseButton });
        }}
      >
        Left modal
      </button>
    </div>
    <div>
    {state.isCenterModalWithCloseButton ? (
      <Modal
        isCloseOption
        type="dark"
        title="Modal Title"
        onKeyDown={(event) => {
          setState({ isCenterModalWithCloseButton: !state.isCenterModalWithCloseButton });
        }}
        onModalClose={() => {
          setState({ isCenterModalWithCloseButton: !state.isCenterModalWithCloseButton });
        }}
      >
        <span>Modal Body</span>
      </Modal>
    ) : null}
      <button
        type="button"
        className="hawk-button"
        property="light"
        onClick={() => {
          setState({ isCenterModalWithCloseButton: !state.isCenterModalWithCloseButton });
        }}
      >
        Center modal
      </button>
    </div>
    <div>
    {state.isRightModalWithCloseButton ? (
      <Modal
        isCloseOption
        type="dark"
        title="Modal Title"
        position="right"
        onKeyDown={(event) => {
          setState({ isRightModalWithCloseButton: !state.isRightModalWithCloseButton });
        }}
        onModalClose={() => {
          setState({ isRightModalWithCloseButton: !state.isRightModalWithCloseButton });
        }}
      >
        <span>Modal Body</span>
      </Modal>
    ) : null}
      <button
        type="button"
        className="hawk-button"
        property="light"
        onClick={() => {
          setState({ isRightModalWithCloseButton: !state.isRightModalWithCloseButton });
        }}
      >
        Right modal
      </button>
    </div>
  </div>
  <br /><br />
  <p>Without Close Button</p>
  <br /><br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
    {state.isLeftModalWithoutCloseButton ? (
      <Modal
        type="dark"
        title="Modal Title"
        position="left"
        onKeyDown={(event) => {
          setState({ isLeftModalWithoutCloseButton: !state.isLeftModalWithoutCloseButton });
        }}
        onModalClose={() => {
          setState({ isLeftModalWithoutCloseButton: !state.isLeftModalWithoutCloseButton });
        }}
      >
        <span>Modal Body</span>
      </Modal>
    ) : null}
      <button
        type="button"
        className="hawk-button"
        property="light"
        onClick={() => {
          setState({ isLeftModalWithoutCloseButton: !state.isLeftModalWithoutCloseButton });
        }}
      >
        Left modal
      </button>
    </div>
    <div>
    {state.isCenterModalWithoutCloseButton ? (
      <Modal
        type="dark"
        title="Modal Title"
        onKeyDown={(event) => {
          setState({ isCenterModalWithoutCloseButton: !state.isCenterModalWithoutCloseButton });
        }}
        onModalClose={() => {
          setState({ isCenterModalWithoutCloseButton: !state.isCenterModalWithoutCloseButton });
        }}
      >
        <span>Modal Body</span>
      </Modal>
    ) : null}
      <button
        type="button"
        className="hawk-button"
        property="light"
        onClick={() => {
          setState({ isCenterModalWithoutCloseButton: !state.isCenterModalWithoutCloseButton });
        }}
      >
        Center modal
      </button>
    </div>
    <div>
    {state.isRightModalWithoutCloseButton ? (
      <Modal
        type="dark"
        title="Modal Title"
        position="right"
        onKeyDown={(event) => {
          setState({ isRightModalWithoutCloseButton: !state.isRightModalWithoutCloseButton });
        }}
        onModalClose={() => {
          setState({ isRightModalWithoutCloseButton: !state.isRightModalWithoutCloseButton });
        }}
      >
        <span>Modal Body</span>
      </Modal>
    ) : null}
      <button
        type="button"
        className="hawk-button"
        property="light"
        onClick={() => {
          setState({ isRightModalWithoutCloseButton: !state.isRightModalWithoutCloseButton });
        }}
      >
        Right modal
      </button>
    </div>
  </div>
  <br /><br />
  <p>With Light Background</p>
  <br /><br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
    {state.isLeftModalWithLightBackground ? (
      <Modal
        isCloseOption
        type="light"
        title="Modal Title"
        position="left"
        onKeyDown={(event) => {
          setState({ isLeftModalWithLightBackground: !state.isLeftModalWithLightBackground });
        }}
        onModalClose={() => {
          setState({ isLeftModalWithLightBackground: !state.isLeftModalWithLightBackground });
        }}
      >
        <span>Modal Body</span>
      </Modal>
    ) : null}
      <button
        type="button"
        className="hawk-button"
        property="light"
        onClick={() => {
          setState({ isLeftModalWithLightBackground: !state.isLeftModalWithLightBackground });
        }}
      >
        Left modal
      </button>
    </div>
    <div>
    {state.isCenterModalWithLightBackground ? (
      <Modal
        isCloseOption
        type="light"
        title="Modal Title"
        onKeyDown={(event) => {
          setState({ isCenterModalWithLightBackground: !state.isCenterModalWithLightBackground });
        }}
        onModalClose={() => {
          setState({ isCenterModalWithLightBackground: !state.isCenterModalWithLightBackground });
        }}
      >
        <span>Modal Body</span>
      </Modal>
    ) : null}
      <button
        type="button"
        className="hawk-button"
        property="light"
        onClick={() => {
          setState({ isCenterModalWithLightBackground: !state.isCenterModalWithLightBackground });
        }}
      >
        Center modal
      </button>
    </div>
    <div>
    {state.isRightModalWithLightBackground ? (
      <Modal
        isCloseOption
        type="light"
        title="Modal Title"
        position="right"
        onKeyDown={(event) => {
          setState({ isRightModalWithLightBackground: !state.isRightModalWithLightBackground });
        }}
        onModalClose={() => {
          setState({ isRightModalWithLightBackground: !state.isRightModalWithLightBackground });
        }}
      >
        <span>Modal Body</span>
      </Modal>
    ) : null}
      <button
        type="button"
        className="hawk-button"
        property="light"
        onClick={() => {
          setState({ isRightModalWithLightBackground: !state.isRightModalWithLightBackground });
        }}
      >
        Right modal
      </button>
    </div>
  </div>
</div>
```
