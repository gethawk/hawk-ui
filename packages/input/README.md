## Installation


#### To install a component run
`$ npm install @hawk-ui/input --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/input/dist/index.min.css
```


## Usage


#### Without Label and Without Required:
[Demo](https://hawk.wallnit.com/#!/Input/1)
```js static
import Input from '@hawk-ui/input';
```
```js
initialState = {
  value: '',
};

<Input
  type="text"
  value={state.value}
  onChange={(event) => {
    setState({
      value: event.target.value,
    });
  }}
  onEnter={(value) => {
    alert(value);
  }}
  placeholder="Enter Username"
  description="This is user input"
/>
```


#### With Copy
[Demo](https://hawk.wallnit.com/#!/Input/3)
```js static
import Input from '@hawk-ui/input';
```
```js
initialState = {
  value: '',
};

<Input
  type="text"
  value={state.value}
  id="copy"
  isCopyable
  onChange={(event) => {
    setState({
      value: event.target.value,
    });
  }}
  onEnter={(value) => {
    alert(value);
  }}
  placeholder="Enter Username"
/>
```


#### With Password Visible
[Demo](https://hawk.wallnit.com/#!/Input/5)
```js static
import Input from '@hawk-ui/input';
```
```js
initialState = {
  value: '',
};

<Input
  type="password"
  value={state.value}
  isPasswordVisible
  onChange={(event) => {
    setState({
      value: event.target.value,
    });
  }}
  onEnter={(value) => {
    alert(value);
  }}
  placeholder="Enter Username"
/>
```


#### With Label and With Required
[Demo](https://hawk.wallnit.com/#!/Input/7)
```js static
import Input from '@hawk-ui/input';
```
```js
initialState = {
  value: '',
};

<Input
  type="text"
  onChange={(event) => {
    setState({
      value: event.target.value,
    });
  }}
  onEnter={(value) => {
    alert(value);
  }}
  placeholder="Enter Username"
  label="Username"
  isRequired
  isError
  errorMessage="This field is a compulsory field."
/>
```


#### Textarea With Label
[Demo](https://hawk.wallnit.com/#!/Input/9)
```js static
import Input from '@hawk-ui/input';
```
```js
initialState = {
  value: '',
};

<Input
  type="text"
  isTextarea
  htmlAttributes={{
    rows: '3',
    cols: '30',
  }}
  onChange={(event) => {
    setState({
      value: event.target.value,
    });
  }}
  onEnter={(value) => {
    alert(value);
  }}
  placeholder="Enter Address"
  label="Address"
/>
```
