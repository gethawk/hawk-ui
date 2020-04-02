#### Basic Input Usage:

```js
initialState = {
  value: '',
};

<div className="styleguidist__btns-wrap">
  <p>Without Label and Without Required</p>
  <br /><br />
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
    description="This is user input"
  />
  <br /><br />
  <p>With Label and With Required</p>
  <br /><br />
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
    label="Username"
    isRequired
    errorMessage="This field is a compulsory field."
  />
  <br /><br /><br />
  <p>Textarea With Label</p>
  <br /><br />
  <Input
    type="text"
    isTextarea
    htmlAttributes={{
      rows: '3',
      cols: '30',
    }}
    onChange={(value) => {
      setState({
        value,
      });
    }}
    onEnter={(value) => {
      alert(value);
    }}
    placeholder="Enter Address"
    label="Address"
  />
</div>
```
