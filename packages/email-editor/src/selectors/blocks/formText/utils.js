import _ from 'lodash';

export function configuration(type) {
  switch (type) {
    case 'content':
      return {
        data_type: 'object',
        properties: {
          description: {
            data_type: 'string',
            title: '',
            description: '',
            visual: {
              field_type: 'rich-text-editor',
              show_title: false,
              editable_id: 'text_description',
              options: [
                'bold', 'italic', 'underline', 'link', 'unlink', 'strike through', 'ordered list',
                'unordered list', 'formatblock', 'cut', 'copy', 'print', 'pre', 'header', 'font family',
                'font size', 'select all', 'text color picker', 'background color picker',
                'remove format', 'clean', 'divider', 'left justify', 'center justify', 'right justify',
                'outdent', 'indent', 'undo', 'redo',
              ],
              rows: 9,
            },
            validation: {},
          },
        },
      };
    case 'style':
      return {
        data_type: 'object',
        properties: {
          text_style: {
            data_type: 'object',
            title: 'Text Style',
            visual: {
              show_title: true,
              show_inline: false,
            },
            validation: {},
            properties: {
              horizontal_padding: {
                data_type: 'string',
                title: 'Horizontal Padding',
                visual: {
                  field_type: 'select',
                  show_title: true,
                  show_icon: true,
                  suggest: {
                    name: 'title',
                    value: 'value',
                    options: _.map(_.range(1, 21), (item) => (
                      { title: `${item}px`, value: `${item}px` }
                    )),
                  },
                },
              },
              vertical_padding: {
                data_type: 'string',
                title: 'Vertical Padding',
                visual: {
                  field_type: 'select',
                  show_title: true,
                  show_icon: true,
                  suggest: {
                    name: 'title',
                    value: 'value',
                    options: _.map(_.range(1, 21), (item) => (
                      { title: `${item}px`, value: `${item}px` }
                    )),
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
