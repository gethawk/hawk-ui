export function configuration(type) {
  switch (type) {
    case 'content':
      return {
        data_type: 'object',
        properties: {
          padding: {
            data_type: 'object',
            visual: {
              show_title: false,
              show_inline: true,
            },
            validation: {},
            properties: {
              padding_top: {
                data_type: 'string',
                title: 'Padding Top',
                placeholder: 'Padding',
                visual: {
                  field_type: 'input-group',
                  show_title: true,
                  addon: 'px',
                  addon_size: 'size',
                  addon_placement: 'right',
                  addon_icon: false,
                },
                validation: {},
              },
              padding_bottom: {
                data_type: 'string',
                title: 'Padding Bottom',
                placeholder: 'Padding',
                visual: {
                  field_type: 'input-group',
                  show_title: true,
                  addon: 'px',
                  addon_size: 'size',
                  addon_placement: 'right',
                  addon_icon: false,
                },
                validation: {},
              },
            },
          },
          width: {
            data_type: 'number',
            title: 'Width',
            visual: {
              field_type: 'range-slider',
              value_id: 'divider_width_value',
              range_id: 'divider_width_range',
              range_min: 0,
              range_max: 100,
              range_step: 1,
              value: 100,
              show_title: true,
            },
            validation: {},
          },
          border: {
            data_type: 'object',
            title: 'Border',
            visual: {
              show_title: true,
              show_inline: true,
              section_title: 'border-styles',
            },
            validation: {},
            properties: {
              border_style: {
                data_type: 'string',
                title: 'Border Style',
                visual: {
                  field_type: 'select',
                  show_icon: true,
                  show_title: false,
                  suggest: {
                    name: 'title',
                    value: 'value',
                    options: [
                      { title: 'Solid', value: 'solid' },
                    ],
                  },
                },
              },
              border_width: {
                data_type: 'string',
                title: 'Border Width',
                visual: {
                  field_type: 'input-group',
                  show_title: false,
                  addon: 'px',
                  addon_size: 'small',
                  addon_placement: 'right',
                  addon_icon: false,
                },
                validation: {},
              },
              border_color: {
                data_type: 'string',
                title: 'Border Color',
                visual: {
                  field_type: 'color-picker',
                  default_color: 'd9d9d9',
                  show_title: false,
                },
              },
            },
          },
          color: {},
        },
      };
    default:
      return {};
  }
}
