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
              show_title: true,
              value_id: 'width_slider_value',
              range_id: 'width_slider_range',
              value: 100,
              range_min: 0,
              range_max: 100,
              range_step: 1,
            },
            validation: {},
          },
          border: {
            
          },
          color: {},
        },
      };
    default:
      return {};
  }
}
