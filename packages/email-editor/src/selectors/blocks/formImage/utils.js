export function configuration(type) {
  switch (type) {
    case 'content':
      return {
        data_type: 'object',
        properties: {
          upload_image: {
            data_type: 'string',
            title: 'Upload Image',
            visual: {
              field_type: 'file-upload',
              show_title: true,
              title: 'Drag and Drop Image Here',
              description: 'Supported file types: (*.png, *.jpg, *.jpeg). View format instructions.',
              draggable: true,
            },
            validation: {},
          },
        },
      };
    case 'style':
      return {
        data_type: 'object',
        properties: {
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
          rounded_corner: {
            data_type: 'string',
            title: 'Rounded Corner',
            visual: {
              field_type: 'range-slider',
              show_title: true,
              value_id: 'rounded_slider_value',
              range_id: 'rounded_slider_range',
              range_min: 0,
              range_max: 30,
              range_step: 1,
              value: 4,
            },
          },
        },
      };
    default:
      return {};
  }
}
