#### Basic Form Usage:

```js
const { configuration } = require('./src/utils/configuration.json');
<div className="styleguidist__btns-wrap">
  <Form
    className="candidate-edit-form"
    configuration={configuration}
    // data={data}
    // errors={errors}
    onChange={(event) => {
      console.log('query event', event);
    }}
  />
</div>
```
