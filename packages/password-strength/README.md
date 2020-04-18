#### Basic Password Strength Usage:

```js
initialState = {
  password: ''
};

<div className="styleguidist__btns-wrap">
  <input
    type="password"
    className="hawk-input"
    placeholder="Enter a password"
    value={state.password}
    onChange={(event) => {
      setState({ password: event.target.value });
    }}
  />
  <br />
  <PasswordStrength
    value={state.password}
  />
</div>
```
