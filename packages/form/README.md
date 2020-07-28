#### Basic Form Usage:

```js
const configuration = {
  data_type: "object",
  properties: {
    name: {
        data_type: "object",
        title: "",
        visual: {
          show_inline: true
        },
        validation: {},
        properties: {
          first_name: {
            data_type: "string",
            title: "First name",
            description: "This is my First name",
            visual: {
              field_type: "input",
              show_title: true,
              show_description: true
            },
            validation: {
              only_alphabets_spaces: true,
              required: true
            }
          },
          middle_name: {
            data_type: "string",
            title: "Middle name",
            visual: {
              field_type: "input",
              show_title: true
            },
            validation: {
              required: true
            }
          },
          last_name: {
            data_type: "string",
            title: "Last name",
            visual: {
              field_type: "input",
              show_title: true
            },
            validation: {
              required: true
            }
          }
        }
      },
      fruits: {
        data_type: "object",
        title: "",
        visual: {},
        validation: {},
        properties: {
          value: {
            data_type: "array",
            title: "Select Fruits",
            visual: {
              array_supported_field: true,
              show_title: true
            },
            validation: {},
            items: {
              visual: {
                field_type: "checkbox",
                options: [
                  { key: 1, label: "apple", value: "apple" },
                  { key: 2, label: "mango", value: "mango" },
                  { key: 3, label: "banana", value: "banana" },
                  { key: 4, label: "orange", value: "orange" },
                  { key: 5, label: "pineapple", value: "pineapple" }
                ],
                show_inline: true
              },
              data_type: "string"
            }
          }
        }
      },
      country: {
        data_type: "object",
        title: "",
        visual: {},
        validation: {},
        properties: {
          value: {
            data_type: "array",
            title: "Select Country",
            visual: {
              array_supported_field: true,
              show_title: true
            },
            validation: {},
            items: {
              visual: {
                field_type: "radio",
                options: [
                  { key: 1, label: "germany", value: "germany" },
                  { key: 2, label: "mexico", value: "mexico" },
                  { key: 3, label: "austria", value: "austria" },
                  { key: 4, label: "argentina", value: "argentina" },
                  { key: 5, label: "georgia", value: "georgia" }
                ],
                show_inline: true
              },
              data_type: "string"
            }
          }
        }
      },
      date: {
        data_type: "string",
        title: "Select Date",
        visual: {
          show_title: true,
          field_type: "datepicker"
        },
        validation: {
          dateISO: true
        }
      },
      upload_image: {
        data_type: "string",
        title: "Upload Image",
        visual: {
          show_title: true,
          describable: true,
          field_type: "file-upload"
        },
        validation: {}
      },
      address: {
        data_type: "string",
        title: "Address",
        placeholder: "Address",
        visual: {
          field_type: "textarea",
          show_title: true,
          rows: 5
        },
        validation: {}
      },
      description: {
        data_type: "string",
        title: "Description",
        placeholder: "Description",
        visual: {
          field_type: "rich-text-editor",
          show_title: true,
          editable_id: "containerEditable",
          options: [
            'bold', 'italic', 'underline', 'link', 'unlink', 'strike through', 'ordered list'
            , 'unordered list', 'formatblock', 'cut', 'copy', 'print', 'pre', 'header', 'font family'
            , 'font size', 'select all', 'text color picker', 'background color picker', 'remove format', 'clean', 'divider', 'left justify'
            , 'center justify', 'right justify', 'outdent', 'indent', 'undo', 'redo'
          ],
          rows: 10,
        },
        validation: {}
      },
      price: {
        data_type: "string",
        title: "Price",
        placeholder: "Write price",
        visual: {
          field_type: "input-group",
          show_title: true,
          addon: "0.00",
          addon_size: "small",
          addon_placement: "right",
          addon_icon: false
        },
        validation: {}
      },
      color: {
        data_type: "string",
        title: "Color Picker",
        visual: {
          field_type: "color-picker",
          default_color: "f18ca6",
          show_title: true
        },
        validation: {}
      },
      border: {
        data_type: "string",
        title: "Border Picker",
        visual: {
          field_type: "border-picker",
          border_type: "dotted",
          show_title: true
        },
        validation: {}
      },
      range: {
        data_type: "number",
        title: "Range",
        visual: {
          field_type: "range-slider",
          value_id: "valueSliderId",
          range_id: "rangeSliderId",
          range_min: 0,
          range_max: 100,
          range_step: 1,
          show_title: true
        },
        validation: {}
      },
      state: {
        data_type: "string",
        title: "State",
        visual: {
          field_type: "select",
          array_supported_field: true,
          show_title: true,
          is_readable: false,
          suggest: {
            query: "name",
            api: "/api/v1/suggest/skill/",
            data: "data"
          }
        },
        validation: {}
      },
      currency: {
        data_type: "string",
        title: "Currency",
        visual: {
          field_type: "select",
          show_icon: true,
          show_title: true,
          suggest: {
            name: "title",
            value: "value",
            options: [
              {
                title: "INR",
                value: "INR"
              },
              {
                title: "USD",
                value: "USD"
              },
              {
                title: "GBP",
                value: "GBP"
              },
              {
                title: "SGD",
                value: "SGD"
              }
            ]
          }
        },
        validation: {
          required_if: {
            check: "current_ctc.value"
          }
        }
      },
      company: {
        data_type: "string",
        title: "Company",
        visual: {
          field_type: "tags-input",
          show_icon: true,
          show_title: true,
          suggest: {
            name: "title",
            value: "value",
            options: [
              {
                title: "Alfreds Futterkiste",
                value: "alfreds futterkiste"
              },
              {
                title: "Centro comercial Moctezuma",
                value: "centro comercial moctezuma"
              },
              {
                title: "Ernst Handel",
                value: "ernst handel"
              },
              {
                title: "Island Trading",
                value: "island trading"
              }
            ]
          }
        },
        validation: {
          required_if: {
            check: "current_ctc.value"
          }
        }
      },
      city: {
        data_type: "string",
        title: "City",
        visual: {
          field_type: "tags-input",
          array_supported_field: true,
          show_title: true,
          suggest: {
            query: "name",
            api: "/api/v1/suggest/skill/",
            data: "data"
          }
        },
        validation: {}
      }
  }
};
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
