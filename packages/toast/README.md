## Installation
`$ npm install @hawk-ui/toast --save`


## Usage


#### Top Left:
[Demo]()
```js
initialState = {
  isShow: false,
  position: null,
};

<div>
  <button
    type="button"
    className="hawk-button"
    onClick={() => {
      setState({
        position: 'top-left',
        isShow: !state.isShow,
      });
    }}
  >
    Top Left
  </button>
  <div
    style={state.position === 'top-left' ? {
      position: 'fixed', top: 0, left: 0, zIndex: 10
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


#### Top Right
[Demo]()
```js
initialState = {
  isShow: false,
  position: null,
};

<div>
  <button
    type="button"
    className="hawk-button"
    onClick={() => {
      setState({
        position: 'top-right',
        isShow: !state.isShow,
      });
    }}
  >
    Top Right
  </button>
  <div
    style={state.position === 'top-right' ? {
      position: 'fixed', top: 0, right: 0, zIndex: 10
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


#### Bottom Right
[Demo]()
```js
initialState = {
  isShow: false,
  position: null,
};

<div>
  <button
    type="button"
    className="hawk-button"
    onClick={() => {
      setState({
        position: 'bottom-right',
        isShow: !state.isShow,
      });
    }}
  >
    Bottom Right
  </button>
  <div
    style={state.position === 'bottom-right' ? {
      position: 'fixed', bottom: 0, right: 0, zIndex: 10
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


#### Bottom Left
[Demo]()
```js
initialState = {
  isShow: false,
  position: null,
};

<div>
  <button
    type="button"
    className="hawk-button"
    onClick={() => {
      setState({
        position: 'bottom-left',
        isShow: !state.isShow,
      });
    }}
  >
    Bottom Left
  </button>
  <div
    style={state.position === 'bottom-left' ? {
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