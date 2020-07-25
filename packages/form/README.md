#### Basic Form Usage:

```js
const { configuration } = require('./src/utils/configuration.json');
initialState = {
  data: {},
  errors: {},
  submitted: false,
};

<div className="styleguidist__btns-wrap">
  <Form
    className="candidate-edit-form"
    configuration={configuration}
    data={state.data}
    errors={state.errors}
    onChange={({ property, data, error }) => {
      setState((prevState) => {
        let updatedErrors = _.cloneDeep(prevState.errors || {});

        if (_.isEmpty(error)) {
          updatedErrors = _.omit(updatedErrors, property);
        } else {
          updatedErrors = _.set(updatedErrors, property, error);
        }

        updatedErrors = _.mapValues(updatedErrors, value => {
          if (_.isArray(value) && _.every(value, (val) => (_.isNil(val) || _.isEmpty(val)))) {
            return [];
          }

          if (_.isPlainObject(value) && _.every(_.values(value), (val) => (_.isNil(val) || _.isEmpty(val)))) {
            return {};
          }

          return value;
        });

        return ({ data, errors: _.omitBy(updatedErrors, _.isEmpty) });
      }, () => {
        // console.log('query state', state);
      });
    }}
    isSubmitted={state.submitted}
  />
  <button
    type="button"
    className="hawk-button"
    onClick={() => {
      setState({ submitted: true });
    }}
  >
    Submit
  </button>
</div>
```
