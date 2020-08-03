import _ from 'lodash';

export function configuration(type) {
  switch (type) {
    case 'content':
      return {
        data_type: 'object',
        properties: {
          text: {
            data_type: 'string',
            title: 'Button Text',
            description: '',
            visual: {
              field_type: 'input',
              show_title: true,
            },
            validation: {},
          },
          link_to: {
            data_type: 'string',
            title: 'Link To',
            visual: {
              field_type: 'select',
              show_title: true,
              show_icon: true,
              suggest: {
                name: 'title',
                value: 'value',
                options: [
                  { title: 'Web', value: 'web' },
                  { title: 'Email', value: 'email' },
                ],
              },
            },
          },
        },
      };
    case 'style':
      return {
        data_type: 'object',
        properties: {
          button_style: {
            data_type: 'object',
            title: 'Button Style',
            visual: {
              show_title: true,
              show_inline: false,
            },
            validation: {},
            properties: {
              border: {
                data_type: 'string',
                title: 'Border',
                visual: {
                  field_type: 'select',
                  show_title: true,
                  show_icon: true,
                  suggest: {
                    name: 'title',
                    value: 'value',
                    options: [
                      { title: 'Solid', value: 'solid' },
                    ],
                  },
                },
              },
              border_corner: {
                data_type: 'number',
                title: 'Border Corner',
                visual: {
                  field_type: 'range-slider',
                  show_title: true,
                  value_id: 'border_corner_value',
                  range_id: 'border_corner_range',
                  range_min: 0,
                  range_max: 20,
                  range_step: 1,
                },
                validation: {},
              },
              background: {
                data_type: 'string',
                title: 'Background',
                visual: {
                  field_type: 'color-picker',
                  show_title: true,
                  default_color: '6997DB',
                },
                validation: {},
              },
            },
          },
          button_text_style: {
            data_type: 'object',
            title: 'Button Text Style',
            visual: {
              show_title: true,
              show_inline: false,
            },
            validation: {},
            properties: {
              font_style: {
                data_type: 'object',
                visual: {
                  show_title: false,
                  show_inline: true,
                },
                validation: {},
                properties: {
                  color: {
                    data_type: 'string',
                    title: 'Color',
                    visual: {
                      field_type: 'color-picker',
                      show_title: true,
                      default_color: '000000',
                    },
                    validation: {},
                  },
                  style: {
                    data_type: 'string',
                    title: 'Style',
                    visual: {
                      field_type: 'button-group',
                      show_title: true,
                      variant: 'outlined',
                      active: 1,
                      suggest: {
                        options: [
                          { key: 1, title: 'Normal' },
                          { key: 2, title: 'Bold' },
                        ],
                      },
                    },
                  },
                },
              },
              spacing: {
                data_type: 'string',
                title: 'Spacing',
                visual: {
                  field_type: 'select',
                  show_title: true,
                  show_icon: true,
                  suggest: {
                    name: 'title',
                    value: 'value',
                    options: _.map(_.range(-5, 6), (item) => (
                      { title: `${item}px`, value: `${item}px` }
                    )),
                  },
                },
              },
              font: {
                data_type: 'string',
                title: 'Font',
                visual: {
                  field_type: 'select',
                  show_title: true,
                  show_icon: true,
                  suggest: {
                    name: 'title',
                    value: 'value',
                    options: [
                      { title: 'Arial', value: 'arial' },
                    ],
                  },
                },
              },
              font_size_padding: {
                data_type: 'object',
                visual: {
                  show_title: false,
                  show_inline: true,
                },
                validation: {},
                properties: {
                  size: {
                    data_type: 'string',
                    title: 'Size',
                    visual: {
                      field_type: 'select',
                      show_title: true,
                      show_icon: true,
                      suggest: {
                        name: 'title',
                        value: 'value',
                        options: _.map(_.range(12, 21), (item) => (
                          { title: `${item}px`, value: `${item}px` }
                        )),
                      },
                    },
                  },
                  padding: {
                    data_type: 'string',
                    title: 'Padding',
                    placeholder: 'Padding',
                    visual: {
                      field_type: 'input-group',
                      show_title: true,
                      addon: 'px',
                      addon_size: 'small',
                      addon_placement: 'right',
                      addon_icon: false,
                    },
                    validation: {},
                  },
                },
              },
            },
          },
        },
      };
    default:
      return {};
  }
}
