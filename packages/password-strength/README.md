## Installation
`$ npm install @hawk-ui/password-strength --save`


## Usage


#### Password Strength
[Demo]()
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
