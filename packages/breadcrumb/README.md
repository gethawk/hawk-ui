## Installation


#### To install a component run
`$ npm install @hawk-ui/breadcrumb --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/breadcrumb/dist/index.min.css
```


## Usage


#### Breadcrumb:
[Demo](https://hawk.oncrypt.co/#!/Breadcrumb/1)
```js static
import Breadcrumb from '@hawk-ui/breadcrumb';
```
```js
initialState = {
  navbar: [
    { key: 1, label: 'home', link: '#', active: false },
  ],
};
<Breadcrumb
  panes={state.navbar}
/>
```


#### Breadcrumb:
[Demo](https://hawk.oncrypt.co/#!/Breadcrumb/2)
```js static
import Breadcrumb from '@hawk-ui/breadcrumb';
```
```js
initialState = {
  navbar: [
    { key: 1, label: 'home', link: '#', active: true },
    { key: 1, label: 'library', link: '#', active: false },
  ],
};
<Breadcrumb
  panes={state.navbar}
/>
```


#### Breadcrumb:
[Demo](https://hawk.oncrypt.co/#!/Breadcrumb/3)
```js static
import Breadcrumb from '@hawk-ui/breadcrumb';
```
```js
initialState = {
  navbar: [
    { key: 1, label: 'home', link: '#', active: true },
    { key: 1, label: 'library', link: '#', active: true },
    { key: 1, label: 'data', link: '#', active: false },
  ],
};
<Breadcrumb
  panes={state.navbar}
/>
```