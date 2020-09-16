## Installation


#### To install a component run
`$ npm install @hawk-ui/toast --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/toast/dist/index.min.css
```


## Usage


#### Top Left:
[Demo](https://hawk.wallnit.com/#!/Toast/1)
```js static
import Toast from '@hawk-ui/toast';
```
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
[Demo](https://hawk.wallnit.com/#!/Toast/3)
```js static
import Toast from '@hawk-ui/toast';
```
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
[Demo](https://hawk.wallnit.com/#!/Toast/5)
```js static
import Toast from '@hawk-ui/toast';
```
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
[Demo](https://hawk.wallnit.com/#!/Toast/7)
```js static
import Toast from '@hawk-ui/toast';
```
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