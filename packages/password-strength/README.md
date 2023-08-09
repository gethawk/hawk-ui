## Installation


#### To install a component run
`$ npm install @hawk-ui/password-strength --save`


#### Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@hawk-ui/password-strength/dist/index.min.css
```


## Usage


#### Password Strength
[Demo](https://hawk.oncrypt.co/#!/PasswordStrength/1)
```js static
import PasswordStrength from '@hawk-ui/password-strength';
```
```js
initialState = {
  password: ''
};

<div>
  <input
    type="password"
    className="hawk-input"
    placeholder="Enter a password"
    value={state.password}
    onChange={(event) => {
      setState({ password: event.target.value });
    }}
  />

  <PasswordStrength
    value={state.password}
  />
</div>
```
