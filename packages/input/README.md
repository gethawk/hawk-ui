#### Basic Input Usage:

```js
initialState = {
  value: '',
};

<div className="styleguidist__btns-wrap">
  <Input
    type="text"
    onChange={(value) => {
      setState({
        value,
      });
    }}
    onEnter={(value) => {
      alert(value);
    }}
    placeholder="Enter Username"
    isLabel
    label="Username"
    isRequired
    errorMessage="This field is a compulsory field."
  />
  <br />
  <br />
  <Input
    type="text"
    onChange={(value) => {
      setState({
        value,
      });
    }}
    onEnter={(value) => {
      alert(value);
    }}
    placeholder="Enter Address"
    isLabel
    label="Address"
    isRequired
    errorMessage="This field is a compulsory field."
    isTextarea
    htmlAttributes={{
      rows: '3',
      cols: '30',
    }}
  />
</div>
```
